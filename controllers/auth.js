var authmodel = require('../models/auth.js');

exports.loginuser = async function (ctx){
  await authmodel.savelogin(ctx.request.body);
  ctx.flash.login = ctx.request.body.email;
  await ctx.render('login', {msgslogin: 'ok', msglogin: ctx.flash.login});
};
