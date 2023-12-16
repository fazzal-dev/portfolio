import copy from "../../assets/copy.svg";
import "./Copy.css";

interface CopyButtonProps {
  Text: string;
}

const CopyButton = ({ Text }: CopyButtonProps) => {
  const handleClick = async () => {
    await navigator.clipboard.writeText(Text);
  };
  return (
    <button className="icon-button" onClick={handleClick}>
      <img className="icon" src={copy} />
    </button>
  );
};

export default CopyButton;
