import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/micaelecarv.png" alt="Avatar" />  

        <div>
          <span>Bem vindo,</span>
          <strong>Micaele Carvalho</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}