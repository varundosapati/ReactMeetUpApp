import MeetupItem from './MeetupItem';
import MeetupListClass from './MeetupList.module.css';

function MeetupList(props) {
    return (
        <ul className={MeetupListClass.list}>
            {props.meetups.map(meetup => 
            <MeetupItem 
                key={meetup.id} 
                id={meetup.id} 
                image={meetup.image} 
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}  />)}
        </ul>
    );


}

export default MeetupList;
