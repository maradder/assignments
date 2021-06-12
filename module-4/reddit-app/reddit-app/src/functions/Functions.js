export const isImageInUrl = (url) => {
  return (
    url.substring(url.lastIndexOf(".") + 1) === "jpg" ||
    url.substring(url.lastIndexOf(".") + 1) === "png" ||
    url.substring(url.lastIndexOf(".") + 1) === "gif"
  );
};
