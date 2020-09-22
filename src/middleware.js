export const localMiddleware = (req, res, next) => {
  res.locals.homeTitle = "Home";
  res.locals.profileTitle = "Profile";
  res.locals.photosTitle = "Photos";
  res.locals.loginTitle = "LogIn";
  next();
};
