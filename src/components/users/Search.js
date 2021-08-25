import React, {useState,useContext } from 'react'
//import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search =() =>{
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

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
    // state={
    //     text:''
    // } 
    const[text,setText]=useState('');
    //onSubmit(e){
       const onSubmit = e =>{
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Please enter something','light')
        }else{
            githubContext.searchUsers(text);  //this prop is defined in app.js
            setText('');
        }
        
        //console.log(this.state.text);
    }
    const onChange = e => setText(e.target.value)
    
    
        //const {}=this.props;
     return (
        <div>
         <form onSubmit={onSubmit} className="form">
             <input type="text" name="text" placeholder="search Users...." 
             value={text}
             onChange={onChange}
             />
             <input type="submit" value="Search" className="btn btn-dark btn-block" />
             </form>   
             {githubContext.users.length > 0 && <button 
             className="btn btn-light btn-block" 
             onClick={githubContext.clearUsers}>
                 Clear
                 </button>}
             
        </div>
    )
     }

// Search.propTypes={
//     //searchUsers:PropTypes.func.isRequired,
//     clearUsers:PropTypes.func.isRequired,
//     showClear:PropTypes.bool.isRequired,
//     setAlert:PropTypes.func.isRequired,
// };
export default Search