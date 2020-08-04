const db = require('../config/db.config.js');
const Post = db.post;

exports.CityList = (req, res ,result ) => {
	Post.findAll().then((post)=>{
        res.render('home/seyahatler.ejs', {
            Post: result,
            post:post,   
    },
)});
}

exports.projelerList = (req, res ,result ) => {
	Post.findAll().then((post)=>{
        res.render('home/projeler.ejs', {
            Post: result,
            post:post,   
    },
)});
}

exports.teknolojiList = (req, res ,result ) => {
	Post.findAll().then((post)=>{
        res.render('home/teknoloji.ejs', {
            Post: result,
            post:post,   
    },
)});
}

exports.yemeklist = (req, res ,result ) => {
	Post.findAll().then((post)=>{
        res.render('home/food.ejs', {
            Post: result,
            post:post,   
    },
)});
}

