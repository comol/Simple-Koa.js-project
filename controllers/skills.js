var skillsmodel = require('../models/skills.js');

exports.addslills = async function (ctx){
  await skillsmodel.addskill(ctx.request.body);
  await ctx.render('admin', {msgskill: 'OK'});
};
