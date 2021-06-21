import Theme from "./Theme";
import { StylesProvider } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Products from "./pages/products";
import { NotFound } from "./components/notFound";
import Cart from "./pages/cart";
import { useSelector } from "react-redux";
import { Thanks } from "./pages/thanks";
const App = () => {

  const Routes = () => {
    const finished = useSelector(store => store.finished)
    return <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        {finished && <Route exact path="/thanks" component={Thanks} />}
      <Route component={NotFound} />
    </Switch>
  }

  return (
    <Theme>
      <StylesProvider injectFirst>
        <Layout>
          <Routes />
        </Layout>
      </StylesProvider>
    </Theme>
  );
}

export default App;
