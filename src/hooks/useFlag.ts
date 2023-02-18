import { useState, SetStateAction, Dispatch } from "react";

const useFlag = (
  initialFlag: boolean = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [flag, setFlag] = useState<boolean>(initialFlag);

  return [flag, () => setFlag((prevState) => !prevState), setFlag];
};

export default useFlag;
