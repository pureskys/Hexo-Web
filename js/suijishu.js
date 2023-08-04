document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[href]');

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var originalHref = link.getAttribute('href');

    // 检查链接中是否已经存在查询参数
    var separator = originalHref.includes('?') ? '&' : '?';

    var randomParam = Math.random().toString(36).slice(2);
    var newHref = originalHref + separator + 'random=' + randomParam;

    link.setAttribute('href', newHref);
  }
  var shouye = this.location.href
  if(shouye.indexOf('?')!==-1 ){
    console.log("当前页面链接中已经存在问号");
  }else{
    location.href = location.href + "?" + 'random=' + Math.random().toString(36).slice(2)
  }
  
});
