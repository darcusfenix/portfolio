export const state = () => ({
    list: []
})

export const mutations = {
    add(state, post) {
        state.list.push(post)
    },
    set(state, posts) {
        state.list = posts
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}
