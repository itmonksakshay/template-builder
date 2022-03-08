import {useNode} from "@craftjs/core";

const TextBlock = ({text}) => {
  const { connectors: {drag} } = useNode();

  return (
    <div ref={drag}>
      <h2>{text}</h2>
    </div>
  )
}
export default TextBlock;