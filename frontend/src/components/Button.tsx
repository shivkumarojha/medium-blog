import { MouseEventHandler } from "react"

interface ButtonType {
  label: String
  onClick: MouseEventHandler<HTMLButtonElement>
  color?: string
}

export const Button = ({ label, onClick, color }: ButtonType) => {
  return (
    <button
      className={`${color || "bg-black"} text-white p-2 mt-2 rounded-xl`}
      onClick={onClick}
      type="submit"
    >
      {label}
    </button>
  )
}
