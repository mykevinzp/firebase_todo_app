// eslint-disable-next-line react/prop-types
export const RenderTodos = ({ handleDelete, todos }) => {
    return (
        <ul>
            {
                // eslint-disable-next-line react/prop-types
                todos && todos.map(todo => {
                    return <li
                        className='track-list'
                        key={todo.data().id}>{todo.data().todoText} <button
                            className='delete'
                            onClick={() => handleDelete(todo.data().id)}>X</button>
                    </li>
                })
            }
        </ul>
    )
}
