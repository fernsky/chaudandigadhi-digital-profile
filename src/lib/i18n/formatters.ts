import type { Language } from "./index";

/**
 * Formats a number according to the specified language (locale).
 * For 'ne', it converts standard Arabic numerals to Nepali (Devanagari) digits.
 * For 'en', it uses standard English formatting with commas.
 * 
 * @param val The value to format (string or number).
 * @param lang The language locale ('ne' or 'en').
 * @param decimals Number of decimal places.
 * @returns Formatted string.
 */
export const formatNumber = (val: string | number, lang: Language, decimals = 0) => {
    // Handle undefined/null values
    if (val === undefined || val === null) return "0";

    const nepaliToEnglish = (str: string) =>
        str.replace(/[०१२३४५६७८९]/g, (d) => "0123456789"["०१२३४५६७८९".indexOf(d)]);

    let num: number;
    if (typeof val === "string") {
        // Remove commas and handle Nepali digits before parsing
        const cleaned = val.replace(/,/g, "");
        num = parseFloat(nepaliToEnglish(cleaned));
    } else {
        num = val;
    }

    if (isNaN(num)) return typeof val === "string" ? val : "0";

    const formatted = num.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    if (lang !== "ne") return formatted;

    const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return formatted.replace(/\d/g, (digit) => nepaliDigits[parseInt(digit)]);
};
