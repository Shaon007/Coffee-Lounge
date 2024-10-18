
import PopularProducts from "../../components/PopularProducts"
import { useState, useEffect } from "react"

function Homepage() {
  const [refresh, setRefresh] = useState(false)
  const [coffees, setCoffees] = useState(null)

  const changeState = () => {
    setRefresh(!refresh)
  }

  const fetchCoffees = () => {
    fetch('https://coffee-store-server-five-lime.vercel.app/coffee')
      .then(res => res.json())
      .then(data => setCoffees(data))
      .catch(err => console.error('Error fetching coffee data:', err));
  };

  useEffect(() => {
    fetchCoffees();
  }, [refresh]);

  return (
    coffees !== null && <div >
      <PopularProducts coffees={coffees} changeState={changeState} />
    </div>
  )
}

export default Homepage