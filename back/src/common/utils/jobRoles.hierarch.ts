// src/auth/roles.hierarchy.ts
import { JobRole } from '../enums/jobRole.enum';

export const ROLES_HIERARCHY: Record<JobRole, JobRole[]> = {
  [JobRole.SUPERUSER]: [JobRole.SUPERUSER, JobRole.ADMIN, JobRole.USER],
  [JobRole.ADMIN]: [JobRole.ADMIN, JobRole.USER],
  [JobRole.USER]: [JobRole.USER],
};