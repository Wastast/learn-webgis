export default [
  {
    text: '首页',
    link: '/'
  },
  {
    text: 'GIS',
    link: '/gis/'
  },
  {
    text: 'WebGL',
    link: '/webgl/'
  },
  {
    text: 'CesiumJS',
    link: '/cesium/setup/desc.md'
  },
  {
    text: '前端',
    children: [
      {
        text: '浏览器',
        link: '/browser/'
      },
      {
        text: '三剑客',
        children: [
          {
            text: 'CSS',
            link: '/css/'
          },
          {
            text: 'JS',
            link: '/js/'
          },
          {
            text: 'HTML',
            link: '/html/'
          }
        ]
      }
    ]
  },
  {
    text: 'WebGIS',
    children: [
      {
        text: '基础理念',
        children: [
          {
            text: '数据格式',
            link: '/webgis/module/3dtiles.md'
          },
          {
            text: '地图类别',
            link: '/webgis/tilt/desc.md'
          }
        ]
      },
      {
        text: '软件操作',
        children: [
          {
            text: 'QGIS',
            link: '/qgis/'
          },
          {
            text: 'ArcGIS',
            link: '/arcgis/'
          }
        ]
      },
      {
        text: '地图引擎',
        children: [
          {
            text: 'Potree',
            link: '/potree/'
          }
        ]
      }
    ]
  },
  {
    text: '工具',
    children: [
      {
        text: '包管理工具',
        children: [
          {
            text: 'npm',
            link: '/tools/package/npm/unexpected.md'
          }
        ]
      },
      {
        text: '代码管理',
        children: [
          {
            text: 'Git',
            link: '/tools/git/command.md'
          }
        ]
      },
      {
        text: '其他工具集',
        link: '/tools/other/datgui.md'
      }
    ]
  }
];
