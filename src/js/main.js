import "./slider"; 
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => {
   
   const modalState = {};
   changeModalState(modalState);
   
    modals();

    const glazingSelectors = {
        headerSelector: '.glazing_slider',
        tabsSelector: '.glazing_block',
        tabsContentSelector: '.glazing_content',
        activeClass: 'active',
    };
    tabs(glazingSelectors);
    
    const decorationSelectors = {
        headerSelector: '.decoration_slider',
        tabsSelector: '.no_click',
        tabsContentSelector: '.decoration_content > div > div',
        activeClass: 'after_click',
    };
    tabs(decorationSelectors);
    
    const balconSelectors = {
        headerSelector: '.balcon_icons',
        tabsSelector: '.balcon_icons_img',
        tabsContentSelector: '.big_img > img',
        activeClass: 'do_image_more',
        display: 'inline-block',
    };
    tabs(balconSelectors);

    forms(modalState);
})
