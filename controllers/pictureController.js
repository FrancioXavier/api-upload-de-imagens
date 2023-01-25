const PictureModel = require('../models/Picture');
const fs = require("fs");

class PictureController{
    constructor(req, res){
        this.req = req,
        this.res = res
    };
    async InsertImage(req, res){
        const { name } = req.body;
        const file = req.file;
        const src = file.path;

        await PictureModel.findOne({src: src}).then(async pic => {
            if(pic === null){
                const newPicture = await PictureModel.create({
                    name: name,
                    src: src
                })

                return res.status(200).json({newPicture});
            } else{
                return res.status(400).json({message: "Link already exists"});
            }
        }).catch(err => {
            return res.status(400).json({message: "Internal error occurred"});
        });
    };

    async DeleteImage(req, res){
        try{
            const id = req.params.id;
            const picture = await PictureModel.findOne({_id: id})

            if(picture){
                await PictureModel.deleteOne({ _id:id });

                fs.unlinkSync(picture.src);
                await picture.remove;
                
                return res.status(204).json({message: "Deleted image"});
            }else{
                return res.status(400).json({message: "Image not found"});
            };

        } catch{
            return res.status(400).json({message: "Internal error occurred"});
        }
    };

    async FindAll(req, res){
        try {
            const picture = await PictureModel.find();

            return res.status(200).json({picture});

        } catch (error) {
            return res.status(400).json({message: "Internal error occurred"});
        }
    }
};

module.exports = PictureController;