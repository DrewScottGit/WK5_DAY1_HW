// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector('main');

let subMenuEl = document.getElementById('sub-menu');


//task 1.0 - 1.
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1> SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

const topMenuEl = document.querySelector('#top-menu')

//task 2.0 - 2.
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

// task 3.0 - 3.
menuLinks.forEach(function (link) {
  const linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});


//task 4.0 - 4.5

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = ('0')

//task 5.0 - 5.6
let topMenuLinks = document.querySelectorAll('#top-menu a')

let showingSubMenu = false


  //accroding to google there is a difference in this running due to the capitalization. In the DOM tree of an HTML document it is requiered to use all caps in your code. If the DOM tree is in XML (what is XML?) then use lower case. 

topMenuEl.addEventListener('click', topMenuClick)

function topMenuClick(e){
  e.preventDefault();
    if (e.target.tagName !== "A")
     return;




// This tested if the above function was working....thank God it finally works. The capitalizaiton through me off. I rebuilt this "basic" function like 10 times. console.log(click.target.textContent)

// classList taps into the DOMTokenList. The list is long but good to know. There are a good numbner or methods in the DOM Token List. Unrealistic to memorize but certainly something to be aware of!!!
  if(e.target.classList.contains('active')){
    e.target.classList.remove('active');
    showingSubMenu = false
    subMenuEl.style.top = 0
    return;
    }
    
      topMenuLinks.forEach(function (e) {
        e.classList.remove('active')
      });
      e.target.classList.add("active");

    // 5.6 what in the world is this asking for. sounds like this step is asking for an if statement. if showingSubMenu is not undfined "like in the ABOUT section" then showingSubMenu == true. If we define a true statement then lets define a false one so....else showingSubMenu == false. The hint says to turn this into a variable that we can use later so that would mean to turn this if statement into a function
    const linkClick = menuLinks.find(function (objectClick) {
      return objectClick.text === e.target.textContent
      
    });
  
    showingSubMenu = 'subLinks' in linkClick;
    //5.7 and 5.8

    if(showingSubMenu == true){
      buildSubMenu (linkClick.subLinks)
      subMenuEl.style.top = "100%"
    }else{
      subMenuEl.style.top = "0"
    }

    function buildSubMenu(subLinks){
      subMenuEl.innerHTML = '';
      subLinks.forEach(function (link){
        let newLink = document.createElement('a');
        newLink.setAttribute('href', link.href)
        newLink.textContent = link.text;
        subMenuEl.appendChild(newLink)
      })
    };


    //6.0 - 6.4
    subMenuEl.addEventListener('click', function (e){
      e.preventDefault();
      if(e.target.tagName !== 'A'){
      console.log(e.target.textContent)
    }

    showingSubMenu = false
    subMenuEl.style.top = "0"
    
    topMenuLinks.forEach(function (permaRemove){
      permaRemove.classList.remove("active")
    })
//
    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`
    


    // To be honest I have run out of steam and need to turn this in. 
    // mainEl.innerHTML = '<h1>about<h1>'
  })};