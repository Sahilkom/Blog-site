const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const favicon= require('favicons')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const path = require('path');
const app = express()


// *********************************************************************************
// var fs = require('fs');
// var multer = require('multer');
// require('dotenv').config();
// *********************************************************************************


mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


// *********************************************************************************
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// var upload = multer({ storage: storage });
 
// app.get('/', (req, res) => {
//      Article.find({name,decs,img})
//     .then((data, err)=>{
//         if(err){
//             console.log(err);
//         }
//         res.render('index',{items: data})
//     })
// });
// *********************************************************************************
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)