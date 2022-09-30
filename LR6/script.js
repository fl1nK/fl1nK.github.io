function add(){
  
function status(response) {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error(response.statusText))  
  }  
}

fetch('https://randomuser.me/api') // picture cell city postcode email
.then(status)  
.then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data);    
    const user = data.results[0];
    const person = new Person(
        user.picture.large,
        user.cell,
        user.location.city,
        user.location.postcode,
        user.email,);
    person.createPerson();
  }).catch(function(error) {  
    console.log('Request failed', error);  
  });
}

const personDiv = document.getElementById('persons');

class Person{

    constructor(picture, cell, city, postcode, email){
        this.picture = picture;
        this.cell = cell;
        this.city = city;
        this.postcode = postcode;
        this.email = email;
    }

    createPerson(){
        const div = document.createElement('div');
        div.id = 'person';
        const img = document.createElement('img');
        img.src = this.picture;
        div.appendChild(img);
        const info = document.createElement('span');
        info.innerHTML = `<p>Cell: ${this.cell}</p><p>City: ${this.city}</p><p>Postcode: ${this.postcode}</p><p>Email: ${this.email}</p>`;
        div.appendChild(info);

        personDiv.appendChild(div);
    }

}

