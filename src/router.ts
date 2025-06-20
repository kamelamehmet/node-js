import {Router} from "express";
import {body, oneOf, validationResult} from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, deleteProduct, getOneProduct, getProducts } from "./handlers/product";
import { deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/update";

const router = Router()

router.get('/product', (req, res) => {
    res.json({message: req.shhhh_secret})
})
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('product/:id', body('name').isString(), handleInputErrors, (req, res) => {
})
router.post('/product', body('name').isString(), handleInputErrors, createProduct)   //we don't know the id when creating a product
router.delete('/product/:id', deleteProduct)


router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('update/:id',
    body('title').optional(), 
    body('body').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(),  
    updateUpdate)
// router.post('/update',  
//     body('title').exists(), 
//     body('body').exists().isString(), 
//     body('productId').exists().isString(),
// createUpdate)
router.delete('/update/:id', deleteUpdate)


router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('updatepoint/:id', 
     body('name').optional().isString(),
     body('description').optional().isString(), 
     () => {}
    )
router.post('/updatepoint',  body('name').optional().isString(),
     body('description').isString(), 
     body('updateId').isString(),
     () => {})   
router.delete('/updatepoint/:id', () => {})


router.use((err,req,res,next) => {
    console.log(err)
    res.json({message: "in route handler"})
})

export default router;