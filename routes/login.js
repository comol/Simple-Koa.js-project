'use strict';

var auth = require('../controllers/auth.js');
var router = require('koa-router')();

// eslint-disable-next-line no-unused-vars
router.get('/', back);

async function back(ctx) {
  if (ctx.flash.login)
  {
    await ctx.render('login', {msgslogin: 'ok', msglogin: ctx.flash.login});
  }
  else
  {
    await ctx.render('login');
  }
}

router.post('/', auth.loginuser);

module.exports = router;
