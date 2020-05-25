let count = 0;
function backgroundFunction() {
	if(count++ < 20){
		chrome.tabs.captureVisibleTab({format:'jpeg', quality:100}, function(dataUrl){
    		chrome.downloads.download({
    			url: dataUrl, 
    			filename: 'liveShot.jpg', 
    			conflictAction: 'uniquify', 
    			saveAs: false
    		});
    	});
    	setTimeout(function(){backgroundFunction()}, 5000);
	}else{
		alert('截图完成');
	}

    // chrome.desktopCapture.chooseDesktopMedia(["screen", "window", "tab"], function(id) {
    // 	alert('开始截图!');
    // })
}