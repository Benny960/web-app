
export.getWorld=function(req,res){
  res.json({result: 'hello Cct', data:[
    req.params.foo,req.params.bar
  ]});
 };
