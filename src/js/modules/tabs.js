const tabs = (headerSelector, tabsSelector, tabsContentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);

    const hideTabContent = () => {
        tabsContent.forEach(content => {
            content.style.display = 'none';
        })

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        })
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
};

export default tabs;
