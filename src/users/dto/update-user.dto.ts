// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-B  ·  Create UpdateUserDto
// ─────────────────────────────────────────────────────────────────────────────
// Same as CreateUserDto but every field is optional (PATCH semantics).
// ─────────────────────────────────────────────────────────────────────────────


import { IsEmail, IsEnum, IsInt, IsNumber, IsOptional, 
        Max, MaxLength, Min, MinLength } from "class-validator";

const RoleUser = ['student', 'teacher', 'admin'] as const;
type RoleUser = (typeof RoleUser)[number];

export class UpdateUserDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;


  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(1)
  @Max(120)
  age?: number;

  @IsEnum(RoleUser)
  @IsOptional()
  role?: string;
}
