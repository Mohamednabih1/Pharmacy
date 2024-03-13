'use client'
import email from '../../assets/email.png'
import facebook from '../../assets/facebook.png'
import ImageViewer from '@/app/component/ImageViewer'
import { usePathname } from 'next/navigation'
import './image.css'
export default function ProductImages() {
  const images = [email, facebook, email] // Replace with your image URLs

  const pathname = usePathname()
  let str = pathname
  let parts = str.match(/\/product\/(\d+)/)
  let number
  if (parts) {
    number = parts[0].replace('/product/', '')
  }
  return (
    <div>
      <div className="card-wrapper">
        <div className="card">
          <ImageViewer images={images}></ImageViewer>
          {/* <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <Image id="header-image" src={email} alt="Amin's Pharmacy" />
                <Image id="header-image" src={facebook} alt="Amin's Pharmacy" />
                <Image id="header-image" src={logo} alt="Amin's Pharmacy" />
                <Image id="header-image" src={facebook} alt="Amin's Pharmacy" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <Image id="header-image" src={email} alt="Amin's Pharmacy" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <Image
                    id="header-image"
                    src={facebook}
                    alt="Amin's Pharmacy"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <Image id="header-image" src={email} alt="Amin's Pharmacy" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <Image
                    id="header-image"
                    src={facebook}
                    alt="Amin's Pharmacy"
                  />
                </a>
              </div>
            </div>
          </div> */}
          <div className="product-content">
            <h2 className="product-title">order name with id {number}</h2>
            <a href="#" className="product-link">
              visit nike store
            </a>
            <div className="product-rating">
              <span>4.7(21)</span>
            </div>

            <div className="product-price">
              <p className="last-price">
                Old Price: <span>$257.00</span>
              </p>
              <p className="new-price">
                New Price: <span>$249.00 (5%)</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur placeat sapiente architecto
                illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p>
              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Shoes</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              {/* <input type = "number" min = "0" value = "1"> */}
              <button type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
