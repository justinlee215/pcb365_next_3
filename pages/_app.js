import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </RecoilRoot>
  );
}

export default MyApp;
