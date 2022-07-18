import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// get all todos
export const getAllTodos = createAsyncThunk('todos/getAllTodos', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/Tasks')
  
      return response.data
    } catch (error) {
      if (!error.response) {
        return rejectWithValue(error)
      }
      return rejectWithValue(error.response.data)
    }
  })


  export const createTodo = createAsyncThunk('todos/createTodo', async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/Tasks', data)
  
      return response.data
    } catch (error) {
      if (!error.response) {
        return rejectWithValue(error)
      }
      return rejectWithValue(error.response.data)
    }
  })


  export const deleteTodo = createAsyncThunk ('todos/deletetodo' , async (id , { rejectWithValue })=>{
    try {
        const res = await axios.delete(`http://localhost:8000/Tasks/${id}`)
        return res.data;
    } catch (error) {
        return rejectWithValue(error)
    }
  })

  export const updateTodo = createAsyncThunk('todos/updateTodo', async (data , { rejectWithValue }) =>{
    try {
      const { id } = data;
      const entryData = data

      const res = axios.patch(`http://localhost:8000/Tasks/${id}`,entryData)
      return res.data
    } catch (error) {
      return rejectWithValue(error);
    }
  })

  const initialState = {
    todos:[],
    loading:false,
    error:null
  }

  export const todoSlice = createSlice ({
    name:'todos',
    initialState,
    extraReducers: {
        [getAllTodos.pending] : (state) => {
            state.status='pending'
            // state.loading= false
        },
        [getAllTodos.fulfilled] : (state , {payload}) =>{
            state.status='success'
            state.todos= payload
        },
        [getAllTodos.rejected] : (state,{ payload }) =>{
            state.status='failed'
            state.todos=payload.error
        }
    }

  }) 

  
  export const todoSelector = (state) => state.todos
  export default todoSlice.reducer

