import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

export const fetchDragons = createAsyncThunk(
    'Dragons/fetchDragons',
    async function() {
        const response = await fetch('https://api.spacexdata.com/v3/dragons');
        const data = await response.json();
        const newdata = data.map((item) => {
            return {...item, reserved: false}
         })
        return newdata;
    }
)

const dragonsSlice = createSlice({
    name: 'Dragons',
    initialState: {
        dragons: [],
        status: null,
        error: null,
    },

    reducers: {
        changeReserved: (state, action) => ({            
            ...state,
            dragons: [
                ...state.dragons.map((dragon) => (
                    (dragon.id !==action.payload) ? dragon : {
                        ...dragon,
                        reserved: !dragon.reserved,
                    }
                ))
            ]
        })
    },
    
    extraReducers:{
        [fetchDragons.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [fetchDragons.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.dragons = action.payload;
        },
        [fetchDragons.rejected]: (state, action) => {
            state.status = 'failed';
        },
    }
});

export const { changeReserved } = dragonsSlice.actions;
export default dragonsSlice