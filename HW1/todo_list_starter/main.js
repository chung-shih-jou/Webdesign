const input= window.document.getElementById("input");
const todoCount = document.getElementById("todo-count");
const all = document.getElementById("all");
const act = document.getElementById("active");
const comp = document.getElementById("complete");
const clearbut = document.getElementById("clear");

var general={
labelNum:0,
todoItems:[],
markOrNot:false,
state:0
};

input.addEventListener('keyup', event => {
if (event.keyCode === 13 && event.target.value !== '')  {
    let nowid = general.labelNum;
    let itemNode = createNewItem(event.target.value,nowid);
    let newItem = { node: itemNode, isComplete: 0};
    
    createComplete(span.childElementCount);
    general.todoItems.push(newItem);
    mark(nowid);
    display(nowid);
    event.target.value = ''
    //if (state==2){display(nowid)}
    
    general.labelNum=general.labelNum+1;
    
}});

function createComplete(spanChild){
    if (spanChild==1){
        const button = document.createElement("button");
        clearbut.appendChild(button);
        button.setAttribute("id","clearcomplete");
        button.innerText="Clear completed";
        const clear = document.getElementById("clearcomplete");
     
}}
   
var createNewItem=function (targetValue,nowid){
    const span = document.getElementById("span");
    const itemNode = document.createElement("LI");
    const div1 = document.createElement("DIV");
    const div2 = document.createElement("DIV");
    const input2 = document.createElement("Input");
    const label = document.createElement("Label");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    
    
    span.appendChild(div1);
    div1.setAttribute("class","todo-app__item");
    div1.appendChild(div2);
    div2.setAttribute("class","todo-app__checkbox");
    div2.appendChild(input2);
    input2.setAttribute("type","checkbox");
    input2.setAttribute("class","todo-item-input");
    input2.setAttribute("id","input"+general.labelNum);
    div2.appendChild(label);
    div1.appendChild(h1);
    h1.setAttribute("class","todo-app__item-detail");
    h1.setAttribute("id","todo_list");
    h1.innerText=targetValue;
    div1.appendChild(img);
    img.setAttribute("src","img/x.png");
    img.setAttribute("class","todo-app__item-x");
    
    
    img.addEventListener("click",event =>{
        div1.remove(1);
        general.todoItems[nowid].isComplete=2;
        todoCount.innerHTML = todoCount.innerHTML = general.todoItems.filter(ele => ele.isComplete<2).length+" left";
        if (span.childElementCount==0){
        clearbut.firstElementChild.remove(1);
        }
    
    })
    
    
    
    return div1;
}

var mark=function(target){
    general.todoItems[target].node.childNodes[0].addEventListener('click', event =>{
        if(general.markOrNot==false){
        general.todoItems[target].node.childNodes[0].childNodes[0].checked=true;
        general.markOrNot=true;
        general.todoItems[target].node.childNodes[1].style["textDecoration"] = "line-through";
        general.todoItems[target].node.childNodes[1].style["opacity"] = "0.5";
        isComplete=1;//做完
        }
        else{
        general.todoItems[target].node.childNodes[0].childNodes[0].checked=false;
        general.markOrNot=false;
        general.todoItems[target].node.childNodes[1].style["textDecoration"] = "NONE";
        general.todoItems[target].node.childNodes[1].style["opacity"] = "1";
        isComplete=0;//沒做完
        }
    general.todoItems[target].isComplete= isComplete;
    })
    //all    
    //active
    todoCount.innerHTML = general.todoItems.filter(ele => !ele.isComplete).length+" left";
}

var del =function(){
    



}

var display = function(target){
    todoCount.innerHTML = todoCount.innerHTML = general.todoItems.filter(ele => ele.isComplete<2).length+" left";

    all.addEventListener('click',event =>{
    general.state=0;
    for (i=0;i<target+1;i++){
        general.todoItems[i].node.style.display="";}
    })
    
    act.addEventListener('click',event =>{
    general.state=1;
    for (i=0;i<target+1;i++){
        if (general.todoItems[i].isComplete==1)
            {general.todoItems[i].node.style.display="none";}
        else
        {general.todoItems[i].node.style.display="";}
    }})
    
    comp.addEventListener('click',event =>{
    general.state=2;
    for (i=0;i<target+1;i++){
        if (general.todoItems[i].isComplete==0)
            {general.todoItems[i].isComplete=0;
            general.todoItems[i].node.style.display="none";}
        else
        {general.todoItems[i].node.style.display="";}
    }})
    
    if (general.state==2){
        for (i=0;i<target+1;i++){
        if (general.todoItems[i].isComplete==0)
            {general.todoItems[i].node.style.display="none";}
        else
        {general.todoItems[i].node.style.display="";}
    
    }}
    
    clear.addEventListener('click',event =>{
    todoCount.innerHTML = todoCount.innerHTML = general.todoItems.filter(ele => ele.isComplete<2).length+" left";
        for (i=0;i<target+1;i++){
            if (general.todoItems[i].isComplete==1){
                general.todoItems[i].isComplete=2;
                general.todoItems[i].node.remove(1);
               //console.log(target,general.labelNum);
            }
        }
        if (span.childElementCount==0){
        clearbut.firstElementChild.remove(1);
        }
    })
    }

