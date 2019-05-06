module.exports = {
  env: {
    mocha: true
  },
  "rules": {
    "indent": [
        "error",
        4
    ],
    "one-var": [
        "error",
        {
            // 对已经初始化的变量，要求其连续的变量声明合并为一个声明
            "initialized": "consecutive"
        }
    ]
},
}
