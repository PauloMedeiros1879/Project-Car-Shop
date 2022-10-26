import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const MotorZodSchema = VehicleZodSchema.extend({
  category: z
    .enum(['Street', 'Custom', 'Trail']),

  engineCapacity: z
    .number()
    .int()
    .lte(2500),
});

export type IMotorcycle = z.infer<typeof MotorZodSchema>;