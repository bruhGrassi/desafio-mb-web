import express from "express";

const router = express.Router();

const environment = process.env.NODE_ENV;

router.get("/registration", async (_req, res) => {
  if (environment === "production") {
    res.sendFile("index.html", { root: "dist" });
  } else {
    // this is used for hot module reloading
    res.sendFile("index.hmr.html", { root: "." });
  }
});

export default router;
