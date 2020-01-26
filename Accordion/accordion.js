"use strict";

(function() {
    var activeClass = 'active',
        actionClass = 'action',
        accordionSelector = '.accordion',
        accordionContentClass = 'accordion-content';
    
    document.addEventListener('click', function(event) {
        if(hasClass(event.target.className, actionClass)) {
            var accordion = event.target.closest(accordionSelector),
                isActive = hasClass(accordion.className, activeClass);

                if(isActive) {
                    removeAccordionClass(accordion, activeClass);
                    setAccordionHeight(accordion, false);
                } else {
                    addAccordionClass(accordion, activeClass);
                    setAccordionHeight(accordion, true);
                }
        }
    });


    function setAccordionHeight(accordion, expand) {
        var content = accordion.getElementsByClassName(accordionContentClass)[0];

        if(!content) {
            return;
        }

        if(expand) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0px';
        }
    }

    function addAccordionClass(accordion, className) {
        accordion.className += ' ' + className;
    }

    function removeAccordionClass(accordion, className) {
        accordion.className = accordion.className.replace(className, '').trim();
    }

    function hasClass(source, target) {
        return source.indexOf(target) !== -1;
    }

})();