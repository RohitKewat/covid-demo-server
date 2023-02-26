const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const { connection } = require('../connector')

router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())

router.get('/totalRecovered',async(req,res)=>{
   
    try {

        const data = await connection.find() ;
        let total = 0 ;
        for(i=0;i<data.length;i++){
          total+= data[i].recovered
        }
        console.log(data);
        res.status(200).json({
            data: {_id: "total", recovered:total},
            
        })
    } catch (error) {
        res.status(500).json({
            sta: "failed",
            message :error.message
        })
    }

})
router.get('/',(req,res)=>{

    res.send("working")
})

module.exports = router ;