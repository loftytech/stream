import { ThemeProvider } from 'styled-components';
import { lightTheme } from './views/styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninScreen from './views/screens/auth/signin/SigninScreen';
import MainLayout from './views/components/mainLayout/MainLayout';
import DashboardScreen from './views/screens/dashboard/DashboardScreen';
import NewOrderScreen from './views/screens/dashboard/orders/new_order/NewOrderScreen';
import OrdersScreen from './views/screens/dashboard/orders/OrdersScreen';
import PurchaseScreen from './views/screens/dashboard/purchase/PurchaseScreen';

function App() {
  
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
          <Routes>
            <Route path="/" element={<SigninScreen />} />
            <Route path="/dashboard" element={<MainLayout title={""}><DashboardScreen /></MainLayout>} />
            <Route path="/dashboard/orders" element={<MainLayout title={""}><OrdersScreen /></MainLayout>} />
            <Route path="/dashboard/order/new" element={<MainLayout title={""}><NewOrderScreen /></MainLayout>} />
            <Route path="/dashboard/purchases" element={<MainLayout title={""}><PurchaseScreen /></MainLayout>} />
            <Route path="/signin" element={<SigninScreen />} />

          </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
