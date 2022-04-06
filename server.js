const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", require("./routes/root"));
app.get("/projects", require("./routes/projects"));
app.post("/submitform", require("./routes/contactForm"));

app.listen(PORT, () => {
    console.log("Server running on: " + PORT);
});