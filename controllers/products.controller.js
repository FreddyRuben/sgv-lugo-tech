import Product from '../schemas/Product.js';
import Brand from '../schemas/Brand.js';

let saveProduct = async(req, res) => {
    try{
        let { name, price, stock, brandId } = req.body;
        if(!name || !price || !stock || !brandId){
            return res.status(400).json({msg: `missing required fields`});
        }
        let brandExist = await Brand.findById(brandId);
        if(!brandExist){
            return res.status(400).json({msg: `brand not found`});
        }
        const product = new Product({
            name,
            price,
            stock,
            brandId
        });
        console.log(product.name);
        let exist = await Product.findOne({name: product.name});
        console.log(exist.name.toUpperCase());
        if (!exist.name.toUpperCase()){
            await product.save();
            res.status(200).json({msg: `product saved successfully`, data: product});
        }else{
            return res.status(409).json({msg: `product already exist`});
        }
    }catch(err){
        res.status(500).json({msg: `error ${err}`});
    }
}

export default {
    saveProduct
};