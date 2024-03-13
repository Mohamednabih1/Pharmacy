import './about.css'
import Image from 'next/image'
import logo from '../assets/logo.png'
import email from '../assets/email.png'
import { Header } from '../component/header/header'
import { Footer } from '../component/footer/footer'
import MapComponent from '../component/map'
function about() {
  return (
    <>
      <Header></Header>
      <MapComponent></MapComponent>
      <div className="footer">
        {' '}
        <Footer></Footer>
      </div>
    </>
  )
}
export default about
