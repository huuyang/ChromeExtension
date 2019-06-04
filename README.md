6.4上午
回看G2第二节末第三节初的录像，发现回放页面与NBA主题下的直播页面（对应首页的直播页面）很相似，顺便截取了50张图
找到了batchsize，实为BATCH_SIZE = number of GPU * image per GPU。
原image per GPU = 2，改为1之后仍提示“Allocator (GPU_0_bfc) ran out of memory trying to allocate 3.28GiB”
在visualize.py中找到了“print("\n*** No instances to display *** \n")”
思考如何建立检测结果和扩展的联系
首先将截图改为用覆写形式下载
用Chrome存储API中的chrome.storage.loacl.set成功存储键值对，但找不到本地存储目录，所以打算改用读写文件的方式
