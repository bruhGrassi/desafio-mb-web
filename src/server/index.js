import express from "express";

import registrationRoutes from "./routes/registration.js";

const port = process.env.PORT || 3000;

const app = express();

// redirect directly to the registration page
app.get("/", (req, res) => {
  res.redirect("registration");
});

app.use(registrationRoutes);

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});
