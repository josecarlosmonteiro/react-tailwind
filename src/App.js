import { Button } from "./components/shared/Buttons";
import { Flex, Center } from "./components/shared/Flex";
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
} from "./components/shared/Forms";

function App() {
  return (
    <Flex variant="f-screen">
      <Center>
        <FormContainer size="sm">
          <div>
            <h1 className="text-2xl mb-6 font-bold italic bold underline">
              React-Tailwind Login sssssss s das da sd as d asd
            </h1>
            <FormGroup>
              <Label>Login</Label>
              <Input type="text" placeholder="user login..." required />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="********" />
            </FormGroup>
            <FormGroup className="mt-6 flex justify-between">
              <Button variant="primary">Entrar</Button>

              <Button variant="danger">Cancelar</Button>
            </FormGroup>
          </div>
        </FormContainer>
      </Center>
    </Flex>
  );
}

export default App;
