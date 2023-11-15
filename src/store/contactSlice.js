import { configureStore} from "@reduxjs/toolkit"

const createSlice = createSlice({
    name:"contactElement",
    initialState:[{
        neme:"adam",
        lastName:"salah",
        age:"22",
        email:"salahadem817@gmail.com"
    },
    {
        neme:"refki",
        lastName:"selmi",
        age:"21",
        email:"sahadelam178@gmail.com"
    },
],
reducers:{
    setContact:(state,action)=>{
        return action.payload
    }

}
})
export const {setContact}=contactSlice.actions

export default contactSlice.reducer
