import { createRouter } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';

// Create a new router instance
export const globalRouter = createRouter({ routeTree });
