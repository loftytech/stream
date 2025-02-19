import { ThemeProvider } from 'styled-components';
import { lightTheme } from './views/styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninScreen from './views/screens/auth/signin/SigninScreen';
import SignupScreen from './views/screens/auth/signup/SignupScreen';
import ForgotPasswordScreen from './views/screens/auth/forgot_password/ForgotPasswordScreen';
import ForgotPasswordOtpScreen from './views/screens/auth/forgot_password_otp/ForgotPasswordOtpScreen';
import CreateNewPasswordScreen from './views/screens/auth/create_new_password/CreateNewPasswordScreen';
import ForgotPasswordSuccessScreen from './views/screens/auth/forgot_password_success/ForgotPasswordSuccessScreen';

import MainLayout from './views/components/mainLayout/MainLayout';
import DashboardScreen from './views/screens/dashboard/DashboardScreen';
import NewOrderScreen from './views/screens/dashboard/new_order/NewOrderScreen';

function App() {
  return (
    
    <Router>
      <ThemeProvider theme={lightTheme}>
          <Routes>
            <Route path="/" element={<SigninScreen />} />
            <Route path="/dashboard" element={<MainLayout title={""}><DashboardScreen /></MainLayout>} />
            <Route path="/dashboard/order/new" element={<MainLayout title={""}><NewOrderScreen /></MainLayout>} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
            <Route path="/forgot-password-otp" element={<ForgotPasswordOtpScreen />} />
            <Route path="/create-new-password" element={<CreateNewPasswordScreen />} />
            <Route path="/forgot-password-success" element={<ForgotPasswordSuccessScreen />} />
          </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
