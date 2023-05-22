import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

export const fetchRockets = createAsyncThunk(
    'rockets/fetchRockets',
    async function() {
        const response = await fetch('https://api.spacexdata.com/v3/rockets');
        const data = await response.json();
        const newdata = data.map((item) => {
           return {...item, reserved: false}
        })
        return newdata;
    }
);



const rocketsSlice = createSlice({
    name: 'rockets',
    initialState: {
        rockets: [],
        status: null,
        error: null,
    },

    reducers: {
        changeReserved: (state, action) => ({            
            ...state,
            rockets: [
                ...state.rockets.map((rocket) => (
                    (rocket.rocket_id !==action.payload) ? rocket : {
                        ...rocket,
                        reserved: !rocket.reserved,
                    }
                ))
            ]
        })
    },
    
    extraReducers:{
        [fetchRockets.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [fetchRockets.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.rockets = action.payload;
        },
        [fetchRockets.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    }
});

export const { changeReserved } = rocketsSlice.actions;
export default rocketsSlice