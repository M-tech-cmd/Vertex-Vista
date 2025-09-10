'use server';
/**
 * @fileOverview An AI agent to generate descriptions for 3D models.
 *
 * - generate3DModelDescription - A function that handles the 3D model description generation process.
 * - Generate3DModelDescriptionInput - The input type for the generate3DModelDescription function.
 * - Generate3DModelDescriptionOutput - The return type for the generate3DModelDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Generate3DModelDescriptionInputSchema = z.object({
  modelName: z.string().describe('The name of the 3D model.'),
  modelType: z.string().describe('The type or category of the 3D model (e.g., character, environment, prop).'),
  modelDetails: z.string().describe('Detailed information about the 3D model, including its features, textures, and purpose.'),
});
export type Generate3DModelDescriptionInput = z.infer<typeof Generate3DModelDescriptionInputSchema>;

const Generate3DModelDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling and informative description of the 3D model.'),
});
export type Generate3DModelDescriptionOutput = z.infer<typeof Generate3DModelDescriptionOutputSchema>;

export async function generate3DModelDescription(input: Generate3DModelDescriptionInput): Promise<Generate3DModelDescriptionOutput> {
  return generate3DModelDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generate3DModelDescriptionPrompt',
  input: {schema: Generate3DModelDescriptionInputSchema},
  output: {schema: Generate3DModelDescriptionOutputSchema},
  prompt: `You are an expert in creating engaging and informative descriptions for 3D models.

  Based on the following information, generate a compelling description for the 3D model:

  Model Name: {{{modelName}}}
  Model Type: {{{modelType}}}
  Model Details: {{{modelDetails}}}

  The description should highlight the key features and purpose of the model, making it appealing to potential viewers and clients.
  `,
});

const generate3DModelDescriptionFlow = ai.defineFlow(
  {
    name: 'generate3DModelDescriptionFlow',
    inputSchema: Generate3DModelDescriptionInputSchema,
    outputSchema: Generate3DModelDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
