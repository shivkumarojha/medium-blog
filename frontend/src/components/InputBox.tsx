import { ChangeEvent } from "react"

// Type for Input box
interface InputBoxType {
  id: string
  label: string
  type: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputBox = ({
  id,
  label,
  type,
  placeholder,
  onChange,
}: InputBoxType) => {
  return (
    <div className="flex flex-col">
      <label className="font-mono font-semibold mt-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="outline outline-slate-200 p-2 mt-2 rounded"
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        required
      />
    </div>
  )
}
