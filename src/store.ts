import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface MyState {
  darkThemeActive: boolean;
  engLanguageActive: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const useStore = create<MyState>()(
  persist(
    (set, get) => ({
      darkThemeActive: false,

      engLanguageActive: false,

      toggleLanguage: () =>
        set({ engLanguageActive: get().engLanguageActive ? false : true }),

      toggleTheme: () =>
        set({ darkThemeActive: get().darkThemeActive ? false : true }),
    }),
    {
      name: 'preference',
      storage: createJSONStorage(() => localStorage), 
      partialize: (state) => ({
        darkThemeActive: state.darkThemeActive,
        engLanguageActive: state.engLanguageActive,
      }),
    }
  )
);
