import { IsNotEmpty, IsNumber } from 'class-validator';

export class ResponseDTO {
  @IsNumber()
  public readonly status: number;

  // @IsString()
  public readonly response: any;
}
