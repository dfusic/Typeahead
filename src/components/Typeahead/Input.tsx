interface InputProps {
  onChange?: (e) => void;
  onBlur?: () => void;
  value?: string;
  onFocus?: () => void;
  className?: string;
}

const Input = ({ onChange, onBlur, onFocus, value, className }: InputProps) => {
  return (
    <input
      tabIndex={1}
      type="text"
      onChange={(e) => onChange(e)}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      className={className}
      placeholder="Search states..."
    />
  );
};

export default Input;
