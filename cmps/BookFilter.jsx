const {useState} = React
export function BookFilter({onSetFilterBy}){
    const [price, setPrice] = useState(0)
    const [name,setName] = useState('')
     const handleChange = (e) => {
    setPrice(e.target.value)
    onSetFilterBy(name,price)
  }
  function onSetName(e){
    setName(e.target.value)
    onSetFilterBy(name,price)
  }
    return(
        <section>
            <label htmlFor="name">Name:</label>
         <input type='text' name='name' onChange={onSetName}/>
         <label htmlFor="price">Price:</label>
         <input type='range' name='price' onChange={handleChange} value={price} min='0' max='800'/>
         <span>{price}</span>
        </section>
    )
}