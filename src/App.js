import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './Theme';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Details from './Pages/Details/Details';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/details/:id' component={Details} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
