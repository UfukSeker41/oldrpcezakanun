const crimes = [
  { category: 'Ağır Suçlar', name: 'Yurda ihanet', code: '1.1', application: 'Federal Mahkeme Kararı', duration: '-', fine: '-', description: 'Devlet sırlarının açıklanması, devlet organlarına karşı ve devlet hizmetlerine karşı sadakatsizlik.' },
  { category: 'Ağır Suçlar', name: 'Anayasanın ihlali', code: '1.2', application: 'Federal Mahkeme Kararı', duration: '30 ay - 45 ay', fine: '-', description: 'Cebir ve şiddet kullanarak Federal Anayasa kanunlarını ortadan kaldırmaya veya düzeni bozmaya teşebbüs.' },
  { category: 'Ağır Suçlar', name: 'Devlet güvenliğine karşı casusluk', code: '1.3', application: 'Federal Mahkeme Kararı', duration: '-', fine: 'CK', description: 'Devlete ait iç/dış bilgilerin niteliği itibari ile temini veya aktarımı.' },
  { category: 'Ağır Suçlar', name: 'Suç örgütü kurmak', code: '1.4', application: 'Federal Mahkeme Kararı', duration: '60 ay - 75 ay', fine: '-', description: 'Kanunlarda suç olarak belirtilen maddeleri yapmak amacıyla örgüt kurmak veya toplu şekilde suç işlemek.' },
  { category: 'Ağır Suçlar', name: 'Suç örgütüne mensup olmak', code: '1.5', application: 'Federal Mahkeme Kararı', duration: '40 ay - 50 ay', fine: '-', description: 'Kanunlarda suç olarak belirtilen maddeleri bir örgüte mensup olarak yapmak.' },
  { category: 'Ağır Suçlar', name: 'Terörizm', code: '1.6', application: 'Federal Mahkeme Kararı', duration: '60 ay - 75 ay', fine: '-', description: 'Cebir ve şiddet kullanarak siyasi, hukuki, sosyal, laik, ekonomik düzeni bozmaya yönelik örgütlenme.' },
  { category: 'Ağır Suçlar', name: 'Cinayet', code: '1.7', application: 'Federal Mahkeme Kararı', duration: '45 ay - 60 ay', fine: '-', description: 'Bir kişiyi kasıtlı bir şekilde planlı ve organize veya plansız bir şekilde öldürmek.' },
  { category: 'Ağır Suçlar', name: 'Cinayet girişimi', code: '1.8', application: 'Federal Hapis', duration: '20 Ay - 30 Ay', fine: '-', description: 'Bir kişiye karşı öldürme girişiminde bulunmak.' },
  { category: 'Ağır Suçlar', name: 'Taksirle adam yaralama', code: '1.9', application: 'Federal Hapis', duration: '20 Ay - 30 Ay', fine: '-', description: 'Taksirle başkasının vücuduna acı verme veya sağlığının bozulmasına neden olma.' },
  { category: 'Ağır Suçlar', name: 'Suikast ve fiili yaralama', code: '1.10', application: 'Federal Mahkeme Kararı', duration: '50 ay - 60 ay', fine: '-', description: 'Bir veya birden fazla kişi ile gelişigüzel olmaksızın planlı eyleme geçme durumu.' },
  { category: 'Ağır Suçlar', name: 'İşkence ve eziyet', code: '1.11', application: 'Federal Hapis', duration: '20 Ay - 25 Ay', fine: '-', description: 'Bir kişiye karşı insan onuruyla bağdaşmayan, bedensel veya ruhsal yönden acı çektirmesi.' },
  { category: 'Ağır Suçlar', name: 'Yasadışı silah ticareti', code: '1.12', application: 'Federal Hapis', duration: '30 Ay - 40 Ay', fine: '-', description: 'Silah ticareti, kaçakçılığı, imalatı, nakledilmesi.' },
  { category: 'Ağır Suçlar', name: 'Yüksek miktarda uyuşturucu ticareti', code: '1.14', application: 'Federal Hapis', duration: '30 Ay - 40 Ay', fine: '-', description: 'Yüksek miktarda uyuşturucunun sivil halka veya örgütlere satılması (100 adet/gram üzeri).' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'Görevi kötüye kullanmak', code: '2.1', application: 'İdari Mahkeme Kararı', duration: '25 ay - 35 ay', fine: '-', description: 'Kamu görevlisinin yetkilerini kullanarak haksız bir menfaat elde etmesi veya kanuna aykırı şekilde kullanması.' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'Rüşvet talep etmek', code: '2.2', application: 'İdari Mahkeme Kararı', duration: '-', fine: 'CK / Perma', description: 'Kamu görevlisinin para veya menfaat temini konusunda teklif/vaatte bulunması.' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'Suç delillerini yok etme/gizleme', code: '2.3', application: 'İdari Mahkeme Kararı', duration: '-', fine: 'CK / Perma', description: 'Kamu görevlisinin delilleri engellemek amacıyla, bir suça ait delilleri yok etmesi, gizlemesi veya değiştirmesi.' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'İrtikap', code: '2.4', application: 'İdari Mahkeme Kararı', duration: '-', fine: 'CK / Perma', description: 'Kamu görevlisinin görevinin sağladığı nüfuzu bir başkasının yarar sağlaması amacıyla kullanması/vaat etmesi.' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'Forcematrix (angajman) genelgesine uymamak', code: '2.5', application: 'İdari Mahkeme Kararı', duration: '-', fine: 'Uzaklaştırma', description: 'Kamu görevlisinin görevini, gerektirdiği ölçünün dışında kuvvet kullanmasıdır.' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'Kamuya ait araç ve ekipmanları kanuna aykırı kullanmak', code: '2.6', application: 'İdari Mahkeme Kararı', duration: '20 ay - 35 ay', fine: '-', description: 'Kamu görevlisine zimmet edilen araç ve ekipmanları kanuna aykırı veya suça karışmak amacıyla kullanması.' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'Kamu görevlisinin suçu bildirmemesi', code: '2.7', application: 'İdari Mahkeme Kararı', duration: '-', fine: 'CK / Perma', description: 'Kamu görevlisinin işlenmekte olan bir suçu yetkili makama bildirmemesi.' },
  { category: 'Kamu İdaresine ve Güvenilirliğine Dair', name: 'Haksız arama', code: '2.8', application: 'İdari Mahkeme Kararı', duration: '-', fine: '$5.000 - $15.000', description: 'Kamu görevlisinin hukuka aykırı olarak bir kimsenin üstünü/eşyasını veya evini araması.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisini öldürme', code: '3.1', application: 'Federal Mahkeme Kararı', duration: '25 ay - 35 ay', fine: '$12,500.00 - $15,000.00', description: 'Kamu görevlisini ateşli silah, bıçak, sopa vb. aletler ile öldürmek.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisini yaralama', code: '3.2', application: 'Federal Hapis', duration: '20 Ay - 30 Ay', fine: '$8,000.00 - $10,000.00', description: 'Kamu görevlisini ateşli silah, bıçak, sopa vb. aletler ile yaralamak.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisini taksirle yaralama', code: '3.3', application: 'Federal Hapis', duration: '25 Ay - 35 Ay', fine: '$5,000.00 - $7,000.00', description: 'Taksirle kamu görevlisinin vücuduna acı veren veya sağlığının ya da algılama yeteneğinin bozulmasına neden olma (İstemsizce).' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisine karşı suikast/cinayet girişimi', code: '3.4', application: 'Federal Hapis', duration: '25 Ay - 30 Ay', fine: '$15,000.00 - $20,000.00', description: 'Kamu görevlisini organize veya organize olmadan öldürmeye teşebbüs.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisine karşı işkence ve eziyet', code: '3.5', application: 'Federal Hapis', duration: '25 Ay - 30 Ay', fine: '$10,000.00 - $15,000.00', description: 'Kamu görevlisine karşı insan onuruyla bağdaşmayan, bedensel veya ruhsal yönden acı çektirilmesi.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisini kaçırma', code: '3.6', application: 'Federal Hapis', duration: '40 Ay - 60 Ay', fine: '$20,000.00 - $40,000.00', description: 'Kamu görevlisini hürriyetinden yoksun bırakma.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisine mukavemet göstermek', code: '3.7', application: 'Kamu Hizmeti', duration: '10 Kamu - 20 Kamu', fine: '$10,000 - $15,000', description: 'Kamu görevlilerine zorluk çıkartmak, işlerini zorlaştırmak, dediklerine uymama.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisini aşağılama', code: '3.8', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '$5,000 - $10,000', description: 'Devlete veya kamu görevlisine karşı aşağılayıcı hal, hareket ve söylemde bulunma.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisine karşı tehdit eylemi gerçekleştirmek', code: '3.9', application: 'Federal Hapis', duration: '15 Hapis - 20 Hapis', fine: '$12,500 - $17,500', description: 'Kamu görevlisini hayatıyla, vücut cinsel dokunulmazlığına yönelik bir saldırı ile tehdit etme.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu görevlisini görevini yapmaması için sabote etmek', code: '3.10', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '$10,000 - $12,500', description: 'Kamu görevlilerinin (Doktor, Polis, Savcı vb.) işlerini yapmaya engel olmaya yönelik eylemde bulunma.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamuya ait araç çalmak', code: '3.11', application: 'Kamu Hizmeti', duration: '5 Kamu - 10 Kamu', fine: '$7,500 - $12,500', description: 'Kamuya ait devlet aracını düz kontak/diğer bir aletle kilit açmak suretiyle aracı almak/kullanmak.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu malına zarar vermek', code: '3.12', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '$7,500 - $12,500', description: 'Kamuya ait yer, bina, tesis, araç veya diğer eşyaya zarar verme.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamuya ait kıyafet/teçhizat ve eşya kullanımı', code: '3.13', application: 'Kamu Hizmeti', duration: '5 Kamu - 10 Kamu', fine: '$10,000 - $15,000', description: 'Kamu görevlilerine atanan mevzuatta belirtilen kıyafet/teçhizat ve eşyanın memurlar dışında kullanılması.' },
  { category: 'Kamuya Karşı İşlenen Suçlar', name: 'Kamu kuruluşlarına izinsiz girmek', code: '3.14', application: 'Kamu Hizmeti', duration: '8 Kamu - 12 Kamu', fine: '$7,500 - $12,500', description: 'Sivillerin girmesi yasak olan bölgelere izinsiz şekilde giriş yapılması.' },
  { category: 'Nitelikli Suçlar', name: 'Kişiyi hürriyetinden alıkoyma (adam kaçırmak)', code: '4.1', application: 'Federal Hapis', duration: '20 Ay - 25 Ay', fine: '-', description: 'Bir kimseyi hukuka aykırı olarak bir yere gitmek veya bir yerde kalmak hürriyetinden yoksun bırakma.' },
  { category: 'Nitelikli Suçlar', name: 'Başkasına ait kimlik/belgeleri kullanmak', code: '4.2', application: 'Kamu Hizmeti', duration: '10 Kamu - 12 Kamu', fine: '$10,000 - $12,500', description: 'Kendisi hakkında soruşturma ve kovuşturma yapılmasını engellemek amacıyla, başkasına ait kimlik veya belge kullanmak.' },
  { category: 'Nitelikli Suçlar', name: 'Sahte belge düzenlemek', code: '4.3', application: 'Kamu Hizmeti', duration: '12 Kamu - 15 Kamu', fine: '$12,500 - $15,000', description: 'Gerçekte var olmayan bir belgeyi, taklit etmek suretiyle kurum veya kuruluşlara sunmak.' },
  { category: 'Nitelikli Suçlar', name: 'Kalpazanlık yapmak (Sahte para basmak)', code: '4.4', application: 'Federal Hapis', duration: '25 Ay - 30 Ay', fine: '-', description: 'Merkez bankası tarafından tedavüle sürülmemiş paraları sahte şekilde üretmek/piyasaya sürmek.' },
  { category: 'Nitelikli Suçlar', name: 'Özel hayatın gizliliğini ihlal etmek', code: '4.5', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$15,000 - $17,500', description: 'Kişinin özel hayatına ilişkin fotoğraf ve seslerin hukuka aykırı olarak paylaşılması.' },
  { category: 'Nitelikli Suçlar', name: 'Cinsel taciz', code: '4.6', application: 'Federal Hapis', duration: '70 Ay - 90 Ay', fine: '-', description: 'Bir kimseyi cinsel amaçlı olarak fiziksel taciz etmek.' },
  { category: 'Nitelikli Suçlar', name: 'Sözlü taciz', code: '4.7', application: 'Federal Hapis', duration: '10 Ay - 15 Ay', fine: '$5,000.00 - $8,000.00', description: 'Bir kimseyi cinsel amaçlı olarak sözlü taciz etmek.' },
  { category: 'Nitelikli Suçlar', name: 'Tecavüz', code: '4.8', application: 'Federal Hapis', duration: 'CK', fine: '-', description: 'Bir kimseye isteği dışında zorla cinsel yaptırımda bulunmak.' },
  { category: 'Nitelikli Suçlar', name: 'Fuhuş', code: '4.9', application: 'Federal Hapis', duration: '30 Kamu - 45 kamu', fine: '$10,000.00 - $15,000.00', description: 'Belli bir ödeme karşılığında cinsel ilişkiye girmek/teşvik etmek.' },
  { category: 'Nitelikli Suçlar', name: 'Hırsızlık', code: '4.10', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$12,500 - $20,000', description: 'Başkasına ait taşınır bir malı, kendisine veya başkasına bir yarar sağlamak maksadıyla bulunduğu yerden alan kimse.' },
  { category: 'Nitelikli Suçlar', name: 'Şantaj', code: '4.11', application: 'Kamu Hizmeti', duration: '25 Kamu - 30 Kamu', fine: '$25,000 - $30,000', description: 'Bir kişinin şeref ve saygınlığına zarar verecek nitelikteki hususların açıklanacağı veya isnat edileceği tehdidinde bulunmak.' },
  { category: 'Nitelikli Suçlar', name: 'Hakaret', code: '4.12', application: 'Kamu Hizmeti', duration: '5 Kamu - 8 Kamu', fine: '$2,000 - $5,000', description: 'Küfür etmek suretiyle bir kimsenin onur, şeref ve saygınlığına dair sözlü saldırı.' },
  { category: 'Nitelikli Suçlar', name: 'Dolandırıcılık', code: '4.13', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$15,000 - $20,000', description: 'Bir kişiye ait malı hileli davranışlar suretiyle kendi veya bir başkası yararına ele geçirmek.' },
  { category: 'Nitelikli Suçlar', name: 'İllegal bahis/kumar oynamak', code: '4.14', application: 'Kamu Hizmeti', duration: '8 Kamu - 12 Kamu', fine: '$4,000 - $8,000', description: 'Resmi kurum veya kuruluşlar dışında, izin verilmemiş bir şekilde bahis/kumar oynamak.' },
  { category: 'Nitelikli Suçlar', name: 'Yasaklı cihaz veya programı kanunsuz kullanmak', code: '4.15', application: 'Kamu Hizmeti', duration: '14 Kamu - 18 Kamu', fine: '$10,000.00 - $12,500.00', description: 'Bir cihazın, programın veya güvenlik kodunun bilişim sistemleri aracılığı ile hukuka aykırı kullanılması.' },
  { category: 'Nitelikli Suçlar', name: 'İllegal madde bulundurmak', code: '4.16', application: 'Kamu Hizmeti', duration: '5 Kamu - 8 Kamu', fine: '$5,000 - $8,000', description: 'Yasa dışı işlerde kullanılabilecek parça madde ya da materyal bulundurma.' },
  { category: 'Nitelikli Suçlar', name: 'Konut dokunulmazlığı ihlali', code: '4.17', application: 'Kamu Hizmeti', duration: '14 Kamu - 18 Kamu', fine: '$10,000 - $15,000', description: 'Bir kimsenin konutuna, konutunun eklentilerine rızasına aykırı olarak girmek.' },
  { category: 'Nitelikli Suçlar', name: 'Mala zarar verme', code: '4.18', application: 'Kamu Hizmeti', duration: '8 Kamu - 12 Kamu', fine: '$7,500 - $10,000', description: 'Bir sivile ait yer, bina, tesis, araç veya diğer eşyaya zarar verme.' },
  { category: 'Nitelikli Suçlar', name: 'Gasp', code: '4.19', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$15,000 - $17,500', description: 'Bir malı karşı tarafın karşı koyamayacağı şekilde ele geçirmek.' },
  { category: 'Nitelikli Suçlar', name: 'Kimlik bulundurmama', code: '4.20', application: 'Kamu Hizmeti', duration: '4 Kamu - 8 Kamu', fine: '$2,000 - $4,000', description: 'Kişiye ait vatandaşlık belgesini üzerinde bulundurmama.' },
  { category: 'Nitelikli Suçlar', name: 'İllegal bahis/kumar organize etmek', code: '4.21', application: 'Federal Mahkeme Kararı', duration: '12 ay - 25 ay', fine: '$10,000.00 - $15,000.00', description: 'Resmi kurum veya kuruluşlar dışında, izin verilmemiş bir şekilde insanlara kumar/bahis oynatmak.' },
  { category: 'Nitelikli Suçlar', name: 'Suça azmettirmek', code: '4.22', application: 'Federal Hapis', duration: '20 Ay - 25 Ay', fine: '$30,000 - $40,000', description: 'Bir kişiye bir şey karşılığı veya zorla suç işlettermek.' },
  { category: 'Nitelikli Suçlar', name: 'Yardım ve yataklık', code: '4.23', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$10,000 - $15,000', description: 'Bir suçluya tutuklanmaması veya delillerin yok edilmesi kapsamında yardım etmek.' },
  { category: 'Nitelikli Suçlar', name: 'Dur ihtarına uymamak', code: '4.24', application: 'Kamu Hizmeti', duration: '8 Kamu - 12 Kamu', fine: '$8,000 - $12,000', description: 'Polis memurunun dur ihtarına uymayarak yaya veya araçla kaçmaya devam etme durumu.' },
  { category: 'Kamu Suçları', name: 'Gürültüye neden olmak', code: '5.1', application: 'Kamu Hizmeti', duration: '5 Kamu - 10 Kamu', fine: '$8,000 - $12,000', description: 'Toplumun yaygın olduğu bölgelerde, insanları rahatsız edecek şekilde yüksek sesli müzik dinlemek veya sesler çıkartmak.' },
  { category: 'Kamu Suçları', name: 'Nefret ve ayrımcılık', code: '5.2', application: 'Kamu Hizmeti', duration: '5 Kamu - 10 Kamu', fine: '$8,000 - $12,000', description: 'Din, dil, ırk, cinsel ayrımında bulunmak veya bu ayrımı nefret biçimine getirmek.' },
  { category: 'Kamu Suçları', name: 'Toplum huzurunu bozmak', code: '5.3', application: 'Kamu Hizmeti', duration: '5 Kamu - 10 Kamu', fine: '$8,000 - $12,000', description: 'Toplumsal barışın ve huzurun bozulmasına neden olacak davranışlar.' },
  { category: 'Kamu Suçları', name: 'Halkı kin ve düşmanlığa tahrik', code: '5.4', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '$12,000 - $15,000', description: 'Halk içindeki kesimleri birbirleri ile ilgili kin ve düşmanlığa sevk etmek.' },
  { category: 'Kamu Suçları', name: 'Sosyal medya magandalığı', code: '5.5', application: 'Kamu Hizmeti', duration: '5 Kamu - 10 Kamu', fine: '$8,000 - $12,000', description: 'Sosyal medya üzerinden kişilere hakaret, tehdit vb. yasal olmayan sözlü ithamlarda bulunmak.' },
  { category: 'Kamu Suçları', name: 'Yasadışı avlanma', code: '5.6', application: 'Kamu Hizmeti', duration: '5 Kamu - 10 Kamu', fine: '$8,000 - $12,000', description: 'Avcılık ruhsatı bulunmadan avcılık yapmak veya ruhsat ile birlikte yasal olmayan bölgede avcılık yapmak.' },
  { category: 'Kamu Suçları', name: 'Suç işlemeye teşvik', code: '5.7', application: 'Federal Hapis', duration: '10 Ay - 15 Ay', fine: '-', description: 'Suç işlemek için alenen bir kişiyi veya toplumun bir kısmını kışkırtmak.' },
  { category: 'Sistematik Suçlar', name: 'Suçu bildirmeme', code: '6.1', application: 'Para Cezası', duration: '5 Kamu - 10 Kamu', fine: '$3,000 - $7,000', description: 'Gördüğü bir suçu kamu görevlilerine bildirmemek.' },
  { category: 'Sistematik Suçlar', name: 'Kamu görevlilerine yalan beyan', code: '6.2', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '-', description: 'Kamu görevlilerine sorgu veya soruşturma sırasında yalan beyanda bulunmak.' },
  { category: 'Sistematik Suçlar', name: 'Asılsız ihbar', code: '6.3', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '-', description: 'Sahte ihbar vererek kamu görevlisini meşgul etmek.' },
  { category: 'Sistematik Suçlar', name: 'Tutuklamadan kaçmak/firar etmek', code: '6.4', application: 'Federal Hapis', duration: '15 Ay - 20 Ay', fine: '-', description: 'Departmanda tutuklu olarak bulunan birisinin nezarethaneden kaçması.' },
  { category: 'Sistematik Suçlar', name: 'Adaleti önlemek', code: '6.5', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$15,000 - $20,000', description: 'İşlenen suçun kovuşturma soruşturma yada yargılama sürecini olumsuz etkileyecek davranışlarda bulunmak.' },
  { category: 'Sistematik Suçlar', name: 'Suç üstlenmek', code: '6.6', application: 'Kamu Hizmeti', duration: '20 Kamu - 30 Kamu', fine: '-', description: 'Gerçeğe aykırı olarak, suçu işlediğini veya suça katıldığını bildirmek.' },
  { category: 'Sistematik Suçlar', name: 'Yalan tanıklık', code: '6.7', application: 'Federal Hapis', duration: '15 Ay - 20 Ay', fine: '-', description: 'Bir soruşturma kapsamında yetkili kişi veya kurula gerçeğe aykırı olarak tanıklık yapan kimse.' },
  { category: 'Sistematik Suçlar', name: 'Suç delillerini yok etme/gizleme', code: '6.8', application: 'Federal Hapis', duration: '20 Ay - 25 Ay', fine: '-', description: 'Gerçeğin açığa çıkmasını engellemek amacıyla, bir suça ait delilleri yok etmesi, gizlemesi veya değiştirmesi.' },
  { category: 'Silahla İlgili Suçlar', name: 'Ruhsatsız silah bulundurmak', code: '7.1', application: 'Hapis Cezası', duration: '25 hapis - 30 hapis', fine: '$30,000.00 - $50,000.00', description: 'Ruhsatsız ateşli silah bulundurmak.' },
  { category: 'Silahla İlgili Suçlar', name: 'Ruhsatlı veya ruhsatsız silah kılıfı bulundurmak', code: '7.2', application: 'Para Cezası', duration: '-', fine: '$15,000 - $20,000', description: 'Ruhsatlı veya ruhsatsız, silah kılıfı ile halka açık bir şekilde gezmek.' },
  { category: 'Silahla İlgili Suçlar', name: 'Toplum içerisinde silah çekmek', code: '7.3', application: 'Kamu Hizmeti', duration: '10 Kamu - 20 Kamu', fine: '$20,000 - $25,000', description: 'Topluma açık bir alanda (sokak, cafe, bar vb.) silah çekmek.' },
  { category: 'Silahla İlgili Suçlar', name: 'Açık bir şekilde ateşli silah taşımak', code: '7.4', application: 'Hapis Cezası', duration: '30 Hapis - 35 Hapis', fine: '$40,000.00 - $60,000.00', description: 'Topluma açık bir şekilde elinde silah taşımak.' },
  { category: 'Uyuşturucu İle İlgili Suçlar', name: 'Yasadışı uyuşturucu imal etmek', code: '8.1', application: 'Kamu Hizmeti', duration: '35 Kamu - 45 Kamu', fine: '$40,000 - $45,000', description: 'Uyuşturucu veya uyarıcı maddeleri imal etmek.' },
  { category: 'Uyuşturucu İle İlgili Suçlar', name: 'Düşük miktarda uyuşturucu ticareti', code: '8.2', application: 'Kamu Hizmeti', duration: '25 Kamu - 30 Kamu', fine: '$25,000 - $30,000', description: 'Düşük miktarda uyuşturucu ticareti (100 adet/gram altı).' },
  { category: 'Uyuşturucu İle İlgili Suçlar', name: 'Uyuşturucu kullanmak/bulundurmak', code: '8.3', application: 'Kamu Hizmeti', duration: '5 Kamu - 8 Kamu', fine: '$5,000 - $8,000', description: 'Yasal sınırın üzerinde uyuşturucu bulundurmak veya kullanmak (3/5 adet/gram serbesttir).' },
  { category: 'Uyuşturucu İle İlgili Suçlar', name: 'Uyuşturucu madde kullanımını kolaylaştırmak', code: '8.4', application: 'Kamu Hizmeti', duration: '15 Kamu - 22 Kamu', fine: '$15,000 - $22,000', description: 'Uyuşturucu veya uyarıcı maddenin topluma yayılmasını kolaylaştırmak (Hediye etmek, dağıtmak vb.).' },
  { category: 'Uyuşturucu İle İlgili Suçlar', name: 'Yasadışı uyuşturucu üretim maddesi bulundurmak', code: '8.5', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$15,000 - $20,000', description: 'Uyuşturucu veya uyarıcı madde imalinde kullanılan madde bulundurmak.' },
  { category: 'Uyuşturucu İle İlgili Suçlar', name: 'Reşit olmayan birisine uyuşturucu satmak veya sağlamak', code: '8.6', application: 'Kamu Hizmeti', duration: '12 Kamu - 18 Kamu', fine: '$12,000 - $18,000', description: 'Resmi olarak 18 yaşın altındaki bireylere uyuşturucu madde satmak veya vermek.' },
  { category: 'Araçlarla İlgili Suçlar', name: 'Çalıntı araç kullanmak', code: '9.1', application: 'Kamu Hizmeti', duration: '8 Kamu - 12 Kamu', fine: '$10,000 - $15,000', description: 'Kendisine ait olmayan aracı araç sahibinin izni olmadan kullanmak.' },
  { category: 'Araçlarla İlgili Suçlar', name: 'Araç çalmaya teşebbüs', code: '9.2', application: 'Kamu Hizmeti', duration: '5 Kamu - 8 Kamu', fine: '$5,000 - $10,000', description: 'Kendisine ait olmayan bir aracı çalmaya teşebbüs etmek.' },
  { category: 'Araçlarla İlgili Suçlar', name: 'Yasadışı yarış düzenlemek', code: '9.3', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$25,000 - $50,000', description: 'Resmi izin ile yapılan kurum veya kuruluşlar dışında yarış düzenlemek.' },
  { category: 'Araçlarla İlgili Suçlar', name: 'Sahte plaka taşımak', code: '9.4', application: 'Kamu Hizmeti', duration: '8 Kamu - 12 Kamu', fine: '$15,000 - $25,000', description: 'Tescili bulunmayan plaka taşımak.' },
  { category: 'Araçlarla İlgili Suçlar', name: 'İllegal modifiye yapmak', code: '9.5', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '$15,000 - $25,000', description: 'Tescilli araca çip, nitro, kamber vb. takmak.' },
  { category: 'Araçlarla İlgili Suçlar', name: 'Taşıtlara zarar vermek', code: '9.6', application: 'Para Cezası', duration: '10 Kamu - 15 Kamu', fine: '$5,000 - $10,000', description: 'Sebepsiz bir şekilde kendisine ait olmayan taşıtlara zarar vermek.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Trafiği tehlikeye sokmak', code: '10.1', application: 'Para Cezası', duration: '-', fine: '$4,000 - $8,000', description: 'Hayasızca araç kullanarak trafiği ve sivillerin canını tehlikeye sokmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Hız ihlali (Şehir içi 120/Şehir dışı 200)', code: '10.2', application: 'Para Cezası', duration: '-', fine: '$5,000 - $10,000', description: 'Kanunda belirtilen hız sınırını aşmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Ehliyetsiz araç kullanımı', code: '10.3', application: 'Kamu Hizmeti', duration: '-', fine: '$15,000 - $22,000', description: 'Ehliyeti olmadan/ehliyeti bulundurmadan araç kullanmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Taşıma sınırı üzerinde yolcu almak', code: '10.4', application: 'Para Cezası', duration: '-', fine: '$3,000 - $5,000', description: 'Aracın kişi sayısına uygun olmayan sayıda yolcu almak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Kırmızı ışık ihlali', code: '10.5', application: 'Para Cezası', duration: '-', fine: '$4,000 - $8,000', description: 'Kırmızı ışıkta durmamak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Hatalı park', code: '10.6', application: 'Para Cezası', duration: '-', fine: '$5,000 - $10,000', description: 'Park yasağı olan veya park bölgesi olmayan yerlere taşıt park etmek.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Ters şeritte araç kullanmak', code: '10.7', application: 'Para Cezası', duration: '-', fine: '$8,000 - $12,000', description: 'Ters şeritte araç kullanmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Hasarlı araç kullanmak', code: '10.8', application: 'Para Cezası', duration: '-', fine: '$12,000 - $18,000', description: 'Pert durumdaki bir araç ile trafiğe çıkmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Trafiğe uygun olmayan araç kullanmak', code: '10.9', application: 'Para Cezası', duration: '-', fine: '$15,000 - $20,000', description: 'Trafiğe uygun olmayan (sinyali, aynası vb. olmayan) araç kullanmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Hatalı sollama', code: '10.10', application: 'Para Cezası', duration: '-', fine: '$2,000 - $5,000', description: 'Tek şeritli veya şerit değişme yasağı olan yolda sollama yapmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Alkollü araç kullanmak', code: '10.11', application: 'Kamu Hizmeti', duration: '10 Kamu - 15 Kamu', fine: '$12,000 - $17,500', description: 'Alkollü şekilde araç kullanmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Kazaya sebebiyet vermek', code: '10.12', application: 'Para Cezası', duration: '-', fine: '$8,000 - $12,000', description: 'Dikkatsiz sürüş sonucunda kazaya sebebiyet vermek.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Seyir halinde telefon kullanmak', code: '10.13', application: 'Para Cezası', duration: '-', fine: '$2,000 - $4,000', description: 'Seyir halindeyken telefonla uğraşmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Kasksız motor kullanmak (Artçı da dahil)', code: '10.14', application: 'Para Cezası', duration: '2 Kamu - 5 Kamu', fine: '$5,000 - $10,000', description: 'Hayati risk açısından kasksız şekilde motor kullanmak veya artçı olmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Emniyet kemerini takmamak', code: '10.15', application: 'Para Cezası', duration: '-', fine: '$3,000 - $5,000', description: 'Hayati risk açısından emniyet kemeri takmamak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Koyu cam filmi', code: '10.16', application: 'Para Cezası', duration: '2 Kamu - 5 Kamu', fine: '$15,000 - $25,000', description: 'Yasal düzenlemeye aykırı (%20’nin üstünde) cam filmi kullanmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Abartı egzoz', code: '10.17', application: 'Para Cezası', duration: '-', fine: '$12,000 - $17,000', description: 'Toplumu rahatsız edecek türde “abartı” egzoz kullanmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Sinyal kullanmadan dönüş yapmak', code: '10.18', application: 'Para Cezası', duration: '-', fine: '$3,000 - $5,000', description: 'Sinyal kullanmadan şerit değiştirmek veya sokak/caddeye giriş yapmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Tescilli aracı plakasız kullanmak', code: '10.19', application: 'Kamu Hizmeti', duration: '10 Kamu - 12 Kamu', fine: '$15,000 - $20,000', description: 'Noter tarafından tescillenen aracı plakasız şekilde kullanmak.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Sahte plaka kullanmak', code: '10.20', application: 'Kamu Hizmeti', duration: '15 Kamu - 20 Kamu', fine: '$15,000 - $25,000', description: 'Sahte plakalı araç sürmek.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Yasal olmayan plaka kullanımı', code: '10.21', application: 'Kamu Hizmeti', duration: '12 Kamu - 18 Kamu', fine: '$12,000 - $18,000', description: 'Devlet araçlarına ait plaka kullanımı.' },
  { category: 'Trafikte İşlenen Suçlar', name: 'Farklı plaka kullanımı', code: '10.22', application: 'Kamu Hizmeti', duration: '12 Kamu - 18 Kamu', fine: '$15,000 - $20,000', description: 'Araca ait olmayan farklı bir plaka kullanmak.' },
  { category: 'Soygun Suçları', name: 'Merkez bankası soygunu', code: '11.1', application: 'Hapis Cezası', duration: '40 hapis - 60 hapis', fine: '$10,000.00 - $15,000.00', description: 'Merkez bankasını soymak veya soymaya teşebbüs etmek.' },
  { category: 'Soygun Suçları', name: 'Kuyumcu soygunu', code: '11.2', application: 'Hapis Cezası', duration: '30 hapis - 50 hapis', fine: '-', description: 'Kuyumcu soymak veya soymaya teşebbüs etmek.' },
  { category: 'Soygun Suçları', name: 'Banka soygunu', code: '11.3', application: 'Hapis Cezası', duration: '30 Hapis - 60 hapis', fine: '-', description: 'Banka soymak veya soymaya teşebbüs etmek.' },
  { category: 'Soygun Suçları', name: 'ATM soygunu', code: '11.4', application: 'Kamu Cezası', duration: '35 kamu - 50 kamu', fine: '-', description: 'ATM soymak veya soymaya teşebbüs etmek.' },
  { category: 'Soygun Suçları', name: 'Ev soygunu', code: '11.5', application: 'Kamu Cezası', duration: '30 Kamu - 45 Kamu', fine: '-', description: 'Ev soymak veya soymaya teşebbüs etmek.' },
  { category: 'Soygun Suçları', name: 'Market soygunu', code: '11.6', application: 'Kamu Cezası', duration: '20 Kamu - 30 Kamu', fine: '-', description: 'Market soymak veya soymaya teşebbüs etmek.' },
  { category: 'Soygun Suçları', name: 'Bobcat soygunu', code: '11.7', application: 'Hapis Cezası', duration: '10 Hapis - 20 Hapis', fine: '-', description: 'Bobcat soymak veya soymaya teşebbüs etmek.' }
];

const categoryColors = {
  'Ağır Suçlar': '#ef4444',
  'Kamu İdaresine ve Güvenilirliğine Dair': '#f97316',
  'Kamuya Karşı İşlenen Suçlar': '#f59e0b',
  'Nitelikli Suçlar': '#22c55e',
  'Kamu Suçları': '#06b6d4',
  'Sistematik Suçlar': '#3b82f6',
  'Silahla İlgili Suçlar': '#ec4899',
  'Uyuşturucu İle İlgili Suçlar': '#a855f7',
  'Araçlarla İlgili Suçlar': '#fbbf24',
  'Trafikte İşlenen Suçlar': '#14b8a6',
  'Soygun Suçları': '#8b5cf6'
};

const summaryGrid = document.getElementById('summaryGrid');
const crimeTableBody = document.getElementById('crimeTableBody');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const totalCrimes = document.getElementById('totalCrimes');

function getSummaryStats(data) {
  const total = data.length;
  const categories = new Set(data.map(item => item.category)).size;
  const toughest = data.filter(item => item.duration.includes('60') || item.duration.includes('75') || item.duration.includes('90')).length;
  const fines = data.filter(item => item.fine !== '-' && !item.fine.includes('CK') && !item.fine.includes('Perma')).length;
  return { total, categories, toughest, fines };
}

function renderSummary(data) {
  const stats = getSummaryStats(data);
  const cards = [
    { label: 'Toplam Suç', value: stats.total, meta: 'Kayıtlı ceza listesi' },
    { label: 'Kategori', value: stats.categories, meta: 'Farklı suç grubu' },
    { label: 'Uzun Ceza', value: stats.toughest, meta: 'Yüksek ceza aralığı' },
    { label: 'Para Cezası', value: stats.fines, meta: 'İdari ve finansal yaptırımlar' },
    { label: 'Kategori Renkleri', value: Object.keys(categoryColors).length, meta: 'Sınıflandırma sistemi' },
    { label: 'Durum', value: 'Aktif', meta: 'Old Roleplay' }
  ];

  summaryGrid.innerHTML = cards
    .map(
      (card, index) => `
        <div class="summary-item">
          <div class="label">${card.label}</div>
          <p class="value">${card.value}</p>
          <div class="meta">${card.meta}</div>
        </div>
      `
    )
    .join('');
}

function getCategoryBadge(category) {
  const color = categoryColors[category] || '#64748b';
  return `
    <span class="category-badge" style="background:${hexToRgba(color, 0.12)}; border-color:${hexToRgba(color, 0.35)}; color:${color};">
      <span class="category-dot" style="background:${color};"></span>
      ${category}
    </span>
  `;
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace('#', '');
  const value = clean.length === 3
    ? clean.split('').map(ch => ch + ch).join('')
    : clean;
  const num = parseInt(value, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderTable(data) {
  totalCrimes.textContent = data.length;

  if (!data.length) {
    crimeTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">Arama kriterlerinize uygun suç kaydı bulunamadı.</td>
      </tr>
    `;
    return;
  }

  crimeTableBody.innerHTML = data
    .map(
      (crime) => `
        <tr>
          <td>${getCategoryBadge(crime.category)}</td>
          <td>
            <div class="crime-name">${crime.code} - ${crime.name}</div>
          </td>
          <td><span class="badge ${crime.application.includes('Federal') ? 'badge-danger' : crime.application.includes('Kamu') ? 'badge-warning' : 'badge-muted'}">${crime.application}</span></td>
          <td>${crime.duration}</td>
          <td>${crime.fine}</td>
          <td>${crime.description}</td>
        </tr>
      `
    )
    .join('');
}

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = crimes.filter((crime) => {
    const matchesSearch = !searchTerm || `${crime.name} ${crime.description} ${crime.code}`.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || crime.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderSummary(filtered);
  renderTable(filtered);
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

renderSummary(crimes);
renderTable(crimes);
