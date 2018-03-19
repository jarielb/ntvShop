import { StackNavigator } from "react-navigation";

import Product from "../components/Product";
import Logout from "../components/Logout";
import Login from "../components/Login";

const navigator = StackNavigator({
    login: {
        screen: Login
    },
    product: {
        screen: Product
    },
    screen2: {
        screen: Logout
    }
});

export default navigator;
