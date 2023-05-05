require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const { auth } = require("express-openid-connect");
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
};
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
const { openVZVpsHosting } = require("./views/text/vps/openVZVpsHosting");
const { kvmVpsHosting } = require("./views/text/vps/kvmVpsHosting");
const { vpsHostingAu } = require("./views/text/vps/vpsHostingAu");
const { vpsHostingUk } = require("./views/text/vps/vpsHostingUk");
const { vpsHostingUs } = require("./views/text/vps/vpsHostingUs");
const { dedicatedIndex } = require("./views/text/dedicated/dedicatedIndex");
const { dedicatedSemi } = require("./views/text/dedicated/dedicatedSemi");
const { dedicatedUs } = require("./views/text/dedicated/dedicatedUs");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(process.env.PORT);

app.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  console.log(req.oidc.user);
  res.render("pages/index", {
    title: "Home",
    headerImage: true,
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user
  });

  
});

app.get("/dashboard", (req, res) => {
  res.render("pages/domains", { title: "Domain" });
});
app.get("/signin", (req, res) => {
  res.render("pages/signin", { title: "Sign in", headerImage: false });
});

app.get("/order-now", (req, res) => {
  res.render("pages/order-now", { title: "Order Now" });
});
app.get("/shared-hosting", (req, res) => {
  res.render("pages/hosting", { title: "Shared Hosting", headerImage: true });
});
app.get("/shared-hosting-UK", (req, res) => {
  res.render("pages/hosting-region", {
    title: "Shared Hosting UK",
    location: "UK",
    headerImage: true,
  });
});
app.get("/shared-hosting-US", (req, res) => {
  res.render("pages/hosting-region", {
    title: "Shared Hosting US",
    location: "US",
    headerImage: true,
  });
});
app.get("/shared-hosting-AU", (req, res) => {
  res.render("pages/hosting-region", {
    title: "Shared Hosting AU",
    location: "Australia",
    headerImage: true,
  });
});

app.get("/domain-names", (req, res) => {
  res.render("pages/domains", { title: "Domain" });
});
app.get("/domain-registration", (req, res) => {
  res.render("pages/domains", { title: "Domain Registration" });
});
app.get("/tld-information", (req, res) => {
  res.render("pages/domains-whois", { title: "TLD Information" });
});
app.get("/whois-id-protection", (req, res) => {
  res.render("pages/domains-whois", { title: "WHOIS ID Protection" });
});
app.get("/ssl-certificates", (req, res) => {
  res.render("pages/ssl", { title: "SSL Certificates" });
});

app.get("/vps-hosting", (req, res) => {
  res.render("pages/vps-reseller", { title: "VPS Hosting" });
});
app.get("/openvz-vps-hosting", (req, res) => {
  res.render("pages/vps-reseller-options", {
    title: "OpenVZ VPS Hosting",
    page: "openVZ",
    openVZVpsHosting,
  });
});
app.get("/kvm-vps-hosting", (req, res) => {
  res.render("pages/vps-reseller-options", {
    title: "KVM VPS Hosting",
    gridSection: true,
    kvmVpsHosting,
  });
});
app.get("/vps-hosting-AU", (req, res) => {
  res.render("pages/vps-reseller-options", {
    title: "VPS Hosting in Australia",
    page: "au",
    vpsHostingAu,
  });
});
app.get("/vps-hosting-UK", (req, res) => {
  res.render("pages/vps-reseller-options", {
    title: "VPS Hosting UK",
    page: "uk",
    vpsHostingUk,
  });
});
app.get("/vps-hosting-US", (req, res) => {
  res.render("pages/vps-reseller-options", {
    title: "VPS Hosting US",
    page: "us",
    vpsHostingUs,
  });
});

app.get("/dedicated-hosting", (req, res) => {
  res.render("pages/dedicated", { title: "Dedicated Hosting", dedicatedIndex });
});
app.get("/semi-dedicated-hosting", (req, res) => {
  res.render("pages/dedicated-reseller-options", {
    title: "Semi-Dedicated Hosting",
    gridSection: true,
    dedicatedSemi,
  });
});
app.get("/dedicated-hosting-US", (req, res) => {
  res.render("pages/dedicated-reseller-options", {
    title: "Dedicated Hosting US",
    page: "us",
    dedicatedUs,
  });
});

app.get("/data-center", (req, res) => {
  res.render("pages/data-centers", { title: "Data center" });
});
app.get("/data-center-US", (req, res) => {
  res.render("pages/data-centers-options", {
    title: "Data center US",
    page: "us",
  });
});
app.get("/data-center-AU", (req, res) => {
  res.render("pages/data-centers-options", {
    title: "Data center AU",
    page: "au",
  });
});
app.get("/data-center-UK", (req, res) => {
  res.render("pages/data-centers-options", {
    title: "Data center UK",
    page: "uk",
  });
});
app.get("/data-center-FI", (req, res) => {
  res.render("pages/data-centers-options", {
    title: "Data center FI",
    page: "fi",
  });
});
app.get("/data-center-BG", (req, res) => {
  res.render("pages/data-centers-options", {
    title: "Data center BG",
    page: "bg",
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About" });
});
app.get("/why-us", (req, res) => {
  res.render("pages/why-us", { title: "Why us" });
});
app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact" });
});
app.get("/customer-support", (req, res) => {
  res.render("pages/support", { title: "Customer support" });
});
app.get("/videos", (req, res) => {
  res.render("pages/videos", { title: "Videos" });
});
app.get("/terms-and-conditions", (req, res) => {
  res.render("pages/help-center", { title: "Terms and conditions" });
});

app.get("/hespia-cp", (req, res) => {
  res.render("pages/hespia", { title: "Hespia CP" });
});
app.get("/hespia-vs-cpanel", (req, res) => {
  res.render("pages/hespia-vs-cpanel", { title: "Hespia vs cPanel" });
});
app.get("/domain-manager", (req, res) => {
  res.render("pages/domain-manager", { title: "Domain Manager" });
});
app.get("/file-manager", (req, res) => {
  res.render("pages/file-manager", { title: "File Manager" });
});
app.get("/email-manager", (req, res) => {
  res.render("pages/email-manager", { title: "Email Manager" });
});
app.get("/web-accelerators", (req, res) => {
  res.render("pages/web-accelerators", { title: "Web Accelerators" });
});

app.get("/web-hosting-articles", (req, res) => {
  res.render("pages/hosting-articles", { title: "Web Hosting Articles" });
});
app.get("/best-web-hosting", (req, res) => {
  res.render("pages/best-web-hosting", { title: "Best Web Hosting" });
});
app.get("/domain-web-hosting", (req, res) => {
  res.render("pages/domain-web-hosting", { title: "Domain Web Hosting" });
});
app.get("/how-cpanel-hosting-works", (req, res) => {
  res.render("pages/how-cpanel-hosting-works", {
    title: "How cPanel Hosting Works",
  });
});
app.get("/vps-hosting", (req, res) => {
  res.render("pages/help-center", { title: "VPS Hosting" });
});

app.get("*", function (req, res) {
  res.status(404).render("pages/404");
}); //404
