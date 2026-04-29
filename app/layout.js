import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SEAMENS ENTERPRISES | Industrial Chemical Technologies",
  description: "Revolutionizing cost-effective chemical technologies for the entire spectrum of textile industries with precision-engineered parts and plants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a 
          href="https://wa.me/923054444125" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contact on WhatsApp"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
      </body>
    </html>
  );
}
