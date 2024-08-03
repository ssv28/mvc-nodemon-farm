var express = require('express');
var router = express.Router();
let fs = require('fs')
let app = express()


/* GET home page. */
router.get('/', function (req, res){
  const values = fs.readFileSync('node-farm/dev-data/data.json')
  
  const jsonData = JSON.parse(values);
  console.log(jsonData);
  res.render('index', { values: jsonData })

  
})

router.get("/product", (req, res) => {
  const values = fs.readFileSync('node-farm/dev-data/data.json')

  // console.log(req.query.id)

  let id = req.query.id       //app.get("/product",.....)
   
  // let id = req.params.id         //app.get("/product/:id",.....)  //parameters

  const jsonData = JSON.parse(values);
  res.render('product', { values: jsonData[id]});    //aata id nu loop fare atle [0] ni badle [id] for query or params

});

module.exports = router;
