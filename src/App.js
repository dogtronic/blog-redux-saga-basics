import './App.css';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loadUsersStart} from "./redux/actions"

const App = () => {
  const dispatch = useDispatch();
  const { users, loading} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(loadUsersStart())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : (
        <div>
         {users.map((item, index) => (
          <div key={item.id}>
            <p>{index + 1}. {item.first_name}</p>
          </div>
         ))}

        </div>
      )}
    </div>
  );
}

export default App;


