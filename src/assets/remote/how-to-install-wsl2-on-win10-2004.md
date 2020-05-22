# how to install wsl2 on win10(2004)

##  升级内核：Updating the WSL 2 Linux kernel -->访问：https://aka.ms/wsl2kernel

或者直接下载链接：https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

一路next


## 开启Virtual Machine Platform

![开启Virtual Machine Platform](https://blog.icodef.com/wp-content/uploads/2019/06/2fd49865293c12aaa0b550b0a35ec143.png)

或者,管理员PowerShell运行:
```ps
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
```

## 然后PowerShell管理员运行:

```ps
wsl --set-default-version 2 设置默认为wsl2
```

## 设置一个发行版为wsl2

```ps
wsl --set-version Ubuntu 2
```

## 查看使用的wsl版

```ps
wsl --list --verbose
```
