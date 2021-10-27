import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Products from './Products';
import Home from './Home';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div>
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/" style={{paddingLeft:"40px"}}>Home</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#" style={{paddingLeft:"40px"}}><Link to="/products">Products</Link></a>
                  </li>
                
                  <li className="nav-item">
                  <a className="nav-link" href="#" style={{paddingLeft:"40px"}}>Cart {props.mycounter}</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Products}/>
      </Switch>
    </Router>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
      mycounter:state.count
  }
}
export default connect(mapStateToProps)(App);
