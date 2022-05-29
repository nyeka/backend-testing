const { addnoteHandler, getAllNotesHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addnoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
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
