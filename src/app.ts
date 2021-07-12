import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config";
import videoRoutes from "./routes/videos.routes";

const app = express();

// config
app.set("port", config.PORT);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(videoRoutes);

export default app;
