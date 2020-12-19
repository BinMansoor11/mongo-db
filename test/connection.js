const mongoose = require("mongoose");
const db = mongoose.connection

// connect to mongoDB
const url = 'mongodb://127.0.0.1:27017/testDataBase'

mongoose.connect(url, { useNewUrlParser: true })
	
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
