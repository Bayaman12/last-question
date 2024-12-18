import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный запрос для получения данных
export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  }
);

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default characterSlice.reducer;