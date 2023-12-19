import { z } from "zod";

export const registrationFormSchema = z.object({
  name: z.string().min(2).max(255),
  dateOfBirth: z.date(),
  gender: z.string(),
  height: z.string(),
  city: z.string().min(3).max(50),
  phone: z.string(),
  email: z.string().email(),
  occupation: z.string().max(20),
  annualIncome: z.string(),
  maritalStatus: z.string(),
  religion: z.string(),
  caste: z.string(),
  image: z.string(),
  heighestQualification: z.string().max(100),
});
