import { useState, useCallback } from "react";

const useFlag = (initialState: boolean = false): [boolean, () => void] => {
 const [flag, setFlag] = useState<boolean>(initialState);

 const handleClickFlag = useCallback(() => {
  setFlag((prevState) => !prevState);
 }, []);

 return [flag, handleClickFlag];
};

export default useFlag;
