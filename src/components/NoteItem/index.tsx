import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

interface NoteItemProps {
  isNew?: boolean ,
  onClick?: () => void,
  value?: any,
  placeholder?: string
}

export function NoteItem({ isNew, value, onClick, ...rest }: NoteItemProps) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}

      </button>
    </Container>
  );
}