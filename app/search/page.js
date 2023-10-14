import { Navbar } from '../components';
import FormSearch from "../components/search/FormSearch";
import getCurrentUser from '../actions/getCurrentUser';
import ToasterProvider from '../providers/ToasterProvider';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import ThemeIcon from '../components/ThemeIcon';

const SearchPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className='bg-primary overflow-hidden'>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <ThemeIcon />
      <Navbar currentUser={currentUser}/>
      <FormSearch />
      </div>
  )
};

export default SearchPage;