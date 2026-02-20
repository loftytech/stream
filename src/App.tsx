import { ThemeProvider } from 'styled-components';
import { lightTheme } from './views/styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninScreen from './views/screens/auth/signin/SigninScreen';
import MainLayout from './views/components/mainLayout/MainLayout';
import DashboardScreen from './views/screens/dashboard/DashboardScreen';
import PurchaseScreen from './views/screens/dashboard/audio_colab/AudioColab';
import HomeScreen from './views/screens/home/HomeScreen';
import SignupScreen from './views/screens/auth/signup/SignupScreen';
import AudioColab from './views/screens/dashboard/audio_colab/AudioColab';
import VideoColab from './views/screens/dashboard/video_colab/VideoColab';
import CreateAccountScreen from './views/screens/auth/create_account/CreateAccountScreen';

function App() {
  
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dashboard" element={<MainLayout title={""}><DashboardScreen /></MainLayout>} />
            <Route path="/dashboard/audio-colab" element={<MainLayout title={""}><AudioColab /></MainLayout>} />
            <Route path="/dashboard/video-colab" element={<MainLayout title={""}><VideoColab /></MainLayout>} />
            <Route path="/dashboard/purchases" element={<MainLayout title={""}><PurchaseScreen /></MainLayout>} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/create-account" element={<CreateAccountScreen />} />

          </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
