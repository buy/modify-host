function parse_link() {
  var oldHref = newHref = ''

  chrome.storage.sync.get({
    oldHref: '',
    newHref: ''
  }, function(items) {
    replace_links(items.oldHref, items.newHref);
  });
}

function replace_links(oldHref, newHref) {
  if (!oldHref || !newHref) {
    return false;
  }

  var anchorList = document.getElementsByTagName('a');

  for (var i = 0; i < anchorList.length; i ++) {
    anchorList[i].href = anchorList[i].href.replace(oldHref, newHref);
  }
}

parse_link()
