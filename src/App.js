import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Statistics from './components/Statistics/Statistics'
import Boost from './components/Boost/Boost'
import Footer from './components/Footer/Footer'
import { LinkProvider } from './contexts/LinkContext'

function App() {
  return (
    <div>
      <LinkProvider>
        <Nav />
        <Main />
        <Statistics />
        <Boost />
        <Footer />
      </LinkProvider>
    </div >
  );
}

export default App;
