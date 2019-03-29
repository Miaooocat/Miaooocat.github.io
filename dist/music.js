const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,

    audio: [
      {
        name: 'The Sore Feet Song',
        artist: 'Ally Kerr',
        url: 'http://dl.stream.qqmusic.qq.com/M5000028cFlB2UH4jY.mp3?vkey=6D8EFF7FAFE41C8A24140DBEE218636B12D196DA013396D63E9D42600FB53A4B27763269C4731B0638C7C57CF7AC496C927541C5CEF75B9B&guid=5150825362&fromtag=1',
      },
      {
        name: 'Wonderful U',
        artist: 'AGA',
        url: 'http://www.ytmp3.cn/down/51181.mp3',
      },
      {
        name: 'Riverside',
        artist: 'Agnes Obel',
        url: 'http://dl.stream.qqmusic.qq.com/M500000fYyM44I1LwD.mp3?vkey=150DD59BDEE8DF14A218F5B52639B4523F19720C40726D7F5DD6C515E5E1846AB148414656B2B77D74AADB159AA0FDF8CACA01DF808B7A93&guid=5150825362&fromtag=1',
      },
      {
        name: 'Mad World',
        artist: 'Gary Jules',
        url: 'http://dl.stream.qqmusic.qq.com/M500002XnZdT1nsaY6.mp3?vkey=97284F51398F491B72FD1D61D4EA8C4221659F27B70FDCF231AF8CA0AC7A679D58CE1984D27C09E6EB811372ADE7D4D39F8D50612C059474&guid=5150825362&fromtag=1',
      },
      {
        name: 'Love Warrior',
        artist: '尚雯婕',
        url: 'http://dl.stream.qqmusic.qq.com/M500001tP9453FRikS.mp3?vkey=32C7CF4A99520045D22DF9DDD1C610A475FFCB107B8D43EC3E4C5062077829EDCE9B6AE6A9549CBD0417C277503C1CD4D6A9AA8FC5900DB4&guid=5150825362&fromtag=1',
      },
      {
        name: '青春多是无奈',
        artist: '彭青',
        url: 'http://dl.stream.qqmusic.qq.com/M500000awnFr1Dyp4n.mp3?vkey=40C1724BC3392E6374149E067FBD01994439E854D47C8378B31D2AE06D87B167FBC10ADBCE7E0848467420F3679FFDE9402BE0D14EBE18C9&guid=5150825362&fromtag=1'
      },
      {
        name: '拾荒地图',
        artist: '黄玠',
        url: 'http://dl.stream.qqmusic.qq.com/M500000wooCY25pJWO.mp3?vkey=3C224E8C27C6DB95D52596714AA787CB925664AD2C52FD9A6925F95884154D695B25ABF55E483D857E207B469022F47671E7E2D9D92D016D&guid=5150825362&fromtag=1'
      },
      {
        name: '疯子',
        artist: '许哲佩',
        url: 'http://dl.stream.qqmusic.qq.com/M5000028OhDd0XNOVP.mp3?vkey=4CB6564DF7E1E837A034310A0A2E9F371B18EDEC24C333E286E65D42920F6284DB253A582CA7B75A901B2ABBD7A1147F7EE1239657634B7B&guid=5150825362&fromtag=1'
      },
      {
        name: 'Next to You',
        artist: 'Ken Arai',
        url: 'http://dl.stream.qqmusic.qq.com/M5000002Wgir0Ozyjf.mp3?vkey=633423CAD856B53464F6A9F2CC86A5AF54B581FDED8793EC24C5A39338F7F788A7550094CDCB03A884A90944B72CAB7D3F6D9F625A63712B&guid=5150825362&fromtag=1'
      },
      {
        name: 'Hacking to the Gate',
        artist: 'いとうかなこ伊藤加奈子',
        url: 'http://dl.stream.qqmusic.qq.com/M5000040S0Hv4beUZV.mp3?vkey=FAC69C9E7FE26ED8EF8D8956E669B31BF1C6F97DFA3A1363E6AC32FC03918C42DF790CDD4A8989213B44E19109D8A9ECBAD4BB556906AB27&guid=5150825362&fromtag=1'
      },
      {
        name: '最后的旅行',
        artist: 'Rainton桐',
        url: 'http://dl.stream.qqmusic.qq.com/M500002DZiEN0NUg2l.mp3?vkey=7FDA9E8755729B208B70C8CE6381E42806550F8D5F02803F9E89E6E3A98EEC79819BE4E16305D45FD11429C3151EED379B22994D6087CFA0&guid=5150825362&fromtag=1'
      },
      {
        name: '她',
        artist: '朱婧汐JING',
        url: 'http://dl.stream.qqmusic.qq.com/M500004Q6cvj19z0gi.mp3?vkey=8F898866AE7010AF9B1BF640AD39E50D6611B7586B145E9E230371AAC618AFB5476E03EDB775B205FA80A03699D1E1723B8263DB94BCC7D9&guid=5150825362&fromtag=1'
      },
      {
        name: '倾尽天下',
        artist: '河图',
        url: '//m128.xiami.net/934/68934/361550/1769292418_1078836_l.mp3?auth_key=1554433200-0-0-1b5eb8bc99b6b2e43d8c22cdd1cdb791'
      },
      {
        name: '匆匆那年',
        artist: '王菲',
        url: 'http://dl.stream.qqmusic.qq.com/M500003KExF60zMMGK.mp3?vkey=3A65E95D665E6B3C4B7E8C7DF1F117137A48350BA62D8876ACF73E4FCA9AE712CFDDD758C4EE1C78B15726C383F596FA8BBB89E414BEAF76&guid=5150825362&fromtag=1'
      },
      {
        name: '笑忘书',
        artist: '王菲',
        url: 'http://dl.stream.qqmusic.qq.com/M500001Zcsn44dL3xD.mp3?vkey=3A65E95D665E6B3C4B7E8C7DF1F117137A48350BA62D8876ACF73E4FCA9AE712CFDDD758C4EE1C78B15726C383F596FA8BBB89E414BEAF76&guid=5150825362&fromtag=1'
      },
      {
        name: 'I will survive',
        artist: 'Gloria Gaynor',
        url: '//m128.xiami.net/1/258/23258/340451/1769036182_663177_l.mp3?auth_key=1554433200-0-0-3c49851d8c1338ec3aab318aa4da4f06'
      },

    ]
});
