import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { image } = await request.json();

        if (!image) {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        // Strip data URL prefix if present
        const base64Data = image.replace(/^data:image\/\w+;base64,/, '');

        const formData = new FormData();
        formData.append('key', process.env.IMGBB_API_KEY!);
        formData.append('image', base64Data);

        const res = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await res.json();

        if (!result.success) {
            return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
        }

        return NextResponse.json({
            url: result.data.display_url,
            thumb: result.data.thumb?.url || result.data.display_url,
            deleteUrl: result.data.delete_url,
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
