import express from "express";
import cors from "cors";
import morgan from "morgan";
import mayonnaiseRouter from "./routes/mayonnaise";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(express.static("mayo-image"));
app.use(express.static("dish-image"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  next();
});

app.use("/assets", express.static("assets"));
app.use("/mayonnaise", mayonnaiseRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});
