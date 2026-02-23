import Image from "next/image";

export default function HakkimizdaPage() {
  return (
    <section className="page-fade-in">

      {/* FLEX İLE ZORLA YAN YANA */}
      <div className="flex gap-24 items-start max-w-3xl mx-auto">

        {/* 📝 SOL – METİN */}
        <div
          className="space-y-6 text-sm leading-relaxed max-w-[520px] ml-[120px]"
          style={{ color: "#9b9b9b" }}
        >
          <p>
            Avukat Gamze Yıldırım, İstanbul merkezli olarak bireysel ve
            kurumsal müvekkillerine hukuki danışmanlık ve dava takibi
            hizmeti sunmaktadır.
          </p>

          <p>
            Hukuki süreçlerde doğru analiz, şeffaf iletişim ve çözüm
            odaklı yaklaşım benimsenmektedir.
          </p>

          <p>
            Ceza hukuku, aile hukuku, iş hukuku ve sözleşmeler hukuku
            başta olmak üzere geniş bir alanda hizmet vermektedir.
          </p>
        </div>

        {/* 📸 SAĞ – FOTO */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/hakkimizda2.jpg"
            alt="Avukat Gamze Yıldırım"
            width={1240}
            height={520}
            className="rounded-2xl object-cover"
            priority
          />
        </div>

      </div>

    </section>
  );
}

