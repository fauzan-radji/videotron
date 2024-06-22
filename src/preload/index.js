const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  readDir(path) {
    return ipcRenderer.invoke("readDir", path);
  },
  openFolder() {
    return ipcRenderer.invoke("openFolder");
  },
});
