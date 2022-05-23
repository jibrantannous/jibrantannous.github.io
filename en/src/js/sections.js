/* === FUNCTIONS === */

// GET JSON RESPONSE AND RETURN DATA
const fetchData = async (json_file) => {

    const response = await fetch(json_file);
    const data = await response.json();
    return data

}

// PRINT SKILLS IN DOM
const printSkills = async () => {

    const skillsBox = document.querySelectorAll('.skills__box');
    const data = await fetchData('./src/json/skills.json');

    data.forEach(element => {
        
        skillsBox[1].innerHTML += `
            <div class="skills__habilities">
                <img class="skills__habilityImg" src="${element.img_src}" alt="${element.img_alt}">
                <h4 class="skills__habilityTitle">${element.name}</h4>
            </div>
        `;

    });

}

// PRINT PORTFOLIO IN DOM
const printPortfolio = async () => {

    const portfolioBox = document.querySelectorAll('.portfolio__box');
    const data = await fetchData('./src/json/portfolio.json');

    const html = (element) => {
        return `
            <div class="portfolio__item">
                <a class="portfolio__itemImgA" href="${element.project_href}" target="_blank">
                    <img class="portfolio__itemImg" src="${element.img_src}" alt="${element.img_alt}">
                    <span class="portfolio__itemImgIcon"><i class="ri-arrow-right-up-line"></i></span>
                    <span class="portfolio__itemCategory">${element.img_tag}</span>
                </a>
                <div class="portfolio__itemInfo">
                    <p class="portfolio__itemTitle">${element.title}</p>
                    <p class="portfolio__itemTechnology"><span>${element.title_tag}</span></p>
                </div>
                <p class="portfolio__itemDescription">${element.description}</p>
                <a class="portfolio__itemButton" href="${element.project_href}" target="_blank"><span class='highlight'>${element.button_txt}</span></a>
            </div>
        `
    }

    data.email.forEach(element => {
        portfolioBox[1].innerHTML += html(element);
    });

    data.website.forEach(element => {
        portfolioBox[0].innerHTML += html(element);
    });

    // INITIALIZE CAROUSEL
    $('.portfolio__box').owlCarousel({
        loop:false,
        margin:10,
        dots:true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

}

// PRINT SERVICES IN DOM
const printServices = async () => {

    const servicesBox = document.querySelector('.services__box');
    const data = await fetchData('./src/json/services.json');

    data.forEach(element => {
        
        servicesBox.innerHTML += `
            <div class="services__item">
                <h4 class="services__itemTitle">${element.title}</h4>
                <p class="services__itemDescription">${element.description}</p>
                <a class="services__itemButton" href="${element.button_href}" target="${element.button_target}"><span class='highlight'>${element.button_txt}</span></a>
            </div>
        `;

    });

    // INITIALIZE CAROUSEL
    $('.services__box').owlCarousel({
        loop:false,
        margin:25,
        dots:true,
        dotsEach:true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

}

// PRINT CONTACT ICONS IN DOM
const printContactIcons = async () => {

    const contactSocialMedia = document.querySelector('.contact__socialMedia');
    const data = await fetchData('./src/json/contact.json');

    data.forEach(element => {
        
        contactSocialMedia.innerHTML += `
            <a class="contact__socialMediaItem" href="${element.icon_href}" target="_blank">
                <i class="${element.icon_class}"></i>
                <p>${element.icon_name}</p>
            </a>
        `;

    });

}

/* === EJECUT FUNCTIONS === */

printSkills();
printPortfolio();
printServices();
printContactIcons();