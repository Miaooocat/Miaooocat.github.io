const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    mutex: true,
    preload: 'auto',

    audio: [
      {
        name: 'La La La',
        artist: 'Jasmine Thompson',
        url: 'http://dl.stream.qqmusic.qq.com/M500001nEWxG0mpfMf.mp3?vkey=01A5013E812778150A4BCEED40800DAEF10A6647D8377369EDFF86F9DFB5209A2ED2134DB15E359D396F96D80C6ED23054929C68A96D6654&guid=5150825362&fromtag=1',
      },
      {
        name: 'Why?',
        artist: 'Annekei',
        url: '//m128.xiami.net/707/56707/339537/1769024664_651784_l.mp3?auth_key=1554606000-0-0-86f345a4c1f313ad5f05d677dc14ce2d',
      },
      {
        name: 'How You Remind Me',
        artist: 'Avril Lavigne',
        url: 'http://dl.stream.qqmusic.qq.com/M500003e4je3189R22.mp3?vkey=3E6A744BAB06E8357BF54427D9F7026F16BCD56C7B405854A720E44DC76F5E2AFDF9934AC232CDE3FE29F8323DDDB74BF31AE11623036DB3&guid=5150825362&fromtag=1',
      },
      {
        name: 'I Dreamed a Dream',
        artist: 'Anne Hathaway',
        url: 'http://dl.stream.qqmusic.qq.com/M500002EUPCO3m9WAM.mp3?vkey=550597844FA2AF1091051558DF7A4A4A8CC8B24B556D2D78480E363D73D00DD5077498D189033C96281F11F134DA5E6394C43291E10040C6&guid=5150825362&fromtag=1',
      },
      {
        name: 'City of Stars',
        artist: 'Ryan Gosling,Emma Stone',
        url: 'http://dl.stream.qqmusic.qq.com/M500000T6ukh1Ja6Ze.mp3?vkey=F9AE94347CF052713D8981E8EB9AB350E3C1C3F0B5B687465B15E7BEAAC3B5B6D2F81BF51CF404210D595CA63DFD7A6BFF0D3410F6FDE75D&guid=5150825362&fromtag=1',
      },
      {
        name: 'When You Sleep',
        artist: 'Mary Lambert',
        url: 'http://dl.stream.qqmusic.qq.com/M500001ijduF0ajuSr.mp3?vkey=F1BE5B058A87BB42844A289157EFD8A81AEFC3FBFD22949419325B382A04278A4AEEF94DAD22D90C5719991237F1896453E070B78E5FDC7C&guid=5150825362&fromtag=1',
      },
      {
        name: 'When You Sleep',
        artist: 'Mary Lambert',
        url: 'http://dl.stream.qqmusic.qq.com/M500001ijduF0ajuSr.mp3?vkey=F1BE5B058A87BB42844A289157EFD8A81AEFC3FBFD22949419325B382A04278A4AEEF94DAD22D90C5719991237F1896453E070B78E5FDC7C&guid=5150825362&fromtag=1',
      },
      {
        name: '有时候',
        artist: '张靓颖',
        url: 'http://dl.stream.qqmusic.qq.com/M500001uYXyd3ZfsKc.mp3?vkey=599BC207B732686979213A528453D5E3C42953C99C024E6AF28E9EACA320C39D2736AD82AA2590A27664BAC94DC96067F91ACFE975198441&guid=5150825362&fromtag=1',
      },
      {
        name: '独角戏',
        artist: '许茹芸',
        url: 'http://dl.stream.qqmusic.qq.com/M500001R67eW4YBJXa.mp3?vkey=F8735341B09DBB27650FA9035FF887715314D48C2456B9C7712C5AB894FEE6644E7593F1F2F8C62DF32001BAB6578A4F9DDF977F7E78FB3F&guid=5150825362&fromtag=1',
      },
      {
        name: '安徒生的事',
        artist: '河图',
        url: 'http://dl.stream.qqmusic.qq.com/M500000723FW3P0hm4.mp3?vkey=3499ACDF36CD06FA4D21D3E1C2F34DCF18230F7CD612F5151E79FA6B56B8EA45B80EF7822652B41481D79B9199FED1ECDFBD6C3DEFFE7637&guid=5150825362&fromtag=1',
      },
      {
        name: 'I See You',
        artist: 'Leona Lewis',
        url: 'http://dl.stream.qqmusic.qq.com/M500002961UQ3Hw31W.mp3?vkey=793B154C93F38BC7AD389AB439BFDDC639FFC8D0DB48AF6303D4E825EE94EF9A856C43693F8107E5BF7AC02EB861FAC1A4912604E5A0A929&guid=5150825362&fromtag=1',
      },
      {
        name: '玛奇朵漂浮',
        artist: '王雁盟',
        url: 'http://dl.stream.qqmusic.qq.com/M500000B8uZx1JtgtI.mp3?vkey=B3E7862F41E487EE1E53784BDB2611F0463436A9687129F9EA61B159AD82E1E204B9757BE6B0E9D0F52E6D7F7D00E39A218BC833293D7873&guid=5150825362&fromtag=1',
      },
      {
        name: 'Just One Last Dance',
        artist: 'Sarah Connor,Marc Terenzi',
        url: 'http://dl.stream.qqmusic.qq.com/M5000016BvLx14hyin.mp3?vkey=2449EB8DF305AD68C1AB7E6B0BC62B367A1C9BE06809C01989AABBC062A191F59A49B11CADAE6497B50B8AFA280CA858B3BC1729E610E8C8&guid=5150825362&fromtag=1',
      },
      {
        name: 'Ross Tallanma',
        artist: 'Lubov',
        url: 'http://dl.stream.qqmusic.qq.com/M500001UIxPX0r4jKY.mp3?vkey=BCCFA919E8EF2B3310464531CCF8DB2E45E8E99C8C1749F043489B17F84040A30DB6EA3D61BAADC36CCB40285AA8332F87E603DD40C3CC43&guid=5150825362&fromtag=1',
      },
      {
        name: 'Every Time',
        artist: 'Sweetbox',
        url: 'http://dl.stream.qqmusic.qq.com/M500001y31Vh3vboXm.mp3?vkey=C53365C07A1237764E6195AAA5E8E9847522FAC9DF333491BF30361625AFCEE68759A1C4F4E0EAA8D4A220E4187A23A9B2F9AA6FEE40EF67&guid=5150825362&fromtag=1',
      },
      {
        name: 'Girl On Fire',
        artist: 'Alicia Keys',
        url: 'http://dl.stream.qqmusic.qq.com/M500000PX2ND32mOsL.mp3?vkey=609411CACFD5BC6CECA2F12F98C52DDD2E4FDC981E375DBEFB81BD142F34F6486C1BF71462B0043041165A09CFF273B14DDA3DB412A045D1&guid=5150825362&fromtag=1',
      },
      {
        name: 'You and Me',
        artist: 'Rosie Thomas',
        url: 'http://dl.stream.qqmusic.qq.com/M5000027hUa20RAdUs.mp3?vkey=20A1A5F1886F78FA6FC4AC43C1D8AF96340833646E9CDCCD945595782153BC22B588BE731A8211382C3FA2B33B168587D4AB888CAAC6D4EC&guid=5150825362&fromtag=1',
      },
      {
        name: 'I m Sorry',
        artist: 'Sibel',
        url: 'http://dl.stream.qqmusic.qq.com/M500001dnG5U0JOXVW.mp3?vkey=95F1B882B160F46D4CC0CDDCBBAD280F81ED2E6327CF0D14B55D4C288E22D729DC8DF0B29588E5A95F369A49C5D5C5CCB079730E5BE9BB34&guid=5150825362&fromtag=1',
      },
      {
        name: 'A Story In Macau',
        artist: '金培达',
        url: 'http://dl.stream.qqmusic.qq.com/M5000026bbAu0mwN4B.mp3?vkey=04DECB94986BEA790369E5B7FF7303C15035827EB6CC9C1F678EF729A674338B8445593C3D22FC96AD6AFEC0F5E89451DE86A9FFD64B6FD9&guid=5150825362&fromtag=1',
      },
      {
        name: '假如爱有天意',
        artist: '李健',
        url: 'http://dl.stream.qqmusic.qq.com/M500003VOsyr0jexdu.mp3?vkey=66772DCF1FC6071271BB60A0B189E9ADD8B16DFD262EF4FD015903ED103CE9F6344DE371BBFAED72F6024FD09F1867A8A7C39252BE97AE7C&guid=5150825362&fromtag=1',
      },
      {
        name: 'With A Love Like You',
        artist: 'Sweetbox',
        url: 'http://dl.stream.qqmusic.qq.com/M500003PcWf24LHHAn.mp3?vkey=7B6637B03A50979075D3CFD2D5A358EE783A443D8A8BEF9FF5F3E174DE8F65292B13D6468DADF070AFDF09F87BD93CDA9CC54184787A116F&guid=5150825362&fromtag=1',
      },
      {
        name: 'Perfection',
        artist: 'BlackSwan',
        url: 'http://dl.stream.qqmusic.qq.com/M5000026J3k428ehEQ.mp3?vkey=72879D352584F80E43D7648A3C14F1629E3C00EC12B5462F634D449C52A4B4523CC51A061033FA014E0AAAB129F48536DCB55665EC0B1626&guid=5150825362&fromtag=1',
      },
      {
        name: 'Outlaws Of Love',
        artist: 'Adam Lambert',
        url: 'http://dl.stream.qqmusic.qq.com/M500002pvjJK01kqOl.mp3?vkey=EA84797D38FB4FC82784B96E79E727941C8A70B04B3CBEE90447670DB624A6ECDFF2C7BF630478053778DF5E2B830C28D1B9E5C50A1D40CF&guid=5150825362&fromtag=1',
      },
      {
        name: '放生',
        artist: '范逸臣',
        url: 'http://dl.stream.qqmusic.qq.com/M500002rZUmU1jolly.mp3?vkey=E7FB90BB65C80175D3D2ED0AD3A9DFA4D71AC5D18B4675344E869E32F0F3BA83742C0209A2B8A4125C7D16E59D216CFF5418636500F2545E&guid=5150825362&fromtag=1',
      },
      {
        name: '相爱多年',
        artist: '许志安,韩红',
        url: 'http://dl.stream.qqmusic.qq.com/M500003gak8B2TKhg6.mp3?vkey=C7CD30873C364738C57216F54B2AB1841F7CB1AB4358E6BBF57A373122DF2A6BA0C5FA3187C594CC35984FE376BB651E98519ED067CD99DD&guid=5150825362&fromtag=1',
      },
      {
        name: 'Scarborough Fair',
        artist: 'Moriah Kostamo',
        url: 'http://dl.stream.qqmusic.qq.com/M500001uPCta2NtrDi.mp3?vkey=98A114F3294E6F05B20C17EC0ADE1C1BC708D715D598F669E73331FE43CD94C4C32CDF5AC41B08287F2182F70CA1E49FB52CFF8E0D66C295&guid=5150825362&fromtag=1',
      },
      {
        name: '庭院',
        artist: '樱桃帮',
        url: '//m128.xiami.net/197/7197/32669/389314_1526350102664.mp3?auth_key=1554606000-0-0-28fe8af91770a7978e8e4d3b80d7f4ee',
      },
      {
        name: 'Lets Start From Here',
        artist: '王若琳',
        url: 'http://dl.stream.qqmusic.qq.com/M500001q1D3V41S3Ko.mp3?vkey=FB854005C0C9E74ABEC272D686007E0FE68F8FE8E78FA2E0DA1DA6432C9761612000D0E441E594A6C3C66DD9E1019A4A2967BA58B91BA9AE&guid=5150825362&fromtag=1',
      },
      {
        name: 'Burning',
        artist: 'Maria Arredondo',
        url: '//m128.xiami.net/646/23646/169527/2093450_3770606_l.mp3?auth_key=1554606000-0-0-ddf3331917106885dbf063e10e1f5269',
      },
      {
        name: 'Cross Every River',
        artist: 'Maria Arredondo',
        url: '//m128.xiami.net/646/23646/169527/2093458_3770614_l.mp3?auth_key=1554606000-0-0-437d071ce2fd6bb77186f0dee7a1d4aa',
      },
      {
        name: 'Fondu au Noir',
        artist: 'Cœur de pirate',
        url: '//m128.xiami.net/1/549/57549/314790/3491646_303221_l.mp3?auth_key=1554606000-0-0-00c93dfb19fe7023feff4bc2d8ea23f8',
      },
      {
        name: 'Unforgivable Sinner',
        artist: 'Lene Marlin',
        url: '//m128.xiami.net/256/23256/12756/156737_3393000_l.mp3?auth_key=1554606000-0-0-8d28440204c90e612334b77a11a2d044',
      },
      {
        name: '4th of July',
        artist: 'Joanna',
        url: '//m128.xiami.net/1/954/56954/312449/3463095_398521_l.mp3?auth_key=1554606000-0-0-156f0affb5255a4475845a3d36292b1d',
      },
      {
        name: 'Let Me In',
        artist: 'Zee Avi',
        url: '//m128.xiami.net/1/808/60808/329520/3673880_3508592_l.mp3?auth_key=1554606000-0-0-f9e9e93fe5a7d4da1a1a6c21725940a1',
      },
      {
        name: 'Sleeping Sun',
        artist: 'Nightwish',
        url: '//m128.xiami.net/433/16433/145461/1481026_1516088919604.mp3?auth_key=1554606000-0-0-df0c3099637ecc9454d948508cc07175',
      },
      {
        name: '火柴天堂',
        artist: '曾沛慈',
        url: '//m128.xiami.net/918/104918/168423/2078779_2564741_l.mp3?auth_key=1554606000-0-0-c5d1e43a314351d050ec568cae0651dd',
      },
      {
        name: '十二幻梦曲',
        artist: '양방언 (梁邦彦)',
        url: 'http://dl.stream.qqmusic.qq.com/M500004AykD82IEjgF.mp3?vkey=E2A7F8890564E97D681D6FC82E297D8C8D68E274828F3E99D03AC8A36B70ABF362A7AB78D3CFA0F86525F80092455DFC862A37F9E818A196&guid=5150825362&fromtag=1',
      },
      {
        name: '旅行中忘记',
        artist: '袁娅维',
        url: 'http://dl.stream.qqmusic.qq.com/M5000020JWYR2MwIRb.mp3?vkey=ED0A4415F5872C35630F44510101827C31102D16CDB551E3A8D3E3A101AA5D5878F2231903B88E433332711BF7A6A355EF975B9D0AB29CA1&guid=5150825362&fromtag=1',
      },
      {
        name: 'Solveig’s song',
        artist: 'meav',
        url: 'http://dl.stream.qqmusic.qq.com/M5000015UE122KA3EO.mp3?vkey=D7680576AFED11F70DF65C9A078D631572148B7E04403F19983425AEF3F0CA9D9BD17DBEADD2DE5B2DA379515D1EAF44D5C6B28B01BE850D&guid=5150825362&fromtag=1',
      },
      {
        name: 'Your Song',
        artist: 'Rita Ora',
        url: 'http://dl.stream.qqmusic.qq.com/M500001g8wpp4Ei6wU.mp3?vkey=3B780D552699A3F134B8DF84E8DBAE1E2DF420120F8BC5D20CD26F6449AF70F15DB275941C87F506261AB5FD195F9DBA728A7CD29EF2E65F&guid=5150825362&fromtag=1',
      },
      {
        name: '关于她',
        artist: '范世琪',
        url: 'http://m10.music.126.net/20190331075425/1a98abc05754333f66340caf1f33b758/ymusic/78a4/1bdc/0fc7/0ecaad6315d5c4355c8e45c191656bcb.mp3',
      },
      {
        name: 'See You Again',
        artist: 'Wiz Khalifa,Charlie Puth',
        url: 'http://dl.stream.qqmusic.qq.com/M500004RVNwY1KGhBM.mp3?vkey=B38C663F3F78608692B25AC2C6A5B7FED43971B0BA7A89BD05942FDD17777FF725C203B633B316C4DBB027E2D7DB5ACBCF18F4E395525C7F&guid=5150825362&fromtag=1',
      },
      {
        name: 'Lemon Tree',
        artist: '王若琳',
        url: 'http://dl.stream.qqmusic.qq.com/M5000010e6NZ0BTVQe.mp3?vkey=DC2508E3032EA9EC8D1E2050901D857930300002F005707029016EAE44AEC5F1937FDB43E7B949B0828DFC063D9F69859E06747262A844AA&guid=5150825362&fromtag=1',
      },
      {
        name: 'Ring My Bells',
        artist: 'Enrique Iglesias',
        url: 'http://dl.stream.qqmusic.qq.com/M500002Aa6p30yS1Qc.mp3?vkey=D41F178299E426410BEBCC557206DD7A32BD21968715F484B1F69B15E026EBB786C0C7E48C02BC4EB2F02F298EE5F660095EB104914130AA&guid=5150825362&fromtag=1',
      },
      {
        name: 'Walk Away',
        artist: 'Dia Frampton',
        url: 'http://dl.stream.qqmusic.qq.com/M500000XrUoG0CHe9X.mp3?vkey=928F0988D724497040B617867D32DCAB71788DC631235C937619C3A30FE0E1C2CD1EE4F8B31E1B9875D8D1D78DFA80923722A971B6E140E6&guid=5150825362&fromtag=1',
      },
      {
        name: 'Five Hundred Miles',
        artist: 'Justin Timberlake,Carey Mulligan,Stark Sands',
        url: 'http://dl.stream.qqmusic.qq.com/M50000262GDA2fW2H3.mp3?vkey=53F0B6D57B37ED584D84B5006015F0B66FBC51724F5E9A49BD6BE8BECAB55D695AAB8BAB2296273F004EACFB29D43011BA59AC1BE42DEF82&guid=5150825362&fromtag=1',
      },
      {
        name: 'Exodus',
        artist: 'Maksim Mrvica',
        url: 'http://dl.stream.qqmusic.qq.com/M5000049c1Mn0H1ybj.mp3?vkey=5041966454ED31C44632C4FDE4B3FF0500DEFB2D44508A2FE51D5A4028BDBF2C9F888AAF640342C3B08A17A95B4DB380AD7094776971D02F&guid=5150825362&fromtag=1',
      },
      {
        name: 'Croatian Rhapsody',
        artist: 'Maksim Mrvica',
        url: 'http://dl.stream.qqmusic.qq.com/M5000028sOPS032Gcp.mp3?vkey=73F449D3610425C8BAA88AD79CD436DD2ED6DABB2605F2E1B044C6A4CB4804BB938C593258033610B1558C660E41CBC20B598775A94683B3&guid=5150825362&fromtag=1',
      },
      {
        name: '走在冷风中',
        artist: '刘思涵',
        url: 'http://dl.stream.qqmusic.qq.com/M500000IzhQu2V83Zc.mp3?vkey=63E8A410712AA1120DC175B5FF5793E46591087217D43FBEDD30725FA68E9AF83D25DF4401BB900FD5018D8372D7A3E137788C661AED2373&guid=5150825362&fromtag=1',
      },
      {
        name: '我要你',
        artist: '任素汐',
        url: 'http://dl.stream.qqmusic.qq.com/M500002XPp4023M50E.mp3?vkey=63A5FA67FB38ACC9B53206DA3D7C9D847DBF60CDE0C076DA11B2B93479D1739F25060E438DD7D6D2491BA0846D493E8A1C6BCB09127A9291&guid=5150825362&fromtag=1',
      },
      {
        name: '易燃易爆炸',
        artist: '陈粒',
        url: 'http://dl.stream.qqmusic.qq.com/M50000394LZb2KXqak.mp3?vkey=ECC1227D73EA8C6C579DA583F0F9F987FDC7F70C132659C84F8DC8726CB4CD106EB8D74D7DA976FB3EC4EEA76D07977A6D12FC82F0216A9C&guid=5150825362&fromtag=1',
      },
      {
        name: '胡桃夹子',
        artist: '张碧晨',
        url: 'http://dl.stream.qqmusic.qq.com/M500004RZr471ff4ES.mp3?vkey=472F37ABCB2C976CBD3D68C0533A1E0C4107144FFB3CAF377FA493915BAE376F2310EB5C5C06660297FE2AE40A4A091F9A64FE1AF9874E61&guid=5150825362&fromtag=1',
      },
      {
        name: '男孩',
        artist: '刘郡格',
        url: 'http://dl.stream.qqmusic.qq.com/M5000034wuVV17UYFP.mp3?vkey=89727B50263BCD81C8E9D3810F313077C20157AB10966F519DB9DBACA7235BB15C4A7204B500AEDF63FFB8A2414ED653D8D27BE3C987A7D6&guid=5150825362&fromtag=1',
      },
      {
        name: '红尘客栈',
        artist: '周杰伦',
        url: 'http://dl.stream.qqmusic.qq.com/M500003xv4w313tZHV.mp3?vkey=D84AAE570211F7D372D7A5F48F011BBAD051C95F4DF1109F53DCDB55833A25C49C5560AF6C6887793D13238C9F91815A7783FF4DB91DAF21&guid=5150825362&fromtag=1',
      },
      {
        name: '夜的第七章',
        artist: '宿涵',
        url: 'http://dl.stream.qqmusic.qq.com/M500002WU08z3BwHZh.mp3?vkey=A33FD8A4BD7A7FC3C7D818CB9DEE1AD1F7291109092CF9090F410BBA51BB61D9497115B261EC30AD06BFBCE80A792CD8967B5735D08EB89B&guid=5150825362&fromtag=1',
      },
      {
        name: '我的梦',
        artist: '张靓颖',
        url: 'http://dl.stream.qqmusic.qq.com/M500003FIqDQ0xyaGF.mp3?vkey=D4FB536F836A62DD54B87FEC54BD0626AA50DBF96240ECFC9A051548C2E4E1B03C4DE9AF2CDD11F16D69EE937BC585DE08CBE3E72D1C0679&guid=5150825362&fromtag=1',
      },
      {
        name: 'Do You Hear the People Sing?',
        artist: 'Aaron Tveit,Eddie Redmayne,Students,Les Misérables Cast',
        url: 'http://dl.stream.qqmusic.qq.com/M500004dDbKq4dml4F.mp3?vkey=DD55BD3F0D4F2DA3E8F1A6099A5D44C2BEB6FEA20D1AE386ADFF4B8E218C5BCD8AA54E116F6CF0583DC06CD49F92A608DDCAEA5C9ED53B55&guid=5150825362&fromtag=1',
      },
      {
        name: 'Victory',
        artist: 'Two Steps From Hell',
        url: 'http://dl.stream.qqmusic.qq.com/M500001xfrlS0fYS3z.mp3?vkey=43DCAC876991BB76733B70EBC977BED9727DAEA2F2C407BF3A462AEDA625A78000535D53A6FEA9F2F9C92BFFD2AF208237D9831C4C793CDD&guid=5150825362&fromtag=1',
      },
      {
        name: 'Faded',
        artist: 'Alan Walker,Iselin Solheim',
        url: 'http://dl.stream.qqmusic.qq.com/M500002NkERn2LNVI4.mp3?vkey=C0D006CBA7A38A5B8BC8C74C47449E88B200E40D8451D3C3366523ECE58CFD7ECB64D9E2B7412106A868BED06337040FBCC77D78054F1F15&guid=5150825362&fromtag=1',
      },
      {
        name: '野子',
        artist: '苏运莹',
        url: 'http://dl.stream.qqmusic.qq.com/M500003cdrZy1hqbdw.mp3?vkey=A0585E674D8DF78B7C97145E8C290AB98B464F93937CC874738CE8FF9702096FB28D857E6498C73719E34D6FBF6CB4E8332FF6E254B0A0B1&guid=5150825362&fromtag=1',
      },
      {
        name: 'Life For Rent',
        artist: 'Dido',
        url: 'http://dl.stream.qqmusic.qq.com/M500002OHorr3CbHV4.mp3?vkey=8A1345EF13A4FE07B7607FA3195AF55C3746413AAB8B6DD67C74005C5D67A3EAA56B6458FA9A667314D8F644738A74B52384BE2809D16A73&guid=5150825362&fromtag=1',
      },
      {
        name: '贝加尔湖畔',
        artist: '李健',
        url: 'http://dl.stream.qqmusic.qq.com/M500000PLHrM2luXiz.mp3?vkey=9F1AFC66FF9AB6B59B99E211F13F7824C63D93D5D35EFD8BA42E96B9776BF7C1A6E8EEEE058913B95ED0ED0DF4FC3BD04EB317E4B3813EC6&guid=5150825362&fromtag=1',
      },
      {
        name: '苏州河',
        artist: '薛凯琪',
        url: 'http://dl.stream.qqmusic.qq.com/M500004Sjk0D0iBq5b.mp3?vkey=0A407165C76CA30863A9F17402407E2BD0DD6A3ADD1671FF6E6BE7DADC716CA7145A7B6146C123A71C080BE4D495C7B3B2184EFAD51214BF&guid=5150825362&fromtag=1',
      },
      {
        name: '半城烟沙',
        artist: '许嵩',
        url: 'http://dl.stream.qqmusic.qq.com/M500004DGJ3c0Q4AoC.mp3?vkey=BD1E5EDAB90EDA5AB1146B7150FB23C898B4E30786D550C30D4514D2D9164935328CCBA42E728163D52CCC2424FFEA86B6A1F97253D06B86&guid=5150825362&fromtag=1',
      },
      {
        name: 'Dream It Possible',
        artist: 'Delacey',
        url: '//m128.xiami.net/722/2099988722/2100192128/1774704956_1543415411501.mp3?auth_key=1554606000-0-0-f2884350c79bd1aeb04f6083f87f68c6',
      },
      {
        name: '走马',
        artist: '陈粒',
        url: '//m128.xiami.net/809/106166809/706619535/1773384292_15822212_l.mp3?auth_key=1554606000-0-0-238473e75b33ae728f6ec7a31ee8a928',
      },
      {
        name: '说了再见',
        artist: '周杰伦',
        url: 'http://dl.stream.qqmusic.qq.com/M50000265Jxe3JzXOJ.mp3?vkey=AD766A927CB622996FD9A819571C86F745A652D279EB7B527AB1C885E544354754E3E270944246E2E2C37C5EC2544DE34720F7B46C5DAA06&guid=5150825362&fromtag=1',
      },
      {
        name: '涙の物語',
        artist: '有里知花',
        url: '//m128.xiami.net/99/7099/31949/372021_15094911_l.mp3?auth_key=1554606000-0-0-54a8571846d8c6f81fb6562bfaeb7883',
      },
      {
        name: '花',
        artist: '萧潇',
        url: '//m128.xiami.net/282/2282/12267/150824_16850302_l.mp3?auth_key=1554606000-0-0-5dd799ddcd78b884316b1353bf5a1a6c',
      },
      {
        name: '香格里拉',
        artist: '魏如萱',
        url: '//m128.xiami.net/169/7169/167449/2051584_40729_l.mp3?auth_key=1554606000-0-0-3a2d60c0cf4d2d70e6b72e0ead9dd303',
      },
      {
        name: '折子戏',
        artist: '黄阅',
        url: '//m128.xiami.net/410/410/32448/385864_17870_l.mp3?auth_key=1554606000-0-0-766066522bf89c5ccf19bd91f57f13b4',
      },
      {
        name: '带我往前走',
        artist: '蛤小蟆',
        url: 'http://dl.stream.qqmusic.qq.com/M500000v9Y2y3xIlf6.mp3?vkey=E59DDC8452B9120A4EC21C6257DE8C1E929F9FDCF2106ADF9F5787908BB150D7921242EB91C36E19527FA5DFDBEC7C4A18AA32412008426E&guid=5150825362&fromtag=1',
      },
      {
        name: 'The Life of a Pirate',
        artist: 'Cady Groves',
        url: 'http://dl.stream.qqmusic.qq.com/M500001RjwzN00unVv.mp3?vkey=38C3685E0EA9B569D93E916CF9492197FA87A94F0F90E7527399F305EDD32972B71D9E4B8F0B45E8BA66B4B03A041B63043E4799DDEE6679&guid=5150825362&fromtag=1',
      },
      {
        name: 'We Are Stars',
        artist: 'Alyssa Reid',
        url: 'http://dl.stream.qqmusic.qq.com/M500003Nf2Ny0VSOTl.mp3?vkey=44EB9DFB82772C9AE651997E9D39EBD8B0C44D9BAC968DBBFF3C83B71FE39D4EE662B1FDE24253C0197B08829ACA68CF6D1BFFEF2A8E3EBD&guid=5150825362&fromtag=1',
      },
      {
        name: '你是我的风景',
        artist: '何洁',
        url: 'http://dl.stream.qqmusic.qq.com/M500002mDPmy2IsAxe.mp3?vkey=61DB6B37D65F0CD923A44E80C56E5D8018E67C4ADEDE84F3FDB1F363410E0CECCC5623167FB68031936A9F38E2604F4FCC1A92183B5D0759&guid=5150825362&fromtag=1',
      },
      {
        name: 'Loving Strangers',
        artist: 'Russian Red',
        url: 'http://dl.stream.qqmusic.qq.com/M500003JsDGd4OJykr.mp3?vkey=D60952ED1EF6F4EE2558C42624C3E83CF6FA87833C05E54390F42BBB71402B8737654DBF33CC2084C35A114F60A898E11E4100A683CD9E3E&guid=5150825362&fromtag=1',
      },
      {
        name: '迷城',
        artist: '朱婧汐JING',
        url: 'http://dl.stream.qqmusic.qq.com/M500001UvE7z3lTx7S.mp3?vkey=1F726709660D54B11F6B71FD874EDC7AFFE24CCA1DB6C2E0C9A2626DE6F2D2732A6A587B49073F01DCE3A06F070E304B4AF4731E4D1424AD&guid=5150825362&fromtag=1',
      },
      {
        name: 'Everywhere I Go',
        artist: 'Katharine McPhee',
        url: 'http://dl.stream.qqmusic.qq.com/M500003B6dp32v2qpr.mp3?vkey=B6E0DF7DD57C32CC42B0F4C03533EB126318A791C2E00785F9604F76D05B89F92FB78A1719933EA2A7D6270D106BB8E487D2D6425A141E4E&guid=5150825362&fromtag=1',
      },
      {
        name: 'ポシェットのおうた',
        artist: '青葉市子 (あおばいちこ)',
        url: 'http://dl.stream.qqmusic.qq.com/M500001iXIRV3KkjA1.mp3?vkey=A473551B61982B94DBE2675179B53DD1C6EBB83194DE9B0D717750EE8AA35DE100F89D75FA49E42B900EBF5E5ADBA4484685CC6CC0FE08C3&guid=5150825362&fromtag=1',
      },
      {
        name: 'Greater Than I',
        artist: 'Kate Walsh',
        url: 'http://dl.stream.qqmusic.qq.com/M500001iSoKT24u5tx.mp3?vkey=618FAEEAD4363116D7B16F5C4A4D58C89C499DA07EBED0B76C95A2EAE52A6C43F0BE9F026DA4860127107D88F08EA05D26EC6C1CF66B2BD9&guid=5150825362&fromtag=1',
      },
      {
        name: 'Luv Letter',
        artist: 'DJ OKAWARI',
        url: 'http://dl.stream.qqmusic.qq.com/M5000046A7XE15cqaC.mp3?vkey=480662C33992665AD5EA78B5F3F4EDB0017935CA70AC9D143C8A71EF3446DF1CDB7CEF02A93DBE8C1039E2130CED4BE3D744E9E3B6A5DBF4&guid=5150825362&fromtag=1',
      },
      {
        name: '夜游歌神',
        artist: '郭一凡',
        url: 'http://dl.stream.qqmusic.qq.com/M500004aFL7A4YL1Cf.mp3?vkey=3B43883D6261DAE205E1B44B8861385975CA5CCC6C79BD95E31661B5BBD23B2BB22A51D3F5C757C384F165B1997DA57935CF29735F77E83D&guid=5150825362&fromtag=1',
      },
      {
        name: 'First Stone',
        artist: 'Adele Morgan',
        url: 'http://dl.stream.qqmusic.qq.com/M500001rkcUW1aIueg.mp3?vkey=CE8B587F9D4F4AA0B45727401B3FA3560965257FBA06BE9F27ED21211D36AE99CB5F94AC9D569892A4136309C3AE90064FC6F284484AFA69&guid=5150825362&fromtag=1',
      },
      {
        name: '翔の悲しみ',
        artist: 'Cécile Corbel',
        url: 'http://dl.stream.qqmusic.qq.com/M5000047NRBi16dpLZ.mp3?vkey=C877FEB00658A250A237AC1FC3116AFCF5643635CEBF12A2AF6CD05D9CA8A1D2B59F1585C9ECF61B00E39033018899B60EA9DB9A46C7FD56&guid=5150825362&fromtag=1',
      },
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
      {
        name: '寂寞烟火',
        artist: '朱婧汐JING',
        url: '//m128.xiami.net/567/2567/9883829/1773500428_15756954_l.mp3?auth_key=1554606000-0-0-508ab40db819460fd61840909b2af732',
      },
      {
        name: '为龙',
        artist: '河图',
        url: '//m128.xiami.net/934/68934/361550/1769292419_1078837_l.mp3?auth_key=1554606000-0-0-1d54e1c39ebffe46efe15afbb6b1c756',
      },
      {
        name: '一个人的北京',
        artist: '好妹妹',
        url: '//m128.xiami.net/25/98025/961418276/1771862041_10042608_l.mp3?auth_key=1554606000-0-0-10635d3f798bce9e33944e4bdecfa1f2',
      },
      {
        name: '岁月神偷',
        artist: '金玟岐',
        url: '//m128.xiami.net/77/593402077/523792755/1774078768_1512413696833.mp3?auth_key=1554606000-0-0-449eae9f2a8eb00650905b84faabd50d',
      },
      {
        name: 'Young And Beautiful',
        artist: 'Lana Del Rey',
        url: 'http://dl.stream.qqmusic.qq.com/M500000jXGDn1lSsNS.mp3?vkey=48C5EE472AFBBF7CC8942CF2AEE4243F78188BA6D6C7DB90ED77ACD6EC36AEC2B1E35A419837CD9B741A147EDF8A41E571F8BAECFE4A5E53&guid=5150825362&fromtag=1',
      },
      {
        name: '百鬼夜行抄',
        artist: '森英治 (もり ひではる)',
        url: 'http://dl.stream.qqmusic.qq.com/M500002VnM6j0igiMv.mp3?vkey=E4E0A76840614B091D9BF86E07769F143DF35D134440C3BC0830FDB71C5F1F84F8F623834F76575E109C8AA9719A7FA4FE744BBC034E54CA&guid=5150825362&fromtag=1',
      },
      {
        name: '致青春',
        artist: '王菲',
        url: 'http://dl.stream.qqmusic.qq.com/M500002SWGnT13k5sD.mp3?vkey=E55577C36D12276063448B1A9854E1802D76D4F7D6EAC482F37B2C912D34AFE6633189220F05D9FD9135FB86D2FE48D32E3660C025BCB849&guid=5150825362&fromtag=1',
      },
      {
        name: '心愿',
        artist: '四个女生',
        url: 'http://dl.stream.qqmusic.qq.com/M5000006d75k41sbnY.mp3?vkey=8D700D73CCC65BC1907A248310F71C65C669AF3878D69870C474C729BB2DC3513E83F00ABDDDE3E1BC2C2FCD9E2119EDDDAF130FCFE97EA2&guid=5150825362&fromtag=1',
      },
      {
        name: '我们的爱',
        artist: '飞儿乐团',
        url: 'http://dl.stream.qqmusic.qq.com/M500000wyGAY1FfsZ9.mp3?vkey=AB3D084D965872C0743034E070A3BD19B258FC7A3C784869F7CC7A59465DE677400E7EFE259894C642886A6CC7026A4DA645DDAFC69C704A&guid=5150825362&fromtag=1',
      },
      {
        name: 'Let It Go',
        artist: 'Demi Lovato',
        url: 'http://dl.stream.qqmusic.qq.com/M500000KcmtQ2iIodX.mp3?vkey=DC3EB3B2D6F8C2C4C3986937B804D23D901BD103BC6E2580099505202D6B175405436631DD4B03842CA80A65FC080365DD809C009D2FCAA8&guid=5150825362&fromtag=1',
      },
    ]
});
