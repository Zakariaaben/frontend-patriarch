const ngrok = require("ngrok");

const startNgrok = async () => {
  try {
    const url = await ngrok.connect({
      addr: 4000,
      authtoken: process.env.NGROK_AUTH_TOKEN,
      hostname: "supreme-actively-giraffe.ngrok-free.app",
    });
    console.log("Ngrok Tunnel Created -> ", url);
  } catch (err) {
    console.log(err);
  }
};

startNgrok();
