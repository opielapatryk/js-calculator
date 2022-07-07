const tds = document.querySelectorAll('td')
tds.forEach((e)=>{
    e.addEventListener("click",()=>{
        tds[0].innerHTML += e.innerHTML;
    })
})