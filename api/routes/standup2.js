const standup = require('../../models/standup');

module.exports = function (router) {

    router.post('/product', function (req, res) {
        let note = new standup(req.body)
        note.save(function (err, note) {
            if (err) {
                return res.status(400).json(err);
            }
            res.status(200).json(note);
        });
    });


    router.get('/product', function (req, res) {
        standup.find({}, (err, standup) => {
            if (err) {
                res.json({ success: false, message: err });
            }
            else if(!standup){
                res.json({success:false,message:'no'})
            }
            else {
                res.json({success:true, standup: standup})
            }
        }        
    )

router.put('/product', (req,res) => {
    if(!req.body._id){
        res.json({success:false,message:'no standup id given'})
    }
    else{
        standup.findOne({_id:req.body._id},(err,standup) => {
            if(err) {
                res.json({success:false, message: 'not valid'});
            }
            else{
                standup.prodName = req.body.prodName;
                standup.prodPrice = req.body.prodPrice;
                standup.expDate = req.body.expDate;
                standup.manuDate = req.body.manuDate;
                standup.barcode = req.body.barcode;
                standup.save((err) => {
                    if(err){
                        res.json({success:false,message: err});
                    }
                    else{
                        res.json({success:true,message: 'stanup updated'})
                    }
                })
            }
        }
        )}
})})

router.delete('/deleteProduct/:id', (req,res) => {
    if(!req.params.id){
        res.json({success:false, message:'no id'})
    }
    else{
        standup.findOne({ _id: req.params.id}, (err,standup) => {
            if(err){
                res.json({success:false, message:'Invalid'})
            }
            else{
                standup.remove((err) => {
                    if(err){
                        res.json({success:false, message:err})
                    }
                    else{
                        res.json({ success: true, message : 'deleted'})
                    }
                })
            }
        })
    }
})

}



