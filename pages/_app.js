import "../styles/globals.css";
import "bulma/css/bulma.min.css"
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
