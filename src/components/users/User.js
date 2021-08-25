import React, {Fragment, useEffect,useContext } from 'react'
//import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'
const User = ({match}) => {
    
    const githubContext=useContext(GithubContext);
    const{user,loading,getUser,getUserRepos,repos}=githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    },[])

    
        const {name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=user;
        
        if(loading) return <Spinner />;
        return <Fragment>
            <Link to="/" className="btn btn-light">
                Back to Search
            </Link>
        
        Hireable:{' '}
        {hireable ? (
            <i className="fas fa-check text-success" />
        ):(
            <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
            <div className="all center">
                <img src={avatar_url} className="round-img" alt="" style={{width:'150px'}}/>
            </div>
            <h1>{name}</h1>
<p>Location : {location}</p>
<div>
    {bio && (<Fragment>
<h3>Bio</h3>
<p>{bio}</p>
    </Fragment>
    )}
    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>

<ul>
<li>
    {login && <Fragment>
    <strong>Company: </strong>{login}
    </Fragment>}
    </li>
<li>
{blog && <Fragment>
    <strong>Website: </strong>{blog}
    </Fragment>}
</li>
<li>
{company && <Fragment>
    <strong>company: </strong>{company}
    </Fragment>}
</li>
</ul>
</div>
        </div>

<div className="card text-center">
    <div className="badge badge-primary">
        Follower :{followers}
    </div>
    <div className="badge badge-success">
        Following :{following}
    </div>
    <div className="badge badge-light">
        Public_Repos :{public_repos}
    </div>
    <div className="badge badge-dark">
        Public Gists :{public_gists}
    </div>
</div>

<Repos repos={repos} />
        </Fragment>
    }


// User.propTypes={
//     // loading:PropTypes.bool,
//     // user:PropTypes.object.isRequired,
//     // getUser:PropTypes.func.isRequired,
//     repos:PropTypes.array.isRequired,
//     getUserRepos:PropTypes.func.isRequired,
//         }
export default User
