import isValidPhoneNumber from "libphonenumber-js";
import z from "zod";

export const FormSchema = z.object({
  name: z
    .string({
      required_error: "Le nom est requis",
    })
    .min(3, "Le nom doit avoir au moins 3 caractères")
    .max(50, "Le nom doit avoir au plus 50 caractères"),

  familyName: z
    .string({
      required_error: "Le nom de famille est requis",
    })
    .min(3, "Le nom de famille doit avoir au moins 3 caractères")
    .max(50, "Le nom de famille doit avoir au plus 50 caractères"),

  phone: z
    .string({
      required_error: "Le numéro de téléphone est requis",
    })
    .refine((value) => {
      return isValidPhoneNumber(value, "DZ")?.isValid();
    }, "Le numéro de téléphone est invalide"),

  email: z
    .string({
      required_error: "L'email est requis",
    })
    .email("L'email est invalide"),

  description: z
    .string({
      required_error: "La description est requise",
    })
    .min(10, "La description doit avoir au moins 10 caractères"),

  typeOfProject: z.string({
    required_error: "Le type de projet est requis",
  }),
});
