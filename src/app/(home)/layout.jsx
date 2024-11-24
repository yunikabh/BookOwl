import Navbar from "./_components/ui/Navbar.jsx";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
