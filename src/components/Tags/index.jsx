import { Container } from "./tags";

export function Tag({title, ...rest}) {
  return (
    <Container {...rest}>
      
      {title}
    </Container>

  )
}