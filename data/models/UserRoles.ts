export enum UserRole {
    Staff = 'staff',
    Admin = 'admin',
}

export function isAdmin(roles: string | string[]): boolean {
    if (roles == null) {
        return false;
    }

    if (typeof roles === 'string') {
        roles = roles.split(',');
    }

    return roles.some((r) => r === UserRole.Admin);
}

export function hasRole(
    userRoles: string | string[],
    requiredRoles: UserRole[]
): boolean {
    if (userRoles == null) {
        return false;
    }

    if (typeof userRoles === 'string') {
        userRoles = userRoles.split(',');
    }

    if (requiredRoles.length === 0) {
        return true;
    }

    return userRoles.some(
        (r) =>
            requiredRoles.findIndex(
                (rq) => rq && r && r.toLowerCase() === rq.toLocaleLowerCase()
            ) >= 0
    );
}
