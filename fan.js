const { exec } = require("child_process");
console.log(process.argv)
if(process.argv[0] == "on"){


exec("raspi-gpio set 14 dh", (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
});
  
}
else if(process.argv[0] == "off"){
exec("raspi-gpio set 14 dl", (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
});
}
else if(process.argv[0] == "status"){
exec("raspi-gpio get 14", (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
});
}
