export const CONFIG = {
  videoUpload: (file) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);
      // aj函数见下面声明
      console.log(file);
      //  const test = aj("http://127.0.0.1:8080/upload", "POST", "json", formData);
      //  test.subscribe((res) => {
      //          resolve({url: "http://127.0.0.1:8080/" + res.url});
      //      }, error => {
      //          reject(res)
      //      }
      //  )
    });
  },
  imageUpload: (file) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);
      console.log(file);
      // const test = aj("http://127.0.0.1:8080/upload", "POST", "json", formData);
      // test.subscribe((res) => {
      //         resolve({url: "http://127.0.0.1:8080/" + res.url});
      //     }, error => {
      //         reject(res)
      //     }
      // )
    });
  },
  mediaEmbed: {
    extraProviders: [
      {
        name: "zdy",
        url: [/(.*?)/],
        html: (match) => {
          const src = match.input;
          return (
            '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;pointer-events: auto;">' +
            '<video controls style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" src="' +
            src +
            '">' +
            "</video>" +
            "</div>"
          );
        },
      },
    ],
  },
  heading: {
    options: [
      { model: "paragraph", title: "paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h1",
        title: "heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "heading 4",
        class: "ck-heading_heading4",
      },
    ],
  },
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "fontBackgroundColor",
      "fontColor",
      "fontSize",
      "fontFamily",
      "link",
      "insertTable",
      // "imageUpload",
      "imageInsert",
      "mediaEmbed",
      'CKFinder',
      "bulletedList",
      "numberedList",
      "removeFormat",
      "|",
      "alignment",
      "indent",
      "outdent",
      "|",
      "blockQuote",
      "undo",
      "redo",
      "code",
      "codeBlock",
      "highlight",
      "exportPdf",
      "specialCharacters",
      "horizontalLine",
      "MathType",
      "ChemType",
      "strikethrough",
      "subscript",
      "superscript",
      "todoList",
      "restrictedEditingException",
    ],
  },
  alignment: {
    options: ["left", "center", "right", "justify"],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "|",
      "imageStyle:alignLeft",
      "imageStyle:full",
      "imageStyle:alignRight",
    ],
    resizeUnit: "px",
    types: ["jpeg", "png", "gif", "bmp", "webp", "tiff"],
    styles: ["full", "alignLeft", "alignRight"],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
  tableProperties: {
    // ...
  },

  tableCellProperties: {
    // ...
  },
  fontFamily: {
    options: [
      "default",
      "Arial, Helvetica, sans-serif",
      "Courier New, Courier, monospace",
      "Georgia, serif",
      "Lucida Sans Unicode, Lucida Grande, sans-serif",
      "Tahoma, Geneva, sans-serif",
      "Times New Roman, Times, serif",
      "Trebuchet MS, Helvetica, sans-serif",
      "Verdana, Geneva, sans-serif",
      "Rubik, sans-serif"
    ],
  },
  licenseKey: "",
};
