const modals = () => {
    const bindModal = (triggersSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');

      const closeAllModals = () => {
        windows.forEach((window) => {
            window.style.display = 'none';
        })
    }

        triggers.forEach(trigger => {

            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

            closeAllModals();
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";   
            }) 
        })

        const closeModal = () => {
            closeAllModals();
            document.body.style.overflow = "";
        }

        close.addEventListener('click', () => closeModal());

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
               closeModal();
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
               closeModal();
            }
        })
        
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
                document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden"; 
        }, time * 1000);
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60);
};

export default modals;
