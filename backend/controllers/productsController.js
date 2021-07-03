import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.status(200).json(products);
});

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) res.status(200).json(product);
	else {
		res.status(404);
		throw new Error("Product not found");
	}
});

const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: "Sample Name",
		price: 0,
		user: req.user.id,
		image: "/images/sample.jpg",
		brand: "Sample Brand",
		category: "Sample Category",
		countInStock: 0,
		numReviews: 0,
		description: "Sample Decsription"
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, image, brand, categorey, countInStock, decription } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.image = image;
		product.decription = decription;
		product.brand = brand;
		product.categorey = categorey;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();
		res.status(200).json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await product.remove();
		res.status(200).json({ message: "Product removed" });
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

export { getProducts, getProductById, deleteProduct, createProduct, updateProduct };
