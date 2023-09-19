export default [
  {
    text: '介绍',
    link: '/gis/index.md'
  },
  {
    text: '基础概念',
    children: [
      {
        text: '比例尺和分辨率',
        link: '/gis/basic/resolution.md'
      }
    ]
  },
  {
    text: 'OGC标准',
    children: [
      {
        text: 'OGC 标准介绍',
        link: '/gis/ogc/ogc.md'
      },
      {
        text: 'KML和KMZ',
        link: '/gis/ogc/kmlorkmz.md'
      },
      {
        text: 'GeoJSON',
        link: '/gis/ogc/geojson.md'
      },
      {
        text: '3D Tiles',
        link: '/gis/ogc/3dtiles.md'
      },
      {
        text: 'WMS',
        link: '/gis/ogc/wms.md'
      },
      {
        text: 'WMTS',
        link: '/gis/ogc/wmts.md'
      },
      {
        text: 'WPS',
        link: '/gis/ogc/wps.md'
      },
      {
        text: 'WCS',
        link: '/gis/ogc/wcs.md'
      }
    ]
  },
  {
    text: 'gis数据',
    children: [
      {
        text: '正射影像',
        link: '/gis/data/ortho.md'
      },
      {
        text: '卫星影像',
        link: '/gis/data/satellite.md'
      },
      {
        text: '倾斜摄影',
        link: '/gis/data/tilt.md'
      }
    ]
  }
];
