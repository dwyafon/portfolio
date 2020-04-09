import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Title from "../components/title.js"



export default () => (
<Layout>
    <Title text="About Shaw"/>
    
    <div>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/blog">Blog</Link>
    </div>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate enim, voluptatum soluta voluptas nihil quidem animi ad facere! Odit nobis et atque dolor eligendi corporis consequatur repellat, necessitatibus veniam?
    </p>
</Layout>

)
