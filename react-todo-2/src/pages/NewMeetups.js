import NewMeetUpForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom'
function NewMeetupsPage() {
    const history = useHistory()

    const onAddMeetupHandle = async (meetupdata) => {
        try {
            const response = await fetch(
                'https://todo-react-32f84-default-rtdb.firebaseio.com/meetups.json',
                {
                    method: 'POST',
                    body: JSON.stringify(meetupdata),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                },

            )

            const result = await response.json()
            alert(JSON.stringify(result))

            history.replace('/')
        } catch (error) {
            alert('Error')
        }
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetUpForm onAddMeetup={onAddMeetupHandle} />
        </section>
    )
}

export default NewMeetupsPage