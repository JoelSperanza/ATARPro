import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import { Session } from '@supabase/supabase-js';
import { UserProfile } from '../../types';

interface LayoutProps {
  session: Session | null;
  userProfile: UserProfile | null;
  isLoadingAuth: boolean;
}

const Layout: React.FC<LayoutProps> = ({ session, userProfile }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header session={session} userProfile={userProfile} />
      <main className="flex-grow container mx-auto p-4 mt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 