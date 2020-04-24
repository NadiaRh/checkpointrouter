import React,{Component} from 'react';
import { Link, Route, Switch,Redirect } from 'react-router-dom';
import Category from './category';
import Products from './products';
import Login from './login';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const PrivateRoute = ({component:Component,authed, ...rest}) => {
  return (
    
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
        
  )
}


 class App extends Component {
  render() {
    return (
      
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Admin Area </Link></li>
            

          </ul>
         </nav>
         
         
<Switch>
  <Route exact path="/" component={Home} />
 <Route path="/category" component={Category}/>
 <Route path="/products" component={Products}/>
 <Route path="/login" component={Login}/>
 <PrivateRoute authed={this.props.isAuthenticated}path='/products' component={Products}/> 
     
</Switch>
           

      </div>
    )
  }
}

export default App;


