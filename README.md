# Random Img Api

一个简单的功能，用于返回随机图片api，支持跨设备（PC/手机/平板）显示，支持部署在Cloudflare Worker上。

## 功能

- 支持多设备背景图片分组：
  - `background_mobile`（手机）
  - `background_tablet`（平板）
  - `background_pc`（电脑）
- 根据 URL 参数 `id` 返回指定分组的随机图片
- 无参数时，从所有分组中随机选择一张图片
- 支持跨域访问（`Access-Control-Allow-Origin: *`）
- 支持缓存，默认缓存 1 小时

## 图片分组示例

```
'imageGroups': {
  'background_mobile': [
    'https://xxx.xyz/file/mobile1.jpg',
    'https://xxx.xyz/file/mobile2.jpg',
  ],
  'background_tablet': [
    'https://xxx.xyz/file/tablet1.jpg',
    'https://xxx.xyz/file/tablet2.jpg',
  ],
  'background_pc': [
    'https://xxx.xyz/file/pc1.jpg',
    'https://xxx.xyz/file/pc2.jpg',
  ]
}
```

## 使用方法

1. 克隆本仓库或下载 Worker 代码
2. 在 Cloudflare Worker 控制台新建 Worker
3. 将 `imageGroups` 数组替换成自己的图片链接
4. 部署 Worker 并获取访问 URL

### URL 调用示例

- 获取手机组随机图片：

```
https://your-worker-url/?id=background_mobile
```

- 获取平板组随机图片：

```
https://your-worker-url/?id=background_tablet
```

- 获取 PC 组随机图片：

```
https://your-worker-url/?id=background_pc
```

- 无参数时，从所有分组随机选一张图片：

```
https://your-worker-url/
```

## 完整 Worker 代码示例

```
const imageGroups = {
  'background_mobile': [ /* 图片链接列表 */ ],
  'background_tablet': [ /* 图片链接列表 */ ],
  'background_pc': [ /* 图片链接列表 */ ]
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  let selectedGroup;
  if (id && imageGroups[id]) {
    selectedGroup = imageGroups[id];
  } else {
    selectedGroup = Object.values(imageGroups).flat();
  }

  const randomImage = selectedGroup[Math.floor(Math.random() * selectedGroup.length)];
  const imageResponse = await fetch(randomImage, { cf: { cacheTtl: 3600, cacheEverything: true } });
  const imageContent = await imageResponse.arrayBuffer();
  
  let contentType = imageResponse.headers.get("Content-Type") || "image/jpeg";
  
  const headers = {
    'Content-Type': contentType,
    'Cache-Control': 'max-age=3600',
    'Access-Control-Allow-Origin': '*',
  };

  return new Response(imageContent, { headers });
}
```

## 调用效果

- 手机端：显示手机组随机图片
- 平板端：显示平板组随机图片
- PC端：显示 PC 组随机图片
- 所有设备：可跨域直接在网页中 `<img src="https://your-worker-url/">` 使用
