const express= require("express");
const router= express.Router();


router.get("/", (req, res) => {
    res.send("ya user is created");
})


module.exports = router