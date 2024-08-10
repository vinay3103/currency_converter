const currencies = {
    "AED": { "name": "United Arab Emirates Dirham", "flag": "ae.svg" },
    "AFN": { "name": "Afghan Afghani", "flag": "af.svg" },
    "ALL": { "name": "Albanian Lek", "flag": "al.svg" },
    "AMD": { "name": "Armenian Dram", "flag": "am.svg" },
    "ANG": { "name": "Netherlands Antillean Guilder", "flag": "aw.svg" },
    "AOA": { "name": "Angolan Kwanza", "flag": "ao.svg" },
    "ARS": { "name": "Argentine Peso", "flag": "ar.svg" },
    "AUD": { "name": "Australian Dollar", "flag": "au.svg" },
    "AWG": { "name": "Aruban Florin", "flag": "aw.svg" },
    "AZN": { "name": "Azerbaijani Manat", "flag": "az.svg" },
    "BAM": { "name": "Bosnia and Herzegovina Convertible Mark", "flag": "ba.svg" },
    "BBD": { "name": "Barbadian Dollar", "flag": "bb.svg" },
    "BDT": { "name": "Bangladeshi Taka", "flag": "bd.svg" },
    "BGN": { "name": "Bulgarian Lev", "flag": "bg.svg" },
    "BHD": { "name": "Bahraini Dinar", "flag": "bh.svg" },
    "BIF": { "name": "Burundian Franc", "flag": "bi.svg" },
    "BMD": { "name": "Bermudian Dollar", "flag": "bm.svg" },
    "BND": { "name": "Brunei Dollar", "flag": "bn.svg" },
    "BOB": { "name": "Bolivian Boliviano", "flag": "bo.svg" },
    "BRL": { "name": "Brazilian Real", "flag": "br.svg" },
    "BSD": { "name": "Bahamian Dollar", "flag": "bs.svg" },
    "BTN": { "name": "Bhutanese Ngultrum", "flag": "bt.svg" },
    "BWP": { "name": "Botswana Pula", "flag": "bw.svg" },
    "BYN": { "name": "Belarusian Ruble", "flag": "by.svg" },
    "BZD": { "name": "Belize Dollar", "flag": "bz.svg" },
    "CAD": { "name": "Canadian Dollar", "flag": "ca.svg" },
    "CDF": { "name": "Congolese Franc", "flag": "cd.svg" },
    "CHF": { "name": "Swiss Franc", "flag": "ch.svg" },
    "CLP": { "name": "Chilean Peso", "flag": "cl.svg" },
    "CNY": { "name": "Chinese Yuan", "flag": "cn.svg" },
    "COP": { "name": "Colombian Peso", "flag": "co.svg" },
    "CRC": { "name": "Costa Rican Colón", "flag": "cr.svg" },
    "CUP": { "name": "Cuban Peso", "flag": "cu.svg" },
    "CVE": { "name": "Cape Verdean Escudo", "flag": "cv.svg" },
    "CZK": { "name": "Czech Koruna", "flag": "cz.svg" },
    "DJF": { "name": "Djiboutian Franc", "flag": "dj.svg" },
    "DKK": { "name": "Danish Krone", "flag": "dk.svg" },
    "DOP": { "name": "Dominican Peso", "flag": "do.svg" },
    "DZD": { "name": "Algerian Dinar", "flag": "dz.svg" },
    "EGP": { "name": "Egyptian Pound", "flag": "eg.svg" },
    "ERN": { "name": "Eritrean Nakfa", "flag": "er.svg" },
    "ETB": { "name": "Ethiopian Birr", "flag": "et.svg" },
    "EUR": { "name": "Euro", "flag": "eu.svg" },
    "FJD": { "name": "Fijian Dollar", "flag": "fj.svg" },
    "FKP": { "name": "Falkland Islands Pound", "flag": "fk.svg" },
    "FOK": { "name": "Faroese Króna", "flag": "fo.svg" },
    "GBP": { "name": "British Pound Sterling", "flag": "gb.svg" },
    "GEL": { "name": "Georgian Lari", "flag": "ge.svg" },
    "GHS": { "name": "Ghanaian Cedi", "flag": "gh.svg" },
    "GIP": { "name": "Gibraltar Pound", "flag": "gib.svg" },
    "GMD": { "name": "Gambian Dalasi", "flag": "gm.svg" },
    "GNF": { "name": "Guinean Franc", "flag": "gn.svg" },
    "GTQ": { "name": "Guatemalan Quetzal", "flag": "gt.svg" },
    "GYD": { "name": "Guyanese Dollar", "flag": "gy.svg" },
    "HKD": { "name": "Hong Kong Dollar", "flag": "hk.svg" },
    "HNL": { "name": "Honduran Lempira", "flag": "hn.svg" },
    "HRK": { "name": "Croatian Kuna", "flag": "hr.svg" },
    "HTG": { "name": "Haitian Gourde", "flag": "ht.svg" },
    "HUF": { "name": "Hungarian Forint", "flag": "hu.svg" },
    "IDR": { "name": "Indonesian Rupiah", "flag": "id.svg" },
    "ILS": { "name": "Israeli New Shekel", "flag": "il.svg" },
    "INR": { "name": "Indian Rupee", "flag": "in.svg" },
    "IQD": { "name": "Iraqi Dinar", "flag": "iq.svg" },
    "IRR": { "name": "Iranian Rial", "flag": "ir.svg" },
    "ISK": { "name": "Icelandic Króna", "flag": "is.svg" },
    "JMD": { "name": "Jamaican Dollar", "flag": "jm.svg" },
    "JOD": { "name": "Jordanian Dinar", "flag": "jo.svg" },
    "JPY": { "name": "Japanese Yen", "flag": "jp.svg" },
    "KES": { "name": "Kenyan Shilling", "flag": "ke.svg" },
    "KGS": { "name": "Kyrgystani Som", "flag": "kg.svg" },
    "KHR": { "name": "Cambodian Riel", "flag": "km.svg" },
    "KID": { "name": "Kiribati Dollar", "flag": "ki.svg" },
    "KMF": { "name": "Comorian Franc", "flag": "km.svg" },
    "KRW": { "name": "South Korean Won", "flag": "kr.svg" },
    "KWD": { "name": "Kuwaiti Dinar", "flag": "kw.svg" },
    "KYD": { "name": "Cayman Islands Dollar", "flag": "ky.svg" },
    "KZT": { "name": "Kazakhstani Tenge", "flag": "kz.svg" },
    "LAK": { "name": "Laotian Kip", "flag": "la.svg" },
    "LBP": { "name": "Lebanese Pound", "flag": "lb.svg" },
    "LKR": { "name": "Sri Lankan Rupee", "flag": "lk.svg" },
    "LRD": { "name": "Liberian Dollar", "flag": "lr.svg" },
    "LSL": { "name": "Lesotho Loti", "flag": "ls.svg" },
    "LYD": { "name": "Libyan Dinar", "flag": "ly.svg" },
    "MAD": { "name": "Moroccan Dirham", "flag": "ma.svg" },
    "MDL": { "name": "Moldovan Leu", "flag": "md.svg" },
    "MGA": { "name": "Malagasy Ariary", "flag": "mg.svg" },
    "MKD": { "name": "Macedonian Denar", "flag": "mk.svg" },
    "MMK": { "name": "Myanma Kyat", "flag": "mm.svg" },
    "MNT": { "name": "Mongolian Tugrik", "flag": "mn.svg" },
    "MOP": { "name": "Macanese Pataca", "flag": "mo.svg" },
    "MRU": { "name": "Mauritanian Ouguiya", "flag": "mr.svg" },
    "MUR": { "name": "Mauritian Rupee", "flag": "mu.svg" },
    "MVR": { "name": "Maldivian Rufiyaa", "flag": "mv.svg" },
    "MWK": { "name": "Malawian Kwacha", "flag": "mw.svg" },
    "MXN": { "name": "Mexican Peso", "flag": "mx.svg" },
    "MYR": { "name": "Malaysian Ringgit", "flag": "my.svg" },
    "MZN": { "name": "Mozambican Metical", "flag": "mz.svg" },
    "NAD": { "name": "Namibian Dollar", "flag": "na.svg" },
    "NGN": { "name": "Nigerian Naira", "flag": "ng.svg" },
    "NIO": { "name": "Nicaraguan Córdoba", "flag": "ni.svg" },
    "NOK": { "name": "Norwegian Krone", "flag": "no.svg" },
    "NPR": { "name": "Nepalese Rupee", "flag": "np.svg" },
    "NZD": { "name": "New Zealand Dollar", "flag": "nz.svg" },
    "OMR": { "name": "Omani Rial", "flag": "om.svg" },
    "PAB": { "name": "Panamanian Balboa", "flag": "pa.svg" },
    "PEN": { "name": "Peruvian Sol", "flag": "pe.svg" },
    "PGK": { "name": "Papua New Guinean Kina", "flag": "pg.svg" },
    "PHP": { "name": "Philippine Peso", "flag": "ph.svg" },
    "PKR": { "name": "Pakistani Rupee", "flag": "pk.svg" },
    "PLN": { "name": "Polish Złoty", "flag": "pl.svg" },
    "PYG": { "name": "Paraguayan Guaraní", "flag": "py.svg" },
    "QAR": { "name": "Qatari Riyal", "flag": "qa.svg" },
    "RON": { "name": "Romanian Leu", "flag": "ro.svg" },
    "RSD": { "name": "Serbian Dinar", "flag": "rs.svg" },
    "RUB": { "name": "Russian Ruble", "flag": "ru.svg" },
    "RWF": { "name": "Rwandan Franc", "flag": "rw.svg" },
    "SAR": { "name": "Saudi Riyal", "flag": "sa.svg" },
    "SBD": { "name": "Solomon Islands Dollar", "flag": "sb.svg" },
    "SCR": { "name": "Seychellois Rupee", "flag": "sc.svg" },
    "SDG": { "name": "Sudanese Pound", "flag": "sd.svg" },
    "SEK": { "name": "Swedish Krona", "flag": "se.svg" },
    "SGD": { "name": "Singapore Dollar", "flag": "sg.svg" },
    "SHP": { "name": "Saint Helena Pound", "flag": "sh.svg" },
    "SLL": { "name": "Sierra Leonean Leone", "flag": "sl.svg" },
    "SOS": { "name": "Somali Shilling", "flag": "so.svg" },
    "SRD": { "name": "Surinamese Dollar", "flag": "sr.svg" },
    "SSP": { "name": "South Sudanese Pound", "flag": "ss.svg" },
    "STN": { "name": "São Tomé and Príncipe Dobra", "flag": "st.svg" },
    "SVC": { "name": "Salvadoran Colón", "flag": "sv.svg" },
    "SYP": { "name": "Syrian Pound", "flag": "sy.svg" },
    "SZL": { "name": "Swazi Lilangeni", "flag": "sz.svg" },
    "THB": { "name": "Thai Baht", "flag": "th.svg" },
    "TJS": { "name": "Tajikistani Somoni", "flag": "tj.svg" },
    "TMT": { "name": "Turkmenistani Manat", "flag": "tm.svg" },
    "TND": { "name": "Tunisian Dinar", "flag": "tn.svg" },
    "TOP": { "name": "Tongan Paʻanga", "flag": "to.svg" },
    "TRY": { "name": "Turkish Lira", "flag": "tr.svg" },
    "TTD": { "name": "Trinidad and Tobago Dollar", "flag": "tt.svg" },
    "TVD": { "name": "Tuvaluan Dollar", "flag": "tv.svg" },
    "TWD": { "name": "New Taiwan Dollar", "flag": "tw.svg" },
    "TZS": { "name": "Tanzanian Shilling", "flag": "tz.svg" },
    "UAH": { "name": "Ukrainian Hryvnia", "flag": "ua.svg" },
    "UGX": { "name": "Ugandan Shilling", "flag": "ug.svg" },
    "USD": { "name": "United States Dollar", "flag": "us.svg" },
    "UYU": { "name": "Uruguayan Peso", "flag": "uy.svg" },
    "UZS": { "name": "Uzbekistani Soʻm", "flag": "uz.svg" },
    "VES": { "name": "Venezuelan Bolívar Soberano", "flag": "ve.svg" },
    "VND": { "name": "Vietnamese Đồng", "flag": "vn.svg" },
    "VUV": { "name": "Vanuatu Vatu", "flag": "vu.svg" },
    "WST": { "name": "Samoan Tālā", "flag": "ws.svg" },
    "XAF": { "name": "Central African CFA Franc", "flag": "xaf.svg" },
    "XAG": { "name": "Silver Ounce", "flag": "xag.svg" },
    "XAU": { "name": "Gold Ounce", "flag": "xau.svg" },
    "XCD": { "name": "East Caribbean Dollar", "flag": "xcd.svg" },
    "XDR": { "name": "Special Drawing Rights", "flag": "xdr.svg" },
    "XOF": { "name": "West African CFA Franc", "flag": "xof.svg" },
    "XPF": { "name": "CFP Franc", "flag": "xpf.svg" },
    "YER": { "name": "Yemeni Rial", "flag": "ye.svg" },
    "ZAR": { "name": "South African Rand", "flag": "za.svg" },
    "ZMW": { "name": "Zambian Kwacha", "flag": "zm.svg" },
    "ZWL": { "name": "Zimbabwean Dollar", "flag": "zw.svg" }
};



document.addEventListener('DOMContentLoaded', () => {
    const baseCurrencySelect = document.getElementById('base_currency');
    const targetCurrencySelect = document.getElementById('target_currency');

    Object.keys(currencies).forEach(currencyCode => {
        const optionBase = document.createElement('option');
        optionBase.value = currencyCode;
        optionBase.innerHTML = `<img src="${currencies[currencyCode].flag}" style="width:20px; height:20px; vertical-align:middle;"> ${currencyCode} - ${currencies[currencyCode].name}`;
        baseCurrencySelect.appendChild(optionBase);

        const optionTarget = document.createElement('option');
        optionTarget.value = currencyCode;
        optionTarget.innerHTML = `<img src="${currencies[currencyCode].flag}" style="width:20px; height:20px; vertical-align:middle;"> ${currencyCode} - ${currencies[currencyCode].name}`;
        targetCurrencySelect.appendChild(optionTarget);
    });

    // Show flag when a base currency is selected
    baseCurrencySelect.addEventListener('change', function() {
        const selectedCurrency = baseCurrencySelect.value;
        const flagContainer = document.getElementById('base_currency_flag');
        flagContainer.innerHTML = `<img src="${currencies[selectedCurrency].flag}" style="width:40px; height:40px;">`;
    });

    // Show flag when a target currency is selected
    targetCurrencySelect.addEventListener('change', function() {
        const selectedCurrency = targetCurrencySelect.value;
        const flagContainer = document.getElementById('target_currency_flag');
        flagContainer.innerHTML = `<img src="${currencies[selectedCurrency].flag}" style="width:40px; height:40px;">`;
    });

    // Trigger the change events to show the flags on page load
    baseCurrencySelect.dispatchEvent(new Event('change'));
    targetCurrencySelect.dispatchEvent(new Event('change'));
});

async function getConversionRate(baseCurrency, targetCurrency) {
    const apiKey = 'a90becead4f8e7bb2f126f62';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.result === "success") {
            return data.conversion_rate;
        } else {
            throw new Error(data['error-type']);
        }
    } catch (error) {
        console.error("Error fetching conversion rate:", error);
        throw new Error("Failed to fetch conversion rate.");
    }
}

document.getElementById('converter-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const baseCurrency = document.getElementById('base_currency').value;
    const targetCurrency = document.getElementById('target_currency').value;
    const amount = document.getElementById('amount').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = "Please enter a valid amount.";
        return;
    }

    try {
        const conversionRate = await getConversionRate(baseCurrency, targetCurrency);
        const convertedAmount = (amount * conversionRate).toFixed(2);
        document.getElementById('result').textContent = `${amount} ${baseCurrency} is equal to ${convertedAmount} ${targetCurrency}`;
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
});
