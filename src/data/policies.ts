export interface Policy {
  slug: string;
  code: string;
  title: string;
  intro?: string;
  items: string[];
  closing?: string;
  signature: string;
  date: string;
}

export const policies: Policy[] = [
  {
    slug: "kalite-politikasi",
    code: "POL-002",
    title: "Kalite Politikası",
    items: [
      "Faaliyet gösterdiğimiz sektörde, yapılan uygulamaların zamanında ve ilgili tüm yasal ve sektörel şartlara uygun olarak tamamlanmasını sağlayarak bilinen ve güvenilir bir firma olmak;",
      "Kuruluş olarak misyonumuz, vizyonumuz doğrultusunda, gelişen ve güncel teknolojileri izleyip kullanarak, müşteri beklentilerinin karşılanması amacıyla müşteri odaklılık ve liderlik göstererek, kolay ulaşılabilir ve güvenli hizmetler sunan, sektörümüzde güvenilir ve lider firma olarak hizmet vermek;",
      "Kuruluş kültürünü ve müşteri odaklılığı temel alarak, takım ruhu içerisinde şirket ve bölüm hedeflerine ulaşılması;",
      "İş süreçlerimizin performans ölçümleri, izleme ve analiz ile gözden geçirilerek, performansımızı geliştirecek iyileştirici ve düzeltici yaklaşımların benimsenmesi;",
      "Sürekli iyileştirme yaklaşımı doğrultusunda tüm süreçlerimizdeki verimliliğin uluslararası bağlamda geliştirilmesi;",
      "Kuruluşumuzda ISO 9001:2015, ISO 14001:2015 ve ISO 45001:2018 yönetim sistemlerini standart, mevzuat, yasal, kuruluş ve müşteri şartlarımıza uygun olarak “Entegre Yönetim Sistemi” çatısı altında oluşturma ve uygulamayı, şartlarını sağlayıp sürdürülebilir şekilde dokümante edilmesi, belgelendirilmesi ve sürekli iyileştirilmesi;",
      "Ekip olarak ve kuruluş misyon ve vizyonumuza uygun hareket etmeyi;",
      "Yürürlükteki kanun ve mevzuat şartlarına uygun hareket etmeyi;",
      "Müşterilerimizin ihtiyaç ve beklentilerini anlamayı;",
      "Tüm faaliyetlerimizde müşteri memnuniyetine odaklanmayı;",
      "Satış sonrası hizmetler konusunda en iyi desteği vermeyi;",
      "Faaliyetlerimizin tüm aşamalarında şeffaf ve sürekli iyileştirmeye açık bir yönetim sistemi uygulamayı;",
      "Kalitenin bir ekip işi olduğunun bilinci ile ekip çalışmalarının etkinliğini eğitim çalışmalarıyla destekleyerek çalışanların yetkinliklerinin sürekli gelişimini sağlamayı;",
      "Kalitemizi arttırırken, fiyat performans açısından pozitif ürünleri müşterilerimizin tam istediği zamanda sunarak rakiplerimiz arasında tercih edilebilir olmayı;",
      "Çevresel etkenleri ve ürün yaşam döngülerini belirleyip izlemeyi;",
      "Çalışanlarımızın sağlığı ve işyerinin güvenliğini sağlamak amacıyla gerekli tüm tedbirleri almayı ve daima her türlü olumsuz duruma karşı hazırlıklı olmayı;",
      "Kalite, Çevre ve İSG yönetim sistemlerinin üst seviye entegrasyonu olan Entegre Yönetim Sistemini planlar ve uygularken risk temelli düşünmeyi benimsemeyi;",
      "Üst yönetim olarak entegre yönetim sistemine müşteri odaklılık çerçevesinde liderlik etmeyi ve liderliği tüm çalışanlarımız arasında desteklemeyi;",
      "Kuruluşumuz içerisinde ve dışındaki iş süreçlerimizde liderliğin cesaretlendirilmesi, çalışanlarımızın yetkinliklerini artıracak eğitimlerin planlanması, gerçekleştirilmesi ve sürdürülmesini;",
      "Faaliyetlerimizi Çevre, İş Sağlığı ve Güvenliği Yönetim Sistemleri ile birlikte bütünleşik bir şekilde yöneterek, demiryolu ve enerji sektöründe kalite açısından öncülüğümüzle örnek bir kuruluş olmak amacıyla tüm gereklilikleri geliştirerek yerine getirmeyi",
    ],
    closing: "kalite politikamız olarak taahhüt ederiz.",
    signature: "Genel Müdür",
    date: "01.05.2025",
  },
  {
    slug: "cevre-ve-isg-politikasi",
    code: "POL-001",
    title: "Çevre ve İSG Politikası",
    intro:
      "Kuruluş olarak “sürdürülebilir kalkınma” kavramı temelinden yola çıkarak tüm faaliyetlerimizden dolayı meydana gelen çevresel etkileri minimize etmek ve çevrenin korunmasına katkıda bulunabilmek amacı ile çalışmalarımıza yön vermekteyiz. Bu vizyondan hareketle kendimizi yenilemekte ve aşağıdaki ilkeleri benimsemekteyiz:",
    items: [
      "Sektörümüz için çevre ve iş sağlığı ve güvenliği ile ilgili tüm yasal mevzuat ve diğer yükümlülüklere uymayı;",
      "Çevre ve İSG yönetim sistemlerini oluşturmak, uygulamak ve sürekli iyileştirmeyi;",
      "Tesislerimizden kaynaklanan atıkları kaynağında azaltmaya çalışmak ve mümkün olduğunca geri kazanımını sağlamayı;",
      "Gelişen teknolojiyi takip edip tesislerimizin verimliliğini en üst seviyede tutarak kayıpları azaltmayı;",
      "Sürekli iyileştirme çalışmalarımız sonucu doğal kaynak kullanımını minimize etmeyi;",
      "Tüm çalışanlarımızı ve ilişkide olduğumuz tüm şahıs ve şirketleri çevre ve iş sağlığı güvenliği konularında bilinçlendirmeyi;",
      "İSG ve çevre performansımızı sürekli arttırmak ve yeni yatırımlarımızda iş güvenliği ve çevresel etkileri göz önünde bulundurmayı;",
      "Tüm iş kazaları, meslek hastalıkları, çevresel zararları ve uygunsuzlukları engelleme odaklı entegre yönetim sistemi kurmayı ve sürekli geliştirmeyi;",
      "Yürürlükte bulunan yasal gereksinimlere uymayı;",
      "Ölçülebilen performans göstergeleri oluşturarak düzenli denetimlerle izlemeyi;",
      "Gözle görülür bir liderlik ve net bir sorumluluk gerektiren destekleyici kuruluş kültürü oluşturmayı;",
      "Risk ve gereksinimleri belirleyip acil durum prosedürlerini düzenli güncellemeyi;",
      "Paydaşlarımız ile etkin bir iletişim kurarak belirlenen amaçlara tüm çalışanların güvenli davranışları ve katkılarıyla ulaşabileceği bilincini yaygınlaştırmayı taahhüt ederiz.",
    ],
    closing:
      "Kuruluş çalışanlarımızla ekip olarak bu politikanın gerekliliklerini ve çevresel ve iş sağlığı güvenliği sorumluluklarımızı yerine getirmek için çalışmalarımıza ve yatırımlarımıza sürekli devam edeceğimizi, yukarıda belirtilen ilkeler ışığında işimizi sürekli geliştirmeyi, iyileştirmeyi, yasal, müşteri ve diğer şartlara uymayı taahhüt ederiz.",
    signature: "Genel Müdür",
    date: "01.05.2025",
  },
];

export const getPolicy = (slug?: string) => policies.find((p) => p.slug === slug);
