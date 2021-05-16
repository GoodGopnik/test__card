$('.block1').slick({
    slidesToShow: 1,
    arrows: false,
    fade: false,
    infinite: true,
    fade: true,
    asNavFor: '.block2',
  });
  
  $('.block2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.block1',
    prevArrow: "<img src='../images/header/Shape 1.webp' class='arrow__prev' alt=''>",
    nextArrow: "<img src='../images/header/Shape 1.webp' class='arrow__next' alt=''>",
    responsive: [
        {
            breakpoint: 650, 
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 2,
            }
        }
    ]
  });
function descriptionTab () {
    let description = document.querySelector('#description');
    let warranty = document.querySelector('#warranty');
    let designer = document.querySelector('#designer');
    let brand = document.querySelector('#brand');
    
    let descriptionBlockTextDescription = document.querySelector('.description__block__text__description');
    let descriptionBlockTextWarranty = document.querySelector('.description__block__text__warranty');
    let descriptionBlockTextDesigner = document.querySelector('.description__block__text__designer');
    let descriptionBlockTextBrand = document.querySelector('.description__block__text__brand');
    
    description.addEventListener('click', () => {
        descriptionBlockTextDescription.style.display = 'block';
        descriptionBlockTextWarranty.style.display = 'none';
        descriptionBlockTextDesigner.style.display ='none';
        descriptionBlockTextBrand.style.display = 'none';
    })
    warranty.addEventListener('click', () => {
        descriptionBlockTextDescription.style.display = 'none';
        descriptionBlockTextWarranty.style.display = 'block';
        descriptionBlockTextDesigner.style.display ='none';
        descriptionBlockTextBrand.style.display = 'none';
    })
    designer.addEventListener('click', () => {
        descriptionBlockTextDescription.style.display = 'none';
        descriptionBlockTextWarranty.style.display = 'none';
        descriptionBlockTextDesigner.style.display ='block';
        descriptionBlockTextBrand.style.display = 'none';
    })
    brand.addEventListener('click', () => {
        descriptionBlockTextDescription.style.display = 'none';
        descriptionBlockTextWarranty.style.display = 'none';
        descriptionBlockTextDesigner.style.display ='none';
        descriptionBlockTextBrand.style.display = 'block';
    })
}
function blockBar() {
    let cartAboutBlockBarImg = document.querySelector('.cart__about__block__bar__img');
    let cartAboutBlockBarMenuText = document.querySelector('.cart__about__block__bar__menu__text');

    cartAboutBlockBarImg.addEventListener('click', () => {
        cartAboutBlockBarImg.classList.toggle ('transform__rotate');
        cartAboutBlockBarMenuText.classList.toggle ('bar__menu__text');
    })
}
blockBar()
descriptionTab()