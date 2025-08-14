
// 定义存放图片链接的数组
const imageGroups = {
  'background_mobile': [
    'https://img0.baidu.com/it/u=847171731,919576196&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10677811941978431840&bdtype=0&commodity=&copyright=&cs=601373294%2C3895691461&di=7518804108115968001&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_4255194752778405003&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=c9f450900164a32a&lm=&objurl=https%253A%252F%252Fiknow-pic.cdn.bcebos.com%252F0dd7912397dda1440c84e031a0b7d0a20df486a0&os=382047400%2C2331266751&pd=image_content&pi=0&pn=12&rn=1&simid=601373294%2C3895691461&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10677811941978431840&bdtype=0&commodity=&copyright=&cs=3627692210%2C517642247&di=7523999300557209601&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_5231468075221470460&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=2574839022%2C367326556&isImgSet=&latest=&lid=c9f450900164a32a&lm=&objurl=https%253A%252F%252Fse-feed-bucket.bj.bcebos.com%252Fproduce-record2083275%252F90baab2d60b2e5702b1625cb17a06a51-s0_0.jpg&os=2574839022%2C367326556&pd=image_content&pi=0&pn=8&rn=1&simid=4208552410%2C469467529&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10075711227021212780&bdtype=0&commodity=&copyright=&cs=3702071441%2C2453033886&di=7523999300557209601&fr=click-pic&fromurl=http%253A%252F%252Fwww.sohu.com%252Fa%252F570545915_121117079&gsm=5a&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fp0.itc.cn%252Fq_70%252Fimages03%252F20220723%252F84138f74045c429db3f3eda50c7ccb1e.jpeg&os=3129628423%2C1245648605&pd=image_content&pi=0&pn=82&rn=1&simid=3702071441%2C2453033886&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
  ],
  'background_tablet': [
    'https://img0.baidu.com/it/u=847171731,919576196&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10677811941978431840&bdtype=0&commodity=&copyright=&cs=601373294%2C3895691461&di=7518804108115968001&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_4255194752778405003&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=c9f450900164a32a&lm=&objurl=https%253A%252F%252Fiknow-pic.cdn.bcebos.com%252F0dd7912397dda1440c84e031a0b7d0a20df486a0&os=382047400%2C2331266751&pd=image_content&pi=0&pn=12&rn=1&simid=601373294%2C3895691461&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10677811941978431840&bdtype=0&commodity=&copyright=&cs=3627692210%2C517642247&di=7523999300557209601&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_5231468075221470460&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=2574839022%2C367326556&isImgSet=&latest=&lid=c9f450900164a32a&lm=&objurl=https%253A%252F%252Fse-feed-bucket.bj.bcebos.com%252Fproduce-record2083275%252F90baab2d60b2e5702b1625cb17a06a51-s0_0.jpg&os=2574839022%2C367326556&pd=image_content&pi=0&pn=8&rn=1&simid=4208552410%2C469467529&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10075711227021212780&bdtype=0&commodity=&copyright=&cs=3702071441%2C2453033886&di=7523999300557209601&fr=click-pic&fromurl=http%253A%252F%252Fwww.sohu.com%252Fa%252F570545915_121117079&gsm=5a&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fp0.itc.cn%252Fq_70%252Fimages03%252F20220723%252F84138f74045c429db3f3eda50c7ccb1e.jpeg&os=3129628423%2C1245648605&pd=image_content&pi=0&pn=82&rn=1&simid=3702071441%2C2453033886&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
  ],
  'background_pc': [
    'https://img0.baidu.com/it/u=847171731,919576196&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10677811941978431840&bdtype=0&commodity=&copyright=&cs=601373294%2C3895691461&di=7518804108115968001&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_4255194752778405003&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=c9f450900164a32a&lm=&objurl=https%253A%252F%252Fiknow-pic.cdn.bcebos.com%252F0dd7912397dda1440c84e031a0b7d0a20df486a0&os=382047400%2C2331266751&pd=image_content&pi=0&pn=12&rn=1&simid=601373294%2C3895691461&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10677811941978431840&bdtype=0&commodity=&copyright=&cs=3627692210%2C517642247&di=7523999300557209601&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_5231468075221470460&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=2574839022%2C367326556&isImgSet=&latest=&lid=c9f450900164a32a&lm=&objurl=https%253A%252F%252Fse-feed-bucket.bj.bcebos.com%252Fproduce-record2083275%252F90baab2d60b2e5702b1625cb17a06a51-s0_0.jpg&os=2574839022%2C367326556&pd=image_content&pi=0&pn=8&rn=1&simid=4208552410%2C469467529&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
    'https://image.baidu.com/search/detail?adpicid=0&b_applid=10075711227021212780&bdtype=0&commodity=&copyright=&cs=3702071441%2C2453033886&di=7523999300557209601&fr=click-pic&fromurl=http%253A%252F%252Fwww.sohu.com%252Fa%252F570545915_121117079&gsm=5a&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fp0.itc.cn%252Fq_70%252Fimages03%252F20220723%252F84138f74045c429db3f3eda50c7ccb1e.jpeg&os=3129628423%2C1245648605&pd=image_content&pi=0&pn=82&rn=1&simid=3702071441%2C2453033886&tn=baiduimagedetail&width=0&word=%E7%99%BE%E5%BA%A6%E5%9B%BE%E7%89%87%20%E9%A3%8E%E6%99%AF&z=',
  ]
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 获取传入的 id 参数
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  // 如果存在 id 参数，选择对应图片组
  let selectedGroup;
  if (id && imageGroups[id]) {
    selectedGroup = imageGroups[id];
  } else {
    // 如果没有指定 id，则随机选择所有图片组中的一张图片
    const allImages = Object.values(imageGroups).flat();
    selectedGroup = allImages;
  }

  // 随机选择图片链接
  const randomImage = selectedGroup[Math.floor(Math.random() * selectedGroup.length)];

  // 获取图片内容
  const imageResponse = await fetch(randomImage, {
    cf: {
      cacheTtl: 3600,  // 缓存 1 小时
      cacheEverything: true
    }
  });  
  const imageContent = await imageResponse.arrayBuffer();

  // 设置 Content-Type
  const imageType = getImageType(randomImage);
  const contentType = imageType ? `image/${imageType}` : 'application/octet-stream';

  // 构建响应
  const headers = {
    'Content-Type': contentType,
    //'Content-Length': imageContent.byteLength,
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'max-age=3600',
    'Access-Control-Allow-Origin': '*'
  };

  return new Response(imageContent, { headers });
}

function getImageType(url) {
  const extension = url.split('.').pop().toLowerCase();
  if (extension === 'jpg' || extension === 'jpeg' || extension === 'JPG') {
    return 'jpeg';
  } else if (extension === 'png') {
    return 'png';
  } else if (extension === 'gif') {
    return 'gif';
  } else {
    return null;
  }
}
