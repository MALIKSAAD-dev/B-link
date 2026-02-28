import { kv } from '@vercel/kv';
import { notFound } from 'next/navigation';
import PortfolioRenderer from '@/components/PortfolioRenderer';

interface PageProps {
    params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { username } = await params;

    try {
        const raw = await kv.get(`portfolio:${username}`);
        if (!raw) return { title: 'Portfolio Not Found' };

        const portfolio = typeof raw === 'string' ? JSON.parse(raw) : raw;
        const { data } = portfolio as { data: { name: string; title: string; bio: string } };

        return {
            title: `${data.name || username} — Portfolio`,
            description: data.bio || `${data.name}'s personal portfolio`,
            openGraph: {
                title: `${data.name || username} — Portfolio`,
                description: data.bio || `${data.name}'s personal portfolio`,
            },
        };
    } catch {
        return { title: 'Portfolio Not Found' };
    }
}

export default async function PortfolioPage({ params }: PageProps) {
    const { username } = await params;

    let portfolioData;
    try {
        const raw = await kv.get(`portfolio:${username}`);
        if (!raw) notFound();
        portfolioData = typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch {
        notFound();
    }

    const { template, data } = portfolioData as { template: string; data: Record<string, unknown> };

    return <PortfolioRenderer template={template} data={data} />;
}
