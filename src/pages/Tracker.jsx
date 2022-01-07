import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader"
import Map from '../components/Map';
import axios from 'axios'

const Tracker = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [issCoords, setIssCoords] = useState([])


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('http://api.open-notify.org/iss-now.json');
        console.log('response: ', response.data);
        const { longitude, latitude } = response.data.iss_position;
        setIssCoords([latitude, longitude])
        setIsLoading(false)
      } catch (error) {
        console.error("Something went wrong!");
        setIsLoading(true)
      }
    }
    fetchLocation();
    const fetcher = setInterval(() => fetchLocation(), 5000)
    return () => {
      clearInterval(fetcher)
    }
  }, [])
  return (
    <div>
      <SyncLoader color="#1e2739" loading={isLoading} size={50} />
      {!isLoading && <Map issCoords={issCoords} />}
    </div>
  )
};

export default Tracker;
