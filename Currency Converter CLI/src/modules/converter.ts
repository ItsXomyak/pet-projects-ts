import { Amount, Result } from '../types/type'
import { getCurrency } from './api'
export default async function convert(
	amount: number,
	fromCurrency: string,
	toCurrency: string
): Promise<Result<Amount>> {
	const request = await getCurrency(fromCurrency, toCurrency)
	if (!(toCurrency in request.data)) {
		return {
			success: false,
			error: 'Currency not found',
		}
	} else {
		return {
			success: true,
			data: {
				amount,
				fromCurrency,
				toCurrency,
				result: amount * request.data[toCurrency].value,
			},
		}
	}
}
