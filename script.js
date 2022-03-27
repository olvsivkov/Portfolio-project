/* --- change photo and add active button ---*/

const portfolioButton = document.querySelector('.portfolio-button')
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtnWinter = document.querySelector('.winter');
const portfolioBtnSpring = document.querySelector('.spring');
const portfolioBtnSummer = document.querySelector('.summer');
const portfolioBtnAutumn = document.querySelector('.autumn');

let selectedBtn;

portfolioButton.addEventListener('click', function(event) {
    let target = event.target;
    console.log(target)
    active(target);
    showPicture(target)
});

function active(target) {
    if (selectedBtn) {
        selectedBtn.classList.remove('active');
    } else if (target !== portfolioBtnAutumn) {
        portfolioBtnAutumn.classList.remove('active');
    }
    selectedBtn = target;
    selectedBtn.classList.add('active');
}

function showPicture(target) {
    if (target == portfolioBtnWinter) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    } else if (target == portfolioBtnSpring) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    } else if (target == portfolioBtnSummer) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    } else if (target == portfolioBtnAutumn) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/Autumn/${index + 1}.jpg`);
    }
}

/* --- change language button --- */

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.lang-link');
const dataLng = document.querySelectorAll('[data-show]');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active-lang').classList.remove('active-lang');
        el.classList.add('active-lang');
    });
});





/* --- translate --- */

function translate(lang) {
    dataLng.forEach((e) => {
        e.textContent = data[lang][e.dataset.show]
    })
}

ru.addEventListener('click', () => translate('ru'))
en.addEventListener('click', () => translate('en'))

const data = {
    'en': {
        'skills': 'Skills',
        'portfoliojs': 'Portfolio',
        'videojs': 'Video',
        'pricejs': 'Price',
        'contactsjs': 'Contacts',
        'herotitlejs': 'Alexa Rise',
        'herotextjs': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hirejs': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Retouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfoliojs': 'Портфолио',
        'videojs': 'Видео',
        'pricejs': 'Цены',
        'contactsjs': 'Контакты',
        'herotitlejs': 'Алекса Райс',
        'herotextjs': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hirejs': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
}

console.log(`Portfolio#1 \r\n1. Вёрстка валидная +10\r\n2. Вёрстка семантическая +20\r\n3. Вёрстка соответствует макету +48\r\n4. Требования к css + 12\r\n5. Интерактивность, реализуемая через css +20\r\nИтог:110`)

console.log(`Portfolio#2 \r\n1. Вёрстка соответствует макету. Ширина экрана 768px +48\r\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\r\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\r\nИтог:85`)

/*--- @media menu ---*/

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        hamburger.classList.remove('open');
    } else {
        menu.classList.add("showMenu");
        hamburger.classList.add('open');
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)


/* --- light theme --- */

const thems = document.querySelector('.thems')
const darkTheme = document.querySelector('.darkIconTheme')
const lightTheme = document.querySelector('.iconTheme')
const BlockLightTheme = document.querySelectorAll('.light-theme-one');
const TitleSection = document.querySelectorAll('.section-title')
const spn = document.querySelectorAll('.spn')
const lightButton = document.querySelectorAll('.portfolio-btn')
const burgerMenu = document.querySelector('.menu-container')
const menuItemWord = document.querySelectorAll('.menuItem')
const BurgerLight = document.querySelectorAll('.line')
const body = document.querySelector('body');

thems.addEventListener('click', changeTheme);
console.log(body)

function changeTheme(event) {
    target = event.target
    console.log(target)
    if (target === darkTheme) {
        darkTheme.classList.toggle('theme-active');
        darkTheme.classList.add('theme-non-active');
        lightTheme.classList.toggle('theme-non-active');
        lightTheme.classList.add('theme-active');
        lightButton.forEach((element) => {
            element.classList.toggle('light-theme')
        });
        burgerMenu.classList.toggle('menu-container-light')
        menuItemWord.forEach((element) => {
            element.classList.toggle('menuItem-light')
        });
        BurgerLight.forEach((element) => {
            element.classList.toggle('line-light')
        })

    }
    if (target === lightTheme) {
        lightTheme.classList.toggle('theme-active');
        lightTheme.classList.add('theme-non-active');
        darkTheme.classList.toggle('theme-non-active');
        darkTheme.classList.toggle('theme-active');
        lightButton.forEach((element) => {
            element.classList.toggle('light-theme')
        });
        burgerMenu.classList.toggle('menu-container-light')
        menuItemWord.forEach((element) => {
            element.classList.toggle('menuItem-light')
        });
        BurgerLight.forEach((element) => {
            element.classList.toggle('line-light')
        })
    }
}

darkTheme.addEventListener('click', openLightTheme);
lightTheme.addEventListener('click', openDarkTheme);


function openLightTheme() {
    BlockLightTheme.forEach((element) => {
        element.classList.toggle('light-theme')
    })
    TitleSection.forEach((element) => {

        element.classList.toggle('title-skills-light-theme')
    })
    spn.forEach((element) => {

        element.classList.toggle('spn-light-theme')
    })

}

function openDarkTheme() {
    BlockLightTheme.forEach((element) => {
        element.classList.toggle('light-theme')
    })
    TitleSection.forEach((element) => {

        element.classList.toggle('title-skills-light-theme')
    })
    spn.forEach((element) => {

        element.classList.toggle('spn-light-theme')
    })
}

/* --- js30-custom-video --- */

/* --- get constants ---*/

const videoPlayer = document.querySelector('.video-player-mp4');
const playBtn = document.querySelector('.play');
const playBtnImg = document.querySelector('.play-btn');
const progressLine = document.querySelector('.progress-line');
const soundLine = document.querySelector('.range-sound');
const soundbBtn = document.querySelector('.sound-btn');
const bigVideoBtn = document.querySelector('.big-video-player')

/* --- create functions ---*/

function videoStatus() {
    if (videoPlayer.paused) {
        videoPlayer.play()
        playBtnImg.src = './assets/svg/video_svg/pause.svg'
        bigVideoBtn.classList.toggle('active-play');
    } else {
        videoPlayer.pause()
        playBtnImg.src = './assets/svg/video_svg/play.svg'
        bigVideoBtn.classList.toggle('active-play');
    };
};

function progressLineVideo() {
    progressLine.value = (videoPlayer.currentTime / videoPlayer.duration) * 100

}

function setProgressLine() {
    videoPlayer.currentTime = (progressLine.value * videoPlayer.duration) / 100
    console.log(videoPlayer.currentTime)
    console.log(progressLine.value)
    console.log(videoPlayer.duration)
}

let soundRangeLine

function changeSound() {
    soundRangeLine = soundLine.value;
    videoPlayer.volume = soundRangeLine;
    console.log(soundRangeLine)
    console.log(videoPlayer.volume)

}

function changeSoundImg() {
    if (soundRangeLine === "0") {
        soundbBtn.src = './assets/svg/video_svg/no_sound.svg'
    } else {
        soundbBtn.src = './assets/svg/video_svg/sound.svg'
        videoPlayer.muted = false;
    }
}

function changeSoundImgClick() {
    if (soundLine.value > "0") {
        soundbBtn.src = './assets/svg/video_svg/no_sound.svg'
        soundLine.value = "0"
        videoPlayer.muted = true;
    } else if (soundLine.value === "0") {
        soundbBtn.src = './assets/svg/video_svg/sound.svg'
        soundLine.value = soundRangeLine
        videoPlayer.muted = false;
    } else videoPlayer.muted = false;
}

function showVideoBtn(event) {
    if (videoPlayer.paused) {
        videoPlayer.play()
        bigVideoBtn.classList.toggle('active-play');
        playBtnImg.src = './assets/svg/video_svg/pause.svg'
    } else {
        videoPlayer.pause()
        bigVideoBtn.classList.toggle('active-play');
        playBtnImg.src = './assets/svg/video_svg/play.svg'
    }
};

function progressLineColor() {
    const lineValue = progressLine.value;
    lineValue.style.background = `#be9e3b`
}


/* --- get listener --- */

playBtn.addEventListener('click', videoStatus);
videoPlayer.addEventListener('click', videoStatus);
videoPlayer.addEventListener('timeupdate', progressLineVideo);
progressLine.addEventListener('change', setProgressLine);
soundLine.addEventListener('change', changeSound);
soundLine.addEventListener('change', changeSoundImg);
soundbBtn.addEventListener('click', changeSoundImgClick);
bigVideoBtn.addEventListener('click', showVideoBtn)
progressLine.addEventListener('input', progressLineColor)


/* --- local storage ---*/

/* ---try to add local storige ---*/

let lang = 'en';

function setLocalStorage() { /*<- записываем в localstorage значение переменной до перезагрузки*/
    localStorage.setItem('lang', lang);
};
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() { /*<- после перезагрузки достаем из localstorage нужные значения и присваиваем их */
    if (localStorage.getItem('lang') === 'en') {
        en.classList.add('active-lang');
        ru.classList.remove('active-lang');
        lang = 'en';
    }
    if (localStorage.getItem('lang') === 'ru') {
        en.classList.remove('active-lang');
        ru.classList.add('active-lang');
        lang = 'ru';
    };
}
window.addEventListener('load', getLocalStorage);

/* This bullshit in not work!!! =((( */