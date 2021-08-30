const express = require("express");



const app = express();
app.use((req, res, next) => {

   
    if (!req.subdomains.length || req.subdomains.slice(-1)[0] === 'www') return next();
    
    var subdomain = req.subdomains.slice(-1)[0];
    console.log(subdomain)
    req.subdomain = subdomain;
    next();
  });

app.get("/", (req, res) => {
    if (!req.subdomain) {
        
        res.send(req.subdomain);
      } else {
        // render subdomain specific page
        // mypage.mydomain.com
        res.send('error');
      } // 
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
