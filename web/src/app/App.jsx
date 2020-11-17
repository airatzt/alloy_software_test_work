import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Customers from "./pages/Customers"; 
import Reports from "./pages/Reports";

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Customers}></Route>
          <Route path="/customers" component={Customers} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </Layout>
  );
};

export default App;
