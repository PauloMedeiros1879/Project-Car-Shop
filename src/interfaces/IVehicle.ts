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

  year: z
    .number({
      required_error: 'Year is required',
      invalid_type_error: 'Year must be a number',
    })
    .int({ message: 'Must be a integer' })
    .positive({ message: 'Must be a positive number' })
    .lte(2022, { message: 'Year must be less than 2022' })
    .gte(1900, { message: 'Year must be greater than 1900' }),

});

export type IVehicle = z.infer<typeof VehicleZodSchema>;