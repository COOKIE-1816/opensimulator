const ERROR = 0;
const MESSAGE = 1;
const WARN = 2;
const INFO = 3;

const log_typeString = ["Error: ", "", "Warning: ", "Info: "];
const log_typeColor = ["red", "white", "yellow", "purple"];

function log(message, origin, type = MESSAGE, simuationTime = 0) {
    let consolelog, logmsg;
    let timeString;

    consolelog = `${origin}: ${message}`;

    //timeString = `${toString(simuationTime)}${" " * (toString(simuationTime).length - 8)}`;
        logmsg = `<font color="${log_typeColor[type]}">0.00000000|  ${log_typeString[type]}${origin}: ${message}</font><br>`;

    if(type == ERROR)   console.error(consolelog);
    if(type == MESSAGE) console.log(consolelog);
    if(type == WARN)    console.warn(consolelog);
    if(type == INFO)    console.info(consolelog);

    document.getElementById("diagnostic-ta").innerHTML += logmsg;
}