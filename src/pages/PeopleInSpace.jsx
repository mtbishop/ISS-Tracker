import React, { useState, useEffect } from "react";
import axios from 'axios'




const PeopleInSpace = () => {

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchPeople = async() => {
      const response = await axios.get('http://api.open-notify.org/astros.json')
      console.log("Data: ", response.data);
      setPeople(response.data.people)
    }
    fetchPeople();
  },[])

  return (
  <div className="container">
    <div className="astronauts"></div>
    <div className="peopleInSpace">
      {people.map((person, idx) => (
        <a key={person.name} className="names" href={`https://en.wikipedia.org/wiki/${person.name}`}
        target={"_blank"} rel="noreferrer">{person.name}</a>
      ))}
    </div>
  </div>
  )
};

export default PeopleInSpace;
