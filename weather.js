// let a="3ca7d7918d1137d0df450f13645c7541"
// let url=`https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=${a}`


//* Done By Me

let a=document.querySelector("#srchbtn")
let weat=document.querySelector("#weatvalu")
let tep=document.querySelector("#tempvlu")
let min1=document.querySelector("#min1")
let max1=document.querySelector("#max1")
let feels=document.querySelector("#feelval")
let hum=document.querySelector("#humidvlu")
let wndsp=document.querySelector("#winval")
let drval=document.querySelector("#drval")
let imgc=document.querySelector("img")

let form=document.querySelector("form")

form.addEventListener("submit",(aaa)=>{
    aaa.preventDefault()
})

a.addEventListener("click",async()=>{
    let b=document.querySelector("#serchbx").value

        let url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=3ca7d7918d1137d0df450f13645c7541`)
        let obj=await url.json()

            // console.log(url)
            // console.log(obj)

        let dat=Object.entries(obj)

            // console.log(dat)

        let weather=Object.entries(dat[1][1])
        let temperat=Object.entries(dat[3][1])
        let wndsp1=Object.entries(dat[5][1])
            
            // console.log(wndsp)
            // console.log(temperat)
            // console.log(weather)

        let [z,]=[weather]
        let [q,j,k,l,,y]=[...temperat]
        let[wp,dr]=[...wndsp1]

        let condition=z[0][1].main

            // console.log(z[0][1]["main"])
            // console.log(q)
            // console.log(y)
            // console.log(j)
            // console.log(k)
            // console.log(l)
            mintem=Math.trunc(k[1]-273)
            maxtem=Math.trunc(l[1]-273)

            if (condition=="Clear"){
                imgc.src="./clear.png"
            }
            else if (condition=="Clouds"){
                imgc.src="./cloudy.png"
            }
            else if (condition=="Snow"){
                imgc.src="./snow.png"
            }
            else if (condition=="Rainy"){
                imgc.src="./rainy.png"
            }

            if (Math.trunc(q[1]-273)<=14){
                tep.style.color="blue"
                min1.style.color="blue"
                max1.style.color="blue"
            }
            else if (Math.trunc(q[1]-273)>=15 && Math.trunc(q[1]-273)<=30){
                tep.style.color="cyan"
                min1.style.color="cyan"
                max1.style.color="cyan"
            }
            else{
                tep.style.color="red"
                min1.style.color="red"
                max1.style.color="red"
            }
            
            if (mintem<=14){
                // tep.style.color="blue"
                min1.style.color="blue"
                // max1.style.color="blue"
            }
            else if (mintem>=15 && mintem<=30){
                // tep.style.color="cyan"
                min1.style.color="cyan"
                // max1.style.color="cyan"
            }
            else{
                // tep.style.color="red"
                min1.style.color="red"
                // max1.style.color="red"
            }
            
            if (maxtem<=14){
                // tep.style.color="blue"
                // min1.style.color="blue"
                max1.style.color="blue"
            }
            else if (maxtem>=15 && maxtem<=30){
                // tep.style.color="cyan"
                // min1.style.color="cyan"
                max1.style.color="cyan"
            }
            else{
                // tep.style.color="red"
                // min1.style.color="red"
                max1.style.color="red"
            }
            weat.innerHTML=`${condition}`
            tep.innerHTML=`${Math.trunc(q[1]-273)} <sup>o</sup>C`
            min1.innerHTML=`${mintem} <sup>o</sup>C`
            max1.innerHTML=`${maxtem} <sup>o</sup>C`
            feels.innerHTML=`${Math.trunc(j[1]-273)} <sup>o</sup>C`
            hum.innerHTML=`${y[1]}%`
            wndsp.innerHTML=`${wp[1]}`
            drval.innerHTML=`${dr[1]} <sup>o</sup>`

            imgc.style.transitionProperty="all"
            imgc.style.transitionDuration="1s"
            imgc.style.transitionTimingFunction="linear"
})