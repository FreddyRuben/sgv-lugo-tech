import BrandSchema from '../schemas/Brand.js';

let saveBrand = async(req, res) => {
    let brand = new BrandSchema();

    brand.name = req.body.name;

    await brand.save();

    res.status(200).json({msg: "brand saved successfully", brand});
}

export default{
    saveBrand
}