/**
 * This middleware sends server-side logging messages to the client side.
 * This is done by overriding the global `console` object to send logging messages as response headers.
 */

var util = require('util');

module.exports = function(config) {
  config = config || {};

  var levels = ['log', 'info', 'warn', 'error', 'dir'];

  var old_console = {};
  levels.forEach(function(level) {
    old_console[level] = console[level];
  });

  return function(req, res, next) {
    var index = 0;

    levels.forEach(function(level) {
      console[level] = function() {
        // apply the old function first
        old_console[level].apply(this, arguments);

        // generate header key
        var level_ucfirst = level.charAt(0).toUpperCase() + level.slice(1);
        var header_key = 'X-Nodejs-' + level_ucfirst + '-' + index;

        // In order to generate header value, we will need to do some processing on arguments.
        // This variable is to hold the processed arguments.
        var args;

        if (config.pretty === false && level !== 'dir') {
          // if pretty printing is disabled, reduce arguments into a single argument
          args = [util.format.apply(this, arguments)];
        } else {
          args = [].slice.call(arguments).map(function(arg, i) {
            if (typeof arg === 'string') {
              // the 0-th argument may contain format strings, browser console uses %f for numbers and %o for objects
              return i === 0 ? arg.replace(/%d/g, '%f').replace(/%j/g, '%o') : arg;
            }

            // Because `JSON.stringify()` does not handle RegExp/Date/Error/etc. correctly, here we use
            // `util.inspect()` to serialize objects and then convert them back to objects.
            // Beware that the returned value of `util.inspect()` is not JSON.
            var serialized = util.inspect(arg, false, null);
            try {
              return new Function('return ' + serialized)();
            } catch (e) {
              return serialized;
            }
          });
        }

        var header_value = JSON.stringify(args);

        res.setHeader(header_key, header_value);
        index++;
      };
    });

    next();
  };
};
