/**
 * Finds DOM element
 * @param {HTMLElement, String} el
 * @param {Document|HTMLElement} [context=document]
 */
export function getEl (el, context=document) {
    return typeof el === 'string'
        ? context['querySelector'](el)
        : el;
}

/**
 * Creates HTML DOM element
 * @param {String} [tagName] - element's tag name
 * @param {String} [className]
 * @param {String} [innerHtml]
 * @param {String} [id]
 * @param {Object} [attrs]
 * @returns {HTMLElement}
 */
export function createElement({tagName='div', className='', innerHtml='', id='', attrs={}} = {}) {
    let $element = document.createElement(tagName);
    if (className) $element.classList.add(...className.split(' '));
    if (id) $element.id = id;

    if (innerHtml) {
        $element.innerHTML = innerHtml;
    }

    if (attrs) {
        for (let attr in attrs) {
            $element.setAttribute(attr, attrs[attr]);
        }
    }

    return $element;
}

/**
 * Inserts newElement after targetElement
 * @param {HTMLElement} newElement - element to be inserted
 * @param {HTMLElement} targetElement - after which must be inserted
 * @return {HTMLElement} newElement
 */
export function insertAfter(newElement, targetElement) {
    targetElement.parentNode
        .insertBefore(newElement, targetElement.nextSibling);
    return newElement;
}

/**
 * Makes object deep copy
 * @param {Object} obj
 * @return {Object}
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
