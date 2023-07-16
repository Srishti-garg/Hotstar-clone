let movies = [
    {
      name: "falcon and the winter soldier",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 2.PNG"
    },
    {
      name: "loki",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
      image: "images/slider 5.PNG"
    }
  ];
const carousel=document.querySelector('.carousel');
let slider=[];
let slideIndex=0;
const createslide=()=>{
    if(slideIndex>=movies.length)
    {
        slideIndex=0;
    }
    //creating dom elements
    let slide=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    //attaching all elements 
    // imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    slide.appendChild(content);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements class name
    slide.className='slider';
    content.className='slide-content';
    h1.className = "mov-title";
  p.className = "mov-des";
  imgElement.className = "slider-img";
  
  slider.push(slide);

  if(slider.length){
      slider[0].style.marginLeft=`calc(-${100* (slider.length-2)}% - ${30* (slider.length-2)}px)`;

}}
for(let i=0;i<5;i++){
    createslide();
}

setInterval(()=>{
    createslide();
}, 3000);

//video-cards
const videoCards=document.querySelectorAll('.video-card');
videoCards.forEach(item=>{
  item.addEventListener('mouseover',()=>{
    let video=item.children[1];
    video.play();
    // console.log(video);
  });
  item.addEventListener('mouseleave',()=>{
    let video=item.children[1];
    video.pause();
  });
});

//card-sliders

let cardContainers=document.querySelectorAll('.card-container');
let preBtns=document.querySelectorAll('.pre-btn');
let nextBtns=document.querySelectorAll('.next-btn');

cardContainers.forEach((item,i)=>{
  let containerDimensions=item.getBoundingClientRect();
  let containerWidth=containerDimensions.width;

  nextBtns[i].addEventListener('click',()=>{
    item.scrollLeft+=containerWidth-200;
  })
  preBtns[i].addEventListener('click',()=>{
    item.scrollLeft-=containerWidth+200;
  })
});