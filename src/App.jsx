import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <h1>Welcome to Wordlane Tech Publications</h1>
        <p>Join the fastest growing publishing platform in the world</p>
      </main>
      <Footer />
    </div>
  )
}

export default App
