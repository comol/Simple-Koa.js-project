var modeldb = require('./model.js');

exports.savelogin = function (jsondata){
  savelogintodb(jsondata);
};

async function savelogintodb(jsondata)
{
  const db = modeldb.initdb();
  modeldb.pushtodb(db, 'auth', jsondata);
}
