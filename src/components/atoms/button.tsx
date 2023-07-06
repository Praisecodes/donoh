'use client'

type ButtonType = {
  children: string;
  onClick: () => any;
  width: any;
  className?: string;
  transparent: boolean;
  margin?: any;
}

const Button = ({ children, onClick, width, className, transparent, margin }: ButtonType): JSX.Element => {
  return (
    <button
      className={className || `py-2 rounded-md font-bold text-sm border border-[#C32C31] ${transparent? 'bg-transparent text-[#C32C31]': 'bg-[#C32C31] text-white'} hover:scale-105 duration-150`}
      style={{ width: `${width}rem`, marginLeft: `${margin}rem`, marginRight: `${margin}rem` }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
