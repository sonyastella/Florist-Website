import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CatalogueState {
  items: Array<{
    price: ReactNode; id: number; name: string; image: string 
}>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CatalogueState = {
  items: [],
  status: 'idle',
  error: null,
};

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    setCatalogue(state, action: PayloadAction<Array<{ id: number; name: string; image: string }>>) {
      state.items = action.payload;
    },
    setStatus(state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) {
      state.status = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    updateItem(state, action: PayloadAction<{ id: number; name: string }>) {
      const { id, name } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.name = name;
      }
    },
  },
});

export const { setCatalogue, setStatus, setError, updateItem } = catalogueSlice.actions;
export default catalogueSlice.reducer;




//Start the json-server: "json-server --watch db.json --port 5000"