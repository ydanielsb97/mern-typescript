import { RequestHandler } from "express";
import Video from "../models/video.models";

export const getVideos: RequestHandler = (req, res) => {
  res.json("getting videos");
};

export const getVideo: RequestHandler = (req, res) => {
  res.json("getting a video");
};

export const createVideo: RequestHandler = async (req, res) => {
  const video = new Video(req.body);
  const savedVideo = await video.save();

  res.json(savedVideo);
};

export const updateVideo: RequestHandler = (req, res) => {
  res.json("Updatting a video");
};

export const deleteVideo: RequestHandler = (req, res) => {
  res.json("Deletting a video");
};
