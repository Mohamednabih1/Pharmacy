'use client'
import './page.css'
import * as React from 'react'

import { AdvertisePanel } from './component/imageSlider'

import { PaginationDemo } from './component/pagination'

import { Footer } from './component/footer/footer'
import { ProductGrid } from './component/productsGrid'
import { Header } from './component/header/header'
import { useState, useEffect } from 'react' // Import necessary hooks
import UserCard from './component/card'
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/users') // Assuming an API route
        let usersData = await response.json()
        var parsedUsers = []
        if (usersData.data.length > 0) {
          parsedUsers = usersData.data.map((data) => new User(data))
          console.log(parsedUsers)
        }
        setUserData(parsedUsers)
      } catch (error) {
        console.error('Error fetching user data:', error)
        // Handle errors appropriately (e.g., display error message to user)
      }
    }

    fetchData()
  }, [])

  return (
    // <NextUIProvider>
    <body>
      {userData.length > 0 &&
        userData.map((user) => (
          //UserCard(user),
          <div key={user._id}>
            {/* Optionally display other user properties (excluding sensitive ones) */}
          </div>
        ))}
      <Header></Header>
      <div className="main-content">
        <div className="image-slider">
          <AdvertisePanel></AdvertisePanel>
        </div>

        <ProductGrid></ProductGrid>

        <PaginationDemo></PaginationDemo>
      </div>

      <div className="footer">
        {' '}
        <Footer></Footer>
      </div>
    </body>
  )
}
