import React,{useState} from 'react'


function List({contacts}) {
    const [filter, setFilter] = useState("")

    const changeFilter = ((event)=>{
        setFilter(event.target.value)
    })

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=> 
            item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())

        );

    })

  return (
    <div>
            <input value={filter} onChange={changeFilter}/> <br/><br/>

         {
            filtered.map((item, index)=>{
                return (
                <div key={index}>{item.fullName} - {item.phoneNumber} </div>
                )
                
            })
        }
    </div>
  )

  
}

export default List