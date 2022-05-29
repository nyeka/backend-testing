const { nanoid } = require("nanoid");
const notes = require("./notes");

const addnoteHandler = (req, h) => {
  const { title, tags, body } = req.payload;

  const id = nanoid(16);
  const createAt = new Date().toISOString;
  const updateAt = createAt;

  const newNotes = () => {
    title, tags, body, id, createAt, updateAt;
  };
  notes.push(newNotes);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Berhasil Ditambahkan",
      data: { noteId: id },
    });
    response.code(201);

    return response;
  }

  const response = h.response({
    status: "error",
    message: "Batal Ditambakan",
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

module.exports = { addnoteHandler, getAllNotesHandler };
