import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useBookAppointment() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      service,
      date,
    }: {
      name: string;
      phone: string;
      service: string;
      date: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.bookAppointment(name, phone, service, date);
    },
  });
}
