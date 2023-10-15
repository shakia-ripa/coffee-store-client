import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>
      <div className='w-4/5 mx-auto'>
        <div className='text-center my-14'>
          <h2 className="text-4xl">Our Popular Products</h2>
          <Link to={'/addCoffee'}>
            <button className='btn mt-4 bg-[#E3B577] text-white'>
              Add Coffee
            </button>
          </Link>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
          }
        </div>
      </div>

    </>
  )
}

export default App
