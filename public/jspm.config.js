SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "capaj/jspm-hot-reloader": "github:capaj/jspm-hot-reloader@0.2.1",
    "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.6",
    "core-js": "npm:core-js@1.2.2",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "mithril": "npm:mithril@0.2.3",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },

  packages: {
    "github:capaj/jspm-hot-reloader@0.2.1": {
      "map": {
        "lodash.clonedeep": "npm:lodash.clonedeep@3.0.2",
        "socket.io-client": "github:socketio/socket.io-client@1.4.5",
        "weakee": "npm:weakee@0.9.1"
      }
    },
    "github:capaj/systemjs-hot-reloader@0.5.6": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-client": "github:socketio/socket.io-client@1.4.5",
        "weakee": "npm:weakee@1.0.0"
      }
    },
    "npm:core-js@1.2.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:lodash._baseassign@3.2.0": {
      "map": {
        "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash._baseclone@3.3.0": {
      "map": {
        "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
        "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
        "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
        "lodash._basefor": "npm:lodash._basefor@3.0.2",
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash._basefor@3.0.2": {
      "map": {}
    },
    "npm:lodash.clonedeep@3.0.2": {
      "map": {
        "lodash._baseclone": "npm:lodash._baseclone@3.3.0",
        "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:weakee@0.9.1": {
      "map": {}
    }
  }
});
