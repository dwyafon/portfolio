import React from 'react'
import { Link } from "gatsby"
import styles from "./404.module.scss";
import Layout from "../components/layout.js"



export default () => (

<Layout>
<div className={styles.content}>
    <h1 className={styles.margin}>
        404
    </h1>
    <p className={styles.errormsg}>
        Nothing to see here, my friends    
    </p>
    <Link to="/">Home</Link>
</div>
</Layout>

)


// import React from 'react'
// import styles from './404.module.scss';
// import Layout from '../components/layout'
// import { Link } from 'gatsby'

// export default () => (
//   <Layout>
//     <div className={styles.content}>
//       <h1 className={styles.header}>Page not found</h1>
//       <p className={styles.errorMessage}>
//         The page you are looking for does not exists.
//     </p>
//       <Link to='/'>Home</Link>
//     </div>
//   </Layout>
// )