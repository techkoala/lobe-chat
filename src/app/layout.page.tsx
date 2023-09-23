import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';

import Layout from '@/layout/ThemeLayout';

import StyleRegistry from './StyleRegistry';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'LobeChat',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <html lang="en">
      <body>
        <StyleRegistry>
          <Layout appearance={theme?.value}>{children}</Layout>
        </StyleRegistry>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
