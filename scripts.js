// For journal saving.
let d = new Date();
function saveFile() {
    let journalInput = $('#journalInput').val();
    if (journalInput) {
        let textBlob = new Blob([journalInput], {type:"text/plain"});
        let URL = window.URL.createObjectURL(textBlob);
        let fileName = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

        let downloadLink = document.createElement('a');
        downloadLink.download = fileName;
        downloadLink.innerHTML = "Download Journal Entry";
        downloadLink.href = URL;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);

        downloadLink.click();
        location.reload();
        
    } else{ $('#error').html('Please write something before saving your journal.'); }
}

function destroyClickedElement(e){
    document.body.remove(e.target);
} 

$('.carousel').carousel({
    interval: false
  })