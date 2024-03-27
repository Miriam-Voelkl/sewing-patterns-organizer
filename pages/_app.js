import GlobalStyle from "../styles";
import initialSewingPatterns from "../lib/initialSewingPatterns.json";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} initialSewingPatterns={initialSewingPatterns} />
    </>
  );
}
