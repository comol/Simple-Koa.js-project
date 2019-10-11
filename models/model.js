var low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

module.exports.initdb = function initdb() {
  const adapter = new FileSync('db.json');
  const db = low(adapter);
  db.defaults({ auth: [], posts: [], goods: [], skills: []})
    .write();
  return db;
}

module.exports.pushtodb = function pushtodb(db, column, data) {

  db.get(column)
    .push(data)
    .write();

}
