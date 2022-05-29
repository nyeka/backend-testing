const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (req, h) => {
  const { title, tags, body } = req.payload;

  const id = nanoid(9);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const NewNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };
  notes.push(NewNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "succes",
      message: "Note added successfully",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Note not added",
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

const editNoteByHandler = (req, h) => {
  const { id } = req.params;

  const { title, tags, body } = req.payload;
  const updateAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      tags,
      body,
      updateAt,
    };
    const response = h.response({
      status: "success",
      message: "catatan berhasil diperbaharui",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Gagal memperbarui catatan",
  });
  response.code(404);
  return response;
};

const deleteNoteHandler = (req, h) => {
  const { id } = req.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "catatan berhasil dihapus",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "catatan tidak ditemukan",
  });
  response.code(404);
  return response;
};

const getNoteByIdHandler = (req, h) => {
  const { id } = req.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: "success",
      data: {
        note,
      },
    };
  }
  const response = h.response({
    status: "fail",
    message: "catatan tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = {
  addnoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  deleteNoteHandler,
  editNoteByHandler,
};
