
 updateText = ()=>{

    let text = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = text;    
}


 makeBold = (elme) =>{
    
    elme.classList.toggle('active');

    document.getElementById('text-output').classList.toggle('bold')
}

 makeItalic = (elme) =>{
    elme.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}

 makeUnderline = (elme)=>{
    
    elme.classList.toggle('active');

    let formattedText = document.getElementById('text-output');

    if(formattedText.classList.contains('underline')){

        formattedText.classList.remove('underline');

    }
    else {
        
        formattedText.classList.add('underline');

    }
}

 alignText = (elme, alignType) =>{
     
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonlist = document.getElementsByClassName('aling');

    console.log(buttonlist);

    for(let button of buttonlist){
        buttonlist[i].classList.remove('active');
    }

    elme.classList.add('active');

}