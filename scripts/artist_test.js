const rightAnswers = ['A', 'A', 'A', 'A', 'A'];
const form = document.querySelector('.form_test'); 
const resultTest = document.querySelector('.resultTest'); 
const removeBtn = document.querySelector('#testButton');
let finalResult = 0;


function calcResult() {

    const answers = [form.a1.value, form.a2.value, form.a3.value,
    form.a4.value, form.a5.value];
    
    for (let i = 0; i < answers.length-1; i++) {
             
        if (answers[i] === rightAnswers[i]) {
            finalResult++;
        }
    }

    resultTest.innerHTML +=`<p class="finishTest">Your results are: ${finalResult}/5</p>`; 
    removeBtn.parentElement.removeChild(removeBtn);

    document.createElement("button")


}




