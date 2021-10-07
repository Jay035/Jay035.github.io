// mode toggler
const modeChange = document.getElementById('mode').addEventListener('click', changeImg);
// checkBox
const inputField = document.getElementById('add');
// tasklists
const ul = document.getElementById('todos');
// input value 
const input = document.getElementById('taskValue');
const div = document.getElementById('div');
let todos = [];
window.onload = function(){
  if(JSON.parse(localStorage.getItem('todo-items') !== null)){
    todos = JSON.parse(localStorage.getItem('todo-items'));
    console.log(todos)
  }
  display();
  div.innerHTML = `
          <p class=""> <span id="noOfItemsLeft"></span><!-- Add dynamic number --> item(s) left</p>
          <div class="flex justify-between text-base hidden font-semibold lg:flex xl:text-xl">
              <p><a href="" class="cursor-pointer px-2">All</a></p>
              <p><a href="" class="cursor-pointer px-2">Active</a></p>
              <p><a href="" class="cursor-pointer px-2">Completed</a></p>
          </div>
          <p><a href="#" class="cursor-pointer clearCompletedTasks"> Clear Completed</a></p>
      `;
    ul.appendChild(div);
  // div.innerHTML = `
  //         <p class=""> <span id="noOfItemsLeft"></span><!-- Add dynamic number --> item(s) left</p>
  //         <div class="flex justify-between text-base hidden font-semibold lg:flex xl:text-xl">
  //             <p><a href="" class="cursor-pointer px-2">All</a></p>
  //             <p><a href="" class="cursor-pointer px-2">Active</a></p>
  //             <p><a href="" class="cursor-pointer px-2">Completed</a></p>
  //         </div>
  //         <p><a href="#" class="cursor-pointer clearCompletedTasks"> Clear Completed</a></p>
  //     `;

    // append d div to d ul element
    // ul.appendChild(div);

  }
  
// load all event listeners
loadEventListeners();

// load all event listeners 
function loadEventListeners(){
  // add task event 
  inputField.addEventListener('click', addTask);
  // remove task event 
  ul.addEventListener('click', removeTask);
 
}

function changeImg(){
  let img = document.getElementById('mode-img');
  let nav_bg = document.querySelector('.nav-img');
  let desktopNavBg = document.getElementById('desktop-bg');

  // if(img.src.match('../images/icon-moon.svg'))
  img.src.match('./images/icon-moon.svg')
    ? (document.documentElement.classList.add('dark'), img.src='./images/icon-sun.svg', desktopNavBg.src='./images/bg-desktop-dark.jpg', nav_bg.src='./images/bg-mobile-dark.jpg')
    : (document.documentElement.classList.remove('dark'), img.src='./images/icon-moon.svg', desktopNavBg.src='./images/bg-desktop-light.jpg', nav_bg.src='./images/bg-mobile-light.jpg')
    
}

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
  document.documentElement.classList.add('dark');
  // console.log(242567);
}
else{
  document.documentElement.classList.remove('dark');
}


// add task event 
function addTask(e){
  if(input.value === ''){
    alert('Add a task');
    // document.querySelector('svg').style.display = 'none';
    // document.getElementById('checkbox').style.background = 'transparent';
    // document.getElementById('checkbox').style.border = '2px solid rgba(209, 213, 219,.8)';
  }
  else{
    todos.push(input.value.trim());
    // console.log(todos)
    // store todos in localStorage
    if(localStorage.getItem('todo-items') === null){
      localStorage.setItem('todo-items', JSON.stringify(todos));
    }
    else{
      localStorage.setItem('todo-items', JSON.stringify(todos));
    }
    display();
    div.innerHTML = `
          <p class=""> <span id="noOfItemsLeft"></span><!-- Add dynamic number --> item(s) left</p>
          <div class="flex justify-between text-base hidden font-semibold lg:flex xl:text-xl">
              <p><a href="" class="cursor-pointer px-2">All</a></p>
              <p><a href="" class="cursor-pointer px-2">Active</a></p>
              <p><a href="" class="cursor-pointer px-2">Completed</a></p>
          </div>
          <p><a href="#" class="cursor-pointer clearCompletedTasks"> Clear Completed</a></p>
      `;
    ul.appendChild(div);
    input.value = '';
    
    // console.log(ul);
  }
  // div.innerHTML = `
  //       <p class=""> <span id="noOfItemsLeft"></span><!-- Add dynamic number --> item(s) left</p>
  //       <div class="flex justify-between text-base hidden font-semibold lg:flex xl:text-xl">
  //           <p><a href="" class="cursor-pointer px-2">All</a></p>
  //           <p><a href="" class="cursor-pointer px-2">Active</a></p>
  //           <p><a href="" class="cursor-pointer px-2">Completed</a></p>
  //       </div>
  //       <p><a href="#" class="cursor-pointer clearCompletedTasks"> Clear Completed</a></p>
  //   `;
  //     // clear completed button 
  //     const clearCompleted = document.querySelector('.clearCompletedTasks')
  //     // clear completed tasks event
  //     clearCompleted.addEventListener('click', () => {
  //       let allSpanElem = document.querySelectorAll('span');
  
  //       for(const span of allSpanElem){
  //         if(span.classList.contains('line-through')) {
  //           span.parentElement.parentElement.remove();
  //         }
  //       }
  //     })

    // append d div to d ul element
    // ul.appendChild(div);
    // // clear inputted todo after adding to d ul 
    // input.value = '';
    // document.querySelector('svg').style.display = 'none';
    // document.getElementById('checkbox').style.background = 'transparent';
    // document.getElementById('checkbox').style.border = '2px solid rgba(209, 213, 219,.8)';
    // e.preventDefault();
}

function display(){
  ul.innerHTML = '';
  for(let i =0; i < todos.length; i++){
    ul.innerHTML += 
      "<li class=\"task flex justify-between pt-2 px-3.5 pb-1.5\">" +
        "<div class=\"flex justify-between\">" +
          "<div class=\"flex items-center\">" +
            "<input type=\"checkbox\" id=\"add\" name=\"A3-confirmation\" class=\"listCheck opacity-0 absolute h-8 w-8 cursor-pointer\" onchange='strike("
            +i+")'/> " +
            "<div id=\"checkbox\" class=\"border-2 rounded-xl border-gray-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 mt-0 focus-within:border-blue-500 lg:w-7 lg:h-7\">" +
                "<svg id=\"svg\" class=\"fill-current hidden w-3 h-3 text-blue-600 pointer-events-none\" version=\"1.1\" viewBox=\"0 0 17 12\" xmlns=\"http://www.w3.org/2000/svg\">" +
                  "<g fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(-9 -11)\" fill=\"#fff\" fill-rule=\"nonzero\"><path d=\"m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z\" /></g></g></svg>" +
            "</div></div>" +
            "<span class=\"span break-all\">" + 
            todos[i] +
            "</span></div>" +
            "<a href=\"#\" class=\"delete-item justify-self-end cursor-pointer\">" +
              "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"20\" height=\"20\" viewBox=\"0 0 172 172\" style=\" fill:#000000;\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><g fill=\"#9394a5\"><path d=\"M26.5525,21.6075l-4.945,4.945l59.4475,59.4475l-59.4475,59.4475l4.945,4.945l59.4475,-59.4475l59.4475,59.4475l4.945,-4.945l-59.4475,-59.4475l59.4475,-59.4475l-4.945,-4.945l-59.4475,59.4475z\"></path></g></g></svg>" +
            "</a></li>";
      
      
  }


  
  // create li element 
  // const li = document.createElement('li');
  // styling the list element 
  // li.style.borderBottom = '1px solid hsl(236, 9%, 61%)';
  // giving a classname to d li element
  // li.className = 'task flex justify-between hover:transform hover:scale-110';
  
  // // container holding checkbox and textnode
  // const checkBoxAndTextNode = document.createElement('div');
  // // giving a classname 
  // checkBoxAndTextNode.className = 'flex justify-between';
  // // create checkbox div 
  // const check = document.createElement('div');
  // // giving a classname to  d checkbox
  // check.className = 'flex items-center check';

  // // adding elements to the checkbox div
  // check.innerHTML = `
  //     <input type="checkbox" id="add" name="A3-confirmation" class="listCheck opacity-0 absolute h-8 w-8 cursor-pointer" onclick="strikeText()" />
  //     <div id="checkbox" class="border-2 rounded-xl border-gray-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 mt-0 focus-within:border-blue-500 lg:w-7 lg:h-7">
  //         <svg class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
  //         <g fill="none" fill-rule="evenodd">
  //             <g transform="translate(-9 -11)" fill="#fff" fill-rule="nonzero">
  //             <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
  //             </g>
  //         </g>
  //         </svg>
  //     </div>
  // `;
  
  // list item
  // let listItem = document.createElement('span');
  // listItem.innerText = input.value;
  // listItem.className = 'span break-all';
  
  // // console.log(localStorage.getItem('todo-items'));

  // // let listItem = document.createTextNode(input.value);
  // checkBoxAndTextNode.appendChild(check);
  // checkBoxAndTextNode.appendChild(listItem);
  
  // // create delete icon 
  // const deleteIcon = document.createElement('a');
  // // give deleteIcon a classname 
  // deleteIcon.className = 'delete-item justify-self-end cursor-pointer';
  // // add d delete icon 
  // deleteIcon.innerHTML = `
  //   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172"style=" fill:#000000;">
  //     <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#9394a5"><path d="M26.5525,21.6075l-4.945,4.945l59.4475,59.4475l-59.4475,59.4475l4.945,4.945l59.4475,-59.4475l59.4475,59.4475l4.945,-4.945l-59.4475,-59.4475l59.4475,-59.4475l-4.945,-4.945l-59.4475,59.4475z"></path></g></g>
  //   </svg>
  // `;

  // // append checkbox and textnode to list element
  // li.appendChild(checkBoxAndTextNode);
  // // append deleteicon to d list element 
  // li.appendChild(deleteIcon);
  // // append d list element to d unordered list element
  // ul.appendChild(li);

  // let listItemCompleted = document.querySelectorAll('.listCheck');
  // for(const listCheck of listItemCompleted){
  //   // add an event listener 
  //   listCheck.addEventListener('change', function(e){
  //   // if d checkbox is checked
  //     let checkBoxNextSibling = e.target.parentElement.nextElementSibling;
  //     // console.log(checkBoxNextSibling)
  //     if(e.target.checked){
  //       checkBoxNextSibling.classList.add('line-through');
  //       // console.log(checkBoxNextSibling)
  //     }
  //     // if d checkbox is unchecked
  //     else{
  //       checkBoxNextSibling.classList.remove('line-through');
  //     }
  //     if(localStorage.getItem('todo-items') === null){
  //       localStorage.setItem('todo-items', JSON.stringify(todos));
  //     }
  //     else{
  //       localStorage.setItem('todo-items', JSON.stringify(todos));
  //     }
  //   });
  // }
}


// remove task 
function removeTask(e, index){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure ?')){
      todos.splice(index, 1);
      e.target.parentElement.parentElement.remove();
      if(localStorage.getItem('todo-items') === null){
        localStorage.setItem('todo-items', JSON.stringify(todos));
      }
      else{
        localStorage.setItem('todo-items', JSON.stringify(todos));
      }
      // console.log(todos)

    }
  }
}

function strike(index){
  todos[index].includes("<strike>")
    ?(todos[index] = todos[index].replace("<strike>", ""), todos[index] = todos[index].replace("</strike>", ""), document.getElementById('checkbox').classList.remove('border-transparent','bg-gradient-to-r','from-blue-gradient-start', 'to-blue-gradient-end'))
    : (todos[index] = "<strike>" + todos[index] + "</strike>", document.getElementById('svg').classList.add('block'), document.getElementById('checkbox').classList.add('border-transparent','bg-gradient-to-r','from-blue-gradient-start', 'to-blue-gradient-end'))
     
    // document.getElementById('svg').style.display = 'none';
    
    // document.getElementById('checkbox').style.border = '2px solid rgba(209, 213, 219,.8)';
      // document.getElementById('checkbox').style.background = 'linear-gradient(to right, #57ddff, #c058f3';
      // document.getElementById('checkbox').classList.add('bg-gradient-to-r');
      // document.getElementById('checkbox').classList.add('from-blue-gradient-start');
      // document.getElementById('checkbox').classList.add('to-blue-gradient-end');
      // document.getElementById('checkbox').style.border = 'transparent';
    
  
  console.log( document.getElementById('checkbox'))

  display();

  div.innerHTML = `
          <p class=""> <span id="noOfItemsLeft"></span><!-- Add dynamic number --> item(s) left</p>
          <div class="flex justify-between text-base hidden font-semibold lg:flex xl:text-xl">
              <p><a href="" class="cursor-pointer px-2">All</a></p>
              <p><a href="" class="cursor-pointer px-2">Active</a></p>
              <p><a href="" class="cursor-pointer px-2">Completed</a></p>
          </div>
          <p><a href="#" class="cursor-pointer clearCompletedTasks"> Clear Completed</a></p>
      `;
    ul.appendChild(div);
  if(localStorage.getItem('todo-items') === null){
    localStorage.setItem('todo-items', JSON.stringify(todos));
  }
  else{
    localStorage.setItem('todo-items', JSON.stringify(todos));
  }
  
}