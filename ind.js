let form = document.forms.reg
let inputs = document.querySelectorAll('input')
let b = document.querySelector('button')
let span  = document.querySelector('span')


let patterns = {
	name: /^[a-z ,.'-]+$/i,
	email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    age: /^[0-9]{0,2}$/,
    css:/^[a-z ,.'-]+$/i,
    html:/^[a-z ,.'-]+$/i,
    js:/^[a-z ,.'-]+$/i,
    about:/^[a-z ,.'-]+$/i
}

function validate(filed, regex) {
	if(regex.test(filed.value)) {
		filed.classList.add('valid')
        filed.parentElement.classList.add('v')
		filed.classList.remove('invalid')
        filed.parentElement.classList.remove('in')
        b.classList.remove('but')
	} else {
		filed.classList.add('invalid')
        filed.parentElement.classList.add('in')
		filed.classList.remove('valid')
        filed.parentElement.classList.remove('v')
    
	}
}
inputs.forEach(inp => {
	inp.onkeyup = () => {
        if(inp.name){
		validate(inp, patterns[inp.getAttribute('name')] )
	}}

    
})



form.onsubmit = (event) => {
	event.preventDefault()

	let arrCheck = []
 let arr = []
        let arr2 = []
        let arr3 = []
	inputs.forEach(inp => {
		if(inp.classList.value === 'invalid' || inp.value.length === 0) {
			arrCheck.push(1)
		}
       
        if (inp.classList.contains('invalid')) {
            arr += 1
        }
        if (inp.value.length > 0) {
            arr2 += 1
        }
        arr3 += 1
    
        span.innerHTML = `All: ${arr3.length}   Success: ${arr2.length}/12  Error:${arr.length}/12 `
    
	})

 

	if(arrCheck.length < 6) {
		submit()
        b.classList.remove('but')
	} else {
        b.classList.add('but')
        b.innerHTML = 'Заполните нужные поля'
	}}


    
    function submit() {
        let user = {}
    
        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            user[key] = value
        })
    
        console.log(user);
    }
