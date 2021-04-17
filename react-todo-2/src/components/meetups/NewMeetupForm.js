import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'
import { useRef } from 'react'

function NewMeetUpForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const enterTitle = titleInputRef.current.value
        const enterImage = imageInputRef.current.value
        const enterAddress = addressInputRef.current.value
        const enterDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enterTitle,
            image: enterImage,
            address: enterAddress,
            description: enterDescription
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type="text" required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea type="text" required id='description' rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetUpForm