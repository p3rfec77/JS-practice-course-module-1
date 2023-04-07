import "./slider"; 
import modals from "./modules/modals";
import {glazingSelectors, decorationSelectors, tabs} from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs(glazingSelectors);
    tabs(decorationSelectors);
    forms();
})
