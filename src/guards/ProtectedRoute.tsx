export default {};
// import React from "react";
// import { inject, observer } from "mobx-react";
// import { Redirect, Route } from "react-router";
// import {LoginState} from "../enums/LoginStatus";
// import FullScreenLoader from "../components/FullScreenLoader/FullScreenLoader";
//
// const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {
//   switch (rest.store.order.loginState) {
//     case LoginState.LOGGED_IN:
//       return <Route {...rest} render={(props:any) => <Component {...props} />} />;
//     case LoginState.LOGGED_OUT:
//       return (
//         <Route
//           {...rest}
//           render={(props:any) => (
//             <Redirect
//               to={{
//                 pathname: '',
//                 state: { from: props.location },
//               }}
//             />
//           )}
//         />
//       );
//     case LoginState.PENDING:
//     default:
//       return <Route {...rest} render={() => <FullScreenLoader />} />;
//   }
// };
//
// export default inject("store")(observer(ProtectedRoute));
