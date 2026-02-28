'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
}

export interface PortfolioData {
    name: string;
    title: string;
    bio: string;
    avatarUrl: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    youtube: string;
    skills: string[];
    projects: Project[];
}

interface PortfolioContextType {
    template: string | null;
    setTemplate: (template: string) => void;
    data: PortfolioData;
    setData: (data: PortfolioData) => void;
    updateData: (partial: Partial<PortfolioData>) => void;
    resetAll: () => void;
}

const defaultData: PortfolioData = {
    name: '',
    title: '',
    bio: '',
    avatarUrl: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    github: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    tiktok: '',
    facebook: '',
    youtube: '',
    skills: [],
    projects: [],
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
    const [template, setTemplate] = useState<string | null>(null);
    const [data, setData] = useState<PortfolioData>(defaultData);

    const updateData = (partial: Partial<PortfolioData>) => {
        setData(prev => ({ ...prev, ...partial }));
    };

    const resetAll = () => {
        setTemplate(null);
        setData(defaultData);
    };

    return (
        <PortfolioContext.Provider value={{ template, setTemplate, data, setData, updateData, resetAll }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export function usePortfolio() {
    const context = useContext(PortfolioContext);
    if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
    return context;
}
