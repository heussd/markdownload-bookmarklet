function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

// https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}

function quote(text) {
  return '> ' + text.replace(/\n/g, '\n> ');
}

function addReference() {
  return '\n\n[' + window.location.href  + '](' + window.location.href  + ') (Last access ' + (new Date().toISOString()) + ')';
}

function doit() {
  download(document.title + ".md", quote(getSelectionText()) + addReference());
}

// When embedded, trigger this automatically
download(document.title + ".md", quote(getSelectionText()) + addReference());
