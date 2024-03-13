'use client'
import ProductImages from './image'
import { Header } from '@/app/component/header/header'
import { Footer } from '@/app/component/footer/footer'
export default function ProductId() {
  return (
    <>
      {' '}
      <Header></Header>
      <ProductImages></ProductImages>
      <Footer></Footer>
    </>
  )
}

class Product {}
