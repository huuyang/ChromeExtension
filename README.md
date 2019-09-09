6.4上午
回看G2第二节末第三节初的录像，发现回放页面与NBA主题下的直播页面（对应首页的直播页面）很相似，顺便截取了50张图
找到了batchsize，实为BATCH_SIZE = number of GPU * image per GPU。
原image per GPU = 2，改为1之后仍提示“Allocator (GPU_0_bfc) ran out of memory trying to allocate 3.28GiB”
在visualize.py中找到了“print("\n*** No instances to display *** \n")”
思考如何建立检测结果和扩展的联系
首先将截图改为用覆写形式下载
用Chrome存储API中的chrome.storage.loacl.set成功存储键值对，但找不到本地存储目录，所以打算改用读写文件的方式

9.9 晚
从chrome扩展商店下载并安装扩展AwesomeScreenShot
进入腾讯男篮世界杯主页，网页中间的窗口正在播放赛事集锦，此时用AwesomeScreenShot开始录制该标签页，录制几秒后将浏览器最小化，然后进行一些与网页无关的Excel操作。录制结果没有受到最小化浏览器的影响，全程都还是那个网页，网页中的视频也一直正常播放；录制范围不包括浏览器顶部状态栏&屏幕底部系统任务栏。
同一个网页，赛事集锦正常播放状态下，打开AwesomeScreenShot录制该标签页，然后尝试全屏播放该视频，结果只能“网页全屏”而非“真正的全屏”；录制依然正常完成，且由于录制范围仅限该标签页，所以录制结果看起来像是“真正的全屏”。
录制过程中切换到其他标签页不影响录制。
