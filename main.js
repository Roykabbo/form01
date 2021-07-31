// console.log(window)
// console.log(document)

// // console.log(document.body)
// console.log(document)

// single selection

// // console.log(document.getElementById("my-form"))
// // console.log(document.querySelector('.container'))
// // console.log(document.querySelector('h1'))

// // document.querySelector('h1').innerText = 'hello world javascript'
// // document.querySelector('.item').innerText = 'kabbo'
// // console.log(document.querySelector('.item'))


// // multiple selections in javascript dom

// // console.log(document.querySelectorAll('.item'))
// // document.querySelectorAll('.item').innerText = 'kabbo'
// const ul = document.querySelector('.items');
// // ul.remove()
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = "kabbo"
//  console.log(ul.children[1])
// ul.children[1].textContent = 'kabbo roy'
// // ul.children[1].style.color = 'red'

// const btn = document.querySelector('.btn')
// // btn.style.background = 'red'

// btn.addEventListener('click' , (g) =>{
//     g.preventDefault()
//     console.log(41545)
// })


const form = document.querySelector('#my-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const users = document.querySelector('#user-list')
const btn = document.querySelector('.btn')
const msg = document.querySelector('.msg')

form.addEventListener('submit' ,clicked)

function clicked(x) {
    x.preventDefault();
    userName = name.value;
    userEmail = email.value;
    if(userName === '' || userEmail === ''){
        msg.classList.add('error')
       msg.innerHTML = "<p>***Please enter the fields!!***</p>"
       setTimeout(() => msg.remove() , 1000)
    }
    else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(userName + ' : ' + userEmail))
        users.appendChild(li)

        name.value = ''
        email.value = ''
    }
}
