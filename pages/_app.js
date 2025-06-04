import '../styles/globals.css'
import { Provider } from "next-auth/react"
function MyApp({ Component, pageProps }) {
  return (
    /* provider here is actually used as context api approach, to share among components,inbuilt nextjs capabilities: 
    :: here we are using it to take advantage of nextauth magic ::, 
    like sharing session information to the components through props
    */
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp

