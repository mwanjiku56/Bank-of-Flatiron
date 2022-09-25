import React,{useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";



function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  function fetchTransactions(){
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
    }
    useEffect(fetchTransactions,[]);

  function handlePost(newTransaction) {
    //event.preventDefault();
    setTransactions(transactions=>[...transactions, newTransaction])
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });
  }

  function handleSearch(search){
    if(search===""){
      fetchTransactions(transactions)
    }else {
      const searchTransactions = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
      })
      setTransactions(searchTransactions) }
    }

  

return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm onSubmission={handlePost}/>
      <TransactionsList transactions={transactions}/>
      
    </div>
  );
}

export default AccountContainer;
