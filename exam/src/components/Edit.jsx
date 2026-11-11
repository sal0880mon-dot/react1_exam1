const Edit = ({ data, setData }) => {
    const editUser = (event) => {
        event.preventDefault()

        const updateUser = {
            name: event.target.name.value,
            job: event.target.job.value,
            age: event.target.age.value
        }

        setData(data.map(el => {
            if (el.id == event.target.id.value) {
                return { ...el, ...updateUser }
            }
            return el
        }))
    }

    return (
        <>
            <form onSubmit={editUser}>
                <caption>edit</caption>
                <input type="text" name="id" placeholder="user id" />
                <input type="text" name="name" placeholder="new name" />
                <input type="text" name="job" placeholder="new job" />
                <input type="text" name="age" placeholder="new age" />
                <button type="submit">edit</button>
            </form>
        </>
    )
}

export default Edit