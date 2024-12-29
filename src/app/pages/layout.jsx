import Navbar from "./components/Navbar1.jsx";
import Footer from "./components/Footer1.jsx";




export default function HomeLayout({ children }) {
  return (
    <>



      <Navbar />
      {children}
      <Footer />
  

    
    </>
  );
}
