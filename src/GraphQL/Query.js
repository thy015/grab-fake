import { gql } from "@apollo/client";

//load ng dùng: dấu ``
export const LOAD_USER=gql`
    query{
        getAllUser{
            id
            name
            phoneNum
            email
            password
        }
    }
`