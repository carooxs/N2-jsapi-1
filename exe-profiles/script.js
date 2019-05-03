const profiles = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('class', 'container');
profiles.appendChild(container);

const request = new XMLHttpRequest();
request.open('GET', 'https://randomuser.me/api/?results=10', true);
request.onload = function(){
    const data = JSON.parse (this.response);
    console.log(data.results);
   data.results.forEach(employer => {
    const p = document.createElement('p');
      p.textContent = employer.name.first; 

   }); 

}
request.send();

