import '../styles/globals.css'
import { UsersStorage } from './_usersContext'

export default function MyApp({ Component, pageProps }) {
  return (

    <UsersStorage>
      <Component {...pageProps} />
    </UsersStorage>

  )
}