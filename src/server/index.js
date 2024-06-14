import express from "express";
import path from "path";

import registrationRoutes from "./routes/registration.js";

const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";
const staticPath = isProduction ? "dist" : "src/client";
const publicPath = path.resolve("public");

const app = express();

// redirect directly to the registration page
app.get("/", (req, res) => {
  res.redirect("registration");
});

// serve the static files
app.use(
  "/",
  express.static(isProduction ? path.resolve(staticPath) : publicPath)
);
app.use("/src/client", express.static(path.resolve(staticPath)));

app.use(registrationRoutes);

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});
