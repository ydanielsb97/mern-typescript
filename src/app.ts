import express from "express";
import config from "./config";

const app = express();

// config
app.set("port", config.PORT);

export default app;
