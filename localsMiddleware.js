export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    next();
}