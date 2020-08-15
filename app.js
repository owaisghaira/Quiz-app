window.onload =function(){
    show(0)
} 

var questions = [{
    ques:"what is your name1",
    ans: "owais",
    option:[
        "owais1",
        "osama1",
        "sarim1",
        "azlan1"
    ]

},
{
    ques:"what is your name2",
    ans: "owais",
    option:[
        "owais",
        "osama",
        "sarim",
        "azlan"
    ]

},
{
    ques:"what is your name3",
    ans: "owais",
    option:[
        "owais",
        "osama",
        "sarim",
        "azlan"
    ]
}

]
var ques_count = 0;
function conut(){
    ques_count++;
    console.log(ques_count)
    show(ques_count)

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
// console.log(option)
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