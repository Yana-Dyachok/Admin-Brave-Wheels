export const previewPath = (currentPath: string) => {
  if (currentPath.includes('/edit')) {
    const newPath = currentPath.replace(/\/edit$/, '') + '/preview';
    return newPath;
  } else {
    return `${currentPath}/preview`;
  }
};
