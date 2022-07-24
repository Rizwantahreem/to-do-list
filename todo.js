function addition() {
  
    let add = document.createElement("div");
    add.id="tasks";
    add.className="tasks"
    add.setAttribute(
        "style","margin:1pc"
    );
    let add1 = document.createElement("h3");
    add1.id="tasktext";
    add1.className="tasktext";
    // const userInput = window.prompt("Add task");
    // add1.textContent = userInput;
    
    add.append(add1);

    let add2 = document.createElement("div");
    add2.id = "icons"; 
    add2.className ="icons";
    
    let add3 = document.createElement("span");
    add3.id ="btns";

    let add4 = document.createElement("button");
    add4.id ="btnw";
    const wbtn = `<i class="fa-solid fa-pen" id="ics" title="add task"></i>`;
    wbtn.id ="ics";
    add4.innerHTML = (wbtn);
    add4.onclick = function writing(){
        const elements = document.querySelectorAll("#btnw");
        let textField = document.querySelectorAll("#tasktext");
        for(let i=0; i< elements.length; i+=1){
            elements[i].onclick = () =>{
                // console.log(elements, textField);
                const text = window.prompt("Add task");
                textField[i].textContent = text;
            }
        }

    };

    add3.append(add4);

    let add5 = document.createElement("button");
    add5.id ="btne";

    const ebtn = `<i class="fa-solid fa-eraser" id ="ics" title="erase text"></i>`;
    ebtn.id ="ics";
    add5.innerHTML = (ebtn);
    add5.onclick = function erase(){
        const elements = document.querySelectorAll("#btne");
        const texts = document.querySelectorAll("#tasktext");
        for (let i =0; i < elements.length; i+=1){
            
            // if (elements[i].onclick ) { 
            //     console.log(elements[i]);
                elements[i].onclick = () =>{
                texts[i].style.color = "grey";
                texts[i].style.textDecoration = "line-through";
            }
        // }
    }
    };
    

    add3.append(add5);
    
    let add6 = document.createElement("button");
    add6.id ="btnd";
    const dbtn = `<i class="fa-solid fa-trash" id="ics" title="delete task"></i>`;
    dbtn.id ="ics";
    add6.innerHTML= dbtn ;
    add6.onclick = function deletetask(){
        const elements = document.querySelectorAll("#btnd");
        const texts = document.querySelectorAll("#tasks");
        for (let i =0; i < elements.length; i+=1){
            
            // if (elements[i].onclick ) { 
            //     console.log(elements[i]);
                elements[i].onclick = () =>{
                texts[i].remove();
            }
        // }
    }
        // document.getElementById("tasks").remove();
    };
    
    add3.append(add6);

    add2.append(add3);

    add.append(add2);
    
    const bef = document.getElementById("content");
    const bef1 = document.getElementById("tasks");
    bef.append(add);

   
}



erase();
function erase(){
    const elements = document.querySelectorAll("#btne");
    console.log(elements);
    for (let i =0; i < elements.length; i+=1){
        elements[i].onclick = () =>{
            document.getElementById("tasktext").innerHTML = "";
        }
    }
};


// console.log(document.getElementById("content").querySelector('div').closest("button"));




















            // addition code

// let add4 = document.createElement("button");
    // add4.id ="btnw";
    // const wbtn = `<i class="fa-solid fa-pen" id="ics" title="add task"></i>`;
    // // add4.innerHTML = (wbtn);
    // wbtn.id ="ics";
    // let write = document.getElementById("btnw");
    // write.addEventListener('click',writing(this));
    // add4.append(wbtn);



// function writing(ele) {
//     // document.getElementById("#taskadd").style.display='block';
//     var ajeeb = document.querySelector('button');
//     var parent = ajeeb.closest('#tasks');
//     console.log(parent);
//     console.log(ajeeb,parent.id);
//     document.getElementById(parent.childNodes[1].id).innerHTML = window.prompt("add task: ");
//     //    parent.innerHTML += window.prompt("add task: ");
// }
