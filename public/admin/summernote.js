$(document).ready(function () {
    $("#summernote-1").summernote({
      height: 300, // Set the height of the editor
      toolbar: [
        // Other buttons
        ['para', ['ul', 'ol', 'paragraph']], // List buttons
      ],
      styleTags: [
        'p',
        {
          title: 'Ordered List',
          tag: 'ol',
          className: 'list-decimal list-inside', // Add Tailwind classes
        },
        {
          title: 'Unordered List',
          tag: 'ul',
          className: 'list-disc list-inside', // Add Tailwind classes
        },
      ],
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
    // Set konten awal
  var initialContent = "Konten yang telah diisi sebelumnya...\nBaris kedua.";
  $('#summernote-1').summernote('code', initialContent);
  });
  

  $(document).ready(function () {
    $("#summernote-2").summernote({
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
    // Set konten awal
  var initialContent = "Konten yang telah diisi sebelumnya...\nBaris kedua.";
  $('#summernote-2').summernote('code', initialContent);
  });
  
  $(document).ready(function () {
    $("#summernote-3").summernote({
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