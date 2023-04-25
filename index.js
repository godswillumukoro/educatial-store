require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const { openVZVpsHosting } = require('./views/text/vps/openVZVpsHosting')
const { kvmVpsHosting } = require('./views/text/vps/kvmVpsHosting')
const { vpsHostingAu } = require('./views/text/vps/vpsHostingAu')
const { vpsHostingUk } = require('./views/text/vps/vpsHostingUk')
const { vpsHostingUs } = require('./views/text/vps/vpsHostingUs')
const { dedicatedIndex } = require('./views/text/dedicated/dedicatedIndex')
const { dedicatedSemi } = require('./views/text/dedicated/dedicatedSemi')
const { dedicatedUs } = require('./views/text/dedicated/dedicatedUs')
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(process.env.PORT);

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Home", headerImage: true });
});

app.get("/order-now", (req, res) => {
  res.render("pages/order-now", { title: "Order Now" });
});
app.get("/shared-hosting", (req, res) => {
  res.render("pages/hosting", { title: "Shared Hosting", headerImage: true });
});
app.get("/shared-hosting-UK", (req, res) => {
  const content =
  {
    heading: ` Trust your client sites to the best UK hosting service`,
    paragraph: `We offer you the chance to host your UK-oriented sites in a datacenter facility situated only several kilometers outside London. This means that your visitors from the United Kingdom and Continental Europe will enjoy much faster web site loading speeds. You can select the UK data center facility on the signup form. Just choose your hosting plan and then select the UK data center from the drop-down menu. We'll create your website hosting account in no time. You will get our in-house created web hosting Control Panel. We also offer a 99.9% server uptime guarantee and a 24/7/365 client support service.`
  }

  res.render("pages/hosting-region", { title: "Shared Hosting UK", location: "UK", content, headerImage: true });
});
app.get("/shared-hosting-US", (req, res) => {
  const content =
  {
    heading: `Shared Hosting in US `,
    paragraph: `We think that the datacenter facility location is the key to ensuring an outstanding-quality hosting service and for this reason we offer you the opportunity to host your web sites in one of the most famous datacenter facilities in the United States. It is conveniently situated in downtown Chicago and provides excellent conditions for your web site, so you can ensure a truly smooth browsing experience for your visitors from the US, Canada and Latin America. You can select the Chicago data center on the order form and once you sign up, your account will be created very quickly. We also offer a point 'n' click web hosting Control Panel and a thirty-day MBG.`
  }
  res.render("pages/hosting-region", { title: "Shared Hosting US", location: "US", content, headerImage: true });
});
app.get("/shared-hosting-AU", (req, res) => {
  const content =
  {
    heading: `Shared Hosting in Australia `,
    paragraph: `If your web presence will be targeted at users from Australia or Oceania, then consider the Sydney datacenter facility option that we are offering. This Australian datacenter facility offers ideal conditions for your website and will guarantee you the fastest website load speed conceivable. With our 30-day money-back guarantee, you can test the website load speeds and receive your money back, if you are not happy. When you sign up, simply select the Australian datacenter on the order form and we'll set up your website hosting account quickly and will provide you with access to our point-and-click web hosting CP. We also offer a 24x7x365 customer support service and a 99.9 percent network uptime guarantee.`
  }
  res.render("pages/hosting-region", { title: "Shared Hosting AU", location: "Australia", content, headerImage: true });
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
  const content =
  {
    heading: `OpenVZ Virtual Private Servers`,
    paragraph: `Our OpenVZ virtual private servers feature copious CPU usage and RAM quotas, as well as a ninety-nine point nine percent network uptime guarantee. A 24/7/365 client support service is available as well. Each virtual private servers plan offers full root access as well as tons of free-of-charge bonuses.
    You can get an OpenVZ virtual server for just $6.00 a month. You can use our free-of-cost Hepsia hosting CP, which will allow you to host an unmetered number of domain names. A website installation tool, a sitemap generator and an .htaccess generator are just a few of the practical tools that we have incorporated in our web hosting Control Panel.`
  }
  res.render("pages/vps-reseller-options", { title: "OpenVZ VPS Hosting", content, openVZVpsHosting });
});
app.get("/kvm-vps-hosting", (req, res) => {
  res.render("pages/vps-reseller-options", { title: "KVM VPS Hosting", gridSection: true, kvmVpsHosting });
});
app.get("/vps-hosting-AU", (req, res) => {
  const content =
  {
    heading: `VPS Hosting in Australia`,
    paragraph: `Fast website load speeds are very important for us, so we offer you an abundant amount of RAM memory resources and, most importantly, a number of datacenter facility options. For your visitors from Australia and Oceania, we have a data center facility located in Sydney. The datacenter facility offers perfect conditions for your Virtual Private Server. Just select the Australian datacenter facility on the signup form. We'll do everything we can to configure your VPS quickly. It will be equipped with the OS of your liking. An administration dashboard, a selection of free reseller web hosting tools and a free web hosting CP are available as well. VPS Hosting in Australia`
  }
  res.render("pages/vps-reseller-options", { title: "VPS Hosting in AU", content, vpsHostingAu });
});
app.get("/vps-hosting-UK", (req, res) => {
  const content =
  {
    heading: `VPS Hosting in UK`,
    paragraph: `We offer you an affordable VPS web hosting solution, which is perfect if you want to target European-based visitors. Since the datacenter location has a big influence on the loading speed of your website, by hosting your Virtual Private Server close to your European-based customers you ensure that they will enjoy the greatest browsing experience attainable. Тhe UK data center option is available with all OpenVZ VPS web hosting plans offered on our store. Simply select your preferred Virtual Private Server web hosting plan and OS and then select the UK data center from the drop-down menu. We'll handle the rest for you and will configure the VPS server you have ordered in no time. A free-of-cost hosting CP is included too!`
  }
  res.render("pages/vps-reseller-options", { title: "VPS Hosting UK", content, vpsHostingUk });
});
app.get("/vps-hosting-US", (req, res) => {
  const content =
  {
    heading: `VPS Hosting in US`,
    paragraph: `We will ensure the hassle-free performance of your North America-oriented websites. The US datacenter we partner with is situated in downtown Chicago, Illinois, and offers ideal conditions for hosting sites whose visitors are physically located in the USA, Canada or Latin America. On the signup form, simply select the Chicago datacenter from the drop-down menu and we'll configure the Virtual Private Server for you in no time. There are no signup taxes and we also offer you a 99.9 percent network uptime guarantee. With each Virtual Private Server web hosting package, we offer an administrative dashboard and a bunch of cost-free reseller hosting tools. You can also use our proprietary hosting Control Panel for free.`
  }
  res.render("pages/vps-reseller-options", { title: "VPS Hosting US", content, vpsHostingUs });
});

app.get("/dedicated-hosting", (req, res) => {
  res.render("pages/dedicated", { title: "Dedicated Hosting", dedicatedIndex });
});
app.get("/semi-dedicated-hosting", (req, res) => {
  res.render("pages/dedicated-reseller-options", { title: "Semi-Dedicated Hosting", gridSection: true, dedicatedSemi });
});
app.get("/dedicated-hosting-US", (req, res) => {
  const content =
  {
    heading: `Dedicated Servers Hosting in US`,
    paragraph: `With a dedicated servers hosting, you can fix any website performance-connected problems. Picking a reliable US-based datacenter for your US-oriented websites is essential for reaching greater performance levels. This is the reason why we work with a state-of-the-art data center facility located in downtown Chicago, IL. This cooperation ensures that all our dedicated server customers will enjoy much faster web page loading speeds. Our dedicated servers plans come with a cost-free hosting CP, a bouquet of Linux distributions and numerous value-added extras.`
  }
  res.render("pages/dedicated-reseller-options", { title: "Dedicated Hosting US", content, dedicatedUs });
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
