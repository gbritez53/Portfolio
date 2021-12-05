import useSystemTheme from 'react-use-system-theme'
import Head from 'next/head'
import '../styles/tailwind.css'

const App = ({ Component, PageProps }) => {
  const systemTheme = useSystemTheme()

  return (
    <>
      <Head>
        <>
          {systemTheme !== 'dark' ? (
            <link rel="icon" href="/logo.svg" />
          ) : (
            <link rel="icon" href="/logo-dark.svg" />
          )}
        </>
      </Head>
      <Component {...PageProps} />
    </>
  )
}

export default App
