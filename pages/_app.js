import '../styles/globals.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    // uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
