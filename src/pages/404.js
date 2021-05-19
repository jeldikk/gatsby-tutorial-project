import React from 'react'
import Layout from "../components/Layout"

const Error = ()=>{
    return (
        <Layout>
            <main className="error-page">
                <h1>404</h1>
                <h3>Error: Page Not Found</h3>
            </main>
        </Layout>
    )
}

export default Error