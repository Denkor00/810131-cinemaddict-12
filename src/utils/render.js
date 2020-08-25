import AbstractView from '../view/abstract.js';

export const BEFOREEND = `beforeend`;
export const AFTERBEGIN = `afterbegin`;

export const renderTemplate = (container, template, place) => {
  if (container instanceof AbstractView) {
    container.getElement();
  }
  container.insertAdjacentHTML(place, template);
};

export const render = (container, child, place) => {
  if (container instanceof AbstractView) {
    container = container.getElement();
  }
  if (child instanceof AbstractView) {
    child = child.getElement();
  }

  switch (place) {
    case AFTERBEGIN:
      container.prepend(child);
      break;
    case BEFOREEND:
      container.append(child);
      break;
    default:
      throw new Error(`Передено некорретное значение place в функцию render`);
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const remove = (component) => {
  if (!(component instanceof AbstractView)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

export const replace = (newChild, oldChild) => {
  if (oldChild instanceof AbstractView) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof AbstractView) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};
