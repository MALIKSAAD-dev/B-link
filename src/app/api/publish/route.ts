import Redis from 'ioredis';
import { NextRequest, NextResponse } from 'next/server';

const redis = new Redis(process.env.REDIS_URL || '');

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, template, data } = body;

        if (!username || !template || !data) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!/^[a-z0-9_-]+$/.test(username)) {
            return NextResponse.json({ error: 'Invalid username format' }, { status: 400 });
        }

        if (username.length < 3 || username.length > 30) {
            return NextResponse.json({ error: 'Username must be 3-30 characters' }, { status: 400 });
        }

        // Check if username is taken
        const existing = await redis.get(`portfolio:${username}`);
        if (existing) {
            return NextResponse.json({ error: 'Username is already taken' }, { status: 409 });
        }

        // Save portfolio
        await redis.set(`portfolio:${username}`, JSON.stringify({ template, data, createdAt: new Date().toISOString() }));

        return NextResponse.json({ success: true, url: `/p/${username}` });
    } catch (error) {
        console.error('Publish error:', error);
        return NextResponse.json({ error: 'Failed to publish portfolio' }, { status: 500 });
    }
}
