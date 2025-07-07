import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let defaultTitle = "<h1>Enter your name below</h1>";

  res.render("index.ejs", {
    title: defaultTitle
  });
  
});

app.post("/submit", (req, res) => {
  let numberOfLetters = req.body.fName.length + req.body.lName.length
  let newTitle = `<h1>There are ${numberOfLetters} letters in your name.<h1>`;

  res.render("index.ejs", {
    title: newTitle
  });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
