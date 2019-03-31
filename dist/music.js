const apFixed = new APlayer({
  element: document.getElementById('aplayer'),
  mutex: true,
  theme: '#97dffd',
  order: 'random',
  lrcType: 3,
  fixed: true,
});
$.ajax({
  url: 'https://api.i-meto.com/meting/api?server=xiami&type=playlist&id=805370010',
  success: function (list) {
    apFixed.list.add(JSON.parse(list));
  }
});
