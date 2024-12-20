let quesarry=[
    {
        num:'1',
        question:'2 * 2 = ?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'4',
    },

    {
        num:'2',
        question:'FULL FORM OF PSL ?',
        Options:{
            a:'pakistion sasti league',
            b:'pakistion supreame league',
            c:'pakistion super league ',
            d:'pakistion simple league',

        },
        answer:'pakistion super league ',
    },
    {
        num:'3',
        question:'HOW MANY BONES ARE THERE IN THE HUMAN BODY?',
        Options:{
            a:'204',
            b:'206',
            c:'203',
            d:'202',

        },
        answer:'206 ',
    },
    {
        num:'4',
        question:'SUN RISES IN WHISVH DIRECTION',
        Options:{
            a:'EAST',
            b:'NORTH',
            c:'SOUTH',
            d:'WASTE',

        },
        answer:'EAST',
    },
    {
        num:'5',
        question:'2 * 2 = ?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'4',
    },
    {
        num:'6',
        question:'2 * 2 = ?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'4',
    },
    {
        num:'7',
        question:'2 * 2 = ?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'4',
    },
    {
        num:'8',
        question:'2 * 2 = ?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'4',
    },
    {
        num:'9',
        question:'2 * 2 = ?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'4',
    },
    {
        num:'10',
        question:'2 * 2 = ?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'4',
    },
   
]



let h1_name=document.querySelector('.set_name')
let h1_email=document.querySelector('.set_email')
let h1_rollno=document.querySelector('.set_rollno')
let h1_institute=document.querySelector ('.set_institute')
let form=document.querySelector('.form_container')
let main_div=document.querySelector('.main_div')
let forminputs=document.querySelector('.forminputs')

// function
let startquiz=()=>{
    let user_name= document.querySelector(".user_name").value
    let user_email= document.querySelector(".user_email").value
    let user_rollno= document.querySelector(".user_rollno").value
    let user_institute= document.querySelector(".user_institute").value

    if(!user_name || !user_email ||!user_rollno || !user_institute){
        alert('plz ENTER YOUR INFORMATION')
        return

    }
    
    main_div.style.display='block'
   forminputs.style.display = 'none'

    h1_name.innerHTML=user_name
    h1_email.innerHTML=user_email
    h1_rollno.innerHTML=user_rollno
    h1_institute .innerHTML=user_institute

}
