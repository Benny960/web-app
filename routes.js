var express = required('express'),
router = express.router(),
itemCtrl = require('./item-controller');

router.get('/hello/:foo/:bar',itemCtrl.getWorld);
router.post('/hello', );


router.get('/hello/:foo/:bar', function(req,res){res.json({result: 'hello Cct', data:[req.params.foo,req.params.bar]});
                                             });
module


}
