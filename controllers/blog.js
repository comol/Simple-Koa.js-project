var blogmodel = require('../models/blog.js');

exports.addblogrecord = async function (ctx){
  await blogmodel.posttoblog(ctx.request.body);
  ctx.flash.email = ctx.request.body.email;
  await ctx.render('index', {msgsemail: '1', msgemail: ctx.flash.email});
};
