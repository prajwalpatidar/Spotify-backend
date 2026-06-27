const express = require('express');
const musicController = require('../controllers/music.controller');
const multer = require('multer');
const {authArtist} = require('../middlewares/auth.middleware');
const authUser = require('../middlewares/auth.middleware').authUser;
const upload = multer({
    storage: multer.memoryStorage(),
});

const router = express.Router();


router.post('/upload', authArtist, upload.single("music"), musicController.createModel);

router.post("/album", authArtist, musicController.createAlbum);


router.get("/", authUser, musicController.getAllMusics);

router.get("/albums", authUser, musicController.getAllAlbums);

router.get("/albums/:albumId", authUser, musicController.getAlbumById);


module.exports = router;