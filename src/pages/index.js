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


// import React from 'react'
// import Layout from '../components/layout'
// import Title from '../components/title'
// import ArticleList from '../components/article-list'

// export default () => (
//   <Layout>
//     <Title text='Welcome'/>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//     </p>
//     <ArticleList />
//   </Layout>
// )


