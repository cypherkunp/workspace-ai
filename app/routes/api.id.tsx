import type { LoaderFunctionArgs } from '@remix-run/cloudflare';

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const Anthropic = context.cloudflare.env.ANTHROPIC_API_KEY;
  const apiKeyValue = {
    Anthropic,
  };

  return new Response('', {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `apiKeys=${JSON.stringify(apiKeyValue)}; Path=/; SameSite=Lax`,
    },
  });
};
