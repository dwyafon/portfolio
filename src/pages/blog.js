// React Component

import React from "react"
import Layout from "../components/layout.js"
import Title from "../components/title.js"
import ArticleList from "../components/article-list.js"

//functional component definition; JSX resembles HTML
export default () => (

    <Layout>
        <Title text="Blog: It's About the Process" />
     <ArticleList />
    </Layout>

)

