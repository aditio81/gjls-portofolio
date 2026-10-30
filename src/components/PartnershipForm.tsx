"use client";

import Badge from "./Badge";
import { partnershipForm } from "@/lib/data";


export default function PartnershipForm() {
  return (
    <section className="py-16 px-6 md:px-12" id="form">
      <div className="max-w-7xl mx-auto">
        <div className="border-4 border-gjls-black shadow-brutal bg-gjls-teal rounded-xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Pattern Diagonal Dekoratif */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #FFFFFF 20px, #FFFFFF 22px)',
              }}
            />
          </div>

          {/* Konten */}
          <div className="relative z-10">
            
            {/* Header Form */}
            <div className="text-center mb-8">
              <Badge text={partnershipForm.badge} variant="yellow" icon="star" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4">
                {partnershipForm.title}
              </h2>
              <p className="font-body text-sm text-gjls-cream mt-2 max-w-2xl mx-auto">
                {partnershipForm.description}
              </p>
            </div>

            {/* Form Container Putih */}
            <div className="max-w-3xl mx-auto border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-6 md:p-8">
              
              {/* FORM ACTION KE WEB3FORMS */}
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="space-y-5"
              >
                {/* Konfigurasi Tersembunyi (Hidden Fields) */}
                <input type="hidden" name="access_key" value="8f27e58d-9a4e-4707-af7e-d76e06dcdb2e" />
                <input type="hidden" name="subject" value="Konsultasi Partnership GJLS Baru!" />
                <input type="hidden" name="from_name" value="Website GJLS Portfolio" />
                <input type="hidden" name="_next" value="https://gjls-portfolio.vercel.app/thanks" />

                {partnershipForm.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block font-body text-xs font-bold text-gjls-black uppercase tracking-wider mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.id} // ← PENTING: Agar Web3Forms mengenali data ini
                        placeholder={field.placeholder}
                        rows={4}
                        required // ← PENTING: Memaksa user mengisi sebelum kirim
                        className="w-full px-4 py-3 bg-gjls-cream border-2 border-gjls-black rounded-lg font-body text-sm focus:outline-none focus:border-gjls-pink transition-colors"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.id} // ← PENTING: Agar Web3Forms mengenali data ini
                        placeholder={field.placeholder}
                        required // ← PENTING: Memaksa user mengisi sebelum kirim
                        className="w-full px-4 py-3 bg-gjls-cream border-2 border-gjls-black rounded-lg font-body text-sm focus:outline-none focus:border-gjls-pink transition-colors"
                      />
                    )}
                  </div>
                ))}

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all cursor-pointer"
                >
                  {partnershipForm.submitText}
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t-2 border-dashed border-gjls-black">
                <p className="font-body text-xs text-gray-600 text-center">
                  📧 {partnershipForm.contactInfo}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}