import { Currency } from '../const';
type CurrentCurrency = {
	'USD': number,
};

export const defineRating = (rating: number): number => {
	const definedRating = (rating / 5) * 100;

	return definedRating;
};

export const currencyConverter = (converter: number, currency: keyof typeof Currency): number => {
	const currentCurrency: CurrentCurrency = {
		'USD': 70,
	}

	const convertedCurrency = Number((currentCurrency[currency] * converter).toFixed(2));

	return convertedCurrency;

};
