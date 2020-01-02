function getPocketHighlights() {
  var text = "";

  var highlights = document.getElementsByClassName("highlight");
  for(var i = 0; i < highlights.length; i++) {
    text += "\n\n[...]\n\n" + highlights.item(i).innerHTML;
  }
  return text;
}

function getSelectionText() {
    var text = "";
    var selections = window.getSelection();
    if (selections && selections.rangeCount > 0) {
      text = selections.getRangeAt(0).toString();
      for(var i=1; i<selections.rangeCount; i++) {
        text += "\n\n[...]\n\n" + selections.getRangeAt(i)
      }
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }

    if (text == "") {
      // No active text selection found fall back to special cases
      text = getPocketHighlights(); 
    }

    console.log("Found selected text \"" + text + "\"");
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

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.rows = 100;
  textArea.cols = 100;
  textArea.style.position = "fixed";
  textArea.style.top = "20px";
  textArea.style.left = "20px";
  textArea.style.zIndex = "999999999";
  textArea.onclick = function () {
      this.select();
      document.execCommand('copy');
      this.parentElement.removeChild(this);
  };
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  //var successful = document.execCommand('copy');
}

function quote(text) {
  text = text.replace(/\n+/g, '\n');
  text = text.replace(/(\r\n|\n+|\r)/gm, '\n');
  return '> ' + text.replace(/\n/g, '\n>\n>');
}

function addReference() {
  return '\n\n[' + window.location.href  + '](' + window.location.href  + ')\n(Last access ' + (new Date().toISOString()) + ')';
}

function markdowncopySelection() {
  content = quote(getSelectionText()) + addReference();
	copyTextToClipboard(content);
}

function markdownloadSelection() {
  download(document.title + ".md", quote(getSelectionText()) + addReference());
}

// When embedded, trigger this automatically
// markdowncopySelection()
