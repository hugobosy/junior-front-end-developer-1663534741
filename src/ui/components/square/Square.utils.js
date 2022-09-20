import { BiCheck, BiLockAlt, BiRightArrowAlt } from "react-icons/bi";

const SIZE_ICON = 15

export const getIcon = (status) => {
  switch (status) {
    case "complete":
      return <BiCheck size={SIZE_ICON} />;
    case "active":
      return <BiRightArrowAlt size={SIZE_ICON} />;
    case "default":
    default:
      return <BiLockAlt size={SIZE_ICON} />;
  }
};
