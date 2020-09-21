import express from "express";
import path from "path";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
