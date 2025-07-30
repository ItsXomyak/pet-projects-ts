interface Amount {
	amount: number
	fromCurrency: string
	toCurrency: string
	result: number
}

type Result<T> =
	| {
			success: true
			data: T
	  }
	| {
			success: false
			error: string
	  }

interface APIResponse {
	data: {
		[currencyCode: string]: {
			code: string
			value: number
		}
	}
}

export { Amount, APIResponse, Result }
