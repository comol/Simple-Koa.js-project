var goodsmodel = require('../models/goods.js');

exports.addgood = async function (ctx){
  await goodsmodel.addgood(ctx.request.body);
  await ctx.render('admin', {msgfile: 'OK'});
};
