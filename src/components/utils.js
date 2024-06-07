// src/utils.js
export function addPxToStyle(style) {
    const newStyle = {};
    for (const property in style) {
        if (typeof style[property] === 'number') {
            newStyle[property] = `${style[property]}px`;
        } else {
            newStyle[property] = style[property];
        }
    }
    return newStyle;
}