linux下杀死进程（kill）的N种方法

改进１：

把ps的查询结果通过管道给grep查找包含特定字符串的进程。管道符“|”用来隔开两个命令，管道符左边命令的输出会作为管道符右边命令的输入。

$ ps -ef | grep firefox
smx       1827     1  4 11:38 ?        00:27:33 /usr/lib/firefox-3.6.18/firefox-bin
smx      12029  1824  0 21:54 pts/0    00:00:00 grep --color=auto firefox

这次就清爽了。然后就是

$kill -s 9 1827

还是嫌打字多？

改进２——使用pgrep：

一看到pgrep首先会想到什么？没错，grep！pgrep的p表明了这个命令是专门用于进程查询的grep。

$ pgrep firefox
1827

看到了什么？没错火狐的PID，接下来又要打字了：

$kill -s 9 1827

改进３——使用pidof：

看到pidof想到啥？没错pid of xx，字面翻译过来就是 xx的PID。

$ pidof firefox-bin
1827
和pgrep相比稍显不足的是，pidof必须给出进程的全名。然后就是老生常谈：

$kill -s 9 1827

无论使用ps 然后慢慢查找进程PID 还是用grep查找包含相应字符串的进程，亦或者用pgrep直接查找包含相应字符串的进程ＰＩＤ，然后手动输入给ｋｉｌｌ杀掉，都稍显麻烦。有没有更方便的方法？有！

改进４：

$ps -ef | grep firefox | grep -v grep | cut -c 9-15 | xargs kill -s 9

说明：

“grep firefox”的输出结果是，所有含有关键字“firefox”的进程。

“grep -v grep”是在列出的进程中去除含有关键字“grep”的进程。

“cut -c 9-15”是截取输入行的第9个字符到第15个字符，而这正好是进程号PID。

“xargs kill -s 9”中的xargs命令是用来把前面命令的输出结果（PID）作为“kill -s 9”命令的参数，并执行该命令。“kill -s 9”会强行杀掉指定进程。

难道你不想抱怨点什么？没错太长了

改进５：

知道pgrep和pidof两个命令，干嘛还要打那么长一串！

$ pgrep firefox | xargs kill -s 9

改进６：

$ ps -ef | grep firefox | awk '{print $2}' | xargs kill -9
kill: No such process

有一个比较郁闷的地方，进程已经正确找到并且终止了，但是执行完却提示找不到进程。

其中awk '{print $2}' 的作用就是打印（print）出第二列的内容。根据常规篇，可以知道ps输出的第二列正好是PID。就把进程相应的PID通过xargs传递给kill作参数，杀掉对应的进程。

改进７：

难道每次都要调用xargs把PID传递给kill？答案是否定的：

$kill -s 9 `ps -aux | grep firefox | awk '{print $2}'`

改进８：

没错，命令依然有点长，换成pgrep。

$kill -s 9 `pgrep firefox`

改进9——pkill：

看到pkill想到了什么？没错pgrep和kill！pkill＝pgrep+kill。

$pkill -９ firefox

说明："-9" 即发送的信号是9，pkill与kill在这点的差别是：pkill无须 “ｓ”，终止信号等级直接跟在 “-“ 后面。之前我一直以为是 "-s 9"，结果每次运行都无法终止进程。

改进10——killall：

killall和pkill是相似的,不过如果给出的进程名不完整，killall会报错。pkill或者pgrep只要给出进程名的一部分就可以终止进程。

$killall -9 firefox

 

附录：各种信号及其用途


Signal	Description	Signal number on Linux x86[1]
SIGABRT	Process aborted	6
SIGALRM	Signal raised by alarm	14
SIGBUS	Bus error: "access to undefined portion of memory object"	7
SIGCHLD	Child process terminated, stopped (or continued*)	17
SIGCONT	Continue if stopped	18
SIGFPE	Floating point exception: "erroneous arithmetic operation"	8
SIGHUP	Hangup	1
SIGILL	Illegal instruction	4
SIGINT	Interrupt	2
SIGKILL	Kill (terminate immediately)	9
SIGPIPE	Write to pipe with no one reading	13
SIGQUIT	Quit and dump core	3
SIGSEGV	Segmentation violation	11
SIGSTOP	Stop executing temporarily	19
SIGTERM	Termination (request to terminate)	15
SIGTSTP	Terminal stop signal	20
SIGTTIN	Background process attempting to read from tty ("in")	21
SIGTTOU	Background process attempting to write to tty ("out")	22
SIGUSR1	User-defined 1	10
SIGUSR2	User-defined 2	12
SIGPOLL	Pollable event	29
SIGPROF	Profiling timer expired	27
SIGSYS	Bad syscall	31
SIGTRAP	Trace/breakpoint trap	5
SIGURG	Urgent data available on socket	23
SIGVTALRM	Signal raised by timer counting virtual time: "virtual timer expired"	26
SIGXCPU	CPU time limit exceeded	24
SIGXFSZ	File size limit exceeded	25

 ### sample：

（1）.通过pkill -kill -t pts/6踢掉

（2）.先通过ps -ef | grep pts/6命令查找对应的进程号

然后在把进程4266杀掉：kill -9 4266
