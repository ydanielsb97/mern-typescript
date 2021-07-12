import { RequestHandler } from "express";
import Video from "../models/video.models";

export const getVideos: RequestHandler = async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
};

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findOne({ _id: req.params.id });
    if (!video) return res.status(204).json({ message: "Video not found" });

    res.json(video);
  } catch (error) {
    res.json(error);
  }
};

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = Video.findOne({ url: req.body.url });

  if (videoFound)
    return res.status(301).json({ message: "The URL already exists" });

  const video = new Video(req.body);
  const savedVideo = await video.save();

  res.json(savedVideo);
};

export const updateVideo: RequestHandler = async (req, res) => {
  const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(video);
};

export const deleteVideo: RequestHandler = async (req, res) => {
  const video = await Video.findByIdAndDelete(req.params.id);
  if (!video) return res.json({ message: "Video not found" });

  res.json(video);
};
