const pricesPerPeriod = [
  [5000, 1700, 2700],
  [30000, 10200, 16200],
  [60000, 20400, 32400],
];

const controlElements = document.querySelectorAll(
  '[data-tabs="price-control"]'
);
const prices = document.querySelectorAll('[data-tabs="price"]');
const pricesShadows = document.querySelectorAll('[data-tabs="price-shadow"]');
let activeIndex = 0;

const removeAllActiveClasses = () => {
  controlElements.forEach((tab) => {
    tab.classList.remove("is-active");
  });
};

const addActiveClass = (index) => {
  controlElements[index].classList.add("is-active");
};

const setPricesAndShadows = (index) => {
  activeIndex = index;
  prices.forEach((price, priceIndex) => {
    price.textContent = pricesPerPeriod[activeIndex][priceIndex];
  });
  pricesShadows.forEach((shadow, priceIndex) => {
    shadow.textContent = pricesPerPeriod[activeIndex][priceIndex];
  });
};

const onClickControlElement = (index) => {
  removeAllActiveClasses();
  addActiveClass(index);
  setPricesAndShadows(index);
};

const addListenersToControlElements = () => {
  controlElements.forEach((control, index) => {
    control.addEventListener("click", () => onClickControlElement(index));
  });
};

const initPrices = () => {
  addListenersToControlElements();
};

export { initPrices };
