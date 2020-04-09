// React Component

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Title from "../components/title.js"

//functional component definition; JSX resembles HTML
export default () => (

    <Layout>
        <Title text="Shaw Malcolm" subtitle= "Javascript Developer"/>
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/blog">Blog</Link>
        </div>
        <p> 
            ES6 | React | Redux | HTML5 | CSS3 | SASS 
        </p>
    </Layout>

)
