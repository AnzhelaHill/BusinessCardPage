document.addEventListener('DOMContentLoaded', () => {
    const navigation = document.querySelector('.nav-bcg');
    const introSectionHeight = window.innerHeight;
    const burgerBtn = document.querySelector('#burger-btn');
    const burgerMenu = document.querySelector('#burger-menu');
    const burgerX = document.querySelector('#burger-x');
    const navMenu = document.querySelector('#nav-menu');
    const navMenuItems = document.querySelectorAll('.item-nav-menu');
    const itemsBurgerMenu = document.querySelectorAll('.item-burger-menu');
    const readMoreButtons = document.querySelectorAll('.read-more');
    const msgStatus = document.querySelector('.msg-status');
    const footerYear = document.querySelector(".footer__year");
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > introSectionHeight) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });

    const OpenMenu = () => {
        burgerMenu.classList.add('burger-active')
    }
    const CloseMenu = () => {
        burgerMenu.classList.remove('burger-active')
    }
    const ActiveMenu = (e) => {
        navMenuItems.forEach((i)=>{
            i.classList.remove('active-nav')
            if(e.target == i || e.target == i.firstChild) {
                i.classList.add('active-nav')
            }
        })
    }
    itemsBurgerMenu.forEach(button=> {
        button.addEventListener('click', () => {
            CloseMenu()
        })
    })

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textElement = button.previousElementSibling; 
            textElement.classList.toggle('expanded');
            
            if (textElement.classList.contains('expanded')) {
                button.textContent = 'mniej...';
            } else {
                button.textContent = 'więcej...';
            }
        });
    });

    if(document.location.search === '?email_status=sent') {
        msgStatus.classList.add('success')
        msgStatus.textContent = 'Wiadomość wysłana!'

        setTimeout(() => {
            msgStatus.classList.remove('success')
        }, 3000);
    }
    if(document.location.search === '?email_status=error') {
        msgStatus.classList.add('error')
        msgStatus.textContent = 'Wystąpił bląd.'

        setTimeout(() => {
            msgStatus.classList.remove('error')
        }, 3000);
    }

    const handleCurrentYear = () => {
		const year = (new Date).getFullYear();
		footerYear.innerText = year;
	}

    burgerBtn.addEventListener('click', OpenMenu)
    burgerX.addEventListener('click', CloseMenu)
    navMenu.addEventListener('click', ActiveMenu)
    handleCurrentYear()
});