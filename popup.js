//chrome.tabs.captureVisibleTab(function(dataUrl){document.getElementById('target').src=dataUrl});

document.getElementById('target').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
    	backgroundPage.backgroundFunction()
    })
});