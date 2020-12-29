const promise = new Promise((resolve, reject) => 
setTimeout(() => {
  const indexNull = 0;
  const state = true;
  console.log(indexNull);
  resolve(state);
}, ));

promise
  .then(() => 
  {
  console.log(1);
  },
  (state)=>{
    console.log(2);
    return Promise.resolve(state);
  })

  .then((state)=>{
    console.log(3);
    return Promise.reject(state);
  },
  () => {
    console.log(4);
    return Promise.reject();
  })

  .then(()=>{
    console.log(5);
  },
  (state) => {
    console.log(6);
    if(state === undefined){
      return Promise.reject();
    } else {
      return Promise.resolve();
    }
  })

  .then(()=>{
    console.log(7);
  },
  () => {
    console.log(8);
    return Promise.resolve();
  })

  .then(()=>{
    console.log(9);
    return Promise.reject();
  },
  () => {
    console.log(10);
  })

  .then(()=>{
    console.log(11);
  },
  () => {
    console.log(12);
  });