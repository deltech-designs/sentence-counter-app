
const textarea = document.querySelector('.textarea'); 

function adjustHeight(ev) {
    ev.preventDefault();

    textarea.style.height = '30vh'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 

    const textField =  document.querySelector('.textarea').value;
     document.querySelector('.characters-length').innerHTML = textField.length; 
     document.querySelector('.words-length').innerHTML = textField.trim().length; 
     document.querySelector('.sentence-length').innerHTML = textField.trim().split(/\s+/).length; 
     document.querySelector('.paragrpah-length').innerHTML = textField.trim().split(/\n\n|\r\n\r\n/).length; 

    console.log(textField); 
}

textarea.addEventListener('input', adjustHeight); 