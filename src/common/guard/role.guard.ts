import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log(1)
    const roles = this.reflector.get<string[]>('roles', context.getHandler())

    if (!roles) {
      return true
    }
    
    return this.matchRoles(roles, 'test')
  }

  private matchRoles(roles: string[], reqRole: string): boolean{
    return true
  }
}