const express = require('exprees');
const router = express.Router();

const market = requiere('../../controllers/imgmarket');
const img = require('../../controllers/image');
module.exports = app => {
    router.get('/market', market.market);
    router.get('/imagesM/:imgmarket_id', img.market);
    router.post('/imagesM', img.create);
    router.post('/imagesM/:imgmarket_id/like', img.like);
    router.post('/imagesM/:imgmarket_id/comment', img.comment);
    router.delete('/imagesM/:imgmarket_id', img.remove);

    app.use(router);
};
