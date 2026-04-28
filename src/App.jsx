function App() {

  return (
    <>
      <section className="bg-Gray-100 w-screen min-h-screen flex justify-center items-center">
        <div className="max-w-4xl grid md:grid-cols-3 rounded-md overflow-hidden mx-4 my-20">
          <div className="bg-Gold-500 p-11 flex flex-col justify-between md:gap-20 gap-5">
            <div>
              <img src="/images/icon-sedans.svg"></img>
              <h2 className="text-Gray-100 uppercase my-7 font-bold text-4xl">sedans</h2>
              <p className="text-Transparent-white ">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            </div>
            <button className="bg-Gray-100 text-Gold-500 py-2 px-6 rounded-3xl hover:bg-Gold-500 hover:outline-solid hover:text-Gray-100 w-fit">Learn More</button>
          </div>

          <div className="bg-Cyan-800 p-11 flex flex-col justify-between md:gap-20 gap-5">
            <div>
              <img src="/images/icon-suvs.svg"></img>
              <h2 className="text-Gray-100 uppercase my-7 font-bold text-4xl">suvs</h2>
              <p className="text-Transparent-white ">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            </div>
            <button className="bg-Gray-100 text-Cyan-800 py-2 px-6 rounded-3xl hover:bg-Cyan-800 hover:outline-solid hover:text-Gray-100 w-fit">Learn More</button>
          </div>

          <div className="bg-Green-950 p-11 flex flex-col justify-between md:gap-20 gap-5">
            <div>
              <img src="/images/icon-luxury.svg"></img>
              <h2 className="text-Gray-100 uppercase my-7 font-bold text-4xl">Luxury</h2>
              <p className="text-Transparent-white ">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            </div>
            <button className="bg-Gray-100 text-Green-950 py-2 px-6 rounded-3xl hover:bg-Green-950 hover:outline-solid hover:text-Gray-100 w-fit">Learn More</button>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default App
