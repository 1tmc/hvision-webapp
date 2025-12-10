import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'os9t33pr',   // from Sanity dashboard
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
