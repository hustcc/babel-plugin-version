const fs = require('fs');
const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

module.exports = function({ types: t }) {
  return {
    visitor: {
      ReferencedIdentifier(path, state) {
        const define = state.opts.define || '__VERSION__'; // 默认值
        if (path.node.name === define) {
          path.replaceWith(t.valueToNode(version));
        }
      }
    },
  };
};
