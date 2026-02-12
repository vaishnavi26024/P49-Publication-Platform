import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Login  from './components/pages/Login'
function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <h1>Welcome to Wordlane Tech Publications</h1>
        <p>Join the fastest growing publishing platform in the world</p>
      </main>
      <Login />
      <Footer />
    </div>
  )
}

export default App
