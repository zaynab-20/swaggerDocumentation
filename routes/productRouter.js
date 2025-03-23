const router  = require('express').Router()

const { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const upload = require('../utils/multer')

/** 
 * @swagger
 * /api/v1/createProduct:
 *   post:
 *     summary: this is the route to add a product. requires authentication
 *     requestBody: 
 *       required: true
 *       content: 
 *         multipart/form-data:
 *           schema: 
 *             type: object
 *             properties: 
 *               name: 
 *                 type: string
 *                 description: this the name of the product
 *                 example: garlic
 *               price: 
 *                 type: number
 *                 description: this is the price of product available
 *                 example: 5000
 *               quantity: 
 *                 type: string
 *                 description: this the quantity of the product being created
 *                 example: 500kg
 *               description: 
 *                 type: string
 *                 description: this the description of the product being created
 *                 example: Garlic is a pungent, flavorful bulbous plant with a papery skin. Its cloves, ranging from white to purple, contain a potent oil releasing a strong aroma when crushed. Garlic adds depth to various dishes, from savory meats to soups, and is valued for its medicinal properties, promoting heart health and immunity.
 *               productImage: 
 *                 type: string
 *                 format: binary
 *                 example: image
 *     responses: 
 *       201:
 *         description: product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *               name: 
 *                 type: string
 *                 description: this the name of the product
 *                 example: garlic
 *               price: 
 *                 type: number
 *                 description: this is the price of product available
 *                 example: 5000
 *               quantity: 
 *                 type: string
 *                 description: this the quantity of the product being created
 *                 example: 500kg
 *               description: 
 *                 type: string
 *                 description: this the description of the product being created
 *                 example: Garlic is a pungent, flavorful bulbous plant with a papery skin. Its cloves, ranging from white to purple, contain a potent oil releasing a strong aroma when crushed. Garlic adds depth to various dishes, from savory meats to soups, and is valued for its medicinal properties, promoting heart health and immunity.
 *       500:
 *         description: error createing product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: 
 *                   type: string
 *                   example: internal server error
 *     
 * 
*/
router.post('/createProduct', upload.single('productImage'), createProduct)
/**
 * @swagger
 * /api/v1/getAllProducts:
 *   get:
 *     summary: get the list of all products
 *     responses:
 *       200:
 *         description: the list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The name of the product
 *                     example: garlic
 *                   price:
 *                     type: number
 *                     description: The price of the product
 *                     example: 5000
 *                   quantity:
 *                     type: string
 *                     description: The quantity of the product
 *                     example: 500kg
 *                   description:
 *                     type: string
 *                     description: The description of the product
 *                     example: Garlic is a pungent, flavorful bulbous plant with a papery skin. Its cloves, ranging from white to purple, contain a potent oil releasing a strong aroma when crushed. Garlic adds depth to various dishes, from savory meats to soups, and is valued for its medicinal properties, promoting heart health and immunity.
 */

router.get('/getAllProducts',  getAllProducts)
/**
 * @swagger
 * /api/v1/getOneProduct/{id}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: A single product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the product
 *                   example: garlic
 *                 price:
 *                   type: number
 *                   description: The price of the product
 *                   example: 5000
 *                 quantity:
 *                   type: string
 *                   description: The quantity of the product
 *                   example: 500kg
 *                 description:
 *                   type: string
 *                   description: The description of the product
 *                   example: Garlic is a pungent, flavorful bulbous plant with a papery skin. Its cloves, ranging from white to purple, contain a potent oil releasing a strong aroma when crushed. Garlic adds depth to various dishes, from savory meats to soups, and is valued for its medicinal properties, promoting heart health and immunity.
 */

router.get('/getOneProduct/:id', getOneProduct)

/**
 * @swagger
 * /api/v1/updateProduct/{id}:
 *   put:
 *     summary: Update a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                 type: string
 *                 description: this is the name of the product
 *                 example: garlic
 *               price: 
 *                 type: number
 *                 description: this is the price of the product available
 *                 example: 5000
 *               quantity: 
 *                 type: string
 *                 description: this is the quantity of the product being created
 *                 example: 500kg
 *               description: 
 *                 type: string
 *                 description: this is the description of the product being created
 *                 example: Garlic is a pungent, flavorful bulbous plant with a papery skin. Its cloves, ranging from white to purple, contain a potent oil releasing a strong aroma when crushed. Garlic adds depth to various dishes, from savory meats to soups, and is valued for its medicinal properties, promoting heart health and immunity.
 *               productImage: 
 *                 type: string
 *                 format: binary
 *                 example: image
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the product
 *                   example: garlic
 *                 price:
 *                   type: number
 *                   description: The price of the product
 *                   example: 5000
 *                 quantity:
 *                   type: string
 *                   description: The quantity of the product
 *                   example: 500kg
 *                 description:
 *                   type: string
 *                   description: The description of the product
 *                   example: Garlic is a pungent, flavorful bulbous plant with a papery skin. Its cloves, ranging from white to purple, contain a potent oil releasing a strong aroma when crushed. Garlic adds depth to various dishes, from savory meats to soups, and is valued for its medicinal properties, promoting heart health and immunity.
 *       500:
 *         description: error updating product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: 
 *                   type: string
 *                   example: internal server error
 */


router.put('/updateProduct/:id',upload.single('productImage'), updateProduct)

/**
 * @swagger
 * /api/v1/deleteProduct/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       500:
 *         description: error deleting product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: 
 *                   type: string
 *                   example: internal server error
 */
router.delete('/deleteProduct/:id', deleteProduct)
module.exports = router