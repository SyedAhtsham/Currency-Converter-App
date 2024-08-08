import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SearchableDropdown from './SearchableDropdown';

function CurrencyConverter({ onAmountFocus, onAmountBlur }) {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD - United States Dollar');
    const [toCurrency, setToCurrency] = useState('PKR - Pakistani Rupee');
    const [conversionResult, setConversionResult] = useState('');
    const [currentRate, setCurrentRate] = useState(null);
    const amountInputRef = useRef(null);

    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) > 0 && !value.includes('-'))) {
            setAmount(value);
        }
    };

    useEffect(() => {
        if (amount && fromCurrency && toCurrency) {
            const convert = async () => {
                try {
                    const fromCode = fromCurrency.split(' ')[0];
                    const toCode = toCurrency.split(' ')[0];
                    const rate = await getConversionRate(fromCode, toCode);
                    setCurrentRate(rate);
                    const result = (amount * rate).toFixed(2);
                    setConversionResult(`${amount} ${fromCode} = ${result} ${toCode}`);
                } catch (error) {
                    console.error("Error fetching the conversion rate:", error);
                    setConversionResult("Error fetching the conversion rate.");
                    setCurrentRate(null);
                }
            };

            convert();
        } else {
            setConversionResult('');
            setCurrentRate(null);
        }
    }, [amount, fromCurrency, toCurrency]);

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

            <div className="mt-4">
                <p className="text-md text-slate-500">Amount</p>
                <input
                    ref={amountInputRef}
                    className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="130"
                    type="number"
                    value={amount}
                    inputMode="numeric"  // Helps ensure numeric keyboard is shown
                    onChange={handleAmountChange}
                    onFocus={onAmountFocus}
                    onBlur={onAmountBlur}
                    required
                />
            </div>

            <div className="mt-4">
                <p className="text-md text-slate-500">From</p>
                <SearchableDropdown selected={fromCurrency} onSelect={setFromCurrency} />
            </div>

            <div className="mt-4">
                <p className="text-md text-slate-500">To</p>
                <SearchableDropdown selected={toCurrency} onSelect={setToCurrency} />
            </div>

            {conversionResult && (
                <div className="mt-6 text-xl font-semibold flex flex-col items-center text-slate-900">
                    {conversionResult}
                </div>
            )}

            {currentRate && (
                <div className="mt-4 text-sm flex flex-col items-center text-slate-600">
                    Conversion Rate: 1 {fromCurrency.split(' ')[0]} = {currentRate.toFixed(2)} {toCurrency.split(' ')[0]}
                </div>
            )}
        </div>
    );
}

export default CurrencyConverter;
