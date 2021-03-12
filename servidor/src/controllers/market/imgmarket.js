const path = require('path');
const { randomNumber } = require('../../helpers/libs');
const fs = require('fs-extra');

const { Image } = require('../../model');

const imgM = {};

imgM.market = (req, res) => {

};
imgM.create =  (req, res) => {

    const saveImage = async () =>{
    const imgUrl = randomNumber();
    const images = Image.find({filename: imgUrl});
    if(images.length > 0){
      imgUrl = randomNumber();
      saveImage();
    } else{
      console.log(imgUrl);
      const imageTempPath = req.file.path;
      const ext = path.extname(req.file.originalname).toLocaleLowerCase();
      const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)
      
      if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
          await fs.rename(imageTempPath, targetPath);
          const newImg = new Image({
            title: req.body.title,
            filename: imgUrl + ext,
            description: req.body.description
          });
         const imgadd = await newImg.save();
         //res.redirect('/images');
         res.redirect('/market')
      } else{
        await fs.unlink(imageTempPath);
        res.status(505).json({error: 'Solo imagenes que son permitidas'})
      }
    } 
  };
    saveImage();
    
};

imgM.like = (req, res) => {
    
};

imgM.comment = (req, res) => {
    
};
imgM.remove = (req, res) => {
    
};

module.exports = imgM;