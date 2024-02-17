
function Form(props) {
    return (
    <form onSubmit={props.GetWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button type="submit">Get Weather</button>
    <button onClick={props.again}>again</button>
    </form>
    )
}

export default Form;