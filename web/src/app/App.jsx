import { Switch, Route } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Layout from "./components/Layout/Layout";
import Customers from "./pages/Customers";
import Report from "./pages/Report";
import AddCustomer from "./pages/AddCustomer";
import WebReport from "./pages/WebReport";

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: true,
      refetchInterval: 1000,
    },
  },
})

const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Customers}></Route>
          <Route path="/customers" component={Customers} />
          <Route path="/report" component={Report} />
          <Route path="/add-customer" component={AddCustomer} />
          <Route path="/web-report" component={WebReport} />
        </Switch>
      </Layout>
    </ReactQueryCacheProvider>
  );
};

export default App;
