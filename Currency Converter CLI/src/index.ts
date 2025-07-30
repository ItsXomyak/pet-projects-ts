import convert from './modules/converter'
import { amount, fromCurrency, toCurrency } from './modules/parser'
import { Amount, Result } from './types/type'
;(async () => {
	const result: Result<Amount> = await convert(amount, fromCurrency, toCurrency)

	if (result.success) {
		const { amount, fromCurrency, toCurrency, result: converted } = result.data
		console.log(
			`${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`
		)
	} else {
		console.error(`Ошибка: ${result.error}`)
	}
})()
