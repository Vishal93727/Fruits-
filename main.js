
let tl=gsap.timeline()

tl.from(".front",{
  y:1000,
  duration:1
})

tl.from("nav ul a",{
  y:-100,
  duration:1,
  stagger:1
})

tl.from("#coffee", {
  y: 800,
  duration: 1,
  scale:2
})
tl.from (".front h1",{
  y:1000,
  duration:1,
  
})
tl.from("#bean1",{
  y:800,
  duration:1,
  scale:2
})
tl.from("#bean3",{
  y:800,
  duration:1,
  scale:2
})
tl.from("#bean2", {
  y: 800,
  duration: 1,
  scale: 2
})
tl.from("#bean4", {
  y: 800,
  duration: 1,
  scale: 2
})
tl.from("#bean5", {
  y: 800,
  duration: 1,
  scale: 2
})
let t2=gsap.timeline({
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    scrub:2,
  markers:false,
    start:"0% 90%",
    end:"50% 50%"
  }
})
t2.to("#coffee",{
  top:890,
  left:38,
  scale:0.9
},"connect")
t2.to("#bean5",{
  top:1150,
  left:20,
  scale:1.5,
  rotate:230
  
},"connect")
t2.to("#bean3",{
  top:1170,
  left:70,
  scale:1.5,
  rotate:310
  
},"connect")




let t3=gsap.timeline({
  scrollTrigger:{
    trigger:"#menu",
    scroller:"body",
    scrub:2,
    markers:false,
    start:"0% 90%",
    end:"50% 50%"
  }
})
t3.to("#coffee",{
  top:1650,
  left:129,
  scale:0.6
},"con")
t3.to("#bean5",{
  top:1600,
  left:100,
  scale:1,
  rotate:230
  
},"con")
t3.to("#bean3",{
  top:1890,
  left:170,
  scale:1.2,
  rotate:120
  
},"con")

t3.from("#orangec",{
  x:30,
  duration:1
},"con")
t3.from("#orange", {
  x: 30,
  duration: 1
}, "con")
t3.from("#mango", {
  x: -30,
  duration: 1
}, "con")
t3.from("#mangoc", {
  x: -30,
  duration: 1
}, "con")


let t4=gsap.timeline({
  scrollTrigger:{
    trigger:"#contact",
    scroller:"body",
    scrub:2,
    markers:false,
    start:"0% 90%",
    end:"50% 50%"
  }
})
t4.to("#coffee",{
  top:2510,
  left:200,
  scale:0.9,
  rotate:0
},"conn")
t4.to("#bean3",{
  top:2440,
  left:200,
  scale:1.2,
  rotate:120
  
},"conn")

t4.to("#orangec",{
  top: 1180,
  left: 280,
  scale: 1.5,
  rotate: 80
},"conn")
t4.to("#orange", {
  top: 950,
  left: 280,
  scale: 1.5,
  rotate: 80
  
}, "conn")


t4.to("#mangoc", {
  top: 1050,
  left: 270,
  scale: 1.5,
  rotate: 40
  
}, "conn")


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});