var lib = {};

if (typeof window !== 'undefined') {
  lib._ = window._;
  lib.d3 = window.d3;
  lib.crossfilter = window.crossfilter;
  // only care about not having d3 when running in the browser
  if (!lib.d3) {
    throw new Error('d3.js is a required dependency');
  }
  lib.Duration = window.Duration;
  lib.bows = window.bows;
}
else {
  lib._ = require('lodash');
  lib.Duration = require('duration-js');
  lib.crossfilter = require('crossfilter');
}

if (!lib._) {
  throw new Error('Underscore or Lodash is a required dependency!');
}

if (!lib.bows) {
  // NB: optional dependency
  // return a factory for a log function that does nothing
  lib.bows = function() {
    return function() {};
  };
}

module.exports = lib;