import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Details } from './components/page/Details'
import { Layout } from './Layout'


function App() {

  return (
    <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>


    </HashRouter>
  )
}

export default App
