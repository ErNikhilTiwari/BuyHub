import express from 'express';

import { protect } from '../middleware/authMiddleware.js';
import validateRequest from '../middleware/validator.js';
import { body } from 'express-validator';

const router = express.Router();

const validator = {
    order: [
        body().custom(body => {
            if (Object.keys(body).length === 0) 
                throw new Error('Request Body is empty')
            return true;
        })
    ]
};


router.post('/order', validator.order, validateRequest, protect, (req, res) => {
    // Add your order creation logic here
    res.send({ message: 'Order created successfully' });
});

router.post('/order/validate', (req, res) => {
    res.send({ message: 'Order validated successfully' });
});

export default router;
