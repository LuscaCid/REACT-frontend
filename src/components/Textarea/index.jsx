import { Container } from "./style";

export const Textarea = function({value,...rest}){
  return (
    <Container {...rest}>
      {value}
      
    </Container>
  )

}