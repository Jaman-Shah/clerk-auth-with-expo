import React, { createContext, useContext, ReactNode } from 'react';
import { useUser } from '@clerk/clerk-expo';

interface UserContextType {
  user: ReturnType<typeof useUser>['user'] | null;
  userEmail: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const userEmail =
    user?.primaryEmailAddress?.emailAddress ||
    user?.emailAddresses?.[0]?.emailAddress ||
    'No email available';

  return (
    <UserContext.Provider value={{ user, userEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
