import Navbar from '../components/Navbar'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout