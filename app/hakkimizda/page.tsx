import Image from "next/image";

export default function HakkimizdaPage() {
  return (
    <section className="page-fade-in">

      <div className="
        flex flex-col-reverse md:flex-row
        gap-12 md:gap-24
        items-center md:items-start
        max-w-6xl mx-auto
      ">

        {/* 📝 METİN */}
        <div
          className="
            space-y-6
            text-sm md:text-base
            leading-relaxed
            text-center md:text-left
            max-w-xl
          "
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

        {/* 📸 FOTO */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hakkimizda2.jpg"
            alt="Avukat Gamze Yıldırım"
            width={640}
            height={480}
            priority
            className="
              w-full max-w-md md:max-w-none
              rounded-2xl object-cover
              shadow-lg
            "
          />
        </div>

      </div>

    </section>
  );
}
