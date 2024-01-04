import React from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet';
import MyFooter from './Footer';
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      
        <Helmet>
             
  <meta charSet="utf-8" />
  <meta name="description" content={description}/>
  <meta name="keywords" content={keywords}/>
  <meta name="author" content={author} />
  <title>{title}</title>

 </Helmet>
        <Header/>
        <main style={{ minBlockSize: "70vh" }}>
       {children}
       </main>
       <MyFooter/>
        </div>
  )
}

Layout.defaultProps = {
  title: "LuxeMART - shop now",
  description: "Software project",
  keywords: "mern,react,node,mongodb",
  author: "Group-03",
}

export default Layout
