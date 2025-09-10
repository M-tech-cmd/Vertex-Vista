"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function submitContactForm(data: ContactFormData) {
  console.log("Form submitted:", data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // In a real app, you'd send an email or save to a database here.
  return { success: true, message: "Your message has been sent!" };
}
