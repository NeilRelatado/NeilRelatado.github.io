
var name=prompt("Enter Your Name,Please.","name")
var today = new Date();
var weekday = new Array(7);
weekday[0]="Happy Sunday";
weekday[1]="Happy Monday";
weekday[2]="Happy Tuesday";
weekday[3]="Happy Wednsday";
weekday[4]="Happy Thursday";
weekday[5]="Happy Friday";
weekday[6]="Happy Saturday";

var date2 = new Date();
var weekday2 = new Array(7);
weekday2[0]= "Get ready for the week to come!";
weekday2[1]= "Start your week right!";
weekday2[2]= "Taco Time!";
weekday2[3]= "It is Wednsday my dudes";
weekday2[4]= "The weekend is almost here! Keep going"
weekday2[5]= "Weekend Time! You made it!"
weekday2[6]= "Rest up! You deserve a break!"

var n= weekday[today.getDay()];
var n2= weekday2[date2.getDay()];

var displayWeekday= document.getElementById('weekday');
var phrase= document.getElementById('phrase');
var displayName = document.getElementById('userName');

var hrs = today.getHours();
    document.writeln("<b>");
    document.writeln("<b>");

//Display Name    
if(hrs <= 12)
  displayName.innerText = "Good Morning "+name;
  else if (hrs <= 18)
  displayName.innerText = "Good Afternoon "+name;
  else
  displayName.innerText="Good Evening "+name; document.writeln("<br />"); 
  
//Get day of the week
whatDayIsIt();

function whatDayIsIt()
{
    displayWeekday.innerText= n;
    phrase.innerText= n2;
}

//to do list
function get_todos(){
var todos = new Array;
var todos_str = localStorage.getItem ('todo');
if (todos_str !== null){
todos = JSON.parse(todos_str);
}
return todos;
}

function add(){
var task = document.getElementById('task').value;

var todos = get_todos();
todos.push(task);
localStorage.setItem('todo',JSON.stringify(todos));
show();
return false;
}

function clearDefault(a){
if (a.defaultValue==a.value){a.value=""}
};

function remove()
{
    var id = this.getAttribute('id');
    var todos =get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo',JSON.stringify(todos));

    show();

    return false;
}

function show ()
{
var todos=get_todos();
var html='<ul>';

for(var i=0; i <todos.length; i++)
{
    html += '<li>'+ todos[i]+ '<button class="remove" id="' + i +'">Delete</button></li>'
};

html += '</ul>';

document.getElementById('todos').innerHTML=html;
var buttons=document.getElementsByClassName('remove');
for(var i=0; i < buttons.length;i++){
    buttons[i].addEventListener('click',remove);
};
}
document.getElementById('add').addEventListener('click',add);
show();

