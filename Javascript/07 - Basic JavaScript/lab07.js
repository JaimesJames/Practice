// Calculate order handler
function calSummary() {
    console.log('Summary button is clicked.');
    // Add your code here
    const table_spot = document.querySelector('.order-summary')
    const book_name = document.querySelectorAll('.book-title')
    const table = document.createElement("table")
    table.className += `tableja table table-striped`
    
    table_spot.innerHTML = `<h5>Order summary</h5>`
    let counting = 0
    let sum = 0
    let price = 0
    for (let i = 1; i < 8; i++) {
        const book_count = document.getElementById(`book${i}-quantity`).value
        const book_price = document.getElementById(`book${i}-price`).innerText
        console.log(book_price)

        let tr = document.createElement("tr")

        let name = document.createElement("td")
        name.appendChild(document.createTextNode(book_name[i - 1].innerText))

        let count = document.createElement("td")
        count.appendChild(document.createTextNode(`(${book_price}X${book_count})`))

        let price = document.createElement("td")
        price.appendChild(document.createTextNode(`${parseFloat(book_price) * parseInt(book_count)}`))

        tr.appendChild(name)
        tr.appendChild(count)
        tr.appendChild(price)
        console.log(tr)

        table.appendChild(tr)
        document.querySelector('.order-summary').appendChild(table)
        console.log(i)

        counting += parseInt(book_count)
        sum += parseFloat(book_price) * parseInt(book_count)
    }




    let lod = document.createElement("tr")
    let l1 = document.createElement("td")
    let l2 = document.createElement("td")
    let l3 = document.createElement("td")

    l1.appendChild(document.createTextNode(`ส่วนลดค่าหนังสือ:`))
    l2.appendChild(document.createTextNode(``))
    if (counting == 3) {
        price = sum * 0.9
        l3.appendChild(document.createTextNode(`${sum * 0.1}`))
    }
    else if (counting >= 5) {
        price = sum * 0.85
        l3.appendChild(document.createTextNode(`${sum * 0.15}`))
    }
    else{
        price = sum
        l3.appendChild(document.createTextNode(0))
    }

    lod.appendChild(l1)
    lod.appendChild(l2)
    lod.appendChild(l3)
    table.appendChild(lod)

    let song = document.createElement("tr")
    let s1 = document.createElement("td")
    let s2 = document.createElement("td")
    let s3 = document.createElement("td")

    s1.appendChild(document.createTextNode(`ค่าจัดส่ง:`))
    s2.appendChild(document.createTextNode(`(${(counting)}X5)`))
    if (sum < 500) {
        price += counting*5
        s3.appendChild(document.createTextNode(`${counting*5}`))
    }
    else {
        s3.appendChild(document.createTextNode(0))
    }

    song.appendChild(s1)
    song.appendChild(s2)
    song.appendChild(s3)
    table.appendChild(song)


    let total = document.createElement("tr")
    let t1 = document.createElement("td")
    let t2 = document.createElement("td")
    let t3 = document.createElement("td")

    t1.appendChild(document.createTextNode(`ราคารวม (ค่าหนังสือหลังหักส่วนลด + ค่าจัดส่ง):`))
    t2.appendChild(document.createTextNode(``))

    console.log(sum)
    t3.appendChild(document.createTextNode(`${price}`))
    total.appendChild(t1)
    total.appendChild(t2)
    total.appendChild(t3)
    table.appendChild(total)

    table_spot.appendChild(table)



}

const btnSummary = document.querySelector('#btnSummary');
btnSummary.addEventListener('click', calSummary);

// Reset button handler
function clearSummary() {
    console.log('Reset button is clicked.');
    // Add your code here

    const table = document.querySelector('.tableja')
    while(table.firstChild){
        table.removeChild(table.lastChild)
    }

    // const table_spot = document.querySelector('.order-summary')
    // table_spot.innerHTML = `<h5>Order summary</h5>`
    // for (let i = 1; i < 8; i++) {
    //     document.getElementById(`book${i}-quantity`).value = 0

    // }



}

const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', clearSummary);