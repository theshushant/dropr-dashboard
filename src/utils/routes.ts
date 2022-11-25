function useGetBreadCrums(pathname: string):{main:string,sub:string} {
    console.log("counts");
    switch (pathname.split('/').pop()) {
        case 'payments':
            return {main:'Payment',sub:"Payment Received"};
        case 'employees':
            return {main:'Employees',sub:"Employees  >  Employee List"};
        case 'create-employee':
            return {main:'Create Employee',sub:"Employees > Create Employee"};
        case 'orders':
            return {main:'Orders',sub:"Orders  >  Upcoming Orders"};
        case 'users':
            return {main:'Users',sub:"Users"};
        case 'app-options':
            return {main:'App Options',sub:"App Options > Category"};
        case 'tags':
            return {main:'App Options',sub:"App App Options > Tags"};
        case 'posters':
            return {main:'App Options',sub:"App Options > Posters"};
        default:
            return {main:'Dashboard',sub:"Dashboard"};
    }
}




export {
    useGetBreadCrums,
}