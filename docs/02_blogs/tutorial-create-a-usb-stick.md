

## tutorial-create-a-usb-stick


You will need:

A 4GB or larger USB stick/flash drive
Microsoft Windows XP or later
Rufus, a free and open source USB stick writing tool
An Ubuntu ISO file. See Get Ubuntu for download links

https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows#1-overview



## iso2usb Win32DiskImager makes an Ubuntu family USB boot drive in Windows

Win32DiskImager is particularly good for pre-release testing and new releases, 

when the standard tools like Unetbootin might not be ready 

(if the configuration of the booting has been changed since the previous release).

https://wiki.ubuntu.com/Win32DiskImager/iso2usb


##  mkusb/advanced

`mkusb`

or if you want to use the new user interface dus (alias mkusb version 12) directly

`dus`

or

`dus file.iso `

Notice that you need quotes, when you specify the path to the source file as a command line parameter and use spaces and some special characters.


`dus "path with spaces/filename with (special) characters.iso" `

https://help.ubuntu.com/community/mkusb/advanced
