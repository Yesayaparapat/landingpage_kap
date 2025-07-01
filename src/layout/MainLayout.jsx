import Navbar from '../components/Navbar'
import Chatbot from '../components/Chatbot'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Chatbot />
    </div>
  )
}

export default MainLayout