import express from "express";
import cors from "cors";
import morgan from "morgan";
import mayonnaiseRouter from "./routes/mayonnaise";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(express.static("dish-image"));

app.use("/assets", express.static("assets"));
app.use("/mayonnaise", mayonnaiseRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});
