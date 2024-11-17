import express from "express"

const PORT = process.env.PORT || 5001;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});