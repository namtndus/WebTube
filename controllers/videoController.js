export const home = (req, res) => res.render("home", { siteTitle: "Home" });
export const search = (req, res) => res.render("serch", { siteTitle: "Search" });
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("video Detail");
export const editVideo = (req, res) => res.render("edit Video");
export const deleteVideo = (req, res) => res.render("delete Video");