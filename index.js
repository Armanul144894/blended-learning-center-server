const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./Data/category.json");
const courses = require("./Data/courses.json");
app.get("/", (req, res) => {
  res.send("Courses Api Running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course.category_id === id);
  res.send(selectedCourse);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Blended Learning Center server running on port: ${port}`);
});
