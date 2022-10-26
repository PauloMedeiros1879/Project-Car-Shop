import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const MotorZodSchema = VehicleZodSchema.extend({
  category: z
    .enum(['Street', 'Custom', 'Trail']),

  engineCapacity: z
    .number({
      required_error: 'engineCapacity is required',
      invalid_type_error: 'engineCapacity must be a number',
    })
    .int({ message: 'Must be a integer' })
    .positive({ message: 'Must be a positive number' })
    .lte(2500, { message: 'engineCapacity must be less than 2500' }),
});

export type IMotorcycle = z.infer<typeof MotorZodSchema>;