## 清除 HTML 页面不缓存的几种方式

### 通过在 `<meta />` 标签清除缓存

```html
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!-- 告诉IE浏览器以什么模式渲染页面。 -->
  <meta http-equiv="X-UA-Compatible" content="IE=8" />
  <!-- 告诉浏览器这个页面什么时候过期，从而决定浏览器是否重新向服务器发出请求。 -->
  <meta http-equiv="Expires" content="0" />
  <!-- 告诉浏览器不要缓存这个页面，每次访问都向服务器发出请求。 -->
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Cache-control" content="no-cache" />
  <meta http-equiv="Cache" content="no-cache" />
</head>
```

### 在 java 中添加如下代码

```js
response.setHeader('Cache-Control', 'no-cache');
response.setHeader('Pragma', 'no-cache');
response.setDateHeader('Expires', 0);
```

### Firefox 火狐浏览器 web 开发调试开启强制刷新缓存模式

- 火狐浏览器地址栏输入 about:config
- 找到 browser.cache.check_doc_frequency 选项，双击将 3 改成 1
- 找到 browser.cache.disk.enable 把 true 改为 false
- 找到 browser.cache.memory.enable 把 true 改为 false
