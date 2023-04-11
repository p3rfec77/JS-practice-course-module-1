const closeAllModals = () => {
    const windows = document.querySelectorAll('[data-modal]');

    windows.forEach((window) => {
        window.style.display = 'none';
    })
    document.body.style.overflow = "";
};

export default closeAllModals;