import create from "zustand";

interface UploadModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

type SetState<T> = (
  newState: Partial<T> | ((prevState: T) => Partial<T> | null)
) => void;

const useUploadModal = create<UploadModalStore>(
  (set: SetState<UploadModalStore>) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);

export default useUploadModal;
