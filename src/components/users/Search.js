import axios from 'axios';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
static propTypes={
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired,
};

    //var countval=0;
    
    // const myfunction = (event) => {
    //     let mystr=''   
    //     countval++;
    //     console.log('Hello '+countval+' ..  '+ event.target.value)
    //     mystr = mystr.concat(event.target.value)
    //     console.log(mystr)
    //     if(countval >= 3)
    //     {
            
    //         callAPI(mystr);
    //     }
    // }

    // const callAPI = async (prm) =>{
    //     const res=  await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //     const output= res.data.filter(sr => sr.login.includes(prm))
    //     console.log(res.data);
    //     console.log(output);
    // }
    state={
        text:''
    }
    //onSubmit(e){
        onSubmit = e =>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something','light')
        }else{
            this.props.searchUsers(this.state.text);  //this prop is defined in app.js
            this.setState({text:''});
        }
        
        //console.log(this.state.text);
    }
    onChange = e => this.setState({[e.target.name]:e.target.value })
    
    render(){
        const {clearUsers,showClear}=this.props;
     return (
        <div>
         <form onSubmit={this.onSubmit.bind(this)} className="form">
             <input type="text" name="text" placeholder="search Users...." 
             value={this.state.text}
             onChange={this.onChange}
             />
             <input type="submit" value="Search" className="btn btn-dark btn-block" />
             </form>   
             {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
             
        </div>
    )
     }
}
export default Search