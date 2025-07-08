const reviews = [
    {
        id : 1,
        name:'susan smith',
        job : 'web developer',
        img : 'https://www.course-api.com/images/people/person-1.jpeg',
        text : 'I am a web developer with over 10 years of experience in building responsive and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I am passionate about creating seamless user experiences.'
    },
    {
        id : 1,
        name:'susan smith',
        job : 'web developer',
        img : 'https://www.course-api.com/images/people/person-1.jpeg',
        text : 'I am a web developer with over 10 years of experience in building responsive and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I am passionate about creating seamless user experiences.'
    },
    {
        id : 1,
        name:'susan smith',
        job : 'web developer',
        img : 'https://www.course-api.com/images/people/person-1.jpeg',
        text : 'I am a web developer with over 10 years of experience in building responsive and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I am passionate about creating seamless user experiences.'
    },
    {
        id : 2,
        name:'Anna smith',
        job : 'C# developer',
        img : 'https://www.course-api.com/images/people/person-1.jpeg',
        text : 'I am a web developer with over 10 years of experience in building responsive and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I am passionate about creating seamless user experiences.'
    },
    {
        id : 3,
        name:'Susy smith',
        job : 'App developer',
        img : 'https://www.course-api.com/images/people/person-1.jpeg',
        text : 'I am a web developer with over 10 years of experience in building responsive and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I am passionate about creating seamless user experiences.'
    },
    {
        id : 4,
        name:'Andrea smith',
        job : 'React developer',
        img : 'https://www.course-api.com/images/people/person-1.jpeg',
        text : 'I am a web developer with over 10 years of experience in building responsive and user-friendly websites. I specialize in HTML, CSS, and JavaScript, and I am passionate about creating seamless user experiences.'
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentIten++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function() {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});