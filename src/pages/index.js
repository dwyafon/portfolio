// React Component

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

//functional component definition; JSX resembles HTML
export default () => (

    <Layout>
        <h1>
            Index page of my portfolio site
        </h1>
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam rerum vero fugit delectus, voluptatum odio facilis reprehenderit doloribus in et aspernatur quisquam? Reiciendis inventore soluta atque quibusdam dignissimos alias deleniti.
        </p>
    </Layout>



)


