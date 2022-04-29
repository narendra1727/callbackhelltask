
const text=document.createElement("h1")
document.body.appendChild(text)

let countdown=10;


setTimeout(()=>{
    text.innerHTML=countdown--;
    setTimeout(()=>{
        text.innerHTML=countdown--;
        setTimeout(() => {
            text.innerHTML=countdown--;
            setTimeout(() =>{
                text.innerHTML=countdown--;
                setTimeout(()=>{
                    text.innerHTML=countdown--;
                    setTimeout(()=>{
                        text.innerHTML=countdown--;
                        setTimeout(()=>{
                            text.innerHTML=countdown--;
                            setTimeout(()=>{
                                text.innerHTML=countdown--;
                                setTimeout(()=>{
                                    text.innerHTML=countdown--;
                                    setTimeout(()=>{
                                        text.innerHTML=countdown--;
                                        setTimeout(()=>{
                                            text.innerHTML=countdown--;
                                            text.innerHTML="Happy Independence Day"
                                        },1000)
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000);
        },1000);
    },1000);
},1000);

