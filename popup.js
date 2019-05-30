new Notification('比赛开始啦~', {icon: 'live.png',body: 'From popup.js'});

chrome.tabs.captureVisibleTab(function(dataUrl){document.getElementById('target').src=dataUrl});
