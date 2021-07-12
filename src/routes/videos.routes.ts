import { Router } from "express";

import * as videoCtrl from "../controllers/videos.controller";
const router = Router();

router.get("/videos", videoCtrl.getVideos);
router.get("/videos/:id", videoCtrl.getVideo);
router.post("/videos", videoCtrl.createVideo);
router.delete("/videos/:id", videoCtrl.deleteVideo);
router.patch("/videos/:id", videoCtrl.updateVideo);

export default router;
