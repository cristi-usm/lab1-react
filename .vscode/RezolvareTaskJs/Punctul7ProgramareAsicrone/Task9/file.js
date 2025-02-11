// ### 7.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.  -->
const process1=new Promise((resolve)=> setTimeout(()=>resolve(1),2000));
const process2=new Promise((resolve)=> setTimeout(()=>resolve(1),3000));
const process3=new Promise((resolve)=> setTimeout(()=>resolve(1),4000));

Promise.all([process1,process2,process3]).then((values)=>{
    console.log(values);
});

Promise.allSettled([process1,process2,process3]).then((result)=>{
    console.log(result);
})

