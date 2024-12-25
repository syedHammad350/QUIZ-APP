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
        answer:'206',
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
        question:'5*5 = ?',
        Options:{
            a:'55',
            b:'225',
            c:'25',
            d:'625',

        },
        answer:'25',
    },
    {
        num:'6',
        question:'WHAT IS THE COLOR OF BLOOD?',
        Options:{
            a:'YELLOW',
            b:'PINK',
            c:'GREEN',
            d:'RED',

        },
        answer:'RED',
    },
    {
        num:'7',
        question:'WHICH IS THE TALLEST BUILDING ON THE EARTH?',
        Options:{
            a:'BURJ KHALIFA',
            b:'SHANGHAI TOWER',
            c:'MERDEKA',
            d:'LOTTE WORLD TOWER',

        },
        answer:'BURJ KHALIFA',
    },
    {
        num:'8',
        question:'WHAT DOES THE HEART PUMP?',
        Options:{
            a:'WATER',
            b:'OXYGEN',
            c:'BLOOD',
            d:'SALIVA',

        },
        answer:'BLOOD',
    },
    {
        num:'9',
        question:'WHAT IS THE NATIONAL COLOR OF PAKISTAN?',
        Options:{
            a:'GREEN & WHITE',
            b:'GREEN & BLUE',
            c:'GREEN & RED',
            d:'GREEN & YELLOW',

        },
        answer:'GREEN & WHITE',
    },
    {
        num:'10',
        question:'HOW MANY RIVERS ARE IN PAKISTAN?',
        Options:{
            a:'4',
            b:'3',
            c:'6',
            d:'5',

        },
        answer:'5',
    },
   
]
let ques=document.getElementById('ques')
let quesoption=document.getElementById('quesoption ').children
// console.log(quesoption)

for( let lioption of quesoption){
    lioption.setAttribute('onclick','selectoption(this)')
    lioption.classList.add('mt-1','cursor-pointer')
}



let h1_name=document.querySelector('.set_name')
let h1_email=document.querySelector('.set_email')
let h1_rollno=document.querySelector('.set_rollno')
let h1_institute=document.querySelector ('.set_institute')
let form=document.querySelector('.form_container')
let main_div=document.querySelector('.main_div')
console.log(main_div)
let forminputs=document.querySelector('.forminputs')
let nxtbtn=document.getElementById('btn')
// console.log(nxtbtn)

let result=document.querySelector('.result')

let tQues=document.getElementById('tQues')
let cAns=document.getElementById('cAns')
let wAns=document.getElementById('wAns')
let tNum=document.getElementById('tNum')

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

    ques.innerHTML= quesarry[quesCount].question
    quesoption[0].innerHTML = quesarry[quesCount].Options.a
    quesoption[1].innerHTML = quesarry[quesCount].Options.b
    quesoption[2].innerHTML = quesarry[quesCount].Options.c
    quesoption[3].innerHTML = quesarry[quesCount].Options.d
  

}
let quesCount=0
let totalQues = quesarry.length
let correctAns = 0
let wrongAns = 0
let totalNumber = 0
nxtbtn.style.display='none'

//  second_fuction

let nextQues=()=>{
    if(quesCount<quesarry.length-1){
        quesCount++

        ques.innerHTML= quesarry[quesCount].question
        quesoption[0].innerHTML = quesarry[quesCount].Options.a
        quesoption[1].innerHTML = quesarry[quesCount].Options.b
        quesoption[2].innerHTML = quesarry[quesCount].Options.c
        quesoption[3].innerHTML = quesarry[quesCount].Options.d
    }else{
        result.style.display='block'
     main_div.style.display='none'
        tQues.innerHTML=totalQues
        cAns.innerHTML=correctAns
        wAns.innerHTML=wrongAns
        tNum.innerHTML=totalNumber
    }
    for(let lioption of quesoption){
        lioption.classList.remove('bg-[red]', 'bg-[green]', 'text-white','pointer-events-none')
    }
   

}
//  THIRD FUNCTION
 let selectoption = (element)=>{
    if(element.innerHTML==quesarry[quesCount].answer){
        console.log('correct')
        element.classList.add( 'bg-[green]'  ,'text-[white]')
        correctAns++
        totalNumber=totalNumber+10
    }else{
        console.log('wrong')
        element.classList.add(   'bg-[red]','text-[white]')
        wrongAns++
        for(var liOption of quesoption){
            if(liOption.innerHTML === quesarry[quesCount].answer){
              liOption.classList.add('bg-[green]')
            }
          }
      
        }
      
        for(var liOption of quesoption){
          liOption.classList.add('pointer-events-none')
        }
        nxtbtn.style.display='block'

 }



