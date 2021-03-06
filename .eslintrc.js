module.exports = {
    root: true,
    parser: "babel-eslint",
    env: {
        browser: true,
        node: true
    },
    extends: ["plugin:prettier/recommended"],
    // required to lint *.vue files
    plugins: ["html", "prettier"],
    // add your custom rules here
    rules: {
        "prettier/prettier": "error",
        "prettier/eol-last": "never"
    },
    globals: {}
}
