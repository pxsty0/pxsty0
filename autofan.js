const { exec } = require("child_process");
setTimeout(()=>{
  exec("raspi-gpio set 14 dl", (error, stdout, stderr) => {
    if(!error){
      console.log("fan kapatıldı")
    }
  });
},1800000)
