import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CatalogueItem {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface CatalogueState {
  items: CatalogueItem[];
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
    setCatalogue: (state, action: PayloadAction<CatalogueItem[]>) => {
      state.items = action.payload;
    },
    setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCatalogue, setStatus, setError } = catalogueSlice.actions;
export default catalogueSlice.reducer;





//Start the json-server: "json-server --watch db.json --port 5000"