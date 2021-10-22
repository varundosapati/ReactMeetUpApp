import { useRef } from "react";
import Card from "../ui/Card";
import NewMeetupFormClass from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetUpData);
  }

  return (
    <Card>
      <form className={NewMeetupFormClass.form} onSubmit={submitHandler}>
        <div className={NewMeetupFormClass.control}>
          <label htmlFor="title"> Meeting Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={NewMeetupFormClass.control}>
          <label htmlFor="image"> Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={NewMeetupFormClass.control}>
          <label htmlFor="address"> Meetup Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>
        <div className={NewMeetupFormClass.control}>
          <label htmlFor="description"> Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={NewMeetupFormClass.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
