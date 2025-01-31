import { json, type MetaFunction } from '@remix-run/cloudflare';
import { useEffect } from 'react';
import { ClientOnly } from 'remix-utils/client-only';
import { Chat } from '~/components/chat/Chat.client';
import BackgroundRays from '~/components/ui/BackgroundRays';

export const meta: MetaFunction = () => {
  return [{ title: 'Slingshot AI' }, { name: 'description', content: 'Talk with an AI assistant' }];
};

export const loader = () => json({});

export default function Index() {
  useEffect(() => {
    async function getApiKeys() {
      await fetch('/api/id');
    }
    getApiKeys();
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <BackgroundRays />
      <ClientOnly>{() => <Chat />}</ClientOnly>
    </div>
  );
}
