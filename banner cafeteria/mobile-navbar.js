class MobileNavBar {
    constructor(MobileMenu, navList, ) {
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleclick.bind();
    }

    animateLinks() {
        this.navLinks.forEach( (link, index) => {
            console.log(index);
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0 3s');
        })
    }

    handleclick () {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.MobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.MobileMenu) {
            this.addClickEvent(); 
        }
        return this;

    }
}

const MobileNavBar = new MobileNavBar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
