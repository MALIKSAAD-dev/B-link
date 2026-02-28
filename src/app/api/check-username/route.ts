import Redis from 'ioredis';
import { NextRequest, NextResponse } from 'next/server';

const redis = new Redis(process.env.REDIS_URL || '');

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Username required' }, { status: 400 });
    }

    try {
        const existing = await redis.get(`portfolio:${username}`);
        return NextResponse.json({ available: !existing });
    } catch {
        return NextResponse.json({ available: true });
    }
}
