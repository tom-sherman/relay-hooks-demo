import graphql from 'babel-plugin-relay/macro';
import './App.css';
import { environment } from './relay-env';
import { AppHeroQuery } from './__generated__/AppHeroQuery.graphql';
import { useQuery, RelayEnvironmentProvider } from 'relay-hooks';

const query = graphql`
  query AppHeroQuery {
    hero {
      name
      id
    }
  }
`;

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Test />
    </RelayEnvironmentProvider>
  );
}

function Test() {
  const { data } = useQuery<AppHeroQuery>(query);
  return <>{data?.hero?.name ?? null}</>;
}

export default App;
