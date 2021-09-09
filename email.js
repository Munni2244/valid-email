const email=document.getElementById('email');
const button=document.getElementById('button');
const errorDiv=document.getElementById('error');
const rightDiv=document.getElementById('rightDiv');

button.addEventListener('click', ()=>{
    errorDiv.textContent='';
    rightDiv.textContent='';
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const emailText= re.test(email.value);
    email.value='';
    if(!emailText){
        errorDiv.innerText='email is invaild';
    }
    else{
        rightDiv.innerText='vaild email'
    }
    
})