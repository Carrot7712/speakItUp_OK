$(function () {
  var len = 140 // 超過140個字以"..."取代
  $('.JQellipsis').each(function (i) {
    if ($(this).text().length > len) {
      $(this).attr('title', $(this).text())
      var text =
        $(this)
          .text()
          .substring(0, len - 1) + '...'
      $(this).text(text)
    }
  })
})
