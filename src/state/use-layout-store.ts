import create from 'zustand';
import { PageSectionData } from '../models';

type LayoutState = {
  currentPageSection: PageSectionData | null;
  setCurrentPageSection: (sectionData: PageSectionData) => void;
  isNavbarOpen: boolean;
  setIsNavbarOpen: (open: boolean) => void;
  isContactMeDialogOpen: boolean;
  setIsContactDialogOpen: (open: boolean) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  currentPageSection: null,
  setCurrentPageSection: (sectionData) =>
    set((state) => ({ ...state, currentPageSection: sectionData })),
  isNavbarOpen: false,
  setIsNavbarOpen: (open) => set((state) => ({ ...state, isNavbarOpen: open })),
  isContactMeDialogOpen: false,
  setIsContactDialogOpen: (open) =>
    set((state) => ({ ...state, isContactMeDialogOpen: open })),
}));
