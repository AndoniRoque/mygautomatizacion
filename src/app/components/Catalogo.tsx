import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Flex,
} from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Tablero de Control",
    description:
      "Armado de tablero de control de procesos y armado de tablero de corrección de factor de potencia.",
    image: "/tableroDeControl.jpg",
  },
  {
    id: 2,
    name: "Modernización",
    description:
      "En MyG Automatización modernizamos los equipos existentes para alcanzar una mayor capacidad de producción.",
    image: "/modernizacion.jpg",
  },
  {
    id: 3,
    name: "Programación PLC y HMI",
    description: "Hacemos eficiente tu proceso de fabricación.",
    image: "/PLCyHMI.jpeg",
  },
  {
    id: 4,
    name: "SCADA",
    description:
      "La importancia de un sistema SCADA para controlar tu proceso industrial",
    image: "/SCADA.jpg",
  },
  {
    id: 5,
    name: "Combinación de Técnologías",
    description:
      "Combinamos diferentes tecnologías para lograr un producto que solucione los problemas de nuestros clientes.",
    image: "/combinacionTecnologias.jpg",
  },
];

export default function LandingPage() {
  return (
    <Flex
      minH="100vh"
      py={10}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"gray.100"}
    >
      <Container maxW="container.lg" textAlign="center">
        <Heading size="4xl" mb={4} color="rgba(51, 51, 51, 1)" p={4}>
          Catálogo
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6} p={4}>
          Mejora la eficiencia y comodidad con nuestros sistemas avanzados de
          automatización.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {products.map((product) => (
            <VStack
              key={product.id}
              p={5}
              bg="white"
              borderRadius="lg"
              border={"1px solid  rgba(51, 51, 51, 1)"}
              // shadow="md"
              gap={3}
              _hover={{
                shadow: "md",
                transform: "scale(1.02)",
                transition: "all 0.1s",
                cursor: "pointer",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                borderRadius="md"
                h={400}
              />
              <Heading size="md" color="gray.700" p={2}>
                {product.name}
              </Heading>
              <Text fontSize="sm" color="gray.600" p={4}>
                {product.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
