'use client';
import { useState, useRef } from 'react';
import './ImageUpload.css';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
    shape?: 'circle' | 'rect';
}

export default function ImageUpload({ value, onChange, label = 'Upload Image', shape = 'rect' }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = async (file: File) => {
        if (!file.type.startsWith('image/')) return;
        if (file.size > 32 * 1024 * 1024) return alert('Max 32MB');

        setUploading(true);
        try {
            const reader = new FileReader();
            reader.onload = async () => {
                const base64 = reader.result as string;
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ image: base64 }),
                });
                const result = await res.json();
                if (result.url) onChange(result.url);
                setUploading(false);
            };
            reader.readAsDataURL(file);
        } catch {
            setUploading(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
    };

    return (
        <div className="img-upload">
            <label className="input-label">{label}</label>
            <div
                className={`img-upload__zone ${shape === 'circle' ? 'img-upload__zone--circle' : ''} ${dragActive ? 'img-upload__zone--active' : ''} ${value ? 'img-upload__zone--has-image' : ''}`}
                onDragOver={e => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
            >
                {uploading ? (
                    <div className="img-upload__loading">
                        <div className="img-upload__spinner" />
                        <span>Uploading...</span>
                    </div>
                ) : value ? (
                    <div className="img-upload__preview">
                        <img src={value} alt="Preview" />
                        <div className="img-upload__overlay">
                            <span>Change</span>
                        </div>
                    </div>
                ) : (
                    <div className="img-upload__placeholder">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                        <span>Drop image or click to upload</span>
                        <span className="img-upload__hint">PNG, JPG, GIF up to 32MB</span>
                    </div>
                )}
                <input ref={inputRef} type="file" accept="image/*" onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])} hidden />
            </div>
            {value && (
                <button className="img-upload__remove" onClick={(e) => { e.stopPropagation(); onChange(''); }} type="button">Remove</button>
            )}
        </div>
    );
}
