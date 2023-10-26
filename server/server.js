require("./db/db.connect");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const studentRouter = require("./routes/student.route");
const teacherRouter = require("./routes/teacher.route");

const app = express();
const PORT = process.env.PORT || 2000;

const corsOptions = { origin: "*" };

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

app.use("/", (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use("/", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
