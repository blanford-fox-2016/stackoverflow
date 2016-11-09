const users = require('../models/model.users')

module.exports = {
  /* get all data user */
  getAllUser : function(req, res, next){
    var newUsers = new users({
      username : req.body.username,
      password : req.body.password ,
      address : req.body.address ,
      email : req.body.email
    });

    // save
    newUsers.save(function (err, data) {
      if (err) return handleError(err);
      // return data
      res.json(data);
    })
  }

} // end of module
