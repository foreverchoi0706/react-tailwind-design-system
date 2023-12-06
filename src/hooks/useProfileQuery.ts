import { useQuery } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";

import { IProfileForm } from "@/pages/About";

const useProfileFormQuery = (method: UseFormReturn<IProfileForm>) => {
    return useQuery<IProfileForm>(
        {
           queryKey: ["PROFILE"],
            queryFn : () => {
            return new Promise<IProfileForm>((resolve) => {
                setTimeout(() => {
                    resolve({
                        id: "foreverchoi",
                        pw: "Tlrksqhrh1!",
                        repw: "Tlrksqhrh1",
                        education: [1],
                        address: [{
                            value: "조원로 129",
                        }],
                        cell: "01039094083"
                    });
                }, 1000);
            });
    },
            refetchOnWindowFocus: false,

        }
    );
}

export default useProfileFormQuery;