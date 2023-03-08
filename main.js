let myDiv = document.getElementById("myDiv");
let buttons = myDiv.querySelectorAll("button");
let myInput = document.getElementById("bill")
let total = document.getElementById("s2")
let secInput = document.getElementById("people")
let tipAmount = document.getElementById("s1")
let custom = document.getElementById("perc")
let reset = document.getElementById("reset")
let zero = document.getElementById("zero")
let peopleDiv = document.getElementById("peopleDiv")


buttons.forEach(button => {
    let value = button.value;
    console.log(value);
    button.addEventListener("click",function(){
        // tipAmount.innerHTML = input / secinp * button.value / 100
        let ans = input / secinp * button.value / 100
        ans = ans.toFixed(2)
        tipAmount.innerHTML = "$" + ans

        // total.innerHTML = input / secinp + tipAmount.innerHTML * 1
        let answer = input / secinp + ans *1
        answer = answer.toFixed(2)
 
        total.innerHTML = "$" + answer

        reset.style.backgroundColor = "#26C2AE"
        reset.style.color = "#00474B"
        if(secinp == 0){
            zero.style.display = "block"
            peopleDiv.style.border = "4px solid #E17052"
            
        }

        if(input == 0 && secinp == 0){
            total.innerHTML = "$0.00"
            tipAmount.innerHTML = "$0.00"
        }
    })
    custom.addEventListener("input", function(){
        percento = custom.value
        tipAmount.innerHTML = input / secinp * percento / 100
        total.innerHTML = input / secinp + tipAmount.innerHTML *1 
        reset.style.backgroundColor = "#26C2AE"
        reset.style.color = "#00474B"
        if(input == 0 && secinp == 0){
            total.innerHTML = "$0.00"
            tipAmount.innerHTML = "$0.00"
        }
    })

    reset.addEventListener("click", function(){
        total.innerHTML = "$0.00"
        tipAmount.innerHTML = "$0.00"
        bill.innerHTML = 0
        secInput. innerHTML = 0
        zero.style.display = "none"
        peopleDiv.style.border = "0"
        if(input >= 0 && secinp >= 0){
           bill.value = 0
           secInput.value = 0
        }
    })
  });

let input = 0
myInput.addEventListener("input",function(){
    input = myInput.value
})
let secinp = 0
secInput.addEventListener("input", function(){
    secinp = secInput.value
})

