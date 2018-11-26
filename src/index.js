'use strict';

var fs = require('fs');
var version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

module.exports = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      // __VERSION__
      ReferencedIdentifier: function(path, state) {
        var identifier = state.opts.identifier;
        var transform = identifier === undefined ? true : identifier; // 默认转换

        var define = state.opts.define || '__VERSION__'; // 默认值
        if (transform && path.node.name === define) {
          path.replaceWith(t.valueToNode(version));
        }
      },
      // "__VERSION__"
      StringLiteral: function(path, state) {
        var stringLiteral = state.opts.stringLiteral;
        var transform = stringLiteral === undefined ? true : stringLiteral;

        var define = state.opts.define || '__VERSION__';
        if (transform && path.node.value === define) {
          path.replaceWith(t.valueToNode(version));
        }
      }
    }
  };
};
