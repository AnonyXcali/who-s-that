import { type PropsWithChildren } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type DialogComponentType = {
  triggerText: string,
  onClickHandler: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
}

const DialogComponent = ({
  children,
  triggerText = "Open",
  onClickHandler,
}: PropsWithChildren & DialogComponentType) => (
  <Dialog>
    <DialogTrigger
      onClick={onClickHandler}
      className='hint-box'
    >
      {triggerText}
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle
          className="dialog-title"
        >
          Hint!
        </DialogTitle>
        <DialogDescription
          className="dialog-description"
        >
          {children}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)

export default DialogComponent
