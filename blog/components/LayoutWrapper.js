import Footer from './Footer'
import Header from "@/components/Header";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}

export default LayoutWrapper
