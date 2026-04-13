// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 2-B  ·  Build the UpdateTaskDto
// ─────────────────────────────────────────────────────────────────────────────
// Requirements:
//   - Same fields as CreateTaskDto but ALL fields are optional (it's a PATCH)
//   - Re-use the same validators but add @IsOptional() to each field
// ─────────────────────────────────────────────────────────────────────────────

import { IsEnum, IsOptional, MaxLength, MinLength } from "class-validator";
import { TaskStatus } from "../tasks.service";

export class UpdateTaskDto {
  
    @IsOptional()
    @MinLength(3)
    @MaxLength(100)
    title?: string;
  
    @IsOptional()
    @MaxLength(300)
    description?: string;
  
    @IsOptional()
    status?: TaskStatus;
}
