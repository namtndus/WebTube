export const home = (req, res) => res.render("home", { siteTitle: "Home" });
export const search = (req, res) => res.render("serch", { searchTitle: "Search" });
export const videos = (req, res) => res.render("videos", { videosTitle: "Videos" });
export const upload = (req, res) => res.render("upload", { uploadTitle: "upload" });
export const videoDetail = (req, res) => res.render("video Detail", {});
export const editVideo = (req, res) => res.render("edit Video", { editVIdeoTitle: "EditVideo" });
export const deleteVideo = (req, res) => res.render("delete Video");