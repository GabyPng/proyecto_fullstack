import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { supabase } from "./supabase.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.get("/api/users", async (req, res) => {
  const { data } = await supabase
    .from("users")
    .select("*");

  res.json(data);
});
