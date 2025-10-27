const os = require("os");

const currentOS = {
  name: os.type(),
  arch: os.arch(),
  platform: os.platform(),
  version: os.version(),
  release: os.release(),

  uptime: os.uptime(),
  userInfo: os.userInfo(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  cpus: os.cpus(),
  networkInterfaces: os.networkInterfaces(),
};

console.log(currentOS);
