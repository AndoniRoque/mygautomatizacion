import {
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaInstagram, FaPhone } from "react-icons/fa";

const ContactSection = () => (
  <Flex bg="gray.100" py={10} justifyContent="center" alignItems="center">
    <Container maxW="container.md" textAlign="center">
      <Heading as="h2" size="xl" mb={4} color="gray.800">
        Contáctanos
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        Estamos listos para ayudarte con cualquier consulta.
      </Text>
      <Stack direction="row" gap={6} justify="center">
        <Link
          color={"blue.500"}
          href="https://www.instagram.com/automatizacionmyg/"
        >
          <FaInstagram /> Instagram
        </Link>
        <Button color={"blue.500"}>
          <FaPhone /> +123 456 7890
        </Button>
      </Stack>
    </Container>
  </Flex>
);

export default ContactSection;
