const { addnoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByHandler, deleteNoteHandler } = require("./handler");

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
