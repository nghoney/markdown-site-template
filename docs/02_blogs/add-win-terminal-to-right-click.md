# steps

create wt.reg using following 

```ps
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
 @="Windows Terminal here"
"Icon"="C:\\Program Files\\WindowsApps\\Microsoft.WindowsTerminal_1.0.1401.0_x64__8wekyb3d8bbwe\\WindowsTerminal.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
 @="C:\\Users\\Administrator\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"

 
```

double click it to import it to regedit with admin allowed
