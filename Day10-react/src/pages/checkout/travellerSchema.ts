import { z } from "zod";

const travellerSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  passportNumber: z.string().min(5, "Enter a valid passport number"),
  passportExpiry: z.string().refine((value) => {
    if (!value) return false;

    const expiryDate = new Date(`${value}T00:00:00`);
    const minimumDate = new Date();

    minimumDate.setHours(0, 0, 0, 0);
    minimumDate.setMonth(minimumDate.getMonth() + 6);

    return !Number.isNaN(expiryDate.getTime()) && expiryDate >= minimumDate;
  }, "Passport must be valid for at least 6 more months"),
});

export const travellerFormSchema = z.object({
  travellers: z.array(travellerSchema).min(1).max(6),
});

export type TravellerFormData = z.infer<typeof travellerFormSchema>;