const args = process.argv.slice(2)

if (args.length !== 4 || args[2].toLowerCase() !== 'to') {
	console.error('❌ Usage: node index.js <amount> <from> to <to>')
	process.exit(1)
}

export const amount = Number(args[0])
export const fromCurrency = args[1].toUpperCase()
export const toCurrency = args[3].toUpperCase()

if (isNaN(amount)) {
	console.error('❌ Invalid amount: must be a number.')
	process.exit(1)
}
