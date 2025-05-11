import { IsMongoId, IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsMongoId()
  readonly productId: string;

  @IsNumber()
  @Min(1)
  readonly quantity: number;
}
