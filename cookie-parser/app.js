const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cookieParser("50c34ad3a7b5df88ef1a4924ef4aabf435bb0ed5"));

app.get("/set-cookie", (req, res) => {
  const d = new Date();
  res.cookie("javascript", "nodejs - reactjs", {
    maxAge: 5000, // 5 seconds
    // expires: new Date(Date.now() + 5000),
    // expires: new Date(d.getTime() + 5000),
    httpOnly: true,
    signed: true,
    secure: true,
    sameSite: "lax", // lax, strict, none
  });
  res.cookie("python", "django");
  res.send("hello, cookies set successfuly");
});

app.get("/get-cookie", (req, res) => {
  const cookies = req.cookies;
  const signedCookies = req.signedCookies;
  const selectedCookie = {
    cookies,
    signedCookies,
  };
  
  // if (Object.values(selectedCookie).filter((item) => item).length === 0) {
  //   return res.send("no cookies found");
  // }

  res.send(selectedCookie);
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("javascript");
  res.clearCookie("python");
  res.send("cookies deleted successfuly");
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
