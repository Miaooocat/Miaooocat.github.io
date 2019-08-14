const apFixed = new APlayer({
  element: document.getElementById('aplayer'),
  mutex: true,
  theme: '#97dffd',
  order: 'random',
  showlrc: false,
  fixed: true,
});
$.ajax({
  url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=2796323604',
  success: function (list) {
    apFixed.list.add(JSON.parse(list));
  }
});
