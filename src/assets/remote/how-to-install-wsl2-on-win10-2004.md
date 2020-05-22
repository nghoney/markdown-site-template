# how to install wsl2 on win10(2004)

##  升级内核：Updating the WSL 2 Linux kernel 

+ -->访问：https://aka.ms/wsl2kernel

+ 或者直接下载链接：https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

然后，一路next


## 开启Virtual Machine Platform

![开启Virtual Machine Platform](https://blog.icodef.com/wp-content/uploads/2019/06/2fd49865293c12aaa0b550b0a35ec143.png)

或管理员PowerShell运行:

```ps
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
```

## PowerShell管理员运行，下列命令，设置默认为全局默认的运行时环境为WSL2

```ps
wsl --set-default-version 2 
```

## 设置或者转换一个发行版为WSL2架构

```ps
wsl --set-version Ubuntu 2
```

## 查看使用的wsl版

```ps
wsl --list --v
```
