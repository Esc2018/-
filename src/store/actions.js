const actions = {
    getParamSync(context, value) {
        setTimeout(() => {
            //3.通过commit提交一个名为getParam的mutation
            //action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation
            context.commit('resetUserid', value)
        }, 300)
    }
}
export default actions;