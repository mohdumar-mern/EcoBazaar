import Footer from "../../../components/Footer"
import Header from "../../../components/Header"

const RSLayout = async ({ children }) => {
  return (
    <div className="mx-auto w-full">
      <Header />
      <main className="px-4 py-2m min-h-[80vh]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default RSLayout