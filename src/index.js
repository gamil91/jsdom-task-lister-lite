document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form') 

  colorDropdown()
  userField()
  
  function colorDropdown(){
    let select = document.createElement('select')
    let red = document.createElement('option')
    red.value = 'red'
    red.innerText = 'High Priority'
    let yellow = document.createElement('option')
    yellow.value = 'yellow'
    yellow.innerText = 'Medium Priority'
    let green = document.createElement('option')
    green.value = 'green'
    green.innerText = 'Low Priority'
    select.appendChild(red)
    select.appendChild(yellow)
    select.appendChild(green)
    form.appendChild(select)
  }

  function userField(){
    let user = document.createElement('input')
    user.type = 'text'
    user.id = 'name'
    user.placeholder = 'name: '
    form.appendChild(user)
  }

  

  form.addEventListener('submit', addAList)

  function addAList(event){
    event.preventDefault()
    let input = document.getElementById('new-task-description').value
    let priority = document.querySelector('select').value
    let user = document.getElementById('name').value

    let listItem = document.createElement('li')
    listItem.innerText = ` User: ${user}
    Task: ${input}
    ` 
    
    listItem.style.color = priority

    let btn = document.createElement('button')
    btn.innerText = 'x'
    btn.addEventListener('click', function(event){
      event.target.parentNode.remove()
    })

    let editBtn = document.createElement('button')
    editBtn.innerText = 'edit'
    editBtn.addEventListener('click', function(){
      
    })

    listItem.appendChild(editBtn)
    listItem.appendChild(btn)
    document.getElementById('tasks').appendChild(listItem)
    event.target.reset()
  }

//   input.addEventListener('change', updateValue);

// function updateValue(e) {
// //   log.textContent = e.target.value;
// }
  





});
