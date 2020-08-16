window.onload =function(){
    show(0)
    // velidate(0)
} 

var questions = [{
    ques:"what is your name1",
    ans: "owais1",
    option:[
        "owais1",
        "osama1",
        "sarim1",
        "azlan1"
    ]

},
{
    ques:"what is your name2",
    ans: "osama",
    option:[
        "owais",
        "osama",
        "sarim",
        "azlan"
    ]

},
{
    ques:"what is your name3",
    ans: "sarim",
    option:[
        "owais",
        "osama",
        "sarim",
        "azlan"
    ]
}

]
var ques_count = 0;
var score = 0;
var count = 0;
function conut(){
    ques_count++;
    // console.log(ques_count)
    velidate(count)
    show(ques_count)
   
    // console.log(score)

}
function show(e){
    var question = document.getElementById("ques")
    question.innerHTML = `<h1> ${questions[e].ques} </h1>
    <ul class="lst">
                        <li class="option">${questions[e].option[0]}</li>
                        <li class="option">${questions[e].option[1]}</li>
                        <li class="option">${questions[e].option[2]}</li>
                        <li class="option">${questions[e].option[3]}</li>
                    </ul> `;
                    active()
                    
}

function active(){
let option1 = document.querySelectorAll("li.option")
// console.log(option1)
for (let i = 0 ; i < option1.length ; i++){
    option1[i].onclick = function(){
        for(let j = 0;j<option1.length;j++){
            if(option1[j].classList.contains("active")){
                
                option1[j].classList.remove("active")
            }

        }
        
        option1[i].classList.add("active")
        // if(option1[i].innerHTML == questions[0].ans){
        //     score += 10;
        //     console.log(score)
        // }
    }
}

}
function velidate(a){
    var active = document.getElementsByClassName("active")
    if(active[0].innerHTML == questions[a].ans){
        score += 10;
        
    }
    console.log(score)
}