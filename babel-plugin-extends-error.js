/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 */
module.exports = function(babel) {
  var t = babel.types

  return new babel.Plugin('babel-plugin-extends-error', {
    visitor: {
      ClassDeclaration: function(node, parent) {
        if (node.superClass && node.superClass.name !== 'Error') {
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
