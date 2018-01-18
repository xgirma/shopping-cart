const symbols = {
  "USA": "$",
  "CAN": "$",
  "GB": "£"
};

const rates = {
  "USA": 1,
  "CAN": 1.15,
  "GB": 0.65
};

exports.toLocaleCurrencyString = (amount = 0, locale = "USA") => {
  return this.getSymbolForCountry(locale)
    + this.toCurrencyString(amount)
    + this.convertFromUSD(locale, amount)
};

const getSymbolForCountry = (locale) => {
  return symbols[locale];
};

const toCurrencyString = (amount) => {
  return amount.toFixed(2);
};

const convertFromUSD = (locale, amount) => {
  return amount * rates[locale];
};
