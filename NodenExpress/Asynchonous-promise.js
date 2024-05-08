const connect = true;
const url = "eiei";
function downloading(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (connect) {
        resolve("finish");
      } else {
        reject("not done");
      }
    }, 3000);
  });
}

//Promise
downloading(url).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
  console.log('eiei')
});

//Promise then
downloading(url).then((result)=>{
  console.log(result)
  return downloading(url)
}).then((result)=>{
  console.log(result)
  return downloading(url)
}).then((result)=>{
  console.log(result)
  return downloading(url)
})