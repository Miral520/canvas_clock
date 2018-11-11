# canvasClock
make a clock by canvas

[DEMO](https://free163dom.github.io/canvasClock/)

看了慕课网 liuyubobobo 讲师的canvas视频，练习写的canvas时钟，并对原来的代码进行了class封装，调用更灵活一些

调用方法：
```js
new setClock({
    container: document.getElementsByClassName('canvas-warp')[0], // 容器
    width: document.getElementsByClassName('canvas-warp')[0].offsetWidth, // 画布宽
    height: document.getElementsByClassName('canvas-warp')[0].offsetHeight, // 画布高
    radius: 8, // 单个球体直径
    normalColor: 'rgb(0,102,153)', // 时钟上球体的颜色
    ballColor: ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"] // 动画球体的颜色，随机设置
});
```
