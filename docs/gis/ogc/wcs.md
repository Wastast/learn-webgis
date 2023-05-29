# WCS

WCS 是指 OGC 的 Web 栅格服务（Web Coverage Service）面向空间影像数据，它将包含地理位置值得地理空间数据作为 栅格或者说覆盖，在网上相互交换
网络栅格服务由三种操作组成

- GetCapabilites：返回描述服务和数据集的 XML 文档
- GetCoverage：是在 GetCapabilites 确定了什么样的查询可以执行、什么样的数据能够获取之后执行的，它使用通用的栅格格式返回地理位置的值或属性。
- DescribeCoverageType：允许客户端请求由具体的 WCS 服务器提供的任一覆盖层的完全描述
