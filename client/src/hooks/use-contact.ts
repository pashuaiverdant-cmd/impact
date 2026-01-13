import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useContactForm() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const mutate = (data: any, { onSuccess }: { onSuccess?: () => void } = {}) => {
    setIsPending(true);
    // Simulate API call locally since backend is removed
    setTimeout(() => {
      setIsPending(false);
      console.log("Contact form submitted locally:", data);
      toast({
        title: "Success",
        description: "Your message has been sent locally. No backend connected.",
      });
      if (onSuccess) onSuccess();
    }, 1000);
  };

  return { mutate, isPending };
}
