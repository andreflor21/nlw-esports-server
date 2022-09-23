import express from "express";
const app = express();
app.get("/ads", (req, res) => {
    console.log("Oa");
    return res.json([{ id: 1, name: "anuncio" }]);
});
app.listen(3333);
