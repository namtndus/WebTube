export const join = (req, res) => res.render("join", { joinTitle: "Join" });
export const login = (req, res) => res.render("login", { loginTitle: "Login" });
export const logout = (req, res) => res.render("logout", { logoutTitle: "Logout" });