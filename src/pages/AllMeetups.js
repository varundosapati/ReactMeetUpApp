import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_data = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

/*
Example of using expression in list 
            {[<li>item1</li> ,<li>item2</li>]}

 Hard coding for looping the list 
  {Dummy_date.map((meetup) =>{
                    return <li key={meetup.id}> {meetup.title} </li>;
} ) }
Bot example we create one with component
*/

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-d911e-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); //If you ommit array it runs only once componenet is loaded , also we added a variable to load depending on external variable getting updated

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meet ups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  }
}

export default AllMeetups;
