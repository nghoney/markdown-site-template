# how to install wsl2 on win10(2004)

##  升级内核：Updating the WSL 2 Linux kernel 

+ -->访问：https://aka.ms/wsl2kernel

+ 或者直接下载链接：https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

然后，一路next


## 开启Virtual Machine Platform

![开启Virtual Machine Platform](https://blog.icodef.com/wp-content/uploads/2019/06/2fd49865293c12aaa0b550b0a35ec143.png)

或PowerShell管理员模式运行:

```ps
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
```

## PowerShell管理员模式下开启WSL 子系统

```ps
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

## PowerShell管理员模式下运行下列命令，设置全局默认运行时环境为WSL2

```ps
wsl --set-default-version 2 
```

## 安装一个Linux发行版

 直接访问：<https://aka.ms/wslstore> 将会打开windows商店,选择你的想要的发行版


## 设置或者转换一个发行版为WSL2架构

```ps
wsl --set-version Ubuntu 2
```

## 查看使用的wsl版

```ps
wsl --list --v
```

需要注意，在商店中的安装并没有实际上完成 Linux 子系统的安装，你还需要运行一次已安装的 Linux 发行版以执行真正的安装操作。

![运行一次已安装的 Linux 发行版](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pLmxvbGkubmV0LzIwMTkvMDkvMjcvTURsQWNPRWJWNEYzVXM3LnBuZw?x-oss-process=image/format,png)

