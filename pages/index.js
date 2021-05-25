import Head from 'next/head'
import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* sidebar */}
        {/* Feed */}
        {/* rightside chat */}
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
