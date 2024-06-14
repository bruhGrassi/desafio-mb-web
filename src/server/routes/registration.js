import express from "express";

const router = express.Router();

router.get("/registration", async (_req, res) => {
  res.sendFile("index.html", { root: "." });
});

export default router;
