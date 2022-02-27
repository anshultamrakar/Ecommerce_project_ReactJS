const Address = () => {
  return (
    <form className = "addForm" onSubmit = {(e) => e.preventDefault()}>
    <label htmlFor='addItem'>Add new address </label>
   <input
   type = "text"
   placeholder = "Add the Tasks"
   id='addItem'
   type='text'
   required 
   />
   <button
   type='submit'
   aria-label='Add Item'
   >
   Add
   </button>
   
</form>
  )

  
};

export default Address;
