$(document).ready(function () {
    $("#summernote-2").summernote2({
      height: 300, // Set the height of the editor
      toolbar: [
        ["style", ["style"]],
        ["font", ["bold", "italic", "underline", "clear"]],
        ["fontname", ["fontname"]],
        ["fontsize", ["fontsize"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]], // List buttons
        ["table", ["table"]],
        ["insert", ["link", "picture", "video"]],
        ["view", ["fullscreen", "codeview", "help"]],
      ],
    });
  });