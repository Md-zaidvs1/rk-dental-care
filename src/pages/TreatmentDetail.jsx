import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, ShieldCheck, Stethoscope, HelpCircle } from 'lucide-react';

const treatmentDatabase = {
  "dental-filling": {
    name: "Dental Filling",
    tagline: "Restoring structural integrity and reversing early tooth decay.",
    definition: "A dental filling is a core restorative procedure where decay-causing bacteria and damaged structures are cleared out, and the resulting cavity is filled with highly durable biocompatible resins. This helps stabilize biting forces across your dental arch safely.",
    steps: ["Application of localized gel or anesthetic to ensure a completely painless experience.", "Meticulous extraction of decayed enamel and infected layers using advanced hand instruments or drills.", "Conditioning the clean workspace matrix with premium direct composite material shades.", "Curing the filling instantly with a specialized wave curing light to guarantee lasting hardness.", "Polishing edges cleanly to align perfectly with your natural bite occlusion patterns."]
  },
  "endodontic-treatment": {
    name: "Endodontic Treatment",
    tagline: "Advanced inner pulp diagnostics and root micro-therapy.",
    definition: "Endodontics focuses heavily on specialized diagnoses concerning internal tooth pulp tissues containing primary nerves and blood supplies. Early endodontic detection prevents tooth structure failure, containing localized micro-decay before abscess patterns manifest.",
    steps: ["High-magnification evaluation of root canal paths using modern imaging.", "Isolating the tooth with clinical barriers to exclude salivary bacteria mixtures.", "Accessing inner spaces safely to verify pulp structural configurations.", "Targeting tracking lines via microscopic diagnostic files.", "Eradicating deep necrotic tissue layers gracefully to safeguard root viability."]
  },
  "root-canal-treatment": {
    name: "Root Canal Treatment",
    tagline: "Painless root salvation therapies to protect natural teeth.",
    definition: "Root canal therapy resolves severe deep infections inside your tooth pulp without requiring standard tooth extractions. By clearing root pathways entirely and sealing them with biocompatible fillings, it eliminates toothache irritation permanently.",
    steps: ["Administering numbing anesthetic sets near the tooth area for total comfort.", "Drilling a safe, clean opening down through the upper crown shell framework.", "Removing all infected or necrotic pulp layers down to the root tips.", "Disinfecting and reshaping root walls using endodontic files.", "Sealing the empty canals with gutta-percha and placing a crown for permanent protection."]
  },
  "scaling-and-root-planing": {
    name: "Scaling & Root Planing",
    tagline: "Deep pocket dental cleanings to reverse gum disease advancement.",
    definition: "Scaling and root planing is a non-surgical deep cleaning protocol designed for advanced chronic gum disease. It eliminates deep calculus and bacterial film build-up trapped inside deep gum pockets.",
    steps: ["Numbing tender gum margins slightly using a local numbing agent.", "Scaling hard plaque and yellow calculus deposits above and below the gumline.", "Planing and smoothing root configurations to clear away microscopic rough spots.", "Flushing the pocket metrics with antibacterial solutions to control harmful bacteria.", "Allowing gum fibers to safely reattach tightly back against your smooth teeth walls."]
  },
  "extraction": {
    name: "Tooth Extraction",
    tagline: "Safe, comfortable extraction of non-restorably damaged teeth.",
    definition: "When severe decay or multi-layer cracks render a tooth non-salvageable, a controlled clinical extraction preserves overall oral health. This standard out-patient procedure prevents serious systemic infections from traveling into neighboring facial structures.",
    steps: ["Comprehensive x-ray review to verify underlying bone morphology lines.", "Applying profound local anesthesia to block neural path responses entirely.", "Gently widening the alveolar pocket using modern specialized elevators.", "Extracting the target tooth safely without straining adjoining tissues.", "Placing sterilizing gauze pads to initiate rapid, healthy blood clotting blocks."]
  },
  "replacement-of-missing-teeth": {
    name: "Replacement of Missing Teeth",
    tagline: "Re-establishing natural bite parameters and structural support profiles.",
    definition: "Leaving extraction gaps untreated causes adjacent teeth to shift, which can lead to jaw joint strain and chewing difficulties. Replacing missing options restores balanced forces and maintains proper facial vertical heights.",
    steps: ["Taking highly precise mouth arch imprints and alignment metrics.", "Discussing dental bridge configurations or removable partial designs based on your case.", "Preparing adjoining healthy teeth if anchoring fixed structural crowns is preferred.", "Fabricating custom prosthetic shapes inside specialized dental laboratories.", "Cementing your permanent teeth replacements securely to re-establish your complete bite grid."]
  },
  "pediatric-dentistry": {
    name: "Pediatric Dentistry",
    tagline: "Gentle primary care designed exclusively for growing child smiles.",
    definition: "Pediatric care focuses entirely on the unique oral health timelines of toddlers and adolescents. Creating positive early experiences avoids dental anxiety protocols, ensuring primary milk teeth remain healthy until permanent sets emerge naturally.",
    steps: ["Friendly, patient-centric introductions to lower environmental stress loops.", "Meticulous scanning for early developmental childhood cavities and bite anomalies.", "Applying smooth fluoride sealants to protect grooves on young molars.", "Providing helpful brush guidance using easy-to-understand dental illustrations.", "Tracking jaw structure development to guide healthy alignment over time."]
  },
  "rvg-digital-x-ray": {
    name: "RVG Digital X-Ray",
    tagline: "Instant, low-radiation imaging for highly precise treatment maps.",
    definition: "Radio-Visionography (RVG) updates standard manual film x-rays into crisp digital imaging layouts instantly. This allows the doctor to analyze interior bone lines and root pathologies with over 80% lower radiation exposure levels.",
    steps: ["Placing a comfortable, rounded digital sensor smoothly near the target tooth row.", "Emitting a precise, low-dose electronic diagnostic beam instantly.", "Displaying high-resolution tooth interior structural grids on our monitor right away.", "Magnifying intricate root paths to locate hidden root decay lines perfectly.", "Storing charts securely to cross-check clinical progression accurately."]
  },
  "dental-implants": {
    name: "Dental Implants",
    tagline: "The golden standard solution for permanent root replacement setups.",
    definition: "Dental implants are titanium replacement posts surgically placed directly into your jawbone. Over a few months, the post fuses with the bone, serving as a permanent root anchor for a custom porcelain crown.",
    steps: ["Using high-precision digital X-rays to map available jawbone width matrices.", "Surgically anchoring the sterile titanium script post into the target empty bone slot.", "Allowing a healing timeline for the post to naturally bond into place.", "Attaching a custom prosthetic connector element onto the sturdy root post.", "Placing a beautifully shaded ceramic crown that looks and feels like a real tooth."]
  },
  "smile-designing": {
    name: "Smile Designing",
    tagline: "Custom cosmetic corrections built to balance facial harmony lines.",
    definition: "Smile designing combines multiple aesthetic procedures—such as whitening, veneers, or crowns—to create a balanced, natural-looking smile that complements your unique facial features.",
    steps: ["Capturing high-resolution diagnostic portrait photos and modeling measurements.", "Analyzing vertical proportions based on lip lines and eye symmetry axes.", "Using digital tools to map your ideal tooth size, length, and shade parameters.", "Performing minimal structural preparation steps to ensure natural final results.", "Placing custom custom-shaded composite modifications or veneers to complete your smile transformation."]
  },
  "orthodontic-treatment": {
    name: "Orthodontic Treatment",
    tagline: "Aligning crowded configurations safely for long-lasting health.",
    definition: "Orthodontics uses specialized bracket arrays or clear aligners to gently guide crowded, rotated, or gapped teeth into healthy alignments over time. This enhances bite function and makes daily teeth cleaning much easier.",
    steps: ["Taking diagnostic tracking models and root bone overview radiographs.", "Bonding premium dental bracket frames onto the teeth surfaces with precision.", "Threading lightweight archwires across the slots to create gentle, guided movement.", "Performing smooth adjustments every few weeks to advance tracking patterns.", "Placing comfortable custom retainers at the finish line to protect your new alignment permanently."]
  }
};

export default function TreatmentDetail() {
  const { id } = useParams();
  const treatment = treatmentDatabase[id];

  // Fallback view state handler if URL parameters break
  if (!treatment) {
    return (
      <div className="max-w-xl mx-auto py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Treatment File Not Found</h2>
        <Link to="/services" className="text-cyan-500 hover:underline inline-flex items-center gap-1">➔ Return to Services Hub</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Banner Header Area Layout */}
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-3">
          <Link to="/services" className="text-cyan-400 hover:text-cyan-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-2">
            <ChevronLeft size={14} /> Back To All Services
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{treatment.name}</h1>
          <p className="text-slate-400 text-sm font-light max-w-xl">{treatment.tagline}</p>
        </div>
      </section>

      {/* Main Split Layout Data Info View Block */}
      <div className="max-w-4xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Area Content Details text boxes */}
        <div className="md:col-span-8 bg-white border border-slate-200/60 p-6 md:p-8 rounded-xl shadow-xs space-y-8">
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b pb-2 border-slate-100">
              <Stethoscope size={18} className="text-cyan-500" /> Clinical Definition
            </h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              {treatment.definition}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b pb-2 border-slate-100">
              <ShieldCheck size={18} className="text-cyan-500" /> Procedural Steps Involved
            </h3>
            <ol className="space-y-3.5">
              {treatment.steps.map((step, index) => (
                <li key={index} className="flex gap-3 text-sm text-slate-600 font-light items-start">
                  <div className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* Right Info Context Alert Container Sidebar */}
        <div className="md:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-xl shadow-md space-y-4 border border-slate-800">
          <HelpCircle className="w-8 h-8 text-cyan-400" />
          <h4 className="font-bold text-base tracking-wide">Have Questions?</h4>
          <p className="text-xs font-light text-slate-300 leading-relaxed">
            Every patient's case profile presents structural variances. Schedule a consultation visit to obtain a personalized diagnostic breakdown under Dr. Radhakrishnan.
          </p>
          <div className="pt-2">
            <a 
              href={`https://wa.me/918883261285?text=Hi%20Doctor%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(treatment.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded transition shadow-md"
            >
              Consult On WhatsApp ➔
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}