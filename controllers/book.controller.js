const Book= require('../varyant.models/varyant.book.model')

exports.insert = async (req, res, next) => {
  new Book(req.body).save((err,data)=>{
    if (err) {
      res.json({status:false,error:err})
    } else {
      res.json({status:true,data:data})
    }
  })
}

exports.list = async (req, res, next) => {
  let data = await Book.find({})
  if (data) {
    res.json({status:true,data:data})
  } else {
    res.json({status:false,activity:'Not found !'})
  }
}