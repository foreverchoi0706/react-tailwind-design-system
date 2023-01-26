import { useState, SetStateAction, Dispatch } from "react";

const useFlag = (
  initialState: boolean = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [flag, setFlag] = useState<boolean>(initialState);

  return [flag, () => setFlag((prevState) => !prevState), setFlag];
};

export default useFlag;
