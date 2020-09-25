export const home = (req, res) => res.render("home", { siteTitle: "Home" });
export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    console.log(res.locals);
    res.render("serch", { searchTitle: "Search", searchingBy });
}
export const videos = (req, res) => res.render("videos", { videosTitle: "Videos" });
export const upload = (req, res) => res.render("upload", { uploadTitle: "upload" });
export const videoDetail = (req, res) => res.render("video Detail", {});
export const editVideo = (req, res) => res.render("edit Video", { editVIdeoTitle: "EditVideo" });
export const deleteVideo = (req, res) => res.render("delete Video");