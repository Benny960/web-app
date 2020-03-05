var express = required('express'),
router = express.router();

router.get('/hello/:foo/:bar', function(req,res){res.json({result: 'hello Cct', data:[req.params.foo,req.params.bar]});
                                             });
module


}
