import express from "express";
import noteRoutes from "./routes/noteRoutes.js"
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/notes", noteRoutes);

app.use(errorHandler);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
