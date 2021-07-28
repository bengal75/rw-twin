import { Link, routes } from '@redwoodjs/router'
import tw from 'twin.macro'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <TestCase>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        </p>
      </TestCase>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

const TestCase = tw.div`
  text-red-500
`

export default HomePage
