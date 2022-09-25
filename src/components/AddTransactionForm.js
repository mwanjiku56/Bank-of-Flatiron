import React,{useState} from "react";

function AddTransactionForm({onSubmission}) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category:"",
    amount:0
  });



  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }


  function submitData(e){
    e.preventDefault();
    onSubmission(formData);
    setFormData({date:"", description:"", amount:0, category:""});
  }
  


  return (
    <div className="ui segment">
      <form onChange={handleChange} onSubmit ={submitData}  className="ui form">
        <div className="inline fields">
          <input value={formData.date} type="date" id="date" name="date"  />
          <input value={formData.description} type="text" id="description" name="description" placeholder="Description"  />
          <input value={formData.category} type="text" id="category" name="category" placeholder="Category"  />
          <input value={formData.amount} type="number" id="amount" name="amount" placeholder="Amount"   />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
