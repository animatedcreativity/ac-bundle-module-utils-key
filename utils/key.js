exports = module.exports = exports = module.exports = function() {
  var mod = {
    length: 20,
    count: 4, // length X count
    token: function() {
      var str = "";
      for (var i=0; i<=mod.count-1; i++) {
        if (str !== "") str += "-";
        str += mod.make(mod.length);
      }
      return str;
    },
    make: function(length) {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i<length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
      return result;
    }
  };
  return mod;
};