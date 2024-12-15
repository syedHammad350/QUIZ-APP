
let h1_name=document.querySelector('.set_name')
let h1_email=document.querySelector('.set_email')
let h1_rollno=document.querySelector('.set_rollno')
let h1_institute=document.querySelector('.set_institute')
let form=document.querySelector('.form_container')
let main_div=document.querySelector('.main_div')
let forminputs=document.querySelector('.forminputs')

// function
let startquiz=()=>{
    let user_name= document.querySelector(".user_name").value
    let user_email= document.querySelector(".user_email").value
    let user_rollno= document.querySelector(".user_rollno").value
    let user_institute= document.querySelector(".user_institute").value

    // if(!user_name || !user_email ||!user_rollno || !user_institute){
    //     alert('plz ENTER YOUR INFORMATION')
    //     return

    // }
    
    main_div.style.display='block'
   forminputs.style.display = 'none'

    h1_name.innerHTML=user_name
    h1_email.innerHTML=user_email
    h1_rollno.innerHTML=user_rollno
    h1_institute .innerHTML=user_institute

}
