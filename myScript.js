function setFormMessage(formElement,type,message)
{
  const messageElement=document.querySelector(".form__message");
  messageElement.classList.remove("form__message-error","form__message-success");
  messageElement.classList.add(`form__message-${type}`);
  messageElement.textContent=message;
// console.log("it works");
}
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement)
{
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent ="";
}

document.addEventListener("DOMContentLoaded",()=>{
  const loginForm=document.querySelector("#login");
   const createAccountForm=document.querySelector("#createAccount");
  // console.log("hii");
  document.querySelector("#createLinkAccount").addEventListener("click",e=>
                                                                {
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
                                                                
  })
   document.querySelector("#linkLogin").addEventListener("click",e=>
                                                               {
    e.preventDefault(); 
     loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");                                                           
  })
  // setFormMessage(loginForm,"success","works");
  loginForm.addEventListener("submit",e=>
                            {
    e.preventDefault();
    //perform ajax/fetch login
    // setFormMessage(loginForm,"success","matched!");
    //improvise if you want match the input from user take and match give it another fucntion for validation
    //below is dummy function
    setFormMessage(loginForm,"success","");
  })
  document.querySelectorAll(".form__input").forEach(inputElement=>
                                                   {
                                                 inputElement.addEventListener("blur",e=>{
                                                   if(e.target.id=="signupUsername"&& e.target.value.length > 0 && e.target.value.length < 10)
                                                      {
                                                        setInputError(inputElement,"user length condition not matched");
                                                        console.log(e.target.value.length) ;   
                                                      }
                                                   else
                                                     {
                                                       clearInputError(inputElement);
                                                     }
                                                    })
                                                    })
})
