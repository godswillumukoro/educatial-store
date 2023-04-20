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
  res.render("pages/index", { title: "Home" });
});

app.get("/order-now", (req, res) => {
  res.render("pages/order-now", { title: "Order Now" });
});
app.get("/shared-hosting", (req, res) => {
  res.render("pages/hosting", { title: "Shared Hosting" });
});
app.get("/shared-hosting-UK", (req, res) => {
  const content =
  {
    heading: ` Trust your client sites to the best UK hosting service`,
    paragraph: `We offer you the chance to host your UK-oriented sites in a datacenter facility situated only several kilometers outside London. This means that your visitors from the United Kingdom and Continental Europe will enjoy much faster web site loading speeds. You can select the UK data center facility on the signup form. Just choose your hosting plan and then select the UK data center from the drop-down menu. We'll create your website hosting account in no time. You will get our in-house created web hosting Control Panel. We also offer a 99.9% server uptime guarantee and a 24/7/365 client support service.`
  }

  res.render("pages/hosting-region", { title: "Shared Hosting UK", location: "UK", content });
});
app.get("/shared-hosting-US", (req, res) => {
  const content =
  {
    heading: `Shared Hosting in US `,
    paragraph: `We think that the datacenter facility location is the key to ensuring an outstanding-quality hosting service and for this reason we offer you the opportunity to host your web sites in one of the most famous datacenter facilities in the United States. It is conveniently situated in downtown Chicago and provides excellent conditions for your web site, so you can ensure a truly smooth browsing experience for your visitors from the US, Canada and Latin America. You can select the Chicago data center on the order form and once you sign up, your account will be created very quickly. We also offer a point 'n' click web hosting Control Panel and a thirty-day MBG.`
  }
  res.render("pages/hosting-region", { title: "Shared Hosting US", location: "US", content });
});
app.get("/shared-hosting-AU", (req, res) => {
  const content =
  {
    heading: `Shared Hosting in Australia `,
    paragraph: `If your web presence will be targeted at users from Australia or Oceania, then consider the Sydney datacenter facility option that we are offering. This Australian datacenter facility offers ideal conditions for your website and will guarantee you the fastest website load speed conceivable. With our 30-day money-back guarantee, you can test the website load speeds and receive your money back, if you are not happy. When you sign up, simply select the Australian datacenter on the order form and we'll set up your website hosting account quickly and will provide you with access to our point-and-click web hosting CP. We also offer a 24x7x365 customer support service and a 99.9 percent network uptime guarantee.`
  }
  res.render("pages/hosting-region", { title: "Shared Hosting AU", location: "Australia", content });
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
  res.render("pages/vps-reseller", { title: "OpenVZ VPS Hosting" });
});
app.get("/kvm-vps-hosting", (req, res) => {
  res.render("pages/vps-reseller", { title: "KVM VPS Hosting" });
});
app.get("/vps-hosting-AU", (req, res) => {
  res.render("pages/vps-reseller", { title: "VPS Hosting AU" });
});
app.get("/vps-hosting-UK", (req, res) => {
  res.render("pages/vps-reseller", { title: "VPS Hosting UK" });
});
app.get("/vps-hosting-US", (req, res) => {
  res.render("pages/vps-reseller", { title: "VPS Hosting US" });
});

app.get("/dedicated-hosting", (req, res) => {
  res.render("pages/dedicated", { title: "Dedicated Hosting" });
});
app.get("/semi-dedicated-hosting", (req, res) => {
  res.render("pages/dedicated", { title: "Semi-Dedicated Hosting" });
});
app.get("/dedicated-hosting-US", (req, res) => {
  res.render("pages/dedicated", { title: "Dedicated Hosting US" });
});

app.get("/data-center", (req, res) => {
  res.render("pages/dedicated", { title: "Data center" });
});
app.get("/data-center-US", (req, res) => {
  res.render("pages/dedicated", { title: "Data center US" });
});
app.get("/data-center-AU", (req, res) => {
  res.render("pages/dedicated", { title: "Data center AU" });
});
app.get("/data-center-UK", (req, res) => {
  res.render("pages/dedicated", { title: "Data center UK" });
});
app.get("/data-center-FI", (req, res) => {
  res.render("pages/dedicated", { title: "Data center FI" });
});
app.get("/data-center-BG", (req, res) => {
  res.render("pages/dedicated", { title: "Data center BG" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About" });
});
app.get("/why-us", (req, res) => {
  res.render("pages/about", { title: "Why us" });
});
app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact" });
});
app.get("/customer-support", (req, res) => {
  res.render("pages/knowledgebase", { title: "Customer support" });
});
app.get("/videos", (req, res) => {
  res.render("pages/help-center", { title: "Videos" });
});
app.get("/terms-and-conditions", (req, res) => {
  res.render("pages/help-center", { title: "Terms and conditions" });
});

app.get("/hespia-cp", (req, res) => {
  res.render("pages/help-center", { title: "Hespia CP" });
});
app.get("/hespia-vs-cpanel", (req, res) => {
  res.render("pages/help-center", { title: "Hespia vs cPanel" });
});
app.get("/domain-manager", (req, res) => {
  res.render("pages/help-center", { title: "Domain Manager" });
});
app.get("/file-manager", (req, res) => {
  res.render("pages/help-center", { title: "File Manager" });
});
app.get("/email-manager", (req, res) => {
  res.render("pages/help-center", { title: "Email Manager" });
});
app.get("/web-accelerators", (req, res) => {
  res.render("pages/help-center", { title: "Web Accelerators" });
});

app.get("/web-hosting-articles", (req, res) => {
  res.render("pages/help-center", { title: "Web Hosting Articles" });
});
app.get("/best-web-hosting", (req, res) => {
  res.render("pages/help-center", { title: "Best Web Hosting" });
});
app.get("/domain-web-hosting", (req, res) => {
  res.render("pages/help-center", { title: "Domain Web Hosting" });
});
app.get("/how-cpanel-hosting-works", (req, res) => {
  res.render("pages/help-center", { title: "How cPanel Hosting Works" });
});
app.get("/vps-hosting", (req, res) => {
  res.render("pages/help-center", { title: "VPS Hosting" });
});

app.get("*", function (req, res) {
  res.status(404).render("pages/404");
}); //404
