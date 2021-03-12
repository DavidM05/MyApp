const imgM = {};

const { Image } = require('../../model');


imgM.imgmarket = async (req, res) =>{
    const imagesM = await Image.find().sort({timestamp: -1});
    res.render('market', {imagesM});
};




module.exports = imgM;
