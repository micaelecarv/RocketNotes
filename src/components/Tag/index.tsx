import { Container } from "./styles";

export function Tag({ title, ...rest} : any) {
  return (
    <Container { ...rest }>
      {title}
    </Container>
  );

}