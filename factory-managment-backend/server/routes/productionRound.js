const router = require("express").Router();
const newProductionRoundDetails = require("../model/newProductionRound.model");

router.route("/add/newproRound").post((req, res) => {

    const productId = req.body.productId;
    const productCategory = req.body.productCategory;
    const quantity = Number(req.body.quantity);
    const esDays = Number(req.body.esDays);
    const esEmployees = Number(req.body.esEmployees);
    const status = req.body.status;
  
    const productionRoundDetails = new newProductionRoundDetails({
         productId ,
         productCategory ,
         quantity, 
         esDays ,
         esEmployees,
         status
    });

    productionRoundDetails
      .save()
      .then((result) => res.json("New Production Round added"))
      .catch((err) => res.status(400).json(err.message));
  });

  
  router.route("/").get((req, res) => {

    newProductionRoundDetails.find()
        .then((newproductionrounddetails)=> {
        res.json(newproductionrounddetails)
    }).catch((err)=>{
        console.log(err);
    })

  });

  router.route("/delete/:id").delete(async (req,res) => {
    let productId = req.params.id;
    await newProductionRoundDetails.findByIdAndDelete(productId).then(() => {
        res.status(200).send({status:"New Production Round deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting", error: err,message});
    });

  
})  

  module.exports = router;