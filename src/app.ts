import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hexar CMS server is running",
  });
});

export default app;