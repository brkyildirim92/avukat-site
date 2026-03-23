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
            Avukat Gamze Yıldırım, İstanbul merkezli olarak bireysel ve kurumsal müvekkillerine hukuki danışmanlık ve dava takibi hizmeti sunmaktadır.
            Hukuki süreçlerde doğru analiz, şeffaf iletişim ve çözüm odaklı yaklaşım esas alınmakta; 
            her dosya, somut olayın özellikleri dikkate alınarak titizlikle değerlendirilmekte ve müvekkillerin ihtiyaçlarına uygun stratejiler geliştirilmektedir. 
          </p>

          <p>
            Sürecin her aşamasında müvekkiller düzenli olarak bilgilendirilmekte, hukuki riskler öngörülerek etkin ve planlı bir süreç yönetimi sağlanmaktadır.
            Uyuşmazlıkların çözümüne yönelik faaliyetlerin yanı sıra, önleyici hukuk anlayışı çerçevesinde, potansiyel hukuki risklerin henüz ortaya çıkmadan tespit edilmesi ve bu risklerin en aza indirilmesine yönelik danışmanlık hizmetleri sunulmaktadır. 
            Bu kapsamda, sözleşmesel ilişkilerin yapılandırılması, hukuki denetim ve süreçlerin mevzuata uygun şekilde yürütülmesi hususlarında müvekkillere destek sağlanmaktadır.
          </p>

          <p>
            Bireysel ve kurumsal müvekkillerin faaliyet alanlarına ve ihtiyaçlarına özel olarak geliştirilen hukuki 
            çözümler ile yalnızca mevcut uyuşmazlıkların çözümü değil, aynı zamanda uzun vadeli hukuki güvenliğin sağlanması ve olası risklerin önlenmesi hedeflenmektedir. 
            Bu doğrultuda, güvenilir, sürdürülebilir ve etkin bir hukuki hizmet anlayışı benimsenmektedir.
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
