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
  items: [
    { "id": 1, "name": "Royal Velvet Bouquet", "image": "/images/flower2.webp", "price": "Rp. 2,800,000" },
    { "id": 2, "name": "Romantic Blushing Petals", "image": "/images/flower3.webp", "price": "Rp. 1,000,000" },
    { "id": 3, "name": "Beautiful Rainbow Baby Breathe", "image": "/images/flower4.webp", "price": "Rp. 1,500,000" },
    { "id": 4, "name": "Pink Blush Baby Breathe Bouquet", "image": "/images/flower5.webp", "price": "Rp. 1,200,000" },
    { "id": 5, "name": "Azure Elegance Bouquet", "image": "/images/flower6.webp", "price": "Rp. 1,700,000" },
    { "id": 6, "name": "Ocean Blue Baby Breathe Bouquet", "image": "/images/flower7.webp", "price": "Rp. 1,450,000" }
  ],
  status: 'succeeded',
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
