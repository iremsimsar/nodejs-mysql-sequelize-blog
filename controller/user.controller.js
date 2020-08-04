const db = require('../config/db.config.js');

const User = db.user;

exports.userupdate = function (req, res) {
	User.update(
		{
            name: req.body.name,
            surname: req.body.name,
            username: req.body.username,
            email:req.body.email,
            about_me:req.body.about_me
		},
		{
			where: { id: req.params.id }
		}
	).then(user =>
		res.redirect('/admin-users')
	).catch(err => {
		res.status(500).send("Hata! Error -> " + err);
	})
}
