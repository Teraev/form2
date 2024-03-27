const form = document.forms.namedItem('login')
const b = document.querySelector('.modal b')
const p = document.querySelector('.modal p')
const inputs = form.querySelectorAll('input')
const modal = document.querySelector('.modal')
const add = document.querySelector('.add')
const close = document.querySelector('.close')
let total = document.querySelector('#total')
let success = document.querySelector('#succes')
let er = 0
let suc = 0
const patterns = {
    name: /^[a-z ,.'-]{2,10}$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][0][0]|100)$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
}


inputs.forEach((inp) => {
    inp.oninput = () => {
        rex = patterns[inp.name].test(inp.value)
        if (!rex && !inp.classList.contains('error')) {
            inp.classList.add('error');
            er++;
            
        } else if (rex && inp.classList.contains('error')) {
            inp.classList.remove('error');
            er--;
            
        }
        total.innerHTML = er;
     
    }
});

form.onsubmit = (event) => {
    event.preventDefault()
    let fm = new FormData(form)
    let error = false

    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
        if (val === 'not') error = true
    })
    inputs.forEach((inp) => {
        if (inp.value.length === 0 || inp.classList.contains('error')) {
            error = true
        }
    })

    if (error) {
        alert("Fill allfields")
        return
    }


    b.innerHTML = user.name
    p.innerHTML = `After 10 years you'll be a seanior ${user.language}`
}

add.onclick = () => {
    modal.style.display = "flex"
}

close.onclick = () => {
    modal.style.display = "none"
}