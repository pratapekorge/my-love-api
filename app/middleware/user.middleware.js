"use strict";
const { body, validationResult } = require('express-validator');
const validator = require("validator");
module.exports = {
    getuserId: [body('username').notEmpty(),
        body('email').notEmpty().isEmail(),
        body('password').notEmpty().isLength({ min: 8 }), (req, res, next) => {
            const errors = validationResult(req);
            console.log("error", errors);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            else {
                next();
            }
        },
    ]
};
