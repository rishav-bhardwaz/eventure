import Hero from '../components/landing/Hero'
import Categories from '../components/landing/Category'
import EventsSectionDemo from '../components/common/EventDemo'
import Banner from '../components/landing/Banner'
import Cebanner from '../components/landing/Cebanner'
import EventsSection from '../components/common/Eventsection'
import Footer from '../components/common/Footer'
export const Landing = () => {
  return (
    <>
    <Hero />
    <Categories />
    <EventsSectionDemo />
    <Banner />
    <EventsSection />
    <Cebanner />
    <Footer />
    </>
  )
}
