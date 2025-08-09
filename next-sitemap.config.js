/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.mastersealcorporation.com", // change to your domain
  generateRobotsTxt: true, // generates robots.txt file
  sitemapSize: 5000, // splits into multiple files if >5000 URLs
  exclude: ["/secret", "/server-scripts"], // optional
  changefreq: "weekly",
  priority: 0.7,
};
