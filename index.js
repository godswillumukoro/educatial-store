require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(process.env.PORT);

app.get("/", (req, res) => {
  res.render("pages/index", { title: "" });
});

app.get("/shared-hosting", (req, res) => {
  res.render("pages/hosting");
});
app.get("/shared-hosting-UK", (req, res) => {
  res.render("pages/hosting");
});
app.get("/shared-hosting-US", (req, res) => {
  res.render("pages/hosting");
});
app.get("/shared-hosting-AU", (req, res) => {
  res.render("pages/hosting");
});

app.get("/domain-names", (req, res) => {
  res.render("pages/domain");
});
app.get("/domain-registration", (req, res) => {
  res.render("pages/domain");
});
app.get("/tld-information", (req, res) => {
  res.render("pages/domain");
});
app.get("/whois-id-protection", (req, res) => {
  res.render("pages/domain");
});
app.get("/ssl-certificates", (req, res) => {
  res.render("pages/ssl");
});

app.get("/vps-hosting", (req, res) => {
  res.render("pages/vps-reseller");
});
app.get("/openvz-vps-hosting", (req, res) => {
  res.render("pages/vps-reseller");
});
app.get("/kvm-vps-hosting", (req, res) => {
  res.render("pages/vps-reseller");
});
app.get("/vps-hosting-AU", (req, res) => {
  res.render("pages/vps-reseller");
});
app.get("/vps-hosting-UK", (req, res) => {
  res.render("pages/vps-reseller");
});
app.get("/vps-hosting-US", (req, res) => {
  res.render("pages/vps-reseller");
});

app.get("/dedicated-hosting", (req, res) => {
  res.render("pages/dedicated");
});
app.get("/semi-dedicated-hosting", (req, res) => {
  res.render("pages/dedicated");
});
app.get("/dedicated-hosting-US", (req, res) => {
  res.render("pages/dedicated");
});

app.get("/data-center", (req, res) => {
  res.render("pages/dedicated");
});
app.get("/data-center-US", (req, res) => {
  res.render("pages/dedicated");
});
app.get("/data-center-AU", (req, res) => {
  res.render("pages/dedicated");
});
app.get("/data-center-UK", (req, res) => {
  res.render("pages/dedicated");
});
app.get("/data-center-FI", (req, res) => {
  res.render("pages/dedicated");
});
app.get("/data-center-BG", (req, res) => {
  res.render("pages/dedicated");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});
app.get("/why-us", (req, res) => {
  res.render("pages/about");
});
app.get("/contact", (req, res) => {
  res.render("pages/contact");
});
app.get("/customer-support", (req, res) => {
  res.render("pages/knowledgebase");
});
app.get("/videos", (req, res) => {
  res.render("pages/help-center");
});
app.get("/terms-and-conditions", (req, res) => {
  res.render("pages/help-center");
});

app.get("/hespia-cp", (req, res) => {
  res.render("pages/help-center");
});
app.get("/hespia-vs-cpanel", (req, res) => {
  res.render("pages/help-center");
});
app.get("/domain-manager", (req, res) => {
  res.render("pages/help-center");
});
app.get("/file-manager", (req, res) => {
  res.render("pages/help-center");
});
app.get("/videos", (req, res) => {
  res.render("pages/help-center");
});
app.get("/email-manager", (req, res) => {
  res.render("pages/help-center");
});
app.get("/web-accelerators", (req, res) => {
  res.render("pages/help-center");
});

app.get("/web-hosting-articles", (req, res) => {
  res.render("pages/help-center");
});
app.get("/best-web-hosting", (req, res) => {
  res.render("pages/help-center");
});
app.get("/domain-web-hosting", (req, res) => {
  res.render("pages/help-center");
});
app.get("/how-cpanel-hosting-works", (req, res) => {
  res.render("pages/help-center");
});
app.get("/ssl-certificates", (req, res) => {
  res.render("pages/help-center");
});
app.get("/vps-hosting", (req, res) => {
  res.render("pages/help-center");
});
app.get("/web-accelerators", (req, res) => {
  res.render("pages/help-center");
});

// const userRouter = require('./routes/users')
// app.use('/users', userRouter) //mount router

app.get("*", function (req, res) {
  res.status(404).render("pages/404");
}); //404
