
const nav = require("./nav.js");
module.exports = {
  title: "java",
  description: "分享各类资源、教程、黑科技软件、工具等等",
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      sort: {
        mode: "asc",
        readmeFirst: true,
        readmeFirstForce: false
      },
      title: {
        mode: "titlecase",
        map: {}
      },
      sidebarDepth: 1,
      collapse: {
        open: false,
        collapseList: [],
        uncollapseList: []
      },
      ignore: [],
      removeEmptyGroup: false,
      git: {
        trackStatus: 'all'
      }
    }
  },
  themeConfig: {
    nav
  }
 
};