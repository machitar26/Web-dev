import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    let type = "a weekday";
    let adv = "it's time to work hard"

    const d = new Date();
    let day = d.getDay();

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun"
    } 

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
    
});