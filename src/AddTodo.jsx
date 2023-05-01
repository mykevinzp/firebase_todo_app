// eslint-disable-next-line react/prop-types
export const AddTodo = ({ handleSubmit, setInput }) => {
    return (
        <form className='track-form' onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Trakt</button>
        </form>
    )
}
