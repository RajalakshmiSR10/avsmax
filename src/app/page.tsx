import AboutPage from "@/components/About/About";
import ContactPage from "@/components/Contact/Contact";
import HomePage from "@/components/Home/Home";
import ServicePage from "@/components/Service/Service";
import BusinessSupport from '@/components/BusinessSupport/BusinessSupport'
import Certifications from "@/components/MoreOptions/Certifications";
import Footer from "@/components/Footer/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
 <main>
    <section id="home">
        <HomePage />
      </section>

       <section id="about">
        <AboutPage />
      </section>
<section id="business-support">
       <BusinessSupport />
      </section> 
     <section id="services">
        <ServicePage/>
      </section>
       
 <section id="certifications">
        <Certifications/>
      </section>
      <section id="testimonials">
        <Testimonials/>
      </section>
       <section id="contact">
        <ContactPage />
      </section> 
      <section>
 <Footer/>
 
      </section>
       
      
      
    </main>
  );
}



