import React from 'react'
import Banner from '../Components/Banner'
import ThreeBox from '../Components/ThreeBox'
import Products from '../Components/Products'
import ComputerSection from '../Components/ComputerSection'
import Customer from '../Components/Customer'
import ContactForm from '../Components/ContactForm'

function Home() {
  return (
    <>
      <Banner />
      <ThreeBox />
      <Products />
      <ComputerSection />
      <Customer />
      <ContactForm />
    </>
  );
}

export default Home;

