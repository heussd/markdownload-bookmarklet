javascript:(function()%7B%22use%20strict%22%3Bfunction%20getPocketHighlights()%7Bfor(var%20e%3D%22%22%2Ct%3Ddocument.getElementsByClassName(%22highlight%22)%2Cn%3D0%3Bn%3Ct.length%3Bn%2B%2B)e%2B%3D%22%5Cn%5Cn%5B...%5D%5Cn%5Cn%22%2Bt.item(n).innerHTML%3Breturn%20e%7Dfunction%20getSelectionText()%7Bvar%20e%3D%22%22%2Ct%3Dwindow.getSelection()%3Bif(t%26%260%3Ct.rangeCount)%7Be%3Dt.getRangeAt(0).toString()%3Bfor(var%20n%3D1%3Bn%3Ct.rangeCount%3Bn%2B%2B)e%2B%3D%22%5Cn%5Cn%5B...%5D%5Cn%5Cn%22%2Bt.getRangeAt(n)%7Delse%20document.selection%26%26%22Control%22!%3Ddocument.selection.type%26%26(e%3Ddocument.selection.createRange().text)%3Breturn%22%22%3D%3De%26%26(e%3DgetPocketHighlights())%2Cconsole.log('Found%20selected%20text%20%22'%2Be%2B'%22')%2Ce%7Dfunction%20download(e%2Ct)%7Bvar%20n%3Ddocument.createElement(%22a%22)%3Bn.setAttribute(%22href%22%2C%22data%3Atext%2Fplain%3Bcharset%3Dutf-8%2C%22%2BencodeURIComponent(t))%2Cn.setAttribute(%22download%22%2Ce)%2Cn.style.display%3D%22none%22%2Cdocument.body.appendChild(n)%2Cn.click()%2Cdocument.body.removeChild(n)%7Dfunction%20copyTextToClipboard(e)%7Bvar%20t%3Ddocument.createElement(%22textarea%22)%3Bt.value%3De%2Ct.rows%3D100%2Ct.cols%3D100%2Ct.style.position%3D%22fixed%22%2Ct.style.top%3D%2220px%22%2Ct.style.left%3D%2220px%22%2Ct.style.zIndex%3D%22999999999%22%2Ct.onclick%3Dfunction()%7Bthis.select()%2Cdocument.execCommand(%22copy%22)%2Cthis.parentElement.removeChild(this)%7D%2Cdocument.body.appendChild(t)%2Ct.focus()%2Ct.select()%7Dfunction%20quote(e)%7Breturn%22%3E%20%22%2B(e%3D(e%3De.replace(%2F%5Cn%2B%2Fg%2C%22%5Cn%22)).replace(%2F(%5Cr%5Cn%7C%5Cn%2B%7C%5Cr)%2Fgm%2C%22%5Cn%22)).replace(%2F%5Cn%2Fg%2C%22%5Cn%3E%5Cn%3E%22)%7Dfunction%20addReference()%7Breturn%22%5Cn%5Cn%5B%22%2Bwindow.location.href%2B%22%5D(%22%2Bwindow.location.href%2B%22)%5Cn(Last%20access%20%22%2B(new%20Date).toISOString()%2B%22)%22%7Dfunction%20markdowncopySelection()%7Bcontent%3Dquote(getSelectionText())%2BaddReference()%2CcopyTextToClipboard(content)%7Dfunction%20markdownloadSelection()%7Bdownload(document.title%2B%22.md%22%2Cquote(getSelectionText())%2BaddReference())%7DmarkdownloadSelection()%3B%7D)()