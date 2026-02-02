const Filter = ({ filter, setFilter }) => <p>filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)} /></p>

export default Filter