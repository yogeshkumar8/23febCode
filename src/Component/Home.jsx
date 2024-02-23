import React from 'react'
import Dropdown from './Dropdown';
// import Navbar from './Navbar';
const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className="App" style={{           
            backgroundImage: "url('https://wallpapercave.com/wp/wp3222138.jpg')",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",}}>
            <Dropdown/>
        </div>
    </div>
  )
}

export default Home