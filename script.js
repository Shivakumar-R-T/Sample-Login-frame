const inputEmail=document.getElementById('input-email');

const inputPassword=document.getElementById('input-password');

const inputconPassword=document.getElementById('input-conpassword');

const emailWarning=document.getElementById('input-email-Warning');

const passwordWarning=document.getElementById('input-password-Warning');

const conpasswordWarning=document.getElementById('input-conpassword-Warning');


function checkErrors(inputValue,warningElement)
{
    let error=false;
    if(inputValue==='')
    {
        warningElement.innerHTML='*This field required';
        error=true;
    }
    else if(inputValue.length<6)
    {
        warningElement.innerHTML='Must be at least 6 character';
        error=true;
    }
    

    else{
        warningElement.innerHTML=''
    }

    return error
}


function login()
{
    console.log(inputEmail.value,inputPassword.value ,inputconPassword.value);

  const emailerror=  checkErrors(inputEmail.value,emailWarning);
  const passworderror=checkErrors(inputPassword.value,passwordWarning);
  const conPasserror=checkErrors(inputconPassword.value,conpasswordWarning)

  console.log(emailerror,passworderror);

  if(!emailerror&&!passworderror&&!conPasserror)
  {
    if(inputPassword.value==inputconPassword.value)
         location.href='./success.html'; 
     
    else{
        conpasswordWarning.innerHTML="Passwords Do Not Match"
    }     
    
  }
}

