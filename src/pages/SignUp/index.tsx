import { Container, Form, Background} from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>A aplicação para salvar e gerenciar seus link úteis.</p>

        <h2>Crie sua conta</h2>
        <Input 
          placeholder="Nome"
          type="name"
          icon={FiUser}
        />
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
         <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
         <Button title="Cadastrar" />
         <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  );
}