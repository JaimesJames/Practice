const connect = true;
const url = "eiei";
function downloading(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (connect) {
        resolve("finish :"+url);
      } else {
        reject("not done");
      }
    }, 1000);
  });
}

// it still used promise function but upgrade for hell solvable (callback/promise hell)
async function start(){
    console.log(await downloading(url+'1'))
    console.log(await downloading(url+'2'))
    console.log(await downloading(url+'3'))
    console.log(await downloading(url+'4'))
}

//Backend api bring products image to Frontend
//promise > pending > wait for complete information > displaying
//Looks like waiting for some loading... on display

start()