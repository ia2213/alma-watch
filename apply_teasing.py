import re

# 1. Update watches.ts
w_path = "src/lib/watches.ts"
with open(w_path, "r") as f:
    w_code = f.read()

if "isTeasing?: boolean;" not in w_code:
    w_code = w_code.replace("specs: { label: string; value: string }[];", "specs: { label: string; value: string }[];\n  isTeasing?: boolean;")

for vid in ["v2", "v4", "v5"]:
    w_code = re.sub(r'(id: "' + vid + r'".*?)(    specs: \[)', r'\1    isTeasing: true,\n\2', w_code, flags=re.DOTALL)

with open(w_path, "w") as f:
    f.write(w_code)

# 2. Update collection/page.tsx
p_path = "src/app/collection/page.tsx"
with open(p_path, "r") as f:
    p_code = f.read()

# Replace href
p_code = p_code.replace(
    'href={`/collection/${watch.id}`}', 
    'href={watch.isTeasing ? "#precommande" : `/collection/${watch.id}`}'
)

# Replace image with a conditional rendering for teasing
img_str = '<img src={watch.images[0]} alt={watch.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />'

teaser_jsx = """
{watch.isTeasing ? (
  <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-4 z-10 text-center">
    <img src={watch.images[0]} alt={watch.name} className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale blur-sm" />
    <div className="relative z-20">
      <span className="text-white font-serif text-2xl md:text-3xl block mb-4">Édition Secrète</span>
      <span className="text-xs text-white/70 tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition uppercase">Rejoindre la liste d'attente</span>
    </div>
  </div>
) : (
  <img src={watch.images[0]} alt={watch.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
)}
"""

p_code = p_code.replace(img_str, teaser_jsx)

# Add a section for pre-order at the bottom
preorder_section = """
{/* PRE-ORDER SECTION */}
<section id="precommande" className="py-24 px-6 bg-black text-white text-center">
  <div className="max-w-2xl mx-auto">
    <p className="nav-link mb-4" style={{color: 'var(--gold)'}}>LISTE D'ATTENTE</p>
    <h2 className="font-serif text-4xl mb-6">Éditions Secrètes</h2>
    <p className="text-white/60 mb-8 font-light leading-relaxed">
      Les éditions Or Rose Nacre, Acier Blanc et Or Noir sont actuellement en cours de développement. 
      Inscrivez-vous pour être informé en priorité de leur sortie et réserver votre numéro.
    </p>
    <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={(e) => { e.preventDefault(); alert('Merci ! Vous êtes sur la liste.'); }}>
      <input type="email" placeholder="Votre adresse email" className="bg-white/10 border border-white/20 px-6 py-3 text-white outline-none focus:border-[var(--gold)] transition" required />
      <button type="submit" className="bg-[var(--gold)] text-black font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-white transition">S'inscrire</button>
    </form>
  </div>
</section>
"""

# Insert the pre-order section before the footer
# We need to find the last </main> or closing tag before footer
p_code = p_code.replace('</main>', preorder_section + '\n</main>')

# If it uses Fragments <> instead of <main>
if preorder_section not in p_code:
   p_code = p_code.replace('export default function Collection() {', 'export default function Collection() {\n')
   # actually just append before footer
   p_code = p_code.replace('<footer', preorder_section + '\n<footer')

with open(p_path, "w") as f:
    f.write(p_code)
    
