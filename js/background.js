// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "/js/parse_link.js"});
  chrome.browserAction.setIcon({path: '/images/on32.png'});
  setTimeout(function() {
    chrome.browserAction.setIcon({path: '/images/off32.png'});
  }, 1000);
});
