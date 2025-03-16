// Calculate order handler
function calSummary(){
    console.log('Summary button is clicked.');   
    // Add your code here
    const avai = document.querySelectorAll('.book-title').length
    const title = document.querySelectorAll('.book-title')
    const price = document.querySelectorAll('.book-price')
    // console.log(title[1].innerText)
    var sum = []
    for(let i = 1 ; i<= avai; i++){
        let tar = document.querySelector(`#book${i}-quantity`).value
        
        if (tar > 0){
            sum.push({
                no:i,
                title:title[i-1].innerText,
                price:price[i-1].innerText,
                quan:tar
            })
        }
    }
    
}

const btnSummary = document.querySelector('#btnSummary');
btnSummary.addEventListener('click', calSummary);

// Reset button handler
function clearSummary(){
    console.log('Reset button is clicked.');
    // Add your code here


}

const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', clearSummary);