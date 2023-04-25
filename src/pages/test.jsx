import React, { useState } from 'react'
import axios from 'axios'

const dummyRestaurant = [
  {
    id: 1,
    title: 'Dummy restaurant',
    description: 'Dummy description',
    thumbnail: '/images/dummy-1.png'
  },
  {
    id: 2,
    title: 'Dummy restaurant 2',
    description: 'Dummy description 2',
    thumbnail: '/images/dummy-2.png'
  }
]

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('/api/v1/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      // handle
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      {restaurants &&
        restaurants.map((restaurant) => (
          <p key={restaurant.id}>{restaurant.title}</p>
        ))}
    </div>
  )
}
// db.json

