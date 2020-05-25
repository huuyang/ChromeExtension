2019.6.4上午
回看G2第二节末第三节初的录像，发现回放页面与NBA主题下的直播页面（对应首页的直播页面）很相似，顺便截取了50张图
找到了batchsize，实为BATCH_SIZE = number of GPU * image per GPU。
原image per GPU = 2，改为1之后仍提示“Allocator (GPU_0_bfc) ran out of memory trying to allocate 3.28GiB”
在visualize.py中找到了“print("\n*** No instances to display *** \n")”
思考如何建立检测结果和扩展的联系
首先将截图改为用覆写形式下载
用Chrome存储API中的chrome.storage.loacl.set成功存储键值对，但找不到本地存储目录，所以打算改用读写文件的方式

2019.9.9 晚
从chrome扩展商店下载并安装扩展AwesomeScreenShot
进入腾讯男篮世界杯主页，网页中间的窗口正在播放赛事集锦，此时用AwesomeScreenShot开始录制该标签页，录制几秒后将浏览器最小化，然后进行一些与网页无关的Excel操作。录制结果没有受到最小化浏览器的影响，全程都还是那个网页，网页中的视频也一直正常播放；录制范围不包括浏览器顶部状态栏&屏幕底部系统任务栏。
同一个网页，赛事集锦正常播放状态下，打开AwesomeScreenShot录制该标签页，然后尝试全屏播放该视频，结果只能“网页全屏”而非“真正的全屏”；录制依然正常完成，且由于录制范围仅限该标签页，所以录制结果看起来像是“真正的全屏”。
录制过程中切换到其他标签页不影响录制。

2020.5.24~25
之前“运河杯”标注过的直播截图和当时用来截图的chrome扩展都找不到了，只能重写。首先去developer.chrome.com查看extension开发的官方教程和API，很快找到了chrome.desktopCapture、chrome.pageCapture、chrome.tabCapture。简单了解之后，这仨比较相似，选择了chrome.desktopCapture。费了些周折才明白array参数，然后面对着integer的返回值一脸懵逼，不知道怎么写回调函数。官方文档的这一部分看了无数遍，去MDN、百度、Google、微信上查了getUserMedia()，都是和摄像头/视频/共享屏幕有关的，都不是我要的：把streamId（返回值）变成图片或者可以下载的URL的功能。解决不了desktopCapture，我转向chrome.downloads.download()。官方文档还是看不明白，于是去找例子，官方Sample、Github（AwesomeScreenShot）功能都太复杂且不是我想要的。最后一招，去图书馆看李喆的《chrome扩展及应用开发》，书中用的是chrome.tabs.captureVisibleTab，我再度尝试deskCapture无果以后，采用了模仿书中的方案，完成了这个AutoScreenShot扩展。
