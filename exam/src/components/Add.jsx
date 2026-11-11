import './add.css'

const Add = ({ data, setData }) => {
    const addUser = (event) => {
        event.preventDefault()

        const newUser = {
            id: Date.now(),
            name: event.target.name.value,
            job: event.target.job.value,
            age: event.target.age.value,
            active: 'active'
        }

        setData([...data, newUser])
        event.target.reset()
    }

    return (
        <>
            <form onSubmit={addUser}>
                <caption>add</caption>
                <input type="text" name="name" placeholder="add name" />
                <input type="text" name="job" placeholder="add job" />
                <input type="text" name="age" placeholder="add age" />
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default Add