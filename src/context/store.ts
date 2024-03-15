import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface MyState {
  engLanguageActive: boolean;
  toggleLanguage: () => void;
}

export const useStore = create<MyState>()(
  persist(
    (set, get) => ({
      engLanguageActive: false,

      toggleLanguage: () =>
        set({ engLanguageActive: get().engLanguageActive ? false : true }),
    }),
    {
      name: 'language',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        engLanguageActive: state.engLanguageActive,
      }),
    }
  )
);
