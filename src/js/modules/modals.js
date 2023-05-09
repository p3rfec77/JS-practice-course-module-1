import closeAllModals from "./closeAllModals";

const modals = () => {
    const bindModal = (triggersSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        triggers.forEach(trigger => {

            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

            closeAllModals();
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";  
                document.body.style.marginRight = `${scroll}px`; 
            }) 
        })

        const closeModals = () => {
            closeAllModals();
            document.body.style.marginRight = `0px`; 
        };

        close.addEventListener('click', () =>  closeModals());

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModals();
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModals();
            }
        })
        
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
                document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden"; 
        }, time * 1000);
    }

    const calcScroll = () => {
        const block = document.createElement('div');
        block.style.width = '50px';
        block.style.height = '50px';
        block.style.overflowY = 'scroll';
        block.style.visibility = 'hidden';

        document.body.append(block);
        const scrollWidth = block.offsetWidth - block.clientWidth;
        block.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.call', 60);
};

export default modals;
