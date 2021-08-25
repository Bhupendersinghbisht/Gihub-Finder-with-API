import './App.css';
import React from 'react'
import Navbar from './components/layout/Navbar'
// import UserItem from './components/users/UserItem'
// import Users from './components/users/Users';
//import Search from './components/users/Search';
import Home from './components/Pages/Home';
import Alert from './components/layout/Alert';
import Notfound from './components/Pages/Notfound';
import About from './components/Pages/About';
import User from './components/users/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';
const App = () => {
  //const foo = () => 'BAB'

 
  // state = {
  //   users: [],
  //   user:{},
  //   repos:[],
  //   loading: false,
  //   alert: null
  // }
  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({loading:true})
  //   const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({loading:false,users:res.data})
  //   console.log(res)
  //     }

//Get single Github user
// const getUser = async username =>{
//   setLoading(true);
//   const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//   //this.setState({loading:false,user:res.data});
//   setLoading(false);
//   setUser(res.data)
// }
//Get users Repos


  //Clear Github users from state


 

  
    
    // const name='john doe'
    // const foof=true;
    const polo = [1, 5, 8, 9];

    return (
      <GithubState>
        <AlertState>
      <Router>
        <div className="App">
          <Navbar icon="fab fa-github" title={polo} />
          <div className="container">
            <Alert  />
            <Switch>
              <Route exact path="/" component={Home} />                  
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User}/>
              <Route component={Notfound} />
    </Switch>
   
  </div>

          </div>
    
    </Router>
    </AlertState>
    </GithubState>
        );
}

        export default App;
