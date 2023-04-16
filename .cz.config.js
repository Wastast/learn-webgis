'use strict';
module.exports = {
  types: [
    { value: '✨新增', name: '新增:    新的内容' },
    { value: '👍修改', name: '修改:    将原有内容进行调整' },
    { value: '🐛修复', name: '修复:    修复一个Bug' },
    { value: '📝文档', name: '文档:    变更的只有文档' },
    { value: '💄格式', name: '格式:    空格, 分号等格式修复' },
    { value: '♻️重构', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️性能', name: '性能:    提升性能' },
    { value: '✅测试', name: '测试:    添加一个测试' },
    { value: '🔧工具', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪回滚', name: '回滚:    代码回退' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },  */
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // used if allowCustomScopes is true
    customScope: '当前提交文件更改的范围:',
    subject: '请简要描述提交:\n',
    body: '请输入详细描述(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue,例如：#31, #34(可选):\n',
    confirmCommit: '确认以上信息提交?(y/n)'
  },
  // 跳过问题
  skipQuestions: ['footer'],
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100
};
