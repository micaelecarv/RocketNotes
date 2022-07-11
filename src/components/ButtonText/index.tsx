import { Container } from "./styles";

interface ButtonTextProps {
  title?: string;
  loading?: boolean;
}

export function ButtonText ({ title, isActive = false, ...rest }: any) {

  return (
    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >     
      {title}
    </Container>
  );
}