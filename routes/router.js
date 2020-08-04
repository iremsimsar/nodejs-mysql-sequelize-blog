var express = require('express');
var router = express.Router();
const homecontroller = require('../controller/home.controller');
const citycontroller = require('../controller/city.controller');

router.get('/', homecontroller.PostList);

router.get('/blog', function (req, res) {
    res.locals = {  title: 'Blog' };
    res.render('home/yazılar.ejs');
})

router.get('/seyahatler', citycontroller.CityList);

router.get('/projeler', citycontroller.projelerList);

router.get('/teknoloji', citycontroller.teknolojiList);

router.get('/yiyecekler', citycontroller.yemeklist);


router.get('/post-:id', homecontroller.PostView);

router.get('/hakkimda', function (req, res) {
    res.locals = {  title: 'Blog' };
    res.render('home/hakkımda.ejs');
})

router.get('/iletisim', function (req, res) {
    res.locals = {  title: 'Blog' };
    res.render('home/iletisim.ejs');
})


module.exports = router;