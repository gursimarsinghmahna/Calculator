let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        ButtonText = e.target.innerText;
        console.log('Button text is', ButtonText);
        if(ButtonText == 'X')
        {
            ButtonText = '*';
            screenValue += ButtonText;
            screen.value = screenValue; 
        }
        else if(ButtonText == "C")
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(ButtonText == "=")
        {
            screen.value=eval(screenValue);
        }
        else{
            screenValue += ButtonText;
            screen.value = screenValue;
        }
    })
}