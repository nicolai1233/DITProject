window.addEventListener("load", () => {
    let ws = new WebSocket("ws://localhost:8080/");
    let userid = document.getElementById("userid");
    let input  = document.getElementById("input");
    let button = document.getElementById("button");
    let Formulas = document.getElementById("Formulas");
    let test = document.getElementById("online");
    
    ws.onopen  = () => console.log("connected");
    ws.onclose = e => console.log("disconnected", e.reason);
    ws.onerror = e => console.log("Something went wrong:", e);
    ws.onmessage = event => { 
        let json = JSON.parse(event.data);
        //TODO: diplay both userid and msg
        let node = document.createTextNode(json.userid+" "+json.msg);
        let div  = document.createElement("div");
        div.appendChild(node);
        document.body.appendChild(div);
        console.log(json.online)
        test.value = json.online
            
    };
        button.addEventListener("click", () => {
        //TODO: send userid.value along with message
        ws.send(userid.value+":"+input.value);
        input.value = "";
       // userid.value = "";
    });
        Formulas.addEventListener("click", () => {
        change_page()
    });
});

function change_page(){
    window.location.replace("Formulas.html");
    window.location.href = "Formulas.html";
};
