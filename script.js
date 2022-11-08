var input1 = document.getElementById("task1"),
    res = document.getElementById("result"),
    button = document.getElementById("button");
    counter = 0;

    button.addEventListener("click",
    function (){
        if (input1.value == "github"){
            counter++
            console.log(counter)
            button.setAttribute("disabled", "true")
            }
            else{
        alert("НЕПРАВИЛЬНО")
            }
    }
)

   