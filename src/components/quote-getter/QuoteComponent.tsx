import { useQuote,QuoteProps } from "./QuoteGetter";
export function Quote({ quote: q, author: a }: Readonly<QuoteProps>) {
  return (
    <blockquote>
      <p>{q}</p>
      <footer>{`-${a}`}</footer>
    </blockquote>
  );
}
export function GetQuoteFromAPI() {
  const quote = useQuote();
  return <>{quote ? <Quote {...quote} /> : null}</>;
}
