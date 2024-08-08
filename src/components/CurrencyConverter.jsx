import React, { useState } from 'react';
import axios from 'axios';
import SearchableDropdown from './SearchableDropdown';

function CurrencyConverter() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [conversionResult, setConversionResult] = useState('');

    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) > 0 && !value.includes('-'))) {
            setAmount(value);
        }
    };

    const handleConvert = async () => {
        try {
            let fromCurrency1 = fromCurrency.slice(0, 3)
            let toCurrency1 = toCurrency.slice(0, 3)
            const rate = await getConversionRate(fromCurrency1, toCurrency1);
            const result = (amount * rate).toFixed(2);
            setConversionResult(`${amount} ${fromCurrency1} = ${result} ${toCurrency1}`);
        } catch (error) {
            console.error("Error fetching the conversion rate:", error);
            setConversionResult("Error fetching the conversion rate.");
        }
    };

    const getConversionRate = async (from, to) => {
        const apiKey = '65e1523e814589f673fe4a70'; // Your API key
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;

        try {
            const response = await axios.get(url);
            const rates = response.data.conversion_rates;

            if (rates[to]) {
                return rates[to];
            } else {
                throw new Error(`Conversion rate for ${to} not found.`);
            }
        } catch (error) {
            console.error("Error fetching the conversion rate:", error);
            throw error;
        }
    };

    return (
        <div className="currency-converter">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900">Currency Converter</h2>

            {/* Amount Field */}
            <div className="mt-4">
                <p className="text-md text-slate-500">Amount</p>
                <input
                    className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="130"
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                />
            </div>

            {/* From Field */}
            <div className="mt-4">
                <p className="text-md text-slate-500">From</p>
                <SearchableDropdown selected={fromCurrency} onSelect={setFromCurrency} />
            </div>

            {/* To Field */}
            <div className="mt-4">
                <p className="text-md text-slate-500">To</p>
                <SearchableDropdown selected={toCurrency} onSelect={setToCurrency} />
            </div>

            {/* Conversion Result */}
            {conversionResult && (
                <div className="mt-4 text-xl font-semibold text-slate-900">
                    {conversionResult}
                </div>
            )}

            {/* Convert Button */}
            <button
                className="mt-6 bg-black text-white px-4 py-2 text-sm font-medium rounded-md w-full"
                onClick={handleConvert}
            >
                Convert
            </button>
        </div>
    );
}

export default CurrencyConverter;
