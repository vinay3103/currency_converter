const currencies = {
    "AED": { "name": "United Arab Emirates Dirham", "flag": "ae.svg" },
    "AFN": { "name": "Afghan Afghani", "flag": "assets/flags/af.svg" },
    "ALL": { "name": "Albanian Lek", "flag": "assets/flags/al.svg" },
    "AMD": { "name": "Armenian Dram", "flag": "assets/flags/am.svg" },
    "ANG": { "name": "Netherlands Antillean Guilder", "flag": "assets/flags/aw.svg" },
    "AOA": { "name": "Angolan Kwanza", "flag": "assets/flags/ao.svg" },
    "ARS": { "name": "Argentine Peso", "flag": "assets/flags/ar.svg" },
    "AUD": { "name": "Australian Dollar", "flag": "assets/flags/au.svg" },
    "AWG": { "name": "Aruban Florin", "flag": "assets/flags/aw.svg" },
    "AZN": { "name": "Azerbaijani Manat", "flag": "assets/flags/az.svg" },
    "BAM": { "name": "Bosnia and Herzegovina Convertible Mark", "flag": "assets/flags/ba.svg" },
    "BBD": { "name": "Barbadian Dollar", "flag": "assets/flags/bb.svg" },
    "BDT": { "name": "Bangladeshi Taka", "flag": "assets/flags/bd.svg" },
    "BGN": { "name": "Bulgarian Lev", "flag": "assets/flags/bg.svg" },
    "BHD": { "name": "Bahraini Dinar", "flag": "assets/flags/bh.svg" },
    "BIF": { "name": "Burundian Franc", "flag": "assets/flags/bi.svg" },
    "BMD": { "name": "Bermudian Dollar", "flag": "assets/flags/bm.svg" },
    "BND": { "name": "Brunei Dollar", "flag": "assets/flags/bn.svg" },
    "BOB": { "name": "Bolivian Boliviano", "flag": "assets/flags/bo.svg" },
    "BRL": { "name": "Brazilian Real", "flag": "assets/flags/br.svg" },
    "BSD": { "name": "Bahamian Dollar", "flag": "assets/flags.bs.svg" },
    "BTN": { "name": "Bhutanese Ngultrum", "flag": "assets/flags/bt.svg" },
    "BWP": { "name": "Botswana Pula", "flag": "assets/flags/bw.svg" },
    "BYN": { "name": "Belarusian Ruble", "flag": "assets/flags/by.svg" },
    "BZD": { "name": "Belize Dollar", "flag": "assets/flags/bz.svg" },
    "CAD": { "name": "Canadian Dollar", "flag": "assets/flags/ca.svg" },
    "CDF": { "name": "Congolese Franc", "flag": "assets/flags/cd.svg" },
    "CHF": { "name": "Swiss Franc", "flag": "assets/flags/ch.svg" },
    "CLP": { "name": "Chilean Peso", "flag": "assets/flags/cl.svg" },
    "CNY": { "name": "Chinese Yuan", "flag": "assets/flags/cn.svg" },
    "COP": { "name": "Colombian Peso", "flag": "assets/flags/co.svg" },
    "CRC": { "name": "Costa Rican Colón", "flag": "assets/flags/cr.svg" },
    "CUP": { "name": "Cuban Peso", "flag": "assets/flags/cu.svg" },
    "CVE": { "name": "Cape Verdean Escudo", "flag": "assets/flags/cv.svg" },
    "CZK": { "name": "Czech Koruna", "flag": "assets/flags/cz.svg" },
    "DJF": { "name": "Djiboutian Franc", "flag": "assets/flags/dj.svg" },
    "DKK": { "name": "Danish Krone", "flag": "assets/flags/dk.svg" },
    "DOP": { "name": "Dominican Peso", "flag": "assets/flags/do.svg" },
    "DZD": { "name": "Algerian Dinar", "flag": "assets/flags/dz.svg" },
    "EGP": { "name": "Egyptian Pound", "flag": "assets/flags/eg.svg" },
    "ERN": { "name": "Eritrean Nakfa", "flag": "assets/flags/er.svg" },
    "ETB": { "name": "Ethiopian Birr", "flag": "assets/flags/et.svg" },
    "EUR": { "name": "Euro", "flag": "assets/flags/eu.svg" },
    "FJD": { "name": "Fijian Dollar", "flag": "assets/flags/fj.svg" },
    "FKP": { "name": "Falkland Islands Pound", "flag": "assets/flags/fk.svg" },
    "FOK": { "name": "Faroese Króna", "flag": "assets/flags/fo.svg" },
    "GBP": { "name": "British Pound Sterling", "flag": "assets/flags/gb.svg" },
    "GEL": { "name": "Georgian Lari", "flag": "assets/flags/ge.svg" },
    "GHS": { "name": "Ghanaian Cedi", "flag": "assets/flags/gh.svg" },
    "GIP": { "name": "Gibraltar Pound", "flag": "assets/flags/gib.svg" },
    "GMD": { "name": "Gambian Dalasi", "flag": "assets/flags/gm.svg" },
    "GNF": { "name": "Guinean Franc", "flag": "assets/flags/gn.svg" },
    "GTQ": { "name": "Guatemalan Quetzal", "flag": "assets/flags/gt.svg" },
    "GYD": { "name": "Guyanese Dollar", "flag": "assets/flags/gy.svg" },
    "HKD": { "name": "Hong Kong Dollar", "flag": "assets/flags/hk.svg" },
    "HNL": { "name": "Honduran Lempira", "flag": "assets/flags/hn.svg" },
    "HRK": { "name": "Croatian Kuna", "flag": "assets/flags/hr.svg" },
    "HTG": { "name": "Haitian Gourde", "flag": "assets/flags/ht.svg" },
    "HUF": { "name": "Hungarian Forint", "flag": "assets/flags/hu.svg" },
    "IDR": { "name": "Indonesian Rupiah", "flag": "assets/flags/id.svg" },
    "ILS": { "name": "Israeli New Shekel", "flag": "assets/flags/il.svg" },
    "INR": { "name": "Indian Rupee", "flag": "assets/flags/in.svg" },
    "IQD": { "name": "Iraqi Dinar", "flag": "assets/flags/iq.svg" },
    "IRR": { "name": "Iranian Rial", "flag": "assets/flags/ir.svg" },
    "ISK": { "name": "Icelandic Króna", "flag": "assets/flags/is.svg" },
    "JMD": { "name": "Jamaican Dollar", "flag": "assets/flags/jm.svg" },
    "JOD": { "name": "Jordanian Dinar", "flag": "assets/flags/jo.svg" },
    "JPY": { "name": "Japanese Yen", "flag": "assets/flags/jp.svg" },
    "KES": { "name": "Kenyan Shilling", "flag": "assets/flags/ke.svg" },
    "KGS": { "name": "Kyrgystani Som", "flag": "assets/flags/kg.svg" },
    "KHR": { "name": "Cambodian Riel", "flag": "assets/flags/km.svg" },
    "KID": { "name": "Kiribati Dollar", "flag": "assets/flags/ki.svg" },
    "KMF": { "name": "Comorian Franc", "flag": "assets/flags/km.svg" },
    "KRW": { "name": "South Korean Won", "flag": "assets/flags/kr.svg" },
    "KWD": { "name": "Kuwaiti Dinar", "flag": "assets/flags/kw.svg" },
    "KYD": { "name": "Cayman Islands Dollar", "flag": "assets/flags/ky.svg" },
    "KZT": { "name": "Kazakhstani Tenge", "flag": "assets/flags/kz.svg" },
    "LAK": { "name": "Laotian Kip", "flag": "assets/flags/la.svg" },
    "LBP": { "name": "Lebanese Pound", "flag": "assets/flags/lb.svg" },
    "LKR": { "name": "Sri Lankan Rupee", "flag": "assets/flags/lk.svg" },
    "LRD": { "name": "Liberian Dollar", "flag": "assets/flags/lr.svg" },
    "LSL": { "name": "Lesotho Loti", "flag": "assets/flags/ls.svg" },
    "LYD": { "name": "Libyan Dinar", "flag": "assets/flags/ly.svg" },
    "MAD": { "name": "Moroccan Dirham", "flag": "assets/flags/ma.svg" },
    "MDL": { "name": "Moldovan Leu", "flag": "assets/flags/md.svg" },
    "MGA": { "name": "Malagasy Ariary", "flag": "assets/flags/mg.svg" },
    "MKD": { "name": "Macedonian Denar", "flag": "assets/flags/mk.svg" },
    "MMK": { "name": "Myanma Kyat", "flag": "assets/flags/mm.svg" },
    "MNT": { "name": "Mongolian Tugrik", "flag": "assets/flags/mn.svg" },
    "MOP": { "name": "Macanese Pataca", "flag": "assets/flags/mo.svg" },
    "MRU": { "name": "Mauritanian Ouguiya", "flag": "assets/flags/mr.svg" },
    "MUR": { "name": "Mauritian Rupee", "flag": "assets/flags/mu.svg" },
    "MVR": { "name": "Maldivian Rufiyaa", "flag": "assets/flags/mv.svg" },
    "MWK": { "name": "Malawian Kwacha", "flag": "assets/flags/mw.svg" },
    "MXN": { "name": "Mexican Peso", "flag": "assets/flags/mx.svg" },
    "MYR": { "name": "Malaysian Ringgit", "flag": "assets/flags/my.svg" },
    "MZN": { "name": "Mozambican Metical", "flag": "assets/flags/mz.svg" },
    "NAD": { "name": "Namibian Dollar", "flag": "assets/flags/na.svg" },
    "NGN": { "name": "Nigerian Naira", "flag": "assets/flags/ng.svg" },
    "NIO": { "name": "Nicaraguan Córdoba", "flag": "assets/flags/ni.svg" },
    "NOK": { "name": "Norwegian Krone", "flag": "assets/flags/no.svg" },
    "NPR": { "name": "Nepalese Rupee", "flag": "assets/flags/np.svg" },
    "NZD": { "name": "New Zealand Dollar", "flag": "assets/flags/nz.svg" },
    "OMR": { "name": "Omani Rial", "flag": "assets/flags/om.svg" },
    "PAB": { "name": "Panamanian Balboa", "flag": "assets/flags/pa.svg" },
    "PEN": { "name": "Peruvian Nuevo Sol", "flag": "assets/flags/pe.svg" },
    "PGK": { "name": "Papua New Guinean Kina", "flag": "assets/flags/pg.svg" },
    "PHP": { "name": "Philippine Peso", "flag": "assets/flags/ph.svg" },
    "PKR": { "name": "Pakistani Rupee", "flag": "assets/flags/pk.svg" },
    "PLN": { "name": "Polish Zloty", "flag": "assets/flags/pl.svg" },
    "PYG": { "name": "Paraguayan Guarani", "flag": "assets/flags/py.svg" },
    "QAR": { "name": "Qatari Rial", "flag": "assets/flags/qa.svg" },
    "RON": { "name": "Romanian Leu", "flag": "assets/flags/ro.svg" },
    "RSD": { "name": "Serbian Dinar", "flag": "assets/flags/rs.svg" },
    "RUB": { "name": "Russian Ruble", "flag": "assets/flags/ru.svg" },
    "RWF": { "name": "Rwandan Franc", "flag": "assets/flags/rw.svg" },
    "SAR": { "name": "Saudi Riyal", "flag": "assets/flags/sa.svg" },
    "SBD": { "name": "Solomon Islands Dollar", "flag": "assets/flags/sb.svg" },
    "SCR": { "name": "Seychellois Rupee", "flag": "assets/flags/sc.svg" },
    "SDG": { "name": "Sudanese Pound", "flag": "assets/flags/sd.svg" },
    "SEK": { "name": "Swedish Krona", "flag": "assets/flags/se.svg" },
    "SGD": { "name": "Singapore Dollar", "flag": "assets/flags/sg.svg" },
    "SHP": { "name": "Saint Helena Pound", "flag": "assets/flags/sh.svg" },
    "SLL": { "name": "Sierra Leonean Leone", "flag": "assets/flags/sl.svg" },
    "SOS": { "name": "Somali Shilling", "flag": "assets/flags/so.svg" },
    "SRD": { "name": "Surinamese Dollar", "flag": "assets/flags/sr.svg" },
    "SSP": { "name": "South Sudanese Pound", "flag": "assets/flags/ss.svg" },
    "STN": { "name": "São Tomé and Príncipe Dobra", "flag": "assets/flags/st.svg" },
    "SVC": { "name": "Salvadoran Colón", "flag": "assets/flags/sv.svg" },
    "SYP": { "name": "Syrian Pound", "flag": "assets/flags/sy.svg" },
    "SZL": { "name": "Swazi Lilangeni", "flag": "assets/flags/sz.svg" },
    "THB": { "name": "Thai Baht", "flag": "assets/flags/th.svg" },
    "TJS": { "name": "Tajikistani Somoni", "flag": "assets/flags/tj.svg" },
    "TMT": { "name": "Turkmenistani Manat", "flag": "assets/flags/tm.svg" },
    "TND": { "name": "Tunisian Dinar", "flag": "assets/flags/tn.svg" },
    "TOP": { "name": "Tongan Paʻanga", "flag": "assets/flags/to.svg" },
    "TRY": { "name": "Turkish Lira", "flag": "assets/flags/tr.svg" },
    "TTD": { "name": "Trinidad and Tobago Dollar", "flag": "assets/flags/tt.svg" },
    "TVD": { "name": "Tuvaluan Dollar", "flag": "assets/flags/tv.svg" },
    "TZS": { "name": "Tanzanian Shilling", "flag": "assets/flags/tz.svg" },
    "UAH": { "name": "Ukrainian Hryvnia", "flag": "assets/flags/ua.svg" },
    "UGX": { "name": "Ugandan Shilling", "flag": "assets/flags/ug.svg" },
    "USD": { "name": "United States Dollar", "flag": "assets/flags/us.svg" },
    "UYU": { "name": "Uruguayan Peso", "flag": "assets/flags/uy.svg" },
    "UZS": { "name": "Uzbekistani Som", "flag": "assets/flags/uz.svg" },
    "VEF": { "name": "Venezuelan Bolívar", "flag": "assets/flags/ve.svg" },
    "VND": { "name": "Vietnamese Dong", "flag": "assets/flags/vn.svg" },
    "VUV": { "name": "Vanuatu Vatu", "flag": "assets/flags/vu.svg" },
    "WST": { "name": "Samoan Tala", "flag": "assets/flags/ws.svg" },
    "XAF": { "name": "Central African CFA Franc", "flag": "assets/flags/xaf.svg" },
    "XAG": { "name": "Silver Ounce", "flag": "assets/flags/xag.svg" },
    "XAU": { "name": "Gold Ounce", "flag": "assets/flags/xau.svg" },
    "XCD": { "name": "East Caribbean Dollar", "flag": "assets/flags/xcd.svg" },
    "XDR": { "name": "Special Drawing Rights", "flag": "assets/flags/xdr.svg" },
    "XOF": { "name": "West African CFA Franc", "flag": "assets/flags/xof.svg" },
    "XPF": { "name": "CFP Franc", "flag": "assets/flags/xpf.svg" },
    "YER": { "name": "Yemeni Rial", "flag": "assets/flags/ye.svg" },
    "ZAR": { "name": "South African Rand", "flag": "assets/flags/za.svg" },
    "ZMK": { "name": "Zambian Kwacha", "flag": "assets/flags/zm.svg" },
    "ZWL": { "name": "Zimbabwean Dollar", "flag": "assets/flags/zw.svg" }
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
