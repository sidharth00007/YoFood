const express = require('express')
const router = express.Router()
// const cors = require("cors");
// router.use(cors());

router.post('/foodData', (req,res) =>{
    try {
        res.send([global.food_items, global.foodCategory])
    } catch (error) {
        
    }
})

module.exports = router;