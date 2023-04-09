import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfiles = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems ({event, elems, prop}) {
        elems.forEach((elem, i) => {
            elem.addEventListener(event, () => {
               switch(elem.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    
                    case 'INPUT':
                        if(elem.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Тёплое';
                            elems.forEach((box, j) => {
                                box.checked = false;

                                if(i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = elem.value;
                        }
                        break;
                    
                    case 'SELECT':
                        state[prop] = elem.value;
                        break;
               }
            })
        })
    }

    const formToState = {
        event: 'click',
        elems: windowForms,
        prop: 'form'
    };

    const widthToState = {
        event: 'input',
        elems: windowWidth,
        prop: 'width'
    };

    const heightToState = {
        event: 'input',
        elems: windowHeight,
        prop: 'height'
    };

    const profileToState = {
        event: 'change',
        elems: windowProfiles,
        prop: 'profile'
    };

    const typeToState = {
        event: 'change',
        elems: windowType,
        prop: 'type'
    };

    bindActionToElems(formToState);
    bindActionToElems(widthToState);
    bindActionToElems(heightToState);
    bindActionToElems(profileToState);
    bindActionToElems(typeToState);
};

export default changeModalState;