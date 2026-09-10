import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { playfair } from "../../fonts";
import JsonLd from "../../components/JsonLd";
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createPageMetadata,
  siteConfig,
} from "../../lib/seo";


const articles = [
  {
    slug: "ceza-hukukunda-tutuklama-sartlari",
    title: "Ceza Hukukunda Tutuklama Şartları",
    date: "12 Ocak 2025",
    content: `
Tutuklama, ceza yargılamasında istisnai bir koruma tedbiridir.
Kişi özgürlüğünü doğrudan etkilediği için ancak kanunda açıkça
belirtilen şartların birlikte gerçekleşmesi halinde uygulanabilir.

Ceza Muhakemesi Kanunu’na göre tutuklama kararı verilebilmesi için
öncelikle kuvvetli suç şüphesinin bulunması gerekir. Ancak tek başına
suç şüphesi yeterli değildir.

Bunun yanında; şüpheli veya sanığın kaçma ihtimalinin bulunması,
delilleri yok etme, gizleme veya tanıklar üzerinde baskı kurma
olasılığı gibi tutuklama nedenlerinin de mevcut olması aranır.

Uygulamada sıkça karşılaşılan durumlardan biri, tutuklamanın
cezalandırma aracı gibi kullanılmasıdır. Oysa tutuklama bir ceza
değil, geçici bir tedbirdir ve ölçülülük ilkesine uygun olmalıdır.

Tutuklama yerine adli kontrol tedbirlerinin yeterli olacağı
hallerde, tutuklama kararı verilmemesi gerekir. Adli kontrol;
yurt dışına çıkış yasağı, imza yükümlülüğü veya belirli yerlere
gitmeme gibi yükümlülükleri kapsayabilir.

Tutuklama kararına karşı itiraz mümkündür. İtiraz süresi genellikle
kararın öğrenilmesinden itibaren 7 gündür. Bu süre içerisinde yapılan
itirazlarda, tutuklama şartlarının somut olayda bulunup bulunmadığı
ayrıntılı şekilde değerlendirilir.

Tutukluluk süresi de sınırsız değildir. Soruşturma ve kovuşturma
aşamalarında kanunda belirtilen azami süreler mevcuttur. Bu sürelerin
aşılması hukuka aykırıdır ve tahliye talep edilebilir.

Ceza yargılamasında yapılacak usuli hatalar, telafisi zor hak
kayıplarına yol açabilmektedir. Bu nedenle tutuklama tedbirlerine
ilişkin süreçlerin dikkatle ve profesyonel şekilde yürütülmesi büyük
önem taşır.

Sık Sorulan Sorular:

Tutuklama kararı kim tarafından verilir?
→ Soruşturma aşamasında sulh ceza hakimi, kovuşturma aşamasında ise
davaya bakan mahkeme tarafından verilir.

Tutuklama kararı hemen uygulanır mı?
→ Evet. Tutuklama kararı verildiği anda infaz edilir.

Tutuklamaya itiraz reddedilirse tekrar itiraz edilebilir mi?
→ Yeni bir hukuki durum veya delil ortaya çıkması halinde tekrar
itiraz mümkündür.

Tutuklama yerine adli kontrol her zaman uygulanabilir mi?
→ Hayır. Suçun niteliği ve dosyanın içeriğine göre değerlendirme
yapılır.

    `,
  },
  {
    slug: "bosanma-davalarinda-nafaka-turleri",
    title: "Boşanma Davalarında Nafaka Türleri",
    date: "5 Ocak 2025",
    content: `
Boşanma davalarında nafaka, tarafların ekonomik dengesini korumayı
amaçlayan önemli bir hukuki müessesedir. Türk Medeni Kanunu’nda
birden fazla nafaka türü düzenlenmiştir ve her biri farklı şartlara
bağlanmıştır.

Bu nedenle nafaka konusu, her dosyada ayrı ayrı değerlendirilmesi
gereken teknik bir süreçtir.

Boşanma davalarında en sık karşılaşılan nafaka türleri şunlardır:

Tedbir nafakası, boşanma davası devam ederken eşlerden birinin veya
çocukların mağdur olmaması amacıyla hükmedilen geçici bir nafakadır.
Dava sonuçlanana kadar devam eder ve hâkim tarafından re’sen dahi
karar verilebilir.

İştirak nafakası, velayeti kendisine verilmeyen ebeveynin, çocuğun
bakım, eğitim ve sağlık giderlerine katılması amacıyla ödediği
nafaka türüdür. Çocuğun üstün yararı esas alınır ve ekonomik durumlar
göz önünde bulundurulur.

Yoksulluk nafakası ise boşanma sonucunda yoksulluğa düşecek olan
tarafa bağlanan nafakadır. Bu nafakaya hükmedilebilmesi için talep
eden tarafın boşanmada ağır kusurlu olmaması gerekir.

Nafaka miktarı belirlenirken;
tarafların gelir durumu,
sosyal yaşam standartları,
bakmakla yükümlü oldukları kişiler
ve kusur oranları birlikte değerlendirilir.

Her nafaka davası kendi özel şartlarına sahiptir. Yanlış veya eksik
bir talep, hak kaybına yol açabilir.

Bu nedenle boşanma ve nafaka süreçlerinde hukuki destek alınması,
ileride telafisi güç sonuçların önüne geçilmesi açısından büyük
önem taşır.

Uygulamada nafaka kararlarına itiraz, nafakanın artırılması veya
azaltılması da sıkça gündeme gelmektedir. Bu işlemler de belirli
süreler ve şartlara tabidir.

    `,
  },
  {
    slug: "isten-haksiz-fesih-durumunda-haklar",
    title: "İşten Haksız Fesih Durumunda Haklar",
    date: "28 Aralık 2024",
    content: `
İş sözleşmesinin işveren tarafından sona erdirilmesi, belirli hukuki
şartlara bağlıdır. İş Kanunu’na göre fesih, haklı veya geçerli bir
nedene dayanmak zorundadır. Aksi halde yapılan fesih, haksız fesih
olarak kabul edilir.

Haksız fesih durumunda işçi, önemli hak kayıplarına uğramamak adına
kanunda kendisine tanınan hakları süresi içinde talep etmelidir.

İşverenin, işçinin performansı, davranışları veya işletmesel
nedenlerle fesih yapabilmesi için bu gerekçeleri somut ve ispatlanabilir
şekilde ortaya koyması gerekir. Keyfi veya soyut gerekçelerle yapılan
fesihler hukuka aykırıdır.

Haksız fesih halinde işçinin talep edebileceği başlıca haklar şunlardır:

Kıdem tazminatı, en az bir yıl aynı işverene bağlı olarak çalışan
işçinin, iş sözleşmesinin haksız şekilde sona erdirilmesi halinde
hak kazandığı tazminattır. İşçinin çalışma süresi ve son brüt ücreti
esas alınarak hesaplanır.

İhbar tazminatı, iş sözleşmesinin kanunda öngörülen bildirim sürelerine
uyulmadan feshedilmesi halinde gündeme gelir. Bildirim süresine
uymayan taraf, karşı tarafa ihbar tazminatı ödemekle yükümlüdür.

İşe iade davası, belirli şartları taşıyan işçilerin açabileceği önemli
bir davadır. İşe iade kararı verilmesi halinde işveren, işçiyi yeniden
işe başlatmak veya işe başlatmama tazminatı ödemek zorunda kalabilir.

Bunlara ek olarak;
ödenmeyen ücret alacakları,
fazla mesai alacakları,
yıllık izin ücretleri
ve diğer yan haklar da talep edilebilir.

Haksız fesih davalarında süreler büyük önem taşır. Özellikle işe iade
davalarında hak düşürücü süreler söz konusudur ve bu sürelerin
kaçırılması, telafisi mümkün olmayan hak kayıplarına yol açabilir.

Her iş ilişkisinin kendine özgü şartları bulunduğundan, fesih işleminin
hukuka uygun olup olmadığı somut olayın özelliklerine göre
değerlendirilmelidir.

Bu nedenle işten çıkarılma sürecinde hukuki destek alınması, işçinin
haklarını eksiksiz ve doğru şekilde kullanabilmesi açısından
kritik öneme sahiptir.

    `,
  },
  {
    slug: "kira-sozlesmesi-tahliye",
    title: "Kira Sözleşmesinde Tahliye Süreci",
    date: "09 Ağustos 2024",
    content: `
    Kira sözleşmesinin sona erdirilmesi ve kiracının tahliyesi, Türk Borçlar
Kanunu’nda ayrıntılı şekilde düzenlenmiştir. Kiraya verenin, kiracıyı
keyfi şekilde tahliye etmesi mümkün değildir. Tahliye işlemlerinin
mutlaka kanunda belirtilen şartlara uygun olarak yürütülmesi gerekir.

Tahliye süreci, kira sözleşmesinin türüne, süresine ve tahliye
sebebine göre değişiklik gösterir. Her tahliye sebebi, farklı usul ve
süreler içermektedir.

Kiraya verenin tahliye talebinde bulunabileceği başlıca haller şunlardır:

Kira bedelinin ödenmemesi durumunda, kiracıya yazılı ihtar gönderilmesi
zorunludur. İhtar süresine rağmen ödeme yapılmazsa tahliye davası veya
icra yoluyla tahliye süreci başlatılabilir.

İki haklı ihtar nedeniyle tahliye, aynı kira yılı içerisinde kira
bedelinin zamanında ödenmemesi sebebiyle kiracıya iki ayrı haklı ihtar
gönderilmesi halinde gündeme gelir. Bu durumda kira süresinin sonunda
tahliye davası açılabilir.

Tahliye taahhüdü, kiracının belirli bir tarihte taşınmazı boşaltacağını
yazılı olarak kabul etmesidir. Geçerli bir tahliye taahhüdüne dayanılarak
icra yoluyla veya dava açılarak tahliye sağlanabilir.

Kiraya verenin konut veya işyeri ihtiyacı, kanunda öngörülen önemli
tahliye sebeplerindendir. Kiraya veren; kendisi, eşi, altsoyu, üstsoyu
veya bakmakla yükümlü olduğu kişiler için gerçek ve samimi bir ihtiyaç
bulunduğunu ispatlamak zorundadır.

Taşınmazın yeniden inşası, esaslı tadilatı veya imarı nedeniyle tahliye
talep edilebilir. Bu durumda yapılacak işlemlerin kiralananın
kullanımını imkânsız kılması gerekir.

Tahliye davalarında süreler ve usul kuralları son derece önemlidir.
Yanlış açılan dava, eksik ihtar veya sürenin kaçırılması halinde tahliye
talebi reddedilebilir.

Kiracının da hukuki hakları bulunmaktadır. Tahliye sürecinde kiracı,
geçersiz ihtar ve hukuka aykırı tahliye taleplerine karşı yasal yollara
başvurabilir.

Kira uyuşmazlıkları, hem kiraya veren hem de kiracı açısından ciddi hak
kayıplarına yol açabileceğinden, sürecin başından itibaren hukuki destek
alınması büyük önem taşır.

Her kira ilişkisinin kendine özgü koşulları bulunduğundan, tahliye
sürecinin somut olayın özelliklerine göre değerlendirilmesi gerekir.

    `,
 },
 {
    slug: "kat-mulkiyetinde-ortak-alan-uyusmazliklari",
    title: "Kat Mülkiyetinde Ortak Alan Uyuşmazlıkları ve Hukuki Çözümler",
    date: "12 Eylül 2024",
    content: `
    Kat mülkiyetine tabi binalarda ortak alan kullanımı, komşular arasında
en sık uyuşmazlık yaşanan konuların başında gelmektedir. Apartman ve site
yaşamında ortak alanların sınırları ve kullanım şekli, Kat Mülkiyeti
Kanunu hükümleri ile belirlenmiştir.

Merdivenler, asansörler, çatılar, dış cepheler, bahçeler ve otoparklar
ortak alan olarak kabul edilir. Bu alanlar üzerinde hiçbir kat maliki
tek başına tasarrufta bulunamaz. Ortak alanların amacı dışında kullanılması
diğer kat maliklerinin haklarını ihlal eder.

Uygulamada en sık karşılaşılan sorunlardan biri ortak alanların işgal
edilmesidir. Merdiven boşluklarına eşya bırakılması, apartman girişinin
kapatılması veya ortak bahçenin özel kullanım alanına dönüştürülmesi,
hukuka aykırı kabul edilir. Bu tür durumlarda kat malikleri, yönetim
aracılığıyla veya doğrudan hukuki yollara başvurabilir.

Otopark kullanımı da ciddi uyuşmazlıklara neden olmaktadır. Otoparkın
bağımsız bölüme tahsisli olmadığı durumlarda, tüm kat maliklerinin eşit
kullanım hakkı bulunmaktadır. Keyfi yer işgali veya başkasının alanının
kullanılması hukuki sorumluluk doğurabilir.

Ortak alanlara yapılan izinsiz tadilatlar da sıklıkla dava konusu olur.
Kat maliklerinden biri, diğer maliklerin rızası olmadan ortak alanda
değişiklik yapamaz. Aksi halde eski hale getirme davası açılabilir.

Kat mülkiyetinden kaynaklanan uyuşmazlıklarda sulh hukuk mahkemeleri
görevli olup, dava sürecinde delillerin doğru sunulması büyük önem taşır.
Yanlış usul veya eksik başvuru, hak kaybına yol açabilir.

Bu nedenle ortak alan uyuşmazlıklarında, sürecin başından itibaren hukuki
destek alınması, hem komşuluk ilişkilerinin korunmasını hem de yasal
hakların etkin şekilde kullanılmasını sağlar.
    `,
  },
  {
    slug: "tapu-iptali-ve-tescil-davasi",
    title: "Tapu İptali ve Tescil Davası Nedir? Şartları ve Hukuki Süreç",
    date: "21 Eylül 2024",
    content: `
Tapu iptali ve tescil davası, taşınmazın tapu kaydının hukuka aykırı
şekilde oluşturulması halinde açılan bir dava türüdür. Bu dava ile
mevcut tapu kaydının iptal edilmesi ve gerçek hak sahibinin adına
tescil edilmesi amaçlanır.

Tapu iptali ve tescil davaları; muvazaa, miras hakkının ihlali,
hata, hile veya irade sakatlığı gibi durumlarda gündeme gelir.
Özellikle miras bırakanın mal kaçırma amacıyla yaptığı işlemler,
uygulamada en sık karşılaşılan nedenler arasındadır.

Davanın açılabilmesi için davacının taşınmaz üzerinde ayni veya
kişisel bir hakkının bulunması gerekir. Tapu kaydının hukuka aykırı
olduğunun ispatı davacıya aittir ve bu ispat çoğu zaman tanık,
bilirkişi ve yazılı delillerle yapılır.

Tapu iptali ve tescil davalarında görevli mahkeme Asliye Hukuk
Mahkemesidir. Yetkili mahkeme ise taşınmazın bulunduğu yer
mahkemesidir. Dava sürecinde zamanaşımı ve hak düşürücü süreler
büyük önem taşır.

Hukuki sürecin doğru yönetilmesi, delillerin eksiksiz sunulması ve
hak kaybı yaşanmaması adına profesyonel hukuki destek alınması
önemlidir. Avukat Gamze Yıldırım, tapu iptali ve tescil davalarında
müvekkillerine etkin ve titiz bir hukuki danışmanlık sunmaktadır.

    `,
  },
    {
    slug: "kentsel-donusum-surecinde-haklar",
    title: "Kentsel Dönüşüm Sürecinde Haklar Nelerdir?",
    date: "17 Kasım 2024",
    content: `
    Kentsel dönüşüm süreci, riskli yapıların yenilenmesi amacıyla
uygulanan özel bir hukuki süreçtir. Bu süreçte hem taşınmaz
malikleri hem de kiracılar açısından önemli hak ve yükümlülükler
doğmaktadır.

Riskli yapı tespiti, Çevre, Şehircilik ve İklim Değişikliği
Bakanlığı tarafından yetkilendirilmiş kurumlarca yapılır. Yapının
riskli olarak tespit edilmesi halinde maliklere bu durum tebliğ
edilir ve itiraz hakkı tanınır. Tebliğ tarihinden itibaren belirli
süreler içerisinde itiraz edilmemesi halinde karar kesinleşir.

Kentsel dönüşüm sürecinde maliklerin en önemli haklarından biri,
yıkım ve yeniden yapım sürecine ilişkin kararlara katılma hakkıdır.
Arsa payı oranında en az üçte iki çoğunlukla alınan kararlar,
çoğunluğa katılmayan maliklere karşı bağlayıcı hale gelebilir.
Bu aşamada azınlıkta kalan maliklerin haklarının korunması
büyük önem taşır.

Kiracılar açısından ise tahliye süreci, kira yardımı ve taşınma
desteği gibi haklar söz konusudur. Kiracılar, belirlenen süreler
içerisinde tahliye edilmek zorunda kalabilir ancak kanun kapsamında
maddi destekten yararlanma hakları bulunmaktadır.

Kentsel dönüşüm sürecinde sürelerin kaçırılması, itiraz hakkının
kaybedilmesi veya sözleşmelerin dikkatle incelenmemesi ciddi
hak kayıplarına yol açabilir. Bu nedenle sürecin başından itibaren
hukuki destek alınması büyük önem taşır.

Avukat Gamze Yıldırım, kentsel dönüşüm sürecinde malik ve kiracıların
haklarının korunması, itiraz süreçlerinin yürütülmesi ve sözleşme
incelemeleri konusunda profesyonel hukuki danışmanlık sunmaktadır.
    `,
  },
      {
    slug: "ortakligin-giderilmesi-izale-i-suyu-davasi",
    title: "Ortaklığın Giderilmesi (İzale-i Şuyu) Davası Nedir?",
    date: "25 Ekim 2024",
    content: `
    Ortaklığın giderilmesi davası, bir taşınmaz üzerinde birden fazla
kişinin paylı veya elbirliği mülkiyetine sahip olması halinde,
ortaklığın sona erdirilmesi amacıyla açılan davadır. Uygulamada
izale-i şuyu davası olarak da bilinmektedir.

Bu dava, taşınmaz üzerindeki ortaklığın aynen taksim yoluyla veya
satış suretiyle giderilmesini amaçlar. Eğer taşınmaz fiilen
bölünebiliyorsa aynen taksim yoluna gidilir. Ancak bölünme mümkün
değilse veya değer kaybına yol açacaksa satış yoluyla ortaklık
sona erdirilir.

Ortaklığın giderilmesi davası, paydaşlardan herhangi biri tarafından
açılabilir. Diğer paydaşların rızası aranmaz. Davanın açılabilmesi
için ortaklığın devam ediyor olması yeterlidir.

Mahkeme sürecinde bilirkişi incelemesi yapılır ve taşınmazın aynen
taksime uygun olup olmadığı değerlendirilir. Satış kararı verilmesi
halinde satış genellikle açık artırma yoluyla gerçekleştirilir ve
elde edilen bedel paydaşlar arasında pay oranlarına göre
paylaştırılır.

İzale-i şuyu davaları özellikle aile içi miras uyuşmazlıklarında
sıklıkla gündeme gelmektedir. Sürecin doğru yönetilmemesi halinde
taşınmazın gerçek değerinin altında satılması gibi ciddi mağduriyetler
yaşanabilir.

Ortaklığın giderilmesi davasında usul hataları, sürelerin kaçırılması
veya satış aşamasında yapılan yanlışlar telafisi güç sonuçlar
doğurabilir. Bu nedenle dava sürecinin başından itibaren hukuki
destek alınması büyük önem taşır.

Avukat Gamze Yıldırım, ortaklığın giderilmesi (izale-i şuyu) davalarında
müvekkillerinin haklarını korumaya yönelik profesyonel hukuki
danışmanlık ve dava takibi hizmeti sunmaktadır.
    `,
  },
        {
    slug: "ecrimisil-haksiz-isgal-tazminati-davasi",
    title: "Ecrimisil (Haksız İşgal Tazminatı) Davası Nedir?",
    date: "27 Aralık 2024",
    content: `
    Ecrimisil davası, bir taşınmazın malikinin veya paydaşının rızası
olmaksızın taşınmazı kullanan kişiden, haksız kullanım karşılığında
tazminat talep etmesine olanak tanıyan davadır. Uygulamada haksız
işgal tazminatı olarak da adlandırılmaktadır.

Ecrimisil talep edilebilmesi için taşınmazın malikinin kullanım
hakkının ihlal edilmiş olması gerekir. İşgalin kötü niyetli olması
şart değildir; rıza dışı kullanım ecrimisil için yeterlidir.

Bu dava genellikle paylı mülkiyetlerde, miras kalan taşınmazlarda
veya boşanma sonrası kullanım ihtilaflarında gündeme gelmektedir.
Paydaşlardan birinin taşınmazı tek başına kullanması halinde diğer
paydaşlar ecrimisil talebinde bulunabilir.

Ecrimisil bedeli belirlenirken taşınmazın bulunduğu bölge, emsal
kira bedelleri, kullanım süresi ve taşınmazın niteliği dikkate
alınır. Mahkeme tarafından bilirkişi incelemesi yapılarak
tazminat miktarı hesaplanır.

Ecrimisil davası açılmadan önce çoğu durumda ihtarname gönderilmesi
gerekmektedir. İhtarname, haksız kullanımı sona erdirme ve tazminat
talebinin başlangıç tarihini belirleme açısından önemlidir.

Ecrimisil davalarında zamanaşımı süresi kural olarak beş yıldır.
Bu nedenle hak kaybı yaşanmaması adına sürecin zamanında ve doğru
şekilde yürütülmesi büyük önem taşır.

Avukat Gamze Yıldırım, ecrimisil (haksız işgal tazminatı) davalarında
müvekkillerinin mülkiyet haklarını korumaya yönelik hukuki danışmanlık
ve dava takibi hizmeti sunmaktadır.
    `,
  },
];

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const turkishMonths: Record<string, string> = {
  Ocak: "01", Şubat: "02", Mart: "03", Nisan: "04", Mayıs: "05", Haziran: "06",
  Temmuz: "07", Ağustos: "08", Eylül: "09", Ekim: "10", Kasım: "11", Aralık: "12",
};

function toIsoDate(date: string) {
  const [day, month, year] = date.split(" ");
  return `${year}-${turkishMonths[month]}-${day.padStart(2, "0")}`;
}

function toIsoDateTime(date: string) {
  return `${toIsoDate(date)}T00:00:00+03:00`;
}

function getArticleDescription(content: string) {
  return content.trim().replace(/\s+/g, " ").slice(0, 155);
}

/* ✅ STATİK SAYFA ÜRETİMİ (SEO + HIZ) */
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/* ✅ SEO METADATA */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return { title: "Makale Bulunamadı" };
  }

  return createPageMetadata({
    title: article.title,
    description: getArticleDescription(article.content),
    path: `/makaleler/${article.slug}`,
    type: "article",
    publishedTime: toIsoDateTime(article.date),
  });
}



/* ✅ SAYFA */
export default async function MakaleDetayPage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const currentIndex = articles.findIndex((item) => item.slug === article.slug);
  const relatedArticle = articles[(currentIndex + 1) % articles.length];
  const articleUrl = absoluteUrl(`/makaleler/${article.slug}`);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: getArticleDescription(article.content),
    inLanguage: siteConfig.language,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.personName,
      honorificPrefix: "Av.",
      jobTitle: "Avukat",
      url: absoluteUrl("/hakkimizda"),
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#legal-service`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoImage),
        width: 512,
        height: 512,
      },
    },
    datePublished: toIsoDateTime(article.date),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Ana Sayfa", path: "/" },
    { name: "Makaleler", path: "/makaleler" },
    { name: article.title, path: `/makaleler/${article.slug}` },
  ]);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="page-fade-in bg-white">
        <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/makaleler"
              className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e] transition hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
            >
              <span className="h-px w-10 bg-[#c69b66] transition-all group-hover:w-14" aria-hidden="true" />
              Makaleler
            </Link>
            <time
              dateTime={toIsoDate(article.date)}
              className="mt-6 block text-xs font-semibold uppercase tracking-[0.12em] text-[#667487]"
            >
              {article.date}
            </time>
            <h1 className={`${playfair.className} mt-4 max-w-5xl text-4xl font-medium italic leading-tight text-[#10263e] md:text-5xl`}>
              {article.title}
            </h1>
            <p className="mt-5 text-sm text-[#667487]">
              Yazan:{" "}
              <Link
                href="/hakkimizda"
                rel="author"
                className="font-medium text-[#10263e] underline decoration-[#c69b66] underline-offset-4 transition hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
              >
                Avukat Gamze Yıldırım
              </Link>
            </p>
          </div>
        </section>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
            <article aria-label={article.title} className="max-w-3xl">
              <div className="space-y-6 border-t border-[#d6dde3] pt-8">
                {article.content
                  .trim()
                  .split("\n\n")
                  .map((paragraph, index) => {
                    const text = paragraph.trim();
                    const isSectionHeading = text.endsWith(":") && text.length < 120;

                    if (isSectionHeading) {
                      return (
                        <h2
                          key={index}
                          className={`${playfair.className} pt-5 text-2xl font-medium italic leading-tight text-[#10263e] md:text-[1.8rem]`}
                        >
                          {text.slice(0, -1)}
                        </h2>
                      );
                    }

                    return (
                      <p
                        key={index}
                        className={`whitespace-pre-line leading-8 text-[#526273] ${index === 0 ? "text-lg" : "text-base"}`}
                      >
                        {text}
                      </p>
                    );
                  })}
              </div>

              <div className="mt-12 border-y border-[#d6dde3] bg-[#f4f1eb] px-6 py-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">
                  Sonraki Makale
                </p>
                <Link
                  href={`/makaleler/${relatedArticle.slug}`}
                  className="group mt-3 inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
                >
                  <span className={`${playfair.className} text-xl font-medium italic text-[#10263e] transition group-hover:text-[#a97c2e]`}>
                    {relatedArticle.title}
                  </span>
                  <span className="text-[#a97c2e] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <aside className="border border-[#d6dde3] bg-[#f4f1eb] p-6 md:p-7 lg:sticky lg:top-32">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">
                Yazar
              </p>
              <h2 className={`${playfair.className} mt-4 text-2xl font-medium italic leading-snug text-[#10263e]`}>
                <Link
                  href="/hakkimizda"
                  rel="author"
                  className="transition hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
                >
                  Avukat Gamze Yıldırım
                </Link>
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#667487]">
                Ceza Hukuku, Aile Hukuku ve İş Hukuku alanlarında hukuki danışmanlık hizmeti vermektedir.
              </p>
              <p className="mt-4 text-xs leading-6 text-[#7b8794]">
                Bu makale genel bilgilendirme amacıyla hazırlanmıştır; somut hukuki durumlar kendi koşulları içinde değerlendirilmelidir.
              </p>
              <Link
                href="/iletisim"
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#10263e] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#c69b66] hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4"
              >
                İletişime Geç
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/makaleler"
                className="group mt-5 inline-flex items-center gap-2 border-b border-[#c9cfd5] pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
              >
                Tüm Makaleler
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
