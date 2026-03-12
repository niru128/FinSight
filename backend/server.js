import cors from "cors";
import express from "express";
import stockRoutes from "./routes/stockRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});