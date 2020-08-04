const db = require('../config/db.config.js');
const Post = db.post;

exports.postsave = (req, res) => {
    // Veritabanına kullanıcı kaydı
    console.log("Kayıt işlemi yapılıyor");
        Post.create({
            title: req.body.title,
            side_header: req.body.side_header,
            explain: req.body.explain,
            author: req.body.author,
            date:req.body.date,
            category:req.body.category,
            broadcasting:req.body.broadcasting,
        }).then((request,response) => {
            res.redirect('/admin-post-save')
         }).catch(err => {
            res.status(500).send("Fail! Error -> " + err);
    })
}

exports.PostList = (req, res ,result ) => {
	Post.findAll().then((post)=>{
        res.render('admin/list.ejs', {
            Post: result,
            post:post,   
    },
)});
}