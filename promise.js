const msg=(count)=>new Promise((resolve,reject)=>{
    
    if(count>=1)
    {  
        setTimeout(()=>{
          document.querySelector(".countdown").innerText=count;
          resolve(count);
        },1000);   
    }

   
    else{
        setTimeout(()=>{
            document.querySelector(".countdown").innerText="Happy Independence day";
            reject("completed");
        },1000);
         
    }
});

msg(9).then((ct)=>msg(--ct))//8
      .then((ct)=>msg(--ct))//7
      .then((ct)=>msg(--ct))//6
      .then((ct)=>msg(--ct))//5
      .then((ct)=>msg(--ct))//4
      .then((ct)=>msg(--ct))//3
      .then((ct)=>msg(--ct))//2
      .then((ct)=>msg(--ct))//1
      .then((ct)=>msg(--ct))//Happy Independence day
      .catch((msg)=>console.log(msg));

