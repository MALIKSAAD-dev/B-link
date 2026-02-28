'use client';
import { useRouter } from 'next/navigation';
import { usePortfolio } from '@/context/PortfolioContext';
import './create.css';

const templates = [
  // Minimal
  { id: 'minimal', name: 'Minimal', category: 'Minimal', description: 'Clean editorial with whitespace and Swiss typography.', emoji: '🤍', preview: 'Light • Sans-serif • Editorial', color: '#e2e8f0', gradient: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' },
  { id: 'minimal-mono', name: 'Minimal Mono', category: 'Minimal', description: 'Pure monochrome black & white, bold borders.', emoji: '🖤', preview: 'B&W • Centered • Monochrome', color: '#555', gradient: 'linear-gradient(135deg, #333 0%, #1a1a1a 100%)' },
  { id: 'minimal-grid', name: 'Minimal Grid', category: 'Minimal', description: 'Card-based grid layout, each section in its own card.', emoji: '📐', preview: 'Cards • Grid • Modular', color: '#94a3b8', gradient: 'linear-gradient(135deg, #f5f5f4 0%, #d6d3d1 100%)' },
  { id: 'minimal-zen', name: 'Minimal Zen', category: 'Minimal', description: 'Japanese-inspired with serif fonts and extreme breathing room.', emoji: '🍃', preview: 'Serif • Zen • Warm cream', color: '#a8a29e', gradient: 'linear-gradient(135deg, #fcfbf8 0%, #f0ede8 100%)' },

  // Aesthetic
  { id: 'aesthetic', name: 'Aesthetic', category: 'Aesthetic', description: 'Refined dark luxury with subtle purple undertones.', emoji: '✨', preview: 'Dark • Luxury • Subtle glow', color: '#a78bfa', gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #7c3aed 100%)' },
  { id: 'aesthetic-noir', name: 'Aesthetic Noir', category: 'Aesthetic', description: 'Pure black background, high contrast white text.', emoji: '🌑', preview: 'Black • White • High contrast', color: '#666', gradient: 'linear-gradient(135deg, #111 0%, #000 100%)' },
  { id: 'aesthetic-aurora', name: 'Aesthetic Aurora', category: 'Aesthetic', description: 'Dark with emerald aurora glows and green accents.', emoji: '🌌', preview: 'Dark • Aurora • Emerald', color: '#10b981', gradient: 'linear-gradient(135deg, #060d12 0%, #064e3b 100%)' },
  { id: 'aesthetic-cosmos', name: 'Aesthetic Cosmos', category: 'Aesthetic', description: 'Deep space with stars and warm amber accents.', emoji: '🪐', preview: 'Space • Stars • Amber', color: '#fbbf24', gradient: 'linear-gradient(135deg, #08060f 0%, #1e1b4b 100%)' },

  // Professional
  { id: 'professional', name: 'Professional', category: 'Professional', description: 'Split panel with sidebar, skill rings and timeline.', emoji: '💼', preview: 'Sidebar • Timeline • Structured', color: '#3b82f6', gradient: 'linear-gradient(135deg, #1e293b 0%, #1e3a5f 100%)' },
  { id: 'professional-modern', name: 'Pro Modern', category: 'Professional', description: 'Full-width dark hero, blue accent, modern corporate.', emoji: '🏢', preview: 'Dark hero • Blue • Corporate', color: '#60a5fa', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #3b82f6 100%)' },
  { id: 'professional-exec', name: 'Pro Executive', category: 'Professional', description: 'Deep navy centered layout, serious and polished.', emoji: '👔', preview: 'Navy • Centered • Serious', color: '#475569', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' },
  { id: 'professional-clean', name: 'Pro Clean', category: 'Professional', description: 'Light airy corporate with soft blue tinted backgrounds.', emoji: '📋', preview: 'Light • Airy • Clean blue', color: '#93c5fd', gradient: 'linear-gradient(135deg, #f0f7ff 0%, #dbeafe 100%)' },

  // Fun & Playful
  { id: 'funky', name: 'Fun & Playful', category: 'Fun', description: 'Bento grid hero with bouncing stickers and colorful vibes.', emoji: '🎉', preview: 'Bento • Colorful • Stickers', color: '#f472b6', gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #eab308 100%)' },
  { id: 'funky-retro', name: 'Fun Retro', category: 'Fun', description: '90s retro with monospace font, thick borders, warm orange.', emoji: '📼', preview: 'Mono • Retro • Orange', color: '#ff6b35', gradient: 'linear-gradient(135deg, #ff6b35 0%, #fef9ef 100%)' },
  { id: 'funky-pop', name: 'Fun Pop Art', category: 'Fun', description: 'Bold pop art colors, each element uniquely colored.', emoji: '🎨', preview: 'Bold • Pop art • Multi-color', color: '#ff6b6b', gradient: 'linear-gradient(135deg, #ff6b6b 0%, #339af0 50%, #fcc419 100%)' },
  { id: 'funky-candy', name: 'Fun Candy', category: 'Fun', description: 'Soft pastel purple tones with Nunito font and candy pills.', emoji: '🍬', preview: 'Pastel • Purple • Candy', color: '#e0b3ff', gradient: 'linear-gradient(135deg, #f0e6ff 0%, #fef6ff 100%)' },

  // Developer
  { id: 'developer', name: 'Developer', category: 'Developer', description: 'Modern dev portfolio with cyan accent and tech stack grid.', emoji: '💻', preview: 'Dark • Cyan • Tech grid', color: '#38bdf8', gradient: 'linear-gradient(135deg, #0f1117 0%, #164e63 100%)' },
  { id: 'developer-dark', name: 'Dev Dark', category: 'Developer', description: 'Near-black with green accent, code tag badge.', emoji: '🌿', preview: 'Dark • Green • Code badge', color: '#4ade80', gradient: 'linear-gradient(135deg, #0a0e13 0%, #14532d 100%)' },
  { id: 'developer-blue', name: 'Dev Navy', category: 'Developer', description: 'Navy background with blue accent pills, centered layout.', emoji: '🔵', preview: 'Navy • Blue • Centered', color: '#60a5fa', gradient: 'linear-gradient(135deg, #0c1222 0%, #1e3a5f 100%)' },
  { id: 'developer-gradient', name: 'Dev Gradient', category: 'Developer', description: 'Gradient mesh hero with purple/blue gradient name text.', emoji: '🌈', preview: 'Gradient • Purple • Mesh', color: '#c084fc', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%)' },

  // Elegant
  { id: 'elegant', name: 'Elegant', category: 'Elegant', description: 'Refined serif typography with warm gold accents.', emoji: '🌸', preview: 'Serif • Gold • Ornamental', color: '#d4a574', gradient: 'linear-gradient(135deg, #1c1917 0%, #44403c 100%)' },
  { id: 'elegant-rose', name: 'Elegant Rose', category: 'Elegant', description: 'Soft blush pink with serif and flower ornaments.', emoji: '🌹', preview: 'Rose • Blush • Floral', color: '#e8a8b8', gradient: 'linear-gradient(135deg, #fdf2f4 0%, #fce4ec 100%)' },
  { id: 'elegant-ivory', name: 'Elegant Ivory', category: 'Elegant', description: 'Warm cream with olive brown accent, classic style.', emoji: '📜', preview: 'Ivory • Classic • Warm', color: '#c8b89a', gradient: 'linear-gradient(135deg, #f9f5ef 0%, #e8e0d4 100%)' },
  { id: 'elegant-dark', name: 'Elegant Dark', category: 'Elegant', description: 'Dark moody elegance with Playfair serif and gold accent.', emoji: '🖤', preview: 'Dark • Gold • Moody', color: '#b5a080', gradient: 'linear-gradient(135deg, #12100e 0%, #2c2418 100%)' },
];

const categories = ['Minimal', 'Aesthetic', 'Professional', 'Fun', 'Developer', 'Elegant'];

export default function CreatePage() {
  const router = useRouter();
  const { setTemplate, resetAll } = usePortfolio();

  const handleSelect = (templateId: string) => {
    resetAll();
    setTemplate(templateId);
    router.push('/create/form');
  };

  return (
    <div className="create-page">
      <div className="container">
        <div className="create-page__header">
          <div className="create-page__step-badge">
            <span className="create-page__step-num">1</span>
            <span>of 3</span>
          </div>
          <h1 className="animate-fade-in-up">
            Choose your <span className="gradient-text">template</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-1">
            24 premium templates across 6 categories. Pick one that feels right.
          </p>
        </div>

        {categories.map(cat => (
          <div key={cat} className="create-page__category">
            <h2 className="create-page__category-title">{cat}</h2>
            <div className="create-page__grid">
              {templates.filter(t => t.category === cat).map((tpl, i) => (
                <button
                  key={tpl.id}
                  className={`template-card glass-card animate-fade-in-up animate-delay-${(i % 5) + 1}`}
                  onClick={() => handleSelect(tpl.id)}
                  style={{ '--card-accent': tpl.color } as React.CSSProperties}
                >
                  <div className="template-card__preview" style={{ background: tpl.gradient }}>
                    <span className="template-card__emoji">{tpl.emoji}</span>
                    <div className="template-card__mock">
                      <div className="mock-line mock-line--sm" />
                      <div className="mock-line mock-line--md" />
                      <div className="mock-line mock-line--lg" />
                      <div className="mock-dots">
                        <span /><span /><span />
                      </div>
                    </div>
                  </div>
                  <div className="template-card__info">
                    <h3>{tpl.name}</h3>
                    <p>{tpl.description}</p>
                    <span className="template-card__tags">{tpl.preview}</span>
                  </div>
                  <div className="template-card__select">
                    <span>Select</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
