const tabs = ({headerSelector, tabsSelector, tabsContentSelector, activeClass, display = 'block'}) => {
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
        tabsContent[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

   
    const findCorrectTab = "(target.classList.contains(tabsSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))";

   const changeTabs = (action) => { header.addEventListener(action, (e) => {
        const target = e.target;
        if (target && findCorrectTab.replaceAll('"', '') || (e.key === 'Enter')) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
   }

    changeTabs('click');
    changeTabs('keypress');
};

export default tabs;
