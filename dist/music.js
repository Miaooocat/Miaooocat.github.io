const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: 'Wonderful U',
        artist: 'AGA',
        url: 'http://www.ytmp3.cn/down/51181.mp3',
        cover: 'http://p1.music.126.net/Blb_Gi0AJTWIEBLr189F4A==/18791753232142320.jpg?param=130y130',
      },
      {
        name: 'Riverside',
        artist: 'Agnes Obel',
        url: 'http://www.ytmp3.cn/down/49639.mp3',
        cover: 'http://m10.music.126.net/20190329125116/f0d14a8511975823d0cbb5cc0f5caa1d/ymusic/6b9d/72ed/bb9f/ea7622744213d67d9bade159644b42d7.mp3',
      }
    ]
});