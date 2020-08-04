var express = require('express');
var admin_router = express.Router();
const postcontroller = require('../controller/post.controller');

admin_router.get('/admin', function (req, res) {
    res.locals = {  title: 'admin' };
    res.render('admin/dashboard.ejs');
})


admin_router.get('/admin-arabic', function (req, res) {
    res.locals = {  title: 'admin' };
    res.render('admin/language.ejs');
})

admin_router.get('/admin-users', function (req, res) {
    res.locals = {  title: 'admin' };
    res.render('admin/user.ejs');
})

admin_router.get('/admin-post-list', postcontroller.PostList);


admin_router.get('/admin-post-save', function (req, res) {
    res.locals = {  title: 'admin' };
    res.render('admin/postsave.ejs');
})

admin_router.post('/admin-post-save',postcontroller.postsave );

admin_router.get('/admin-map', function (req, res) {
    res.locals = {  title: 'admin' };
    res.render('admin/map.ejs');
})

module.exports = admin_router;