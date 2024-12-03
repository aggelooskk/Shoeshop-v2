import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

// @desc Fetch all products
// @route GET /api/products/:id
// @access Public
export const getProductById = async (req, res) => {
  const { id: productId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
};

// @desc Create a product
// @route POST /api/products
// @access PRIVATE/admin
export const createProduct = async (req, res) => {
  const product = new Product({
    name: "sample name",
    user: req.user._id,
    image: "/images/sample.jpg",
    description: "sample description",
    brand: "sample brand",
    category: "sample category",
    price: 0,
    countInStock: 0,
    numReviews: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/admin
export const updateProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    numReviews,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.category = category;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
};

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/admin
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: "Product Deleted!" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
};
