import manifest from "./manifest";

const ssbKeys = require("ssb-keys");
const client = require("ssb-client");

const keys = ssbKeys.loadOrCreateSync("scuttledo-keys");

client(
  keys, // optional, defaults to ~/.ssb/secret
  {
    remote: "ws://localhost:8989~shs:LgNKrZrNV6ZX+0fwW745oR/U6mVjNIia00MNeuJhYaQ=",
    // host: "localhost", // optional, defaults to localhost
    // port: 8989, // optional, defaults to 8008
    key: keys.id, // optional, defaults to keys.id

    caps: {
      // random string for `appKey` in secret-handshake
      shs: "1KHLiKZvAvjbY1ziZEHMXawbCEIM6qwjCDm3VYRan/s="
      //sign: null
    },

    // optional, muxrpc manifest. Defaults to ~/.ssb/manifest.json
    manifest
  },
  function(err: any, sbot: any, config: any) {
    debugger;
    sbot.whoami(function() {
      debugger;
    });
    console.log("got here...");
    // ...
  }
);
