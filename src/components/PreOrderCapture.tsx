import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { SITE_SLUG, ARTIST_NAME, getProduct } from '../raas-catalog';

const ENDPOINT = import.meta.env.VITE_RAAS_API;

type Props = { productId: string };

export default function PreOrderCapture({ productId }: Props) {
  const product = getProduct(productId);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [variant, setVariant] = useState('');
  const [tier, setTier] = useState('');
  const [merch, setMerch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  if (!product) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const payload = {
      siteSlug: SITE_SLUG,
      artistName: ARTIST_NAME,
      productId,
      productName: product!.name,
      variant,
      email,
      location,
      priceTierKey: tier,
      priceTierLabel: product!.priceTiers.find(t => t.key === tier)?.label ?? '',
      brandedMerchInterest: merch,
    };
    try {
      if (ENDPOINT) {
        await fetch(`${ENDPOINT}/v1/interest`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        console.log('[RAAS stub]', payload);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex items-center gap-2 py-2">
        <Check size={14} className="text-amber" />
        <span className="font-mono text-xs uppercase tracking-widest text-amber">Interest Logged</span>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="font-display text-xs uppercase tracking-widest px-5 py-2 border border-amber/40 text-amber hover:bg-amber hover:text-deep transition-all duration-200"
      >
        Get Notified
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="mt-2 space-y-3">
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full bg-deep-mid border border-amber/20 px-3 py-2 text-xs text-warm-white placeholder-muted font-mono focus:outline-none focus:border-amber/60"
      />
      <input
        type="text"
        required
        placeholder="Location (parish / city)"
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="w-full bg-deep-mid border border-amber/20 px-3 py-2 text-xs text-warm-white placeholder-muted font-mono focus:outline-none focus:border-amber/60"
      />
      {product.variants.length > 1 && (
        <select
          value={variant}
          onChange={e => setVariant(e.target.value)}
          className="w-full bg-deep-mid border border-amber/20 px-3 py-2 text-xs text-warm-white font-mono focus:outline-none focus:border-amber/60"
        >
          <option value="">Size / variant</option>
          {product.variants.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      )}
      <div className="space-y-1">
        <p className="font-mono text-[9px] uppercase tracking-widest text-muted-light">Price range</p>
        {product.priceTiers.map(t => (
          <label key={t.key} className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name={`tier-${productId}`} value={t.key} checked={tier === t.key} onChange={() => setTier(t.key)} className="accent-amber" />
            <span className="font-mono text-xs text-sand">{t.label}</span>
          </label>
        ))}
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={merch} onChange={e => setMerch(e.target.checked)} className="accent-amber" />
        <span className="font-mono text-[10px] text-muted-light">Interested in other Busy Signal merch</span>
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full font-display text-xs uppercase tracking-widest py-2 bg-amber text-deep hover:bg-amber-bright transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? <Loader2 size={12} className="animate-spin" /> : 'Submit'}
      </button>
    </form>
  );
}
