import { Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h2 style={{ textAlign: "center" }}>MyG Automatización</h2>
          <Text fontSize="lg" maxW="600px" mx="auto" textAlign={"center"}>
            Mejora la eficiencia y comodidad con nuestros sistemas avanzados de
            automatización.
          </Text>
          <div className="waves"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
