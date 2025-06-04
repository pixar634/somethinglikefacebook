import Head from 'next/head'
import { getSession } from "next-auth/react"
import Header from "../components/Header"
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from "../components/Widgets";
//pass session here to see if the user is logegd in/if not, then render login component.
export default function Home({ session }) {
  if (!session) return <Login />

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="flex bg-gray-800 font-barlow">
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* rightside chat */}
        <Widgets />
      </main>

    </div>
  )
}

// we build a function to handle the user data who has logged in or out.

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context)
  return {
    // this prop is returning an object to the home function which we can pass to retreive user info
    props: {
      session
    }
  }
}
