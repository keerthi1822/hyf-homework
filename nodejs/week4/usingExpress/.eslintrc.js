module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd" : true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": "error",
        "no-var": 2//value 0 means 'ignore' value 1 'warning'
    }
};