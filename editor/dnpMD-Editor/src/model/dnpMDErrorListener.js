var antlr4 = require('antlr4/index');

var dnpMDErrorListener = function() {
    antlr4.error.ErrorListener.call(this);

    this.errors = [];

    this.resetErrors = function() {
        this.errors = [];
    };

    return this;
};

dnpMDErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
dnpMDErrorListener.prototype.constructor = dnpMDErrorListener;
dnpMDErrorListener.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
    this.errors.push({ message: msg });
};

module.exports.dnpMDErrorListener = dnpMDErrorListener;