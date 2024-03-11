import BrandSchema from '../schemas/Brand.js';

let saveBrand = async(req, res) => {
    let brand = new BrandSchema();
    brand.name = req.body.name;
    let exist = await BrandSchema.findOne({name: brand.name});
    if(!exist){
        await brand.save();
        res.status(200).json({msg: "brand saved successfully", brand});
    }else{
        res.status(409).json({msg: "can't save because already exist in db"});
    }
}

let getBrands = async(req, res) => {
    let brands = await BrandSchema.find();
    res.status(200).json({"brands":{brands}});
}

let getBrand = async(req, res) => {
try{
    let { id } = req.params;
    console.log(`id: ${id}`);
    let exist = await BrandSchema.findById(id);
    if(!exist){
        return res.status(404).json({msg: `element not found ${id}`});
        }
        res.status(200).json({msg: {exist}});
    }catch(err){
        res.status(500).json({msg: `error querying element ${err}`});
    }
}

let updateBrand = async(req, res) => {
try{
    let brand = new BrandSchema();
    let { id } = req.params;
    brand.name = req.body.name
    let exist = await BrandSchema.findById(id);
    if(!exist){
        return res.status(404).json({msg: `element no found ${id}`});
    }else{
        await brand.findOneAndUpdate({id: id}, {name: brand.name});
        res.status(200).json({msg: `element updaded`});
    }
    }catch(err){
        res.status(500).json({msg: `error querying element ${err}`});
    }
}

export default{
    saveBrand,
    getBrands,
    getBrand,
    updateBrand
}