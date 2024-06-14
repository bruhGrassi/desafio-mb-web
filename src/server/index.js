import express from "express";
import path from "path";

import registrationRoutes from "./routes/registration.js";

const port = process.env.PORT || 3000;

const app = express();

// redirect directly to the registration page
app.get("/", (req, res) => {
  res.redirect("registration");
});

// serve the static files
app.use("/", express.static(path.resolve("public")));
app.use("/src/client", express.static(path.resolve("src/client")));

app.use(registrationRoutes);

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});
