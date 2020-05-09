import {IsString, IsInt, MaxLength, isDefined, IsEmpty, IsNotEmpty} from 'class-validator'
export class CreateCatDto {
  @IsString()
  @MaxLength(5)
  readonly name: string

  @IsInt()
  readonly age: number

  @IsString()
  readonly bread: string
}