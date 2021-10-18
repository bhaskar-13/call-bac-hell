// 98% we dont create promise but use the promise
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
         //calling callback function
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
      .catch((msg)=>console.log(msg));//In the above program we have created a function message which accepets a parameter and takes in promise object which intend taes two call back.In the resolve the settime out is used in which the header is selected and the count value is assigned only after 1 second.If the condition fails it goes to reject stated to print happy indepence day and message completed. then use .then to chain it and hence catch the error using .catch.



//promises takes in a function while creating which itself takes two call back function.

// states in promies are 1.Pending 2.Fullfilled 3.Rejected.
// console.log(ilegal);

// ilegal.then(msg=>msg + "congragulation")
//        .then((msg1)=>console.log(msg1+"Heaven"))//channeing process
//       .catch((msg)=>console.log(msg));

// const data=JSON.parse('{"x":4,"name":"bhaskar"}');
// console.log(data);

// setTimeout(()=>{
//     document.querySelector(".countdown").innerText=count;

// },1000);
