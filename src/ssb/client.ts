const client = require("ssb-client");

const keys = {
  curve: "ed25519",
  public: "pub-goes-here.ed25519",
  private:
    "prv-goes-here.ed25519",
  id: "@id-goes-here.ed25519"
};

client(
  keys, // optional, defaults to ~/.ssb/secret
  {
    remote:
      "ws://localhost:8989~shs:pub-something",
    // host: "localhost", // optional, defaults to localhost
    // port: 8989, // optional, defaults to 8008
    key: keys.id, // optional, defaults to keys.id

    caps: {
      // random string for `appKey` in secret-handshake
      shs: "1KHLiKZvAvjbY1ziZEHMXawbCEIM6qwjCDm3VYRan/s="
      //sign: null
    },

    // optional, muxrpc manifest. Defaults to ~/.ssb/manifest.json
    manifest: {
      auth: "async",
      address: "sync",
      manifest: "sync",
      get: "async",
      createFeedStream: "source",
      createLogStream: "source",
      messagesByType: "source",
      createHistoryStream: "source",
      createUserStream: "source",
      links: "source",
      relatedMessages: "async",
      add: "async",
      publish: "async",
      getAddress: "sync",
      getLatest: "async",
      latest: "source",
      latestSequence: "async",
      whoami: "sync",
      progress: "sync",
      status: "sync",
      getVectorClock: "async",
      seq: "async",
      usage: "sync",
      clock: "async",
      plugins: {
        install: "source",
        uninstall: "source",
        enable: "async",
        disable: "async"
      },
      gossip: {
        peers: "sync",
        add: "sync",
        remove: "sync",
        ping: "duplex",
        connect: "async",
        changes: "source",
        reconnect: "sync",
        enable: "sync",
        disable: "sync"
      },
      replicate: {
        changes: "source",
        upto: "source",
        request: "sync"
      },
      friends: {
        get: "async",
        createFriendStream: "source",
        stream: "source",
        hops: "async"
      },
      blobs: {
        get: "source",
        getSlice: "source",
        add: "sink",
        rm: "async",
        ls: "source",
        has: "async",
        size: "async",
        meta: "async",
        want: "async",
        push: "async",
        changes: "source",
        createWants: "source"
      },
      invite: {
        create: "async",
        accept: "async",
        use: "async"
      },
      query: {
        read: "source"
      },
      links2: {
        read: "source"
      },
      ws: {
        getAddress: "sync"
      },
      ebt: {
        replicate: "duplex",
        request: "sync"
      },
      about: {
        stream: "source",
        get: "async"
      },
      backlinks: {
        read: "source"
      },
      fulltext: {
        search: "source"
      }
    }
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

// import * as client from 'engine.io-client';

// let socket: client.Socket = client('ws://localhost:8989');

// socket.on('open', () => {
//   socket.on('message', data => {
//     console.log("message...")
//   });
//   socket.on('close', () => {
//     console.log("closed...")
//   });
// });
