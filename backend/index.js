const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

const PORT = process.env.PORT || 5000; 


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  const path=require('path');
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
  })
}

app.listen(PORT , () => {
  console.log("Server is running!");
});
