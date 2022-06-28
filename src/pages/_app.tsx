import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store/store";
import { MoralisProvider } from "react-moralis";
import { QueryClientProvider, Hydrate } from 'react-query';
import { queryClient } from "api/api";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <Hydrate state={pageProps.dehydratedState} >
        <Provider store={store}>
          <MoralisProvider initializeOnMount={false}>
            <Component {...pageProps} />
          </MoralisProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
