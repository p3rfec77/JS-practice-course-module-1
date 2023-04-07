import "./slider"; 
import modals from "./modules/modals";

import {glazingSelectors, decorationSelectors, tabs} from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs(glazingSelectors);
    tabs(decorationSelectors);
})
