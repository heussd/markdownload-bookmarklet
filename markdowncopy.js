function getSelectionText() {
    var text = "";
    var selections = window.getSelection();
    if (selections) {
      text = selections.getRangeAt(0).toString();
      for(var i=1; i<selections.rangeCount; i++) {
        text += "\n\n[...]\n\n" + selections.getRangeAt(i)
      }
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.rows = 10;
  textArea.cols = 100;
  textArea.style.position = "fixed";
  textArea.style.top = "20px";
  textArea.style.left = "20px";
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

function doit() {
  content = quote(getSelectionText()) + addReference();
	copyTextToClipboard(content);
}

// When embedded, trigger this automatically
doit()
