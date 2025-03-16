const watch = document.querySelector('.watch');
const button = document.querySelector('button')

const obCallback =(payload)=>{
    console.log(payload[0].isIntersecting)
    if(payload[0].isIntersecting){
        button.disabled = false
    }
    else{
        button.disabled = true
    }
    
}

const ob = new IntersectionObserver(obCallback)
ob.observe(watch)