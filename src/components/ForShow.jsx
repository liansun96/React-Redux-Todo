import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Remove } from '../store/reducer/TodoSlicer'

const ForShow = () => {

  const dispatch = useDispatch();

  const {Todo} = useSelector(state => state)

  // console.log(Todo);

  const handleDelet = (id) =>{
     dispatch(Remove({id:id}))
  }

  const handleEdit = (id) => {
    const name = prompt("Enter your edit name")
    const phone = prompt("Enter your edit phone number")

    if(name && phone){
      dispatch(edit({id:id,name:name,phone:phone}))
    }
  }

  return (
    <div style={{width:'50%', margin:'auto',marginTop:"20px"}}>
      {
        Todo.map(i => <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} key={i.id}>
          <p>{i.name}</p>
          <p>{i.phone}</p>
          <div>
            <button onClick={handleEdit.bind(null,i.id)}>Edit</button>
            <button onClick={handleDelet.bind(null,i.id)}>Delet</button>
          </div>
        </div>)
      }
    </div>
  )
}

export default ForShow