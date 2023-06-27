const os = require("os");
const fs = require("fs");
const { exec } = require('node:child_process');
const userHomeDir = os.homedir();
exec('REG DELETE "HKEY_CURRENT_USER\\SOFTWARE\\JavaSoft\\Prefs\\3t" /f')
exec('REG DELETE "HKEY_CURRENT_USER\\SOFTWARE\\JavaSoft\\Prefs\\t3" /f')

let dirrms = [
    userHomeDir+'\\.3T',
    userHomeDir+'\\.cache\\ftuwWNWoJl-STeZhVGHKkQ--',
    userHomeDir+'\\AppData\\Local\\ftuwWNWoJl-STeZhVGHKkQ--',
    userHomeDir+'\\AppData\\Local\\t3',
    userHomeDir+'\\AppData\\Local\\Temp\\ftuwWNWoJl-STeZhVGHKkQ--',
    userHomeDir+'\\AppData\\Local\\Temp\\t3',
    userHomeDir+'\\..\\Public\\t3',
]
for (x in dirrms) {
    fs.rm(dirrms[x], { recursive: true, force: true }, function(){

    })
}