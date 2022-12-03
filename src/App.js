import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { fetchCustomers } from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="cash">{cash}</div>
      <div className="btns">
        <button onClick={() => addCash(Number(prompt()))}>add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>get cash</button>
      </div>
      <div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                style={{'cursor': 'pointer', 'color': 'white'}}
                onClick={() => removeCustomer(customer.id)}>{customer.name}</div>
            ))}
          </div>
        ) : (
          <div>No customers yet</div>
        )}
      </div>
      <div className="btns">
        <button onClick={() => addCustomer(prompt())}>add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>add many customers</button>
      </div>
    </div>
  );
}

export default App;
