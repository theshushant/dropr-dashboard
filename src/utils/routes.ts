function useGetCurrentRoutes(pathname: string) {
    console.log("counts");
    switch (pathname.split('/').pop()) {
        case 'payments':
            return 'Payment';
        case 'employees':
            return 'Employees';
        case 'create-employee':
            return 'Create Employee';
        case 'orders':
            return 'Orders';
        case 'users':
            return 'Users';
        case 'app-options':
            return 'App Options';
        default:
            return 'Dashboard';
    }
}


export {
    useGetCurrentRoutes,
}