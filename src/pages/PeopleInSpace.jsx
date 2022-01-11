import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader"
import axios from 'axios'
import NavBar from '../components/NavBar';


const PeopleInSpace = () => {

  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(`${process.env.NODE_ENV === 'production' ? '/api' : 'http://api.open-notify.org'}/astros.json`);
        console.log('response: ', response);
        setPeople(response.data.people)
        setIsLoading(false)
      } catch (error) {
        console.error("Something went wrong!");
        setIsLoading(true)
      }
    }
    fetchPeople();
  }, [])

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="astronauts"></div>
        <SyncLoader color="#1e2739" loading={isLoading} size={50} />
        {!isLoading && <div className="peopleInSpace">
          {people?.map((person, idx) => (
            <a key={person.name} className="names" href={`https://en.wikipedia.org/wiki/${person.name}`}
              target={"_blank"} rel="noreferrer">{person.name}<p>Currently on the {person.craft}</p></a>
          ))}
        </div>}
      </div>
    </div>
  )
};

export default PeopleInSpace;
