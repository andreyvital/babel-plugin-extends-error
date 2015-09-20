/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 */

module.exports = function(babel) {
  var t = babel.types
  var Plugin = babel.Plugin

  return new Plugin('babel-plugin-extends-error', {
    visitor: {
      ClassDeclaration: function(node, parent) {
        if (! node.superClass) {
          return
        }

        if (node.superClass.name !== 'Error') {
          return
        }

        node.superClass = t.callExpression(t.identifier('require'), [
          t.literal('es6-error')
        ])

        return node
      }
    }
  })
}
