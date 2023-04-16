# 比例尺和分辨率

## 比例尺

比例尺是表示图上距离与实地距离缩小或扩大的程度。

比例尺是人为了把地理上的信息放到图纸上而定义的缩放值，因为人们用肉眼在图上能分辨的最小距离为 0.1mm，因此地图上 0.1mm 所代表的实地水平距离成为比例尺精度。

一般矢量数据和栅格数据都会使用到比例尺进行描述。

计算公式 比例尺 = 图上距离 ： 实地距离

## 分辨率

地图分辨率又称地面分辨率或空间分辨率。分辨率一般用来描述栅格数据的精度。如果想要了解分辨率，必须先了解栅格中像元的概念。

### 像元

像元又称像素，每一张栅格图片都是由按行和列组织的像元矩阵组成，每一个像元都是等高等宽的正方形。

<img src="/image/webgis/gis/pix.png" />

如果一个像元的覆盖面积是 5 x 5 米，则分辨率为 5 米。

## 例子：计算 tif 的分辨率和比例尺

### 准备工作

需要 ArcGis 工具以及一张 tif 数据。

> 没有数据自行获取

### 在 ArcGis 中展示数据

打开 ArgGis 将 tif 数据拖入，会出现如下图一样的提示，点击确定即可。

<img src="/image/webgis/gis/gis-looktif.png" />

等待相关文件构建完毕后会展示出图形。

<img src="/image/webgis/gis/gis-image.png" />

右键点击图层，查看图层相关源数据，查看像元大小。

<img src="/image/webgis/gis/gis-source.png" />

这时候会发现为什么像元大小为什么这么小，是不是操作的有问题。

其实是没有问题的，只是坐标系的问题，这些数据默认为地理坐标系数据，也就是经纬度展现形式，

<img src="/image/webgis/gis/gis-xy84.png" />

在这个条件下，像元大小都会变得很小，我们需要将其坐标系做转换。

### tif 图像投影转换

打开 ArcToolbox, 找到对应的功能块

<img src="/image/webgis/gis/gis-toolbox-btn.png" />

<img src="/image/webgis/gis/gis-toolbox.png" />

确认需要转换的 tif 以及填写对应的坐标系。`WGS_1984_UTM-Zone-46N`，点击确定即可。

<img src="/image/webgis/gis/tis-touyingpop.png" />

转换后会自动打开该 tif，如未自动打开，则去输出文件夹自行打开查看。

再次进行属性查看，就可以看到像元大小已经变了，此时单位是 m

<img src="/image/webgis/gis/gis-projectras-value.png" />

### 得出分辨率并计算比例尺

根据上图来看，单位是 `m` 数据为 `0.50792915`。

分辨率是 `0.50792915(m) * 100 ≈ 5.079(cm)`，也就是 5 公分(厘米) 的分辨率精度。
