import { create } from "zustand";

interface LoginMoodalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginMoodal = create<LoginMoodalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useLoginMoodal