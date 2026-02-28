import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Username required' }, { status: 400 });
    }

    try {
        const existing = await kv.get(`portfolio:${username}`);
        return NextResponse.json({ available: !existing });
    } catch {
        return NextResponse.json({ available: true });
    }
}
