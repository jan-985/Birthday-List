const birtidaysList =[{
  name: 'salam',
  date: '1984-06-26'
},{
  name: 'salim',
  date: '1984-11-03'
}];

rander();
function rander() {
  let todoLidtHTML = '';

  for (let i = 0; i < birtidaysList.length; i++) {
  const birthdaysObject = birtidaysList[i];
  //const name = birthdaysObject.name;
  //const date = birthdaysObject.date;
  const {name, date} = birthdaysObject;
  const html = `
    <div class="date"> ${name}</div>
    <div class="date"> ${date}</div> 
    <button class="delete" onclick="
      birtidaysList.splice(${i}, 1);
      rander();
    ">Delete</button>
  `;
  todoLidtHTML += html;
  }
  document.querySelector('.input-text03')
  .innerHTML = todoLidtHTML;
}

function addBirthday(){
  const inputElement = document.querySelector('.input-text');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.input-date');
  const birthDate = dateInputElement.value;
  birtidaysList.push({
    name: name,
    date: birthDate
  });
  inputElement.value = '';

  rander();
}
