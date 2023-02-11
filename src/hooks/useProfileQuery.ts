import { IProfileForm } from "@/pages/About";
import { useQuery } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";

const useProfileFormQuery = (method: UseFormReturn<IProfileForm>) => {
    return useQuery<IProfileForm>(
        ["DATA"],
        () => {
            return new Promise<IProfileForm>((resolve) => {
                setTimeout(() => {
                    resolve({
                        id: "foreverchoi",
                        pw: "Tlrksqhrh1!",
                        repw: "Tlrksqhrh1",
                        address: [{
                            value: "조원로 129",
                        }]
                    });
                }, 300);
            });
        },
        {
            refetchOnWindowFocus: false,
            onSuccess: (data) => {
                method.reset(data);
            },
        }
    );
}

export default useProfileFormQuery;