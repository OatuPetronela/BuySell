import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: 'User'
    },
    name: {
        type: String,
        require:true
    },
    image: {
        type: String,
        require:true,
    },
    description: {
        type: String,
        require:true
    },
    categoy: {
        type: String,
        require:true,
    },
    price: {
        type: Number,
        require:true,
        default:0
    }
    },
    {
        timestamps: true
})

const Product = mongoose.model('product', productSchema)

export default Product;