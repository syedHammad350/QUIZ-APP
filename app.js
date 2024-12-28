let quesarry=[
    {
        num:'1',
        question:'Q1  2 * 2 = ?',
        Options:{
            a:'(A) 4',
            b:'(B) 3',
            c:'(C) 6',
            d:'(D) 5',

        },
        answer:'(A) 4',
    },

    {
        num:'2',
        question:'Q2 WHAT IS THE LARGEST CITY IN PAKISTAN ?',
        Options:{
            a:'(A) KARACHI',
            b:'(B) MULTAN',
            c:'(C) LAHORE',
            d:'(D) ISLAMABAD',

        },
        answer:'(A) KARACHI',
    },
    {
        num:'3',
        question:'Q3 HOW MANY BONES IN HUMAN BODY?',
        Options:{
            a:'(A) 204',
            b:'(B) 206',
            c:'(C) 203',
            d:'(D) 202',

        },
        answer:'(B) 206',
    },
    {
        num:'4',
        question:'Q4 SUN RISES IN WHISVH DIRECTION',
        Options:{
            a:'(A) EAST',
            b:'(B) NORTH',
            c:'(C) SOUTH',
            d:'(D) WASTE',

        },
        answer:'(A) EAST',
    },
    {
        num:'5',
        question:' Q5 5*5 = ?',
        Options:{
            a:'(A) 55',
            b:'(B) 225',
            c:'(C) 25',
            d:'(D) 625',

        },
        answer:'(C) 25',
    },
    {
        num:'6',
        question:'Q6 WHAT IS THE COLOR OF BLOOD?',
        Options:{
            a:'(A) YELLOW',
            b:'(B) PINK',
            c:'(C) GREEN',
            d:'(D) RED',

        },
        answer:'(D) RED',
    },
    {
        num:'7',
        question:'Q7 HOW MANY PRAYERS IN A DAY?',
        Options:{
            a:'(A) 2',
            b:'(B) 6',
            c:'(C) 5',
            d:'(D) 10',

        },
        answer:'(C) 5',
    },
    {
        num:'8',
        question:'Q8 WHAT DOES THE HEART PUMP?',
        Options:{
            a:'(A) WATER',
            b:'(B) OXYGEN',
            c:'(C) BLOOD',
            d:'(D) SALIVA',

        },
        answer:'(C) BLOOD',
    },
    {
        num:'9',
        question:'Q9 HOW MANY DAYS IN A WEEK?',
        Options:{
            a:'(A) 8',
            b:'(B) 5',
            c:'(C) 6',
            d:'(D) 7',

        },
        answer:'(D) 7',
    },
    {
        num:'10',
        question:'Q10 HOW MANY RIVERS ARE IN PAKISTAN?',
        Options:{
            a:'(A) 4',
            b:'(B) 3',
            c:'(C) 6',
            d:'(D) 5',

        },
        answer:'(D) 5',
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
let skipQues = 0
nxtbtn.style.display='none'

//  second_fuction

let nextQues=()=>{
    if(quesCount<quesarry.length-1){
        quesCount++
// nxtbtn.style.display='none'
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
        element.classList.add( 'bg-[green]'  )
        correctAns++
        totalNumber=totalNumber+10
    }else{
        console.log('wrong')
        element.classList.add(   'bg-[red]')
        wrongAns++
        
        for(var liOption of quesoption){
            if(liOption.innerHTML === quesarry[quesCount].answer){
              liOption.classList.add('bg-[green]')
            }
          }
      
        }

        
      nxtbtn.style.display='block'
        for(var liOption of quesoption){
          liOption.classList.add('pointer-events-none')
        }
      
        

 }



