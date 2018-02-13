export const state = () => ({
    list: [],
    item: {},
    social: []
})

export const mutations = {
    add(state, post) {
        state.list.push(post)
    },
    set(state, posts) {
        state.list = posts.map((post, index) => ({ ...post, index }))
    },
    setItem(state, post) {
        state.item = post
    },
    social(state, social) {
        state.social = social
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}
