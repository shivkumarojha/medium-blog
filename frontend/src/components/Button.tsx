import { MouseEventHandler } from "react"

interface ButtonType {
  label: String
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ label, onClick }: ButtonType) => {
  return (
    <button
      className="bg-black text-white p-2 mt-2 rounded-xl"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
