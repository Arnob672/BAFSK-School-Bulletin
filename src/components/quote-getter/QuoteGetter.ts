import { useEffect, useState } from "react";
import * as dotenv from "dotenv"
export interface QuoteProps {
	readonly quote: string;
	readonly author: string;
}
export function useQuote() {
	dotenv.config()
	const api_key=process.env.XApiKey;
	if(api_key===undefined) {
		throw Error("No API key found in env");
	}
	const [quote, setQuote] = useState<QuoteProps | null>(null);
	const api = "https://api.api-ninjas.com/v1/quotes?category=inspirational";
	useEffect(() => {
		async function get_quote() {
			if (!quote) {
				const gotten_quote = await fetch(api, {
					headers: { "X-Api-Key": api_key! },
				});
				const gotten_quote_parsed: QuoteProps[] = await gotten_quote.json();
				setQuote(gotten_quote_parsed[0]);
			}
		}
		if (!quote) {
			get_quote();
		}
	}, [quote]);
	return quote;
}
