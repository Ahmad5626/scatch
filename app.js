const express= require("express");
const path= require("path");
const app= express();
const cookieParser = require("cookie-parser");
const db = require("./config/mongoos-connection");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)





app.listen(4000, () => {
    console.log("server started");
})