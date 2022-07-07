
var btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    var value=document.querySelector('#input').value;
    var capt = value.substring(0, 1).toUpperCase();
    var text =value.substring(1);
    alert(capt+text);
    
})