//To get data  
/**uneven are caused by resolution differences (Perfect For iphoneSE size )*/
let users=[
    {
        profilepic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    displaypic:"https://images.unsplash.com/photo-1718768468505-b63c16b2ac6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHMlMjBwaG90b3xlbnwwfDF8Mnx8fDI%3D",
    pendingMessage:6,
    location:"New Delhi,INDIA",
    name:"Aisha",
    age:23,
    interests:[{
               interest:"Singing",
               icon:`<i class="ri-music-fill"></i>`,
        },{
              interest:"Writing",
              icon:`<i class="ri-quill-pen-line"></i>`,
        }],
    bio: "Lorem ipsum dolor sit amet consectetur",  
    isFriends:null
},
  {
    profilepic:"https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:"https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage:2,
    location:"Chennai,INDIA",
    name:"Ashya",
    age:25,
   interests:[{
               interest:"Songs",
               icon:`<i class="ri-music-fill"></i>`,
        },{
              interest:"News",
              icon:`<i class="ri-quill-pen-line"></i>`,
        }],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum dolorum excepturi, impedit reiciendis modi.",  
    isFriends:null
},
{
    profilepic:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    displaypic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    location:"Jalandhar,INDIA",
    name:"Diksha",
    age:22,
    interests:[{
               interest:"Songs",
               icon:`<i class="ri-music-fill"></i>`,
        },{
              interest:"Novels",
              icon:`<i class="ri-quill-pen-line"></i>`,
        }],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum dolorum excepturi, impedit reiciendis modi.",  
    isFriends:null
},
{
     profilepic:"https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmxzJTIwNTAwKjc1MHxlbnwwfDF8MHx8fDI%3D",
    displaypic:"https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmxzJTIwNTAwKjc1MHxlbnwwfDF8MHx8fDI%3D",
    pendingMessage:2,
    location:"Chennai,INDIA",
    name:"Manya",
    age:24,
   interests:[{
               interest:"Hymns",
               icon:`<i class="ri-music-fill"></i>`,
        },{
              interest:"Comics",
              icon:`<i class="ri-quill-pen-line"></i>`,
        }],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum dolorum excepturi, impedit reiciendis modi.",  
    isFriends:null
},
{
     profilepic:"https://images.unsplash.com/photo-1496372487738-7b9e5c55ddda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:"https://images.unsplash.com/photo-1496372487738-7b9e5c55ddda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage:2,
    location:"Sikkim,INDIA",
    name:"Maya",
    age:23,
   interests:[{
               interest:"Hymns",
               icon:`<i class="ri-music-fill"></i>`,
        },{
              interest:"Writing",
              icon:`<i class="ri-quill-pen-line"></i>`,
        }],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum dolorum excepturi, impedit reiciendis modi.",  
    isFriends:null
},
];


function select(elem){
    return document.querySelector(elem);
}


let curr=0;
let isAnimating=false;

function setData(index){
    /**for calling user data */    
     select('.prflimg img').src =users[index].profilepic;
     select('.badge h5').textContent = users[index].pendingMessage;
     select('.location h3').textContent = users[index].location;
     select('.name h1:nth-child(1)').textContent = users[index].name;
     select('.name h1:nth-child(2)').textContent = users[index].age;
/**for calling interest part */
    var clutter="";
     users[index].interests.forEach(function(interest){
       clutter += ` <div class="tag flex items-center bg-white/70 px-3 py-1 rounded-full  gap-3">
                        ${interest.icon}
                        <h3 class="text-sm capitalize tracking-tighter">${interest.interest}</h3>
                    </div>`
    })
    select('.tags').innerHTML=clutter;

    select('.bio p').textContent = users[index].bio;

}

/**for changing profile cards */
(function setInitial(){
    select('.maincard img').src = users[curr].displaypic;
    select('.incomingcard img').src = users[curr+1]?.displaypic;
    setData(curr);

 

    curr = 2;

})(); /**This Curly Brace helps in calling AKA IMMEDIATELY INVOKED FUNCTIONS EXPRESSION */




/*****Animation*******/

 function imageChange(){
    if(!isAnimating){
        isAnimating=true;
        let tl=gsap.timeline({
        onComplete:function(){
            isAnimating=false;
          let main= select(".maincard");
          let incomig= select(".incomingcard");

          incomig.classList.remove("z-[2]");
          incomig.classList.add("z-[3]");
          incomig.classList.remove("incomingcard");


          main.classList.remove("z-[3]");
          main.classList.add("z-[2]");
          gsap.set(main,{
            scale:1,
            opacity:1,
          })
          if(curr ===users.length)curr=0;
          select(".maincard img").src= users[curr].displaypic;
          curr++;
          main.classList.remove("maincard");
          incomig.classList.add("maincard");
          main.classList.add("incomingcard");

        }
    });
   tl.to(".maincard",{scale:1.1,opacity:0,ease:Circ, duration:0.9},"a")
    .from(".incomingcard",{scale:0.9,opacity:0,ease:Circ, duration:1.1},"a")
 }
    }
          let deny = select(".deny");
   let accept = select(".accept");

deny.addEventListener("click",function(){
     imageChange();
     setData(curr-1);
       gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger:.06,
    ease: Power4.easeInOut,
    duration:1.5,
 })
    });  
    accept.addEventListener("click",function(){
     imageChange();
     setData(curr-1);
       gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger:.06,
    ease: Power4.easeInOut,
    duration:1.5,
 })
    }); 



/***For Contents */

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden' );
        div.appendChild(element);
        select(".details").appendChild(div);
     })
})();

