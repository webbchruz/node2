const os = require('os');
//info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in the second

console.log(`the system Uptime is${os.uptime}`)

const currentOs ={
    name:os.type(),
    release:os.release(),
    freeMem: os.freemem(),
}
console.log(currentOs)