export default function IletisimPage() {
  return (
    <section className="page-fade-in pt-[140px] pb-24">

      <div className="max-w-3xl mx-auto px-6">

        {/* 💎 KART */}
        <div className="contact-card mt-[80px] md:mt-[80px]">

          {/* BAŞLIK */}
          <div className="mb-10 text-center">
            <h1 className="contact-title">
              İletişim
            </h1>
            <p className="contact-desc">
              Hukuki danışmanlık ve randevu talepleriniz için
              aşağıdaki formu doldurabilirsiniz.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">

            <div>
              <label className="contact-label">Ad Soyad</label>
              <input
                type="text"
                placeholder="Adınız ve Soyadınız"
                className="contact-input"
              />
            </div>

            <div>
              <label className="contact-label">E-posta</label>
              <input
                type="email"
                placeholder="ornek@mail.com"
                className="contact-input"
              />
            </div>

            <div>
              <label className="contact-label">Telefon</label>
              <input
                type="tel"
                placeholder="05xx xxx xx xx"
                className="contact-input"
              />
            </div>

            <div>
              <label className="contact-label">Mesajınız</label>
              <textarea
                rows={4}
                placeholder="Kısaca hukuki konunuzu anlatınız..."
                className="contact-textarea"
              />
            </div>

            {/* BUTON */}
            <button type="submit" className="contact-button">
              Gönder
            </button>

          </form>
        </div>
      </div>

      {/* 🎨 STİLLER */}
      <style>{`
        .contact-card {
          max-width: 520px; /* ⬅️ KART DARALTILDI */
          margin: 0 auto 100px auto; /* ⬅️ SADECE BU SATIR EKLENDİ */
          background: #ffffff;
          border: 2px solid #e6d6bf;
          border-radius: 20px;
          padding: 40px; /* ⬅️ ESKİ 64px → 40px */
          transition: 
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          background: #faf7f2;
        }

        .contact-title {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 10px;
        }

        .contact-desc {
          font-size: 14px;
          color: #9b9b9b;
          max-width: 420px;
          margin: 0 auto;
        }

        .contact-label {
          display: block;
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 6px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          border: none;
          border-bottom: 1px solid #e6d6bf;
          padding: 10px 4px;
          font-size: 14px;
          background: transparent;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #c69b65;
        }

        .contact-button {
          margin-top: 12px;
          width: 100%;
          padding: 14px;
          border-radius: 9999px;
          background: #c69b65;
          color: white;
          font-size: 14px;
          font-weight: 500;
          transition: 
            background 0.3s ease,
            transform 0.3s ease;
        }

        .contact-button:hover {
          background: #b89055;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}






