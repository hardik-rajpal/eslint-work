module.exports = {
    meta:{
        // all function names must end with s.
    },
    create(context){
        return {
            CallExpression(node){
                if(node.callee.name==='test'){
                    context.report({
                        node:node,
                        message:"tests with an s, homie."
                    })
                }
            }
        }
    }
}