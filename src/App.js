import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      // await is a must since it is needed to
      // wait until everything is fetched
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  // not run in the re-render since if tour is deleted,
  // don't need to fetch data again
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <button type="button" className="btn" onClick={() => fetchTours()}>
            get more tours
          </button>
        </div>
      </main>
    );
  }

  return (
    // use {removeTour} to call function in other js files
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
