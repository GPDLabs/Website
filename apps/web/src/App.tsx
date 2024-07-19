import { RouterProvider } from '@tanstack/react-router';
import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { useHydrateAtoms } from 'jotai/react/utils';
import { globalRouter } from './utils/globalRouter';
import React, { PropsWithChildren } from 'react';

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof globalRouter;
  }
}

const queryClient = new QueryClient();

const HydrateAtoms: React.FC<PropsWithChildren> = ({ children }) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrateAtoms>
        <RouterProvider router={globalRouter} />
      </HydrateAtoms>
    </QueryClientProvider>
  );
}

export default App;
