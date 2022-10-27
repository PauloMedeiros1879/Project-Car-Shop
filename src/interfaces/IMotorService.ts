export interface IMotorService<T> {
  create(obj: unknown): Promise<T>;
  read(): Promise<T[]>;
}