const {
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByHandler,
  deleteNoteHandler,
  addNoteHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: `/notes/{id}`,
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: `/notes/{id}`,
    handler: editNoteByHandler,
  },
  {
    method: "DELETE",
    path: `/notes/{id}`,
    handler: deleteNoteHandler,
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
