'use strict';
const router = require('koa-router')();
const goods = require('../controllers/goods.js');
var skills = require('../controllers/skills.js');

// eslint-disable-next-line no-unused-vars
router.get('/',  back);

async function back(ctx) {
  if (ctx.flash.email)
  {
    await ctx.render('admin', {msgsemail: 'ok', msgemail: ctx.flash.email});
  }
  else
  {
    await ctx.render('admin');
  }
  await ctx.render('admin');
}
router.post('/skills', skills.addslills);
router.post('/upload', goods.addgood);

module.exports = router;
