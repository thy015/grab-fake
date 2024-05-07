import React,{useEffect} from 'react'
import { useQuery,gql } from '@apollo/client'
import { LOAD_USER } from '../GraphQL/Query'

function GetUser() {
  
  //hook 
  const {error,loading,data}=useQuery(LOAD_USER)
  //load data automatically when new data coming
  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div>
      
    </div>
  )
}

export default GetUser
