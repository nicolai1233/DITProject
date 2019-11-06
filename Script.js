window.addEventListener("load", () => {
  //  let ws = new WebSocket("ws://localhost:8080/");
    // addition
    let AdditionNumber1 = document.getElementById("AdditionNumber1");
    let AdditionNumber2 = document.getElementById("AdditionNumber2");
    let AdditionOutPut = document.getElementById("AdditionOutPut");
    let Additionbutton = document.getElementById("AdditionButton");

    // Multiplication 
    let MultiplicationNumber1 = document.getElementById("MultiplicationNumber1");
    let MultiplicationNumber2 = document.getElementById("MultiplicationNumber2");
    let MultiplicationButton = document.getElementById("MultiplicationButton");
    let MultiplicationOutPut = document.getElementById("MultiplicationOutPut");

    // Substraction
    let SubstractionNumber1 = document.getElementById("SubstractionNumber1");
    let SubstractionNumber2 = document.getElementById("SubstractionNumber2");
    let SubstractionButton = document.getElementById("SubstractionButton");
    let SubstractionOutPut = document.getElementById("SubstractionOutPut");

    //Division
    let DivisionNumber1 = document.getElementById("DivisionNumber1");
    let DivisionNumber2 = document.getElementById("DivisionNumber2");
    let DivisionButton = document.getElementById("DivisionButton");
    let DivisionOutPut = document.getElementById("DivisionOutPut");

    //InterestRate
    let Capital = document.getElementById("Capital");
    let Interest = document.getElementById("Interest");
    let InterestDays = document.getElementById("InterestDays");
    let InterestRateButton = document.getElementById("InterestRateButton");
    let InterestRateOutPut = document.getElementById("InterestRateOutPut");

    //IPythagoras
    let cathetus1 = document.getElementById("cathetus1");
    let cathetus2 = document.getElementById("cathetus2");
    let hypotenuse = document.getElementById("hypotenuse");
    let PythagorasButton = document.getElementById("PythagorasButton");
    let PythagorasOutPut = document.getElementById("PythagorasOutPut");

    //test
    let Chat = document.getElementById("Chat");

 
    Additionbutton.addEventListener("click", () => {
        let firstNumber = Number(AdditionNumber1.value);
        let secondNumber = Number(AdditionNumber2.value);

        if (AdditionNumber1.value != "" && AdditionNumber2.value != "") {
            AdditionOutPut.value = (firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber))
        } else {
            AdditionOutPut.value = ("ERROR:need both numbers")
        }
    });

    SubstractionButton.addEventListener("click", () => {
        let firstNumber = Number(SubstractionNumber1.value);
        let secondNumber = Number(SubstractionNumber2.value);

        if (SubstractionNumber1.value != "" && SubstractionNumber2.value != "") {
            SubstractionOutPut.value = (firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber))
        } else {
            SubstractionOutPut.value = ("ERROR:need both numbers")
        }


    });
    MultiplicationButton.addEventListener("click", () => {
        let firstNumber = Number(MultiplicationNumber1.value);
        let secondNumber = Number(MultiplicationNumber2.value);
        if (MultiplicationNumber1.value != "" && MultiplicationNumber2.value != "") {
            MultiplicationOutPut.value = (firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber))
        } else {
            MultiplicationOutPut.value = ("ERROR:need both numbers")
        }

    });
    DivisionButton.addEventListener("click", () => {
        let firstNumber = Number(DivisionNumber1.value);
        let secondNumber = Number(DivisionNumber2.value);
        if (DivisionNumber1.value != "" && DivisionNumber2.value != "") {
            DivisionOutPut.value = (firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber))
        } else {
            DivisionOutPut.value = ("ERROR:need both numbers")
        }


        //  ws.send(input.value);


    });
    InterestRateButton.addEventListener("click", () => {
        let K = Number(Capital.value);
        let p = Number(Interest.value);
        let d = Number(InterestDays.value);
        let D = 365
        if(Capital.value != "" && Interest.value != "" && InterestDays != "" ){
            InterestRateOutPut.value = (K + " / " + 100 + " * " + p + " / " + D + " *" + d + " = " + (K / 100 * p / D * d))
        }else{
            InterestRateOutPut.value = (("ERROR:need all numbers"))
        }
  

    });
    PythagorasButton.addEventListener("click", () => {
        let kat = Number(cathetus1.value)
        let kat2 = Number(cathetus2.value)
        let hyp = Number(hypotenuse.value)

        if(cathetus2.value != "" && cathetus1.value != "" && hypotenuse.value != ""){
            PythagorasOutPut.value = "Error"
        }else if(cathetus2.value != "" && cathetus1.value != ""){
            PythagorasOutPut.value = (kat+"^2 + "+kat2+"^2 = sqrt("+(Math.pow(kat,2)+Math.pow(kat2,2))+") = "+Math.sqrt(Math.pow(kat,2)+Math.pow(kat2,2)))
        }else if(cathetus2.value != "" && hypotenuse.value != ""){
            PythagorasOutPut.value = (hyp+"^2 - "+kat2+"^2 = sqrt("+(Math.pow(hyp,2)-Math.pow(kat2,2))+") = "+Math.sqrt(Math.pow(hyp,2)-Math.pow(kat2,2)))
        }else if(cathetus1.value != "" && hypotenuse.value != ""){
            PythagorasOutPut.value = (hyp+"^2 - "+kat+"^2 = sqrt("+(Math.pow(hyp,2)-Math.pow(kat,2))+") = "+Math.sqrt(Math.pow(hyp,2)-Math.pow(kat,2)))
            ws.send
        }
        


    });

    Chat.addEventListener("click", () => {
       change_page()

    });
});

function change_page(){
    window.location.replace("Chat.html");
    window.location.href = "Chat.html";
 };