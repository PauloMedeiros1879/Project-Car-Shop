import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z
    .string({
      required_error: 'Model is required',
      invalid_type_error: 'Model must be a string',
    })
    .min(3, {
      message: 'Model must be 3 or more characters long',
    }),

});

export type IVehicle = z.infer<typeof VehicleZodSchema>;