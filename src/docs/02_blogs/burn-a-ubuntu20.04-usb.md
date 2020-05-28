# create a ubuntu 20.04 boot disk

插入U盘，在Linux系统中打开终端，查看 U 盘信息： 

`sudo fdisk -l`


然后卸载掉 U 盘：

`sudo fusermount -u /media/yourusername/label`

 
U 盘格式化：

`sudo mkfs.vfat /dev/sdb -I`


格式化后查看磁盘信息： 

`sudo fdisk -l /dev/sdb4`
 

最后使用 dd 命令制作启动盘：

`sudo dd if=ubuntu-20.04-desktop-amd64.iso of=/dev/sdb bs=10M`


