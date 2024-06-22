const { app, BrowserWindow, ipcMain, dialog } = require("electron/main");

const { join: pathJoin } = require("path");
const { isVideoFile } = require("./utils");
const { readdir } = require("fs/promises");

const createWindow = () => {
  const wind = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: pathJoin(__dirname, "../preload/index.js"),
    },
  });

  wind.loadFile(pathJoin(__dirname, "../renderer/index.html"));
  // wind.webContents.openDevTools();
};

app.whenReady().then(() => {
  ipcMain.handle("readDir", (_, path) =>
    readdir(path, { withFileTypes: true }).then((dirents) =>
      dirents
        .filter(
          (dirent) =>
            !dirent.name.startsWith(".") &&
            (dirent.isDirectory() || isVideoFile(dirent))
        )
        .map((dirent) => ({
          ...dirent,
          path: pathJoin(dirent.parentPath, dirent.name),
          isDirectory: dirent.isDirectory(),
        }))
    )
  );

  ipcMain.handle("openFolder", () =>
    dialog.showOpenDialog({ properties: ["openDirectory"] })
  );

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
