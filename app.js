window.onload =function(){
    show(0)
    // velidate(0)
} 

var questions = [{
    ques:"What is the capital of Chile?",
    ans: "Santiago",
    option:[
        "Santiag",
        "Santiago",
        "Satiago",
        "Antiago"
    ]

},
{
    ques:"What is the highest mountain in Britain?",
    ans: " Ben Nevis",
    option:[
        " Ben Nevis",
        " Nevis",
        " Be Nevis",
        " Bn Nevis"
    ]

},
{
    ques:"What is the smallest country in the world?",
    ans: "Vatican City",
    option:[
        "Vatican",
        "Tican City",
        "Vatican",
        "Vatican City"
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
        
    }
}

}
function velidate(a){
    var active = document.getElementsByClassName("active")
    if(active[0].innerHTML == questions[a].ans){
        score += 10;
        count++
        
    }
    console.log(score)
    if (questions[a] == questions[2]){
        alert("your score is "+score)
        
    }
}