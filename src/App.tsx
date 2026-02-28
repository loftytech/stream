import { ThemeProvider } from 'styled-components';
import { lightTheme } from './views/styles/theme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninScreen from './views/screens/auth/signin/SigninScreen';
import MainLayout from './views/components/mainLayout/MainLayout';
import DashboardScreen from './views/screens/dashboard/DashboardScreen';
import HomeScreen from './views/screens/home/HomeScreen';
import SignupScreen from './views/screens/auth/signup/SignupScreen';
import AudioColab from './views/screens/dashboard/audio_colab/AudioColab';
import VideoColab from './views/screens/dashboard/video_colab/VideoColab';
import CreateAccountScreen from './views/screens/auth/create_account/CreateAccountScreen';
import WishHub from './views/screens/dashboard/wish_hub/WishHub';
import WishHubProduct from './views/screens/dashboard/wish_hub/wish_hub_product/WishHubProduct';
import Downloadables from './views/screens/dashboard/downloadables/Downloadables';
import SnapRoyalties from './views/screens/dashboard/snap_royalties/SnapRoyalties';
import SnapRoyaltiesDetails from './views/screens/dashboard/snap_royalties/snap_royalties_details/SnapRoyaltiesDetails';
import { ScrollToTop } from './views/components/scroll_to_top/ScrollToTop';
import LiveStream from './views/screens/dashboard/live_stream/LiveStream';
import LiveStreamDetails from './views/screens/dashboard/live_stream/live_stream_details/LiveStreamDetails';
import ProfileScreen from './views/screens/dashboard/profile/ProfileScreen';
import VendorScreen from './views/screens/vendor/VendorScreen';
import TopStreamers from './views/screens/top_streamers/TopStreamers';
import StreamPass from './views/screens/dashboard/stream_pass/StreamPass';

function App() {
  
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dashboard" element={<MainLayout title={""}><DashboardScreen /></MainLayout>} />
            <Route path="/dashboard/profile" element={<MainLayout title={""}><ProfileScreen /></MainLayout>} />
            <Route path="/dashboard/audio-colab" element={<MainLayout title={""}><AudioColab /></MainLayout>} />
            <Route path="/dashboard/video-colab" element={<MainLayout title={""}><VideoColab /></MainLayout>} />
            <Route path="/dashboard/downloadables" element={<MainLayout title={""}><Downloadables /></MainLayout>} />
            <Route path="/dashboard/snap-royalties" element={<MainLayout title={""}><SnapRoyalties /></MainLayout>} />
            <Route path="/dashboard/stream-pass" element={<MainLayout title={""}><StreamPass /></MainLayout>} />
            <Route path="/dashboard/snap-royalties/:royaltyId" element={<MainLayout title={""}><SnapRoyaltiesDetails /></MainLayout>} />
            <Route path="/dashboard/wish-hub" element={<MainLayout title={""}><WishHub /></MainLayout>} />
            <Route path="/dashboard/wish-hub/:productId" element={<MainLayout title={""}><WishHubProduct /></MainLayout>} />
            <Route path="/dashboard/live-stream" element={<MainLayout title={""}><LiveStream /></MainLayout>} />
            <Route path="/dashboard/live-stream/:id" element={<MainLayout title={""}><LiveStreamDetails /></MainLayout>} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/create-account" element={<CreateAccountScreen />} />
            <Route path="/vendors" element={<VendorScreen />} />
            <Route path="/top-streamers" element={<TopStreamers />} />

          </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;