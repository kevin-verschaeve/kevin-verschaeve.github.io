module.exports = function(eleventyConfig) {
  // Copier les assets (CSS, JS, images, etc.) directement
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("svg");

  // Configuration du serveur de développement
  eleventyConfig.setServerOptions({
    port: 8080,
    showAllHosts: true
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    templateFormats: ["html", "md", "njk", "liquid"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
