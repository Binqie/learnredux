import './App.css';
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App" style={{'display': 'flex', 'flexDirection': 'column', 'height': '100vh', 'justifyContent': 'center', 'alignItems': 'center'}}>
      <div className='cash'>{cash}</div>
      <div className='btns'>
        <button onClick={() => addCash(Number(prompt()))}>add</button>
        <button onClick={() => getCash(Number(prompt()))}>get</button>
      </div>
    </div>
  );
}

export default App;
