import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z
    .number({
      required_error: 'DoorQty is required',
      invalid_type_error: 'DoorQty must be a number',
    })
    .int({ message: 'Must be a integer' })
    .positive({ message: 'Must be a positive number' })
    .lte(4, { message: 'DoorQty must be less than 4' })
    .gte(2, { message: 'DoorQty must be greater than 2' }),

});

export type ICar = z.infer<typeof CarZodSchema>;