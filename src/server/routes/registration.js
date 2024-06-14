import express from "express";
import { validateForm } from "../../client/helpers/validations.js";

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

router.post("/registration", (req, res) => {
  const errors = validateForm(req.body, [
    "email",
    "name",
    "document",
    "birth_date",
    "phone",
    "password",
  ]);
  if (!Object.keys(errors).length) {
    res.status(200).send({ message: "Cadastro com sucesso!", data: req.body });
  } else {
    res.status(400).json({ errors });
  }
});

export default router;
