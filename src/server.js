import express from "express";
import cors from "cors";
import router from "./routes/api.js";

const PORT = 3998;

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/api", router);

//Routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`is Listening at ${PORT}`);
});
