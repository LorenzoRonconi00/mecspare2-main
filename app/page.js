import { Footer, Navbar } from './components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from './components/sections';
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import ThemeIcon from './components/ThemeIcon';

const Page = async () => {
  const currentUser = await getCurrentUser();

  return(
  <div className='bg-primary overflow-hidden'>
    <ToasterProvider />
    <LoginModal />
    <RegisterModal />
    <ThemeIcon />
    <Navbar currentUser={currentUser}/>
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0'/>
      <Explore />
    </div>
    <div className='relative'>
      <GetStarted />
      <div className='gradient-04 z-0'/>
      <WhatsNew />
    </div>
    <World />
    <div className='relative'>
      <Insights />
      <div className='gradient-04 z-0'/>
      <Feedback />
    </div>
    <Footer />
  </div>
  );
};

export default Page;
