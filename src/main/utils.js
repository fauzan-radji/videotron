exports.isVideoFile = (dirent) =>
  dirent.isFile() && dirent.name.split(".").pop() === "mp4";
