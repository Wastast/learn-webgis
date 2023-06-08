export default [
  {
    text: '包管理工具',
    children: [
      {
        text: 'npm',
        children: [
          {
            text: 'npm unexpected token .',
            link: '/tools/package/npm/unexpected.md'
          }
        ]
      }
    ]
  },
  {
    text: 'Git',
    children: [
      {
        text: '配置 SSH Key',
        link: '/tools/git/sshkey.md'
      },
      {
        text: '基础命令',
        link: '/tools/git/command.md'
      },
      {
        text: 'CRLF和LF',
        link: '/tools/git/crlforlf.md'
      },
      {
        text: 'husky + commitlint 实现代码校验',
        link: '/tools/git/codeverification.md'
      }
    ]
  },
  {
    text: '其他工具集',
    children: [
      {
        text: 'dat.gui',
        link: '/tools/other/datgui.md'
      },
      {
        text: 'Prettier',
        link: '/tools/other/prettier.md'
      }
    ]
  }
];
