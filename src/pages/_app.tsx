import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store/store";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MoralisProvider initializeOnMount={false}>
        <Component {...pageProps} />
      </MoralisProvider>
    </Provider>
  );
}

export default MyApp;
