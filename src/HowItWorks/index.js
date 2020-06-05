import React from "react"
import Layout from "../components/layout"
import { Fetching, Failed } from "../components/messages"

export default function HowItWorks(props) {
  return (
    <Layout title="How it works">
      {
        props.data.status === "success" ?
          <>
            <h1>HowItWorks</h1>
          </> :
        props.data.status === "fetching" ?
          <Fetching/> :
        <Failed/>
      }
    </Layout>
  )
}
