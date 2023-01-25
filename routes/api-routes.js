const express = require('express');
const appRouter = express.Router();
const PictureController = require('../controllers/pictureController');
const pictureController = new PictureController;
const upload = require("../config/multer");

appRouter.post('/upload', upload.single("file"), async (req, res) => {
    await pictureController.InsertImage(req, res);
});

appRouter.delete('/delete/:id', async (req, res) => {
    await pictureController.DeleteImage(req, res);
});

appRouter.get('/view', async (req, res) => {
    await pictureController.FindAll(req, res);
});


module.exports = appRouter;