const symbols = {
  "US": "$",
  "BE": "€",
  "GB": "£"
};

const rates = {
  "US": 1,
  "BE": 1.15,
  "GB": 0.65
};

const getCurrencySymbolForCountry = (country) => {
  return symbols[country];
};

const toCurrencyString = (price) => {
  return price.toFixed()
};

const convertFromUSD = (locale, price) => {
  return (price * rates[locale]);
};

const toLocaleCurrencyString = (price, locale = "USA") => {
  return `${getCurrencySymbolForCountry(locale)}${toCurrencyString(convertFromUSD(locale, price))}`
};

export {
  toLocaleCurrencyString
}