import BrandSchema from '../schemas/Brand.js';

// Save brand
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

// Gets all brands
let getBrands = async(req, res) => {
    let brands = await BrandSchema.find();
    res.status(200).json({"brands":{brands}});
}

// Gets a specific brand
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

// Updates a specific brand
let updateBrand = async(req, res) => {
try{
    let { id } = req.params;
    let name = req.body.name
    let exist = await BrandSchema.findById(id);
    if(!exist){
        return res.status(404).json({msg: `element no found ${id}`});
    }else{
        let updatedBrand = await BrandSchema.findByIdAndUpdate(id, {name: name}, {new: true});
        res.status(200).json({msg: `element updaded`, data: updatedBrand});
    }
    }catch(err){
        res.status(500).json({msg: `error querying element ${err}`});
    }
}

// Delete a specific brand
let deleteBrand = async(req, res) => {
    try{
        let { id } = req.params;
        let exist = await BrandSchema.findById(id);
        if(!exist){
            return res.status(404).json({msg: `element not found`});
        }else{
            let deletedBrand = await BrandSchema.findByIdAndDelete(id);
            res.status(200).json({msg: `element deleted succefully`, data: deletedBrand});
        }
    }catch(err){
        res.status(200).json({msg: `error querying element ${err}`});
    }
}

// Exports functions
export default{
    saveBrand,
    getBrands,
    getBrand,
    updateBrand,
    deleteBrand
}