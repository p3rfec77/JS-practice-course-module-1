const modals = () => {
    const bindModal = (triggersSelector, modalSelector, closeSelector) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {

            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";   
            }) 
        })

        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }

        close.addEventListener('click', () => closeModal());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
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
    showModalByTime('.popup', 60);
};

export default modals;