const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  env: {
    "MONGODB_URI": "mongodb+srv://popuniverse:popuniverse@cluster0.qo9li.mongodb.net/popcollection?retryWrites=true&w=majority",
  }
};
