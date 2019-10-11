'use strict';

var blog = require('../controllers/blog.js');
var router = require('koa-router')();

router.get('/', back );

async function back(ctx) {
  await ctx.render('index');
}

router.post('/', blog.addblogrecord);

module.exports = router;
