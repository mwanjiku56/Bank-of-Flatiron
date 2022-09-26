import React,{useState} from "react";

function AddTransactionForm({onSubmission}) {
  const [dataForm, setdataForm] = useState({
    date: "",
    description: "",
    category:"",
    amount:0
  });



  function handleChange(event) {
    setdataForm({
      ...dataForm,
      [event.target.name]: event.target.value
    });
  }


  function submitData(e){
    e.preventDefault();
    onSubmission(dataForm);
    setdataForm({date:"", description:"", amount:0, category:""});
  }
  


  return (
    <div className="ui segment">
      <form onChange={handleChange} onSubmit ={submitData}  className="ui form">
        <div className="inline fields">
          <input value={dataForm.date} type="date" id="date" name="date"  />
          <input value={dataForm.description} type="text" id="description" name="description" placeholder="Description"  />
          <input value={dataForm.category} type="text" id="category" name="category" placeholder="Category"  />
          <input value={dataForm.amount} type="number" id="amount" name="amount" placeholder="Amount"   />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
