const db = require('../config/db.config.js');
const Post = db.post;

exports.PostList = (req, res ,result ) => {
	Post.findAll().then((post)=>{
        res.render('home/home.ejs', {
            Post: result,
            post:post,   
    },
)});
}

exports.PostView = function (req, res,result) {
	Post.findOne({
		where: { id: req.params.id }
	}).then(post =>
		res.render('home/postone.ejs', {
      Post: result,
      post:post,   
    })
  )}