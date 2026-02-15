import { create } from "zustand"

interface ModalDataProps {
  title: string
  description: string
  icon: any
  onCloseCallback?: () => void
}

interface ModalStoreProps {
  isOpen: boolean
  title: string
  description: string
  icon: any
  onCloseCallback?: () => void
  onOpen: (data: ModalDataProps) => void
  onClose: () => void
}

export const useModalStore = create<ModalStoreProps>((set, get) => ({
  isOpen: false,
  title: "",
  description: "",
  icon: null,
  onCloseCallback: undefined,
  onOpen: (data: ModalDataProps) =>
    set({
      isOpen: true,
      title: data.title,
      description: data.description,
      icon: data.icon,
      onCloseCallback: data.onCloseCallback,
    }),
  onClose: () => {
    get().onCloseCallback?.()
    set({
      isOpen: false,
      title: "",
      description: "",
      icon: null,
      onCloseCallback: undefined,
    })
  },
}))
