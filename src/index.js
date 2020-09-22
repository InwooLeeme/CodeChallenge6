import express from "express";
import path from "path";
import { localMiddleware } from "./middleware";
import { homeRouter } from "./routers/homeRouter";

const app = express();
const PORT = 4000;
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localMiddleware);

app.use("/", homeRouter);
// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`Listening!`));
