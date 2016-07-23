var antlr4 = require('antlr4/index');

var dnpMDErrorListener = function(errors) {
    antlr4.error.ErrorListener.call(this);
    this.errors = errors;
    return this;
};

dnpMDErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
dnpMDErrorListener.prototype.constructor = dnpMDErrorListener;
dnpMDErrorListener.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
    this.errors.push(msg);
    console.log("Fehler: " + msg);
};

module.exports.dnpMDErrorListener = dnpMDErrorListener;