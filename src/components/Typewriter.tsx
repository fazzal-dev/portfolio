import TypeWriter from "typewriter-effect";

interface TypeWriterProps {
  text: string;
}

const Typewriter = ({ text }: TypeWriterProps) => {
  return (
    <TypeWriter
      onInit={(typewrtier) => {
        typewrtier.typeString(`<span>${text}</span>`).start();
      }}
      options={{}}
    />
  );
};

export default Typewriter;
