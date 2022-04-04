import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.listen(3333, () => {
  console.log("Server is running on port 3333...");
});
