const openFolderButton = document.getElementById("open-folder-button");
const sidebarListContainer = document.getElementById("sidebar-list-container");
const videoElement = document.getElementById("video");

openFolderButton.addEventListener("click", async () => {
  const result = await api.openFolder();
  if (result.canceled) return;
  const dirents = await api.readDir(result.filePaths[0]);
  generateSidebarItems(dirents);
});

async function generateSidebarItems(
  dirents,
  listContainer = sidebarListContainer,
  indent = 0
) {
  listContainer.style.setProperty("--indent", indent);
  for (const dirent of dirents) {
    const entry = dirent.isDirectory
      ? generateDirectory(dirent.name, dirent.path, indent)
      : generateFile(dirent.name, dirent.path);

    listContainer.appendChild(entry);
  }
}

function generateFile(name, path) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = name;
  a.addEventListener("click", () => {
    videoElement.src = path;
  });
  li.appendChild(a);
  li.title = name;
  return li;
}

function generateDirectory(name, path, indent) {
  const li = document.createElement("li");
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const ul = document.createElement("ul");
  summary.textContent = name;

  api.readDir(path).then((dirents) => {
    generateSidebarItems(dirents, ul, indent + 1);
  });

  details.appendChild(summary);
  details.appendChild(ul);
  li.appendChild(details);
  return li;
}
