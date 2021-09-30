import React from 'react'

import { useParams, useLocation } from 'react-router-dom'

const Post = ({ match }) => {

    const { id } = useParams();

    const query = new URLSearchParams(useLocation().search);


    return (
        <div>
            {/* <h1>Id is : {match.params.id} </h1> */}
            <h1>Id is : {id} </h1>
            <h2>{query.get("first")}</h2>
            <h2>{query.get("last")}</h2>
        </div>
    )
}

export default Post
