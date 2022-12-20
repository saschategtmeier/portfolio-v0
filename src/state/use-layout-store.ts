import create from 'zustand';

type LayoutState = {
  currentHeader: string;
  setHeader: (header: string) => void;
  isNavbarOpen: boolean;
  setIsNavbarOpen: (open: boolean) => void;
  isContactMeDialogOpen: boolean;
  setIsContactDialogOpen: (open: boolean) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  currentHeader: '',
  setHeader: (header) => set((state) => ({ ...state, currentHeader: header })),
  isNavbarOpen: false,
  setIsNavbarOpen: (open) => set((state) => ({ ...state, isNavbarOpen: open })),
  isContactMeDialogOpen: false,
  setIsContactDialogOpen: (open) =>
    set((state) => ({ ...state, isContactMeDialogOpen: open })),
}));
