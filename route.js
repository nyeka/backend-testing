const { addnoteHandler, getAllNote } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "anjay";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "AboutPage";
    },
  },
  {
    method: "GET",
    path: "/halo/{name?}",
    handler: (request, h) => {
      const { name = "Stranger" } = request.params;
      return `Halo ${name}`;
    },
  },
  {
    method: "POST",
    path: "/notes",
    handler: addnoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNote,
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Page Tidak Ditemukan";
    },
  },
];

module.exports = routes;
