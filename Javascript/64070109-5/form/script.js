const form = document.querySelector('.needs-validation');
confirm('hi')
let validBlockcode = `
<div class="valid-feedback">
Looks good!
</div>`

// const validFeedback = document.createRange().createContextualFragment(validBlockcode)

let invalidBlockcode = `
<div class="invalid-feedback">
Invalid
</div>`

// const invalidFeedback = document.createRange().createContextualFragment(invalidBlockcode)

const fname = document.querySelector('#validationCustom01');
const lname = document.querySelector('#validationCustom02');
const username = document.querySelector('#validationCustomUsername');
const city = document.querySelector('#validationCustom03');
const state = document.querySelector('#validationCustom04');
const zip = document.querySelector('#validationCustom05');
const check = document.querySelector('#invalidCheck');

const lower = /[a-z]/
const upper = /[A-Z]/
const special = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/

const verifyInput =(event)=>{
    let validInput = true;
    document.querySelectorAll('.valid-feedback').forEach((e)=>{
        e.remove()
    })
    document.querySelectorAll('.invalid-feedback').forEach((e)=>{
        e.remove()
    })
    form.classList.add('was-validated');
    
    
    if(fname.value.length < 8){
        console.log('Invalid Firstname')
        validInput = false
        fname.setCustomValidity('Invalid Firstname' )
        fname.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode))
        alert('sss')
        
    }
    else{
        fname.setCustomValidity('')
        fname.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode))
    }

    if(lname.value.length < 5 || lname === fname){
        console.log('Invalid Lastname')
        validInput = false
        lname.setCustomValidity('Invalid Lastname' )
        lname.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode))
        
    }
    else{
        lname.setCustomValidity('' )
        lname.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode))
    }

    // const check =()=>{
    //     let up = 0
    //     let low = 0
        
    //     for (let i = 0 ; i< username.value.length ; i++){
    //         if(username.value.charAt(i) == username.value.charAt(i).toUpperCase()){
    //             up++
    //         }
    //         else{
    //             low++
    //         }
    //     }
       
    //     return (up != 0 && low != 0)&&(username.value.length >= 8) ? false:true
    // }check()
    let u = username.value
    if(username.value.length < 8 || !lower.test(u)|| !upper.test(u)|| !special.test(u)){
        console.log('Invalid Username')
        validInput = false
        username.setCustomValidity('Invalid Username' )
        username.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode))
        
    }
    else{
        username.setCustomValidity('' )
        username.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode))
    }

    if(city.value.length == 0){
        console.log('Invalid Username')
        validInput = false
        city.setCustomValidity('Invalid Address' )
        city.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode))
        
    }
    else{
        city.setCustomValidity('' )
        city.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode))
    }

    if(state.value.length == 0){
        console.log('Invalid Username')
        validInput = false
        state.setCustomValidity('Invalid State' )
        state.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode))
        
    }
    else{
        state.setCustomValidity('' )
        state.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode))
    }

    if(zip.value.length !=5 || isNaN(zip.value)){
        console.log('Invalid Username')
        validInput = false
        zip.setCustomValidity('Invalid ZIP' )
        zip.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode))
        
    }
    else{
        zip.setCustomValidity('' )
        zip.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode))
    }
    
    if(!check.checked){
        console.log('Invalid Username')
        validInput = false
        check.setCustomValidity('Invalid' )
        check.parentNode.appendChild(document.createRange().createContextualFragment(invalidBlockcode))
        
    }
    else{
        check.setCustomValidity('' )
        check.parentNode.appendChild(document.createRange().createContextualFragment(validBlockcode))
    }
    if (!validInput){
        event.preventDefault()
    }

    
}

form.addEventListener('submit', verifyInput);
