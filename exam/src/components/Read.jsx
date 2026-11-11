import { useState } from 'react'


const Read = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Salmon',
            job: 'student',
            age: 15,
            active: 'active',
        }
    ])
    const deleteData = (id) => {
        setData((prev) => prev.id !== id)
    }
    return (
        <>
            <div>
                {
                    data.map(el => {
                        return (
                            <div key={el.id}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <h3>{el.name}</h3>
                                            </th>
                                            <th>
                                                <h3>{el.job}</h3>
                                            </th>
                                            <th>
                                                <h3>{el.age}</h3>
                                            </th>
                                            <th>
                                                <p>{el.active}</p>
                                            </th>
                                            <th>
                                                <button onClick={() => deleteData(el.id)}>Delete</button>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export {}
export default Read