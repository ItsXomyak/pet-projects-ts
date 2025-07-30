import axios from 'axios'
import { BASE_URL, API_KEY } from './config'
import { APIResponse } from '../types/type'

export async function getCurrency(
	fromCurrency: string,
	toCurrency: string
): Promise<APIResponse> {
	try {
		const response = await axios.get(`${BASE_URL}v3/latest`, {
			params: {
				apikey: API_KEY,
				base: fromCurrency,
				currencies: toCurrency,
			},
		})

		const apiResponse: APIResponse = {
			data: response.data.data,
		}

		return apiResponse
	} catch (error) {
		console.error(`Error fetching data: ${error}`)
		throw new Error('API request failed')
	}
}
