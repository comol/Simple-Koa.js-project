var modeldb = require('./model.js');

exports.posttoblog = function (jsondata){
  posttoblog(jsondata);
};

async function posttoblog(jsondata)
{
  const db = modeldb.initdb();
  modeldb.pushtodb(db, 'posts', jsondata);
}
