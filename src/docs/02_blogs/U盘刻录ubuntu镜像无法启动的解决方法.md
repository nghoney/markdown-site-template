U盘刻录ubuntu镜像无法启动的解决方法


《U盘刻录ubuntu镜像无法启动的解决方法》大致内容

    从几个月前的14.10 daily 版本就有U盘刻录无法启动的现象，相关bug可参见：https://bugs.launchpad.net/ubuntu/+source/usb-creator/+bug/1325801

       系统镜像本身没有任何问题，刻录光盘、dd到U盘启动都是正常的。此问题是由于ubuntu使用了最新的syslinux版本，而大多U盘刻录软件还未支持最新的syslinux版本导致u盘无法启动，现在ubuntu系统自带及部分刻录工具是已经支持最新ubuntu14.10的U盘刻录。
       通常遇到问题的都是windows用户，请更新或使用推荐的刻录软件制作U盘启动盘，具体如下：

linux的用mkusb

windows的用Win32DiskImager 来制作U盘启动

       具体用法：
       https://wiki.ubuntu.com/Win32DiskImager/iso2usb
       https://help.ubuntu.com/community/mkusb

原文地址：http://www.ubuntukylin.com/news/shownews.php?lang=cn&id=362



使用软件修正：Rufus（Windows）

教程及引用：http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows

软件下载：https://rufus.akeo.ie/

软件大小：864KB（截至2016年5月3日止）

185509_EBqv_102140.jpg

麻雀虽小，五脏俱全！推荐使用此款软件U盘刻录Ubuntu14.04以后的新版本）


优麒麟U盘刻录14.10镜像出问题的解决方法
https://www.ubuntukylin.com/news/362-cn.html

