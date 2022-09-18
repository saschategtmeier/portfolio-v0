import create from 'zustand';

type HeaderState = {
  currentHeader: string;
  setHeader: (header: string) => void;
};

export const useHeaderStore = create<HeaderState>((set) => ({
  currentHeader: '',
  setHeader: (header) => set((state) => ({ ...state, currentHeader: header })),
}));
