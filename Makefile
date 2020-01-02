bookmarklet: markdownload.js
	cp markdownload.js markdownload-cp.js
	cp markdownload.js markdownload-dl.js

	echo "markdowncopySelection()" >> markdownload-cp.js
	bookmarklet markdownload-cp.js markdowncopy-bookmarklet.js
	
	echo ";markdownloadSelection();" >> markdownload-dl.js
	bookmarklet markdownload-dl.js markdownload-bookmarklet.js

prepare:
	npm install -g bookmarklet
