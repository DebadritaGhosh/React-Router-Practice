import React from 'react'
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
//Components
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";
const Profile = () => {

    const { path, url } = useRouteMatch();

    return (
        <>
            <h1> Profile </h1>
            <hr />
            <ul>
                <li>
                    <Link to={`${url}/viewprofile`}>View Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/viewprofile`} component={ViewProfile} />
                <Route path={`${path}/editprofile`} component={EditProfile} />
            </Switch>
        </>
    )
}

export default Profile
