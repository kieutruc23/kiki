import Product from "../Model/Product.js";
export const getOneproduct= async(req)=>{
    const getOne = await Product.findById(req.params.id)
    return getOne
}
