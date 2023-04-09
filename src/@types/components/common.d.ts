interface ModalProps {
  open: boolean
  showSimpleButton: boolean
  setOpen: () => void
  title: string
  children: JSX.Element
}

interface SimpleCloseButtonProps {
  setOpen: () => void
}
