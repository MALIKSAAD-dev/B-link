'use client';
import { PortfolioData } from '@/context/PortfolioContext';
import MinimalTemplate from '@/templates/Minimal';
import MinimalMonoTemplate from '@/templates/MinimalMono';
import MinimalGridTemplate from '@/templates/MinimalGrid';
import MinimalZenTemplate from '@/templates/MinimalZen';
import AestheticTemplate from '@/templates/Aesthetic';
import AestheticNoirTemplate from '@/templates/AestheticNoir';
import AestheticAuroraTemplate from '@/templates/AestheticAurora';
import AestheticCosmosTemplate from '@/templates/AestheticCosmos';
import ProfessionalTemplate from '@/templates/Professional';
import ProfessionalModernTemplate from '@/templates/ProfessionalModern';
import ProfessionalExecTemplate from '@/templates/ProfessionalExec';
import ProfessionalCleanTemplate from '@/templates/ProfessionalClean';
import FunkyTemplate from '@/templates/Funky';
import FunkyRetroTemplate from '@/templates/FunkyRetro';
import FunkyPopTemplate from '@/templates/FunkyPop';
import FunkyCandyTemplate from '@/templates/FunkyCandy';
import DeveloperTemplate from '@/templates/Developer';
import DeveloperDarkTemplate from '@/templates/DeveloperDark';
import DeveloperBlueTemplate from '@/templates/DeveloperBlue';
import DeveloperGradientTemplate from '@/templates/DeveloperGradient';
import ElegantTemplate from '@/templates/Elegant';
import ElegantRoseTemplate from '@/templates/ElegantRose';
import ElegantIvoryTemplate from '@/templates/ElegantIvory';
import ElegantDarkTemplate from '@/templates/ElegantDark';

const templateComponents: Record<string, React.FC<{ data: PortfolioData }>> = {
    minimal: MinimalTemplate,
    'minimal-mono': MinimalMonoTemplate,
    'minimal-grid': MinimalGridTemplate,
    'minimal-zen': MinimalZenTemplate,
    aesthetic: AestheticTemplate,
    'aesthetic-noir': AestheticNoirTemplate,
    'aesthetic-aurora': AestheticAuroraTemplate,
    'aesthetic-cosmos': AestheticCosmosTemplate,
    professional: ProfessionalTemplate,
    'professional-modern': ProfessionalModernTemplate,
    'professional-exec': ProfessionalExecTemplate,
    'professional-clean': ProfessionalCleanTemplate,
    funky: FunkyTemplate,
    'funky-retro': FunkyRetroTemplate,
    'funky-pop': FunkyPopTemplate,
    'funky-candy': FunkyCandyTemplate,
    developer: DeveloperTemplate,
    'developer-dark': DeveloperDarkTemplate,
    'developer-blue': DeveloperBlueTemplate,
    'developer-gradient': DeveloperGradientTemplate,
    elegant: ElegantTemplate,
    'elegant-rose': ElegantRoseTemplate,
    'elegant-ivory': ElegantIvoryTemplate,
    'elegant-dark': ElegantDarkTemplate,
};

export default function PortfolioRenderer({ template, data }: { template: string; data: Record<string, unknown> }) {
    const TemplateComponent = templateComponents[template];

    if (!TemplateComponent) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0f', color: '#fff' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Template Not Found</h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>This portfolio uses an unknown template.</p>
                </div>
            </div>
        );
    }

    return <TemplateComponent data={data as unknown as PortfolioData} />;
}
