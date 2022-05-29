const { nanoid } = require("nanoid");
const notes = require("./notes");

const addnoteHandler = (req, h) => {
  const { title, tag, body } = req.payload;

  const id = nanoid(16);
  const createAt = new Date().toISOString;
  const updateAt = createAt;

  const newNotes = () => {
    title, tag, body, id, createAt, updateAt;
  };
  notes.push(newNotes);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      statusCode: 200,
      message: "Success",
      data: { noteId: id },
    });
    response.header("Access-Control-Allow-Origin", "*");

    return response;
  }

  const response = h.response({
    statusCode: 400,
    message: "Failed",
  });
  return response;
};

const getAllNote = () => ({
    status: 200,
    data : notes
})

module.exports = { addnoteHandler, getAllNote };
