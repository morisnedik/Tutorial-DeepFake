// Course content data
const contentData = {
  'pengantar': {
    title: 'Pengantar Kursus',
    hasVideo: false,
    videoSource: 'videos/intro.mp4',
    content: `
     <div class="content-section-title">INTRODUCTION</div>
    <div class="content-card">
      <h4>Apa Itu Deepfake?</h4>
      <p>Deepfake adalah gabungan kata “deep learning” dan “fake”, yang berarti konten palsu yang dibuat dengan bantuan kecerdasan buatan. Teknologi ini memungkinkan komputer untuk menghasilkan video, gambar, atau suara seseorang secara realistis, bahkan jika orang tersebut tidak pernah mengucapkan atau melakukan hal itu.<br>
      Dengan model generatif seperti Veo 3 , sistem mampu membuat video manusia yang tampak alami — mulai dari ekspresi wajah, pergerakan bibir, hingga nada suara. Di sisi lain, platform MiniMax.io memungkinkan seseorang untuk meniru suara asli hanya dari potongan rekaman pendek.<br>
      Deepfake bukan lagi sekadar eksperimen sains — kini menjadi fenomena sosial, budaya, dan keamanan digital yang harus dipahami bersama.</p>
    </div><br>
      <div class="content-section-title">Teknologi yang Digunakan (Studi Kasus)</div>
      <div class="content-card">
        <h4>Google Veo 3</h4>
        <p>Google Veo 3 adalah generator video berbasis kecerdasan buatan (AI) yang dapat mengubah deskripsi teks menjadi video berkualitas tinggi, lengkap dengan suara, efek, dan gaya sinematik, sehingga memudahkan kreator untuk membuat konten tanpa perlu keahlian editing video yang ekstensif. Model AI ini mampu menghasilkan video dengan resolusi hingga 1080p atau lebih, dan dapat memahami perintah teks yang kompleks untuk mengontrol elemen visual dan narasi secara mendalam</p>
    <button style="background-color: #2563eb; 
         color: white; 
         padding: 10px 20px; 
         border: none; 
         border-radius: 6px; 
         cursor: pointer; 
         font-size: 16px; 
         font-weight: bold;
         margin: 20px 0;" onclick="window.open('https://gemini.google.com/', '_blank')">
  Kunjungi Google Veo 3
</button>
        </div>
       <div class="content-card">
        <h4>MiniMax.io (Voice Clone)</h4>
        <p>Platform voice cloning berbasis AI yang memungkinkan pembuatan model suara menyerupai seseorang dengan sangat akurat. Teknologi ini bisa digunakan untuk asisten suara, dubbing, atau aksesibilitas, namun juga rentan terhadap penyalahgunaan seperti penipuan berbasis suara.</p>
       <button style="background-color: #2563eb; 
         color: white; 
         padding: 10px 20px; 
         border: none; 
         border-radius: 6px; 
         cursor: pointer; 
         font-size: 16px; 
         font-weight: bold;
         margin: 20px 0;" onclick="window.open('https://www.minimax.io/', '_blank')">
  Kunjungi Minimax.io
</button>
        </div><br>
       <div class="content-section-title">Sejarah dan Perkembangan Deepfake</div>
      <div class="content-card">
       
        <p>Awal mula deepfake muncul sekitar tahun 2017, ketika komunitas pengembang di Reddit mulai bereksperimen dengan face-swapping menggunakan jaringan saraf tiruan (neural networks).<br>Sejak saat itu, kemampuan deepfake berkembang pesat. Kini, dengan hadirnya model besar seperti Veo 3, deepfake bukan hanya tentang mengganti wajah, tapi juga menciptakan seluruh adegan video yang belum pernah terjadi.Sejak saat itu, kemampuan deepfake berkembang pesat. Kini, dengan hadirnya model besar seperti Veo 3, deepfake bukan hanya tentang mengganti wajah, tapi juga menciptakan seluruh adegan video yang belum pernah terjadi.<br>Voice cloning juga berkembang dari sekadar sintetis suara robotik menjadi tiruan suara manusia yang hampir sempurna, berkat kemajuan speech synthesis dan neural vocoder seperti yang digunakan oleh MiniMax. </p>
      </div><br>

      <div class="content-section-title">Dampak dan Risiko Deepfake</div>
     <p>Teknologi ini memiliki dua sisi — inovasi dan ancaman.</p>
      <div class="content-card">
       <h4>Dampak Positif</h4>
        <p>1. Digunakan dalam industri film untuk efek visual dan restorasi wajah aktor.<br>2. Membantu pendidikan dan simulasi interaktif.<br>3. Memungkinkan orang dengan disabilitas suara untuk “berbicara” melalui AI.</p>
      </div>
      <div class="content-card">
       <h4>Risiko dan Bahaya</h4>
        <p>1. Misinformasi: Video palsu dapat digunakan untuk menyebarkan berita bohong atau propaganda.<br>2. Kejahatan Siber: Voice clone bisa dimanfaatkan untuk penipuan identitas atau social engineering.<br>3.	Pelanggaran Privasi: Identitas digital seseorang bisa disalahgunakan tanpa izin.<br>4.	Etika dan Hukum: Banyak negara belum memiliki regulasi jelas untuk mengontrol penyebaran deepfake.</p>
      </div><br>
            <div class="content-card">
       <h4>Mengapa Kita Perlu Peduli?</h4>
        <p>Di era digital, kebenaran visual dan suara tidak lagi bisa dipercaya sepenuhnya. Kemampuan untuk membedakan mana yang nyata dan mana yang palsu kini menjadi keterampilan penting. Melalui website ini, kamu akan belajar tidak hanya cara kerja deepfake, tapi juga bagaimana melindungi diri dan lingkungan digitalmu dari penyalahgunaan teknologi ini.
</p>
      </div><br>

      <div class="content-section-title">Tujuan Pembelajaran Website</div>
      <div class="content-card">
       <p>Website interaktif ini dirancang agar pengguna dapat:<br>
       1. Memahami konsep dasar dan teknologi di balik deepfake.<br>
       2.	Melihat bagaimana deepfake dapat “menyerang” kepercayaan publik (How to Attack).<br>
       3.	Mempelajari strategi dan teknologi untuk mendeteksi serta mencegah deepfake (How to Defend).<br>
       4.	Melakukan simulasi aman untuk memahami proses dan dampaknya secara langsung (Hands On).</p>
        </div><br>

 <div class="content-card">
 <h4>Etika Penggunaan</h4>
       <p>Sebelum melangkah ke tahap selanjutnya, penting untuk diingat:<br>
       Teknologi deepfake bukan untuk disalahgunakan, melainkan untuk dipahami, diteliti, dan dikendalikan agar tidak merugikan orang lain.<br>
      Dengan pengetahuan yang tepat, kita bisa mengubah deepfake dari ancaman menjadi alat edukasi dan kreativitas yang bertanggung jawab.<br>
       </p>
        </div><br>
    `
  },
  'attack-deepfake': {
    title: 'Membuat DeepFake',
    content: `
      <div class="content-section-title">Memahami Proses Pembuatan DeepFake</div>
      <div class="content-card">
        <h4>⚠️ Disclaimer</h4>
        <p>Materi ini bertujuan edukatif untuk memahami cara kerja deepfake agar dapat mempertahankan diri dengan lebih baik.</p>
      </div>
      <div class="content-card">
        <h4>Step by Step Tutorial</h4>
        <p>1. Identifikasi Target yang ingin menjadi sasaran penipuan; usahakan target adalah orang yang kurang mahir menggunakan perangkat, orang yang lebih tua, atau orang yang memiliki pengaruh yang signifikan.</p>
        <img src="/Image/target.png" alt="target" width="200" padding="10px">
        <br>
        <p>2. Cari informasi tentang target, termasuk nomor telepon, media sosial, foto, dan suara wajah, serta kerabat dekat.</p>
        <br>
        <p>3. Setelah data dikumpulkan, buatlah video palsu dengan menggunakan foto target yang cukup realistis untuk menghindari pengamatan kasat mata korban.</p>
        <br>
        <p>4. Dengan menggunakan AI Google Veo3 di Google Gemini, data berupa foto dapat diubah menjadi video yang cukup realistis. Untuk melakukan ini, pilih opsi Video pada tombol alat Google Gemini, lalu masukkan satu foto dengan proporsi yang cukup untuk dapat dibuat sebagai video Deepfake.</p>
        
          <button style="background-color: #2563eb; 
          color: white; 
          padding: 10px 20px; 
          border: none; 
          border-radius: 6px; 
          cursor: pointer; 
          font-size: 16px; 
          font-weight: bold;
          margin: 20px 0;" onclick="window.open('https://gemini.google.com/', '_blank')">
          Kunjungi Google Veo 3
        </button>

        <p>5. Untuk mengurangi kesalahan pada video yang dibuat, masukkan prompt yang jelas dan gunakan kata-kata baku. Sebagai contoh, "Buatlah video berdasarkan foto yang saya berikan, lalu buatlah dia mengatakan narasi berikut menggunakan bahasa indonesia, "Saya Aril, dan menurut saya kebijakan presiden adalah kebijakan yang bodoh."</p>
        <br>
      <div style=" margin: 0 0 0 200px;">
        <video width="720" height="300"controls src="videos/Deepfake.mp4"></video>
      </div>
        <br>
        <p>6. Setelah video dibuat, gunakan sampel suara asli target yang didapat dari video atau voice note target untuk dimasukkan ke dalam AI Minimax.io untuk menghasilkan cloning suara target yang realistis.</p>
        
          <button style="background-color: #2563eb; 
          color: white; 
          padding: 10px 20px; 
          border: none; 
          border-radius: 6px; 
          cursor: pointer; 
          font-size: 16px; 
          font-weight: bold;
          margin: 20px 0;" onclick="window.open('https://www.minimax.io/', '_blank')">
          Kunjungi Minimax.io
        </button>
        
        <p>7. Pada laman website Minimax.io kita gunakan alat "Minimax Speech 2.5" kemudian pilih AI Tools "Voice CLone" lalu masukkan sample suara sebanyak-banyaknya dengan minimal durasi 10 detik agar suara cloning yang dihasilkan cukup realistis, kemudian sesuaikan pengaturan voice cloningnya sesuai dengan kualitas sample suara yang didapat, lalu klik generate untuk menghasilkan voice cloning yang kita dapat gunakan.</p>
        <br>
        <p>8. Klik pada Voice Library, dan gunakan voice cloning yang sudah kita generate tadi. Masukkan narasi yang sama dengan narasi pada proses pembuatan video deepfake dan generatelah beberapa Voice clone</p>
        <br>
        <div style=" margin: 0 0 0 200px;">
        <video width="720" height="300" controls src="videos/VoiceClone.mp4"></video>
        </div><br>
        <p>9. Setelah video dan voice cloning berhasil di generate, kemudian gabungkan dan poles video dan voice clone yang tadi menggunakan software editing (CapCut, Adobe Premiere Pro, Filmora, dsb).</p>
        <br>
        <p>10. Lalu sebarkan luaskan video yang sudah kita hasilkan tadi ke social media, maupun ke grup-grup untuk menyerang pribadi target kita.</p>
        <br><div style=" margin: 0 0 0 200px;">
        <video width="720" height="300" controls src="videos/Finishing.mp4"></video>
</div>
        </a>
    `
  },
  'defense-detection': {
    title: 'Pertahanan Pribadi (Individu)',
    content: `
      <div class="content-section-title">Pertahanan Pribadi (Individu)
      <p> Terdiri dari :<br>1. Membangun Sikap Skeptis Sehat<br>2. Verifikasi Ganda (Double Verification)<br>3. Amankan Jejak Digital (Digital Footprint Protection)<br>4. Literasi Digital Pribadi (Digital Literacy for Defense)</p></div>
      <div class="content-card">
        <h3>Membangun Sikap Skeptis Sehat</h3>
        <img src="Image/skeptik.jpg" alt="skeptik" width="200">
        <p>Sikap skeptis sehat adalah kemampuan untuk tidak langsung percaya pada setiap informasi yang kita lihat atau dengar, terutama dalam bentuk video dan audio yang terlihat meyakinkan. Di era deepfake, sikap ini menjadi pertahanan pertama yang paling penting, karena teknologi bisa membuat sesuatu yang palsu tampak sangat nyata.</p><br>
        <h4>Mengapa Sikap Skeptis Penting?</h4>
        <p>• Deepfake dirancang untuk menipu mata dan telinga kita. Semakin canggih teknologinya, semakin sulit membedakan mana yang asli dan palsu hanya dengan melihat sekilas.<br>
           • Otak manusia cenderung percaya pada visual. Secara psikologis, kita lebih mudah terpengaruh oleh sesuatu yang kita lihat dengan mata kepala sendiri dibandingkan hanya teks atau cerita. Deepfake memanfaatkan kelemahan alami ini.<br>
           • Banyak kasus penipuan berhasil karena korban “percaya dulu, berpikir belakangan.” Dengan skeptis, kita memberi diri kita waktu untuk berpikir kritis sebelum bereaksi.</p>
           <br>
        <h4>Langkah Praktis untuk Menerapkan Skeptis Sehat</h4>
        <p>1. Jangan langsung percaya pada kesan pertama.<br>
          Jika sebuah video terlihat mengejutkan atau membuat emosi memuncak (misalnya marah, takut, atau senang berlebihan), berhenti sejenak. Ingat bahwa deepfake sering dibuat untuk memancing reaksi cepat.<br>
           2. Selalu ajukan pertanyaan sederhana:<br>
             • Dari mana sumber video ini?<br>
             • Apakah diunggah di akun resmi atau hanya disebarkan lewat grup WhatsApp/Telegram<br>
             • Adakah media besar atau sumber terpercaya lain yang juga memberitakan hal ini?<br>
           3. Periksa konsistensi informasi.<br>  Deepfake kadang punya detail kecil yang tidak konsisten. Misalnya: pencahayaan wajah berbeda dengan latar belakang, gerakan bibir tidak sesuai suara, atau suara terasa datar dan tanpa emosi.<br>
           4. Bandingkan dengan rekam jejak.<br>  Kalau seseorang dalam video mengatakan sesuatu yang tidak sesuai dengan kepribadiannya, gaya bicaranya, atau pendapatnya sebelumnya, anggap itu sebagai tanda mencurigakan.<br>
           5. Berhati-hati dengan “urgensi palsu.”<br>  Banyak penipuan deepfake meniru suara atasan atau kerabat yang meminta kita segera melakukan sesuatu, seperti transfer uang atau membagikan data pribadi. Skeptis sehat berarti tidak terburu-buru, tapi memeriksa kebenarannya terlebih dahulu.</p>
           <br><h4>Cara Membiasakan Diri</h4>
           <p>• Jadikan pertanyaan “Apakah ini benar?” sebagai refleks alami setiap kali melihat konten mencurigakan.<br>
           • Diskusikan dengan teman atau rekan kerja sebelum menyebarkan informasi.<br>
           • Ikuti akun atau media yang sering melakukan fact-checking agar terbiasa dengan pola klarifikasi.<br>
          <br> <h4>Dengan membangun sikap skeptis sehat, kita tidak berarti menjadi orang yang selalu curiga berlebihan. Bedanya, skeptis sehat adalah menunda kepercayaan sampai ada bukti atau verifikasi tambahan. Sikap ini bisa menjadi perisai pertama dalam melawan serangan deepfake.</h4>
      </div><br>

      <div class="content-card">
        <h3>Verifikasi Ganda (Double Verification)</h3>
        <img src="Image/verifikasi.jpg" alt="verif" width="200">
        <p>Jika sikap skeptis sehat adalah rem pertama agar kita tidak langsung percaya, maka verifikasi ganda adalah rem kedua untuk memastikan kebenaran informasi sebelum bertindak. Prinsipnya sederhana: jangan pernah membuat keputusan penting hanya berdasarkan satu sumber, apalagi berupa video atau suara yang bisa dipalsukan.</p><br>
        <h4>Mengapa Perlu Verifikasi Ganda?</h4>
        <p>• Deepfake tampak sangat meyakinkan. Kadang mata dan telinga kita tidak cukup untuk mendeteksi kejanggalan.<br>
           • Serangan sering memanfaatkan rasa percaya. Misalnya, suara bos atau video orang dekat yang tampak asli bisa membuat kita lengah.<br>
           • Verifikasi ganda menutup celah “reaksi cepat.” Banyak penipuan berhasil karena korban merasa harus segera menuruti permintaan.</p><br>
        <h4>Bentuk-Bentuk Verifikasi Ganda</h4>
        <p>1. Melalui Jalur Komunikasi Berbeda<br>Kalau dapat instruksi lewat video call, konfirmasi ulang lewat telepon resmi atau email. Jangan gunakan jalur yang sama, karena penyerang bisa sudah menguasai kanal itu.<br>
        2. Melalui Pihak Kedua (Two-Person Rule)<br>ntuk keputusan penting, minta persetujuan lebih dari satu orang. Contoh: transaksi finansial besar harus disetujui minimal oleh dua pejabat.<br>
        3. Dengan Dokumen Pendukung<br>Jangan hanya percaya suara/video. Minta bukti tertulis atau dokumen resmi yang bisa dilacak asal-usulnya. Periksa apakah dokumen menggunakan tanda tangan digital atau stempel resmi.<br>
        4. Gunakan “Kode Rahasia” atau Verifikasi Manual<br>Di beberapa organisasi, dibuat kode khusus yang hanya diketahui orang dalam. Jika ada instruksi mendesak, penerima bisa meminta pengirim menyebutkan kode itu untuk memastikan keaslian.</p><br>
        <h4>Kebiasaan yang Bisa Dibangun</h4>
        <p>1. Biasakan konfirmasi ulang. Anggap wajar untuk selalu mengecek kebenaran informasi.<br>
        2. Gunakan daftar kontak resmi. Simpan nomor/email resmi orang penting supaya tidak mudah terkecoh.<br>
        3. Ajarkan orang sekitar. Ingatkan keluarga, teman, atau rekan kerja bahwa instruksi via media digital harus selalu diverifikasi ulang.<br>
        4. Jangan takut dianggap “ribet.” Lebih baik ribet sebentar daripada menyesal karena tertipu.</p><br>
        <h4>Dengan verifikasi ganda, kita membuat lapisan keamanan ekstra yang sangat sulit ditembus oleh penyerang. Deepfake bisa menipu mata dan telinga, tapi biasanya akan gagal jika diuji lewat lebih dari satu jalur.</h4></div>
     <br>
      <div class="content-card">
        <h3>Amankan Jejak Digital (Digital Footprint Protection)</h3>
        <img src="Image/foot.png" alt="foot" width="200">
        <p>Jejak digital adalah semua data yang kita tinggalkan di internet: foto, video, rekaman suara, komentar, bahkan metadata yang sering tidak kita sadari. Semakin banyak jejak digital yang tersebar, semakin mudah bagi pembuat deepfake untuk memanfaatkan data itu sebagai “bahan baku” untuk memalsukan kita.<br>Deepfake tidak bisa dibuat dari “kekosongan.” Ia butuh data pelatihan berupa foto wajah, rekaman suara, atau video target. Artinya, semakin banyak data kita yang tersedia, semakin mudah kita jadi korban.</p><br>
        <h4>Kenapa Jejak Digital Perlu Diamankan?</h4>
        <p>1. Bahan Deepfake = Foto/Video Publik.<br>Banyak deepfake dibuat dari foto profil media sosial, video TikTok, atau rekaman suara dari podcast.<br>
          2. Data Lama Tetap Berbahaya.<br>Foto/video lama (misalnya dari tahun sekolah) tetap bisa dipakai karena algoritma AI tidak peduli umur data.<br>
          3. Jejak Tak Terlihat (Metadata).<br>Foto dan video sering menyimpan metadata (lokasi, waktu pengambilan, perangkat). Penyerang bisa pakai ini untuk memperkuat kredibilitas deepfake.</p><br>
        <h4>Cara Mengamankan Jejak Digital</h4>
        <p>1. Batasi Unggahan Pribadi<br>Jangan sering unggah video panjang dengan wajah jelas, terutama di platform terbuka. Gunakan akun pribadi untuk konten personal, jangan selalu dipublikasikan.<br>
        2. Gunakan Watermark pada Konten Resmi<br>Kalau membuat video penting (misalnya presentasi kampus/perusahaan), tambahkan watermark atau logo. Watermark membantu membedakan konten asli dengan versi palsu.<br>
        3. Kontrol Privasi Media Sosial<br>Setel akun pribadi menjadi private. Batasi siapa saja yang bisa melihat unggahan lama. Hapus atau arsipkan posting lama yang tidak perlu.<br>
        4. Cek Metadata File<br>Sebelum unggah foto/video, periksa apakah ada metadata lokasi (GPS) yang ikut terbawa. Gunakan tools atau aplikasi untuk menghapus metadata sebelum diposting.<br>
        5. Waspada dengan “Challenge” Online<br>Tren seperti “10 years challenge” atau filter wajah bisa jadi ladang emas bagi pembuat deepfake karena menyediakan dataset wajah dengan berbagai ekspresi dan sudut. Tidak semua challenge harus diikuti, terutama yang mengharuskan kita memberi banyak data wajah.<br>
        6. Gunakan Enkripsi dan Penyimpanan Aman<br>Simpan rekaman pribadi di tempat yang aman (misalnya penyimpanan terenkripsi). Hindari berbagi file pribadi melalui aplikasi chat yang tidak aman.</p><br>
        <h4>Kebiasaan yang Bisa Dibangun</h4>
        <p>1. Rutin cek “Google Yourself”: ketik nama sendiri di mesin pencari untuk tahu apa saja yang sudah bocor ke publik.<br>
        2. Bersihkan unggahan lama yang tidak penting.<br>
        3. Selalu berpikir dua kali sebelum posting: “Apakah saya nyaman kalau video ini dipakai orang lain untuk tujuan buruk?”<br>
        4. Gunakan aplikasi keamanan untuk memantau jika data atau foto kita tersebar di web gelap (dark web monitoring).</p><br>
        <h4>Dengan mengamankan jejak digital, kita memperkecil peluang bagi pembuat deepfake untuk menggunakan identitas kita. Mungkin tidak bisa 100% menghilangkan risiko, tapi setidaknya kita tidak memberi mereka “bahan gratis.”</h4></div>
     <br>
        <div class="content-card">
        <h3>Literasi Digital Pribadi (Digital Literacy for Defense)</h3>
        <img src="Image/literasi.jpg" alt="literasi" width="200">
        <p>Literasi digital bukan hanya soal bisa menggunakan gadget atau aplikasi, tapi juga kemampuan memahami, menganalisis, dan mengevaluasi informasi digital secara kritis.
<br>Dalam konteks deepfake, literasi digital adalah “tameng mental” yang membuat kita tidak mudah tertipu walau kontennya terlihat sangat meyakinkan.</p><br>
        <h4>Kenapa Literasi Digital Penting untuk Lawan Deepfake?</h4>
        <p>1. Deepfake mengandalkan kebodohan digital.<br>Kalau orang tidak tahu bahwa video bisa dipalsukan, maka mereka akan mudah percaya.<br>
          2. Hoaks menyebar lebih cepat daripada klarifikasi.<br>Banyak orang menyebarkan video palsu tanpa memverifikasi, karena tidak punya kebiasaan literasi digital.<br>
          3. Literasi digital = imunisasi informasi.<br>Sama seperti vaksin melindungi tubuh, literasi digital melindungi pikiran dari manipulasi.</p><br>
        <h4>Cara Melatih Literasi Digital Sehari-hari</h4>
        <p>1. Ikut Komunitas atau Pelatihan<br>Banyak organisasi dan kampus menyediakan workshop tentang hoaks digital, keamanan siber, atau penggunaan AI.<br>
        2. Ikuti Sumber Edukasi yang Kredibel<br>Contoh: Cek Fakta Kompas, Mafindo (Masyarakat Anti Fitnah Indonesia), turnbackhoax.id. Sumber internasional: Snopes, FactCheck.org, Bellingcat.<br>
        3. Biasakan Diskusi Kritis<br>Kalau dapat video mengejutkan, diskusikan dengan teman/keluarga: “Kira-kira masuk akal nggak ya?”Diskusi ini membantu kita melatih otak agar tidak mudah termakan sensasi.<br>
        4. Belajar dari Kasus Nyata<br>Baca berita kasus deepfake yang sudah terjadi. Pahami pola bagaimana penipuan terjadi, supaya kita lebih siap kalau mengalaminya.<br>
        5. Tingkatkan Kemampuan Teknis Dasar<br>Belajar cara cek metadata file. Kenali tools sederhana untuk mendeteksi manipulasi foto/video. Paham dasar-dasar keamanan akun (password kuat, 2FA, dll).<br>
        </p><br>
        <h4>Kebiasaan Literasi yang Perlu Ditanamkan</h4>
        <p>1. Selalu skeptis dulu, baru percaya kalau ada bukti.<br>
        2. Jangan buru-buru share hanya karena emosi.<br>
        3.Rajin belajar perkembangan teknologi baru (misalnya, tren AI dan deepfake).<br>
        4.Jadikan literasi digital sebagai budaya sehari-hari, bukan sekadar pelajaran sesaat.</p><br>
        <h4>Dengan literasi digital pribadi, kita membangun kebal informasi palsu. Deepfake bisa terlihat nyata, tapi orang yang punya literasi tinggi akan tetap bertanya, meneliti, dan mencari kebenaran sebelum percaya atau bertindak.</h4></div>
     
    `
  },
  'defense-voice': {
    title: 'Pertahanan Organisasi (Institusi/Kampus/Perusahaan)',
    content: `
      <div class="content-section-title">Pertahanan Organisasi (Institusi/Kampus/Perusahaan)</div>
      <div class="content-card">
        <h3>Kebijakan & SOP (Standar Operasional Prosedur)</h3>
         <img src="Image/SOP.jpg" alt="SOP" width="200">
        <h4>Kenapa SOP Penting?</h4>
        <p>Deepfake sering digunakan untuk social engineering: meniru pimpinan untuk memerintahkan bawahan melakukan sesuatu. Jika organisasi tidak punya aturan baku, karyawan bisa panik dan langsung menuruti perintah palsu.</p><br>
        <h4>Langkah-langkah yang Bisa Dibuat Organisasi:</h4>
        <p>1. Multi-Approval untuk Transaksi Penting<br>Tidak boleh ada transfer dana besar yang dilakukan hanya dengan perintah satu orang. Wajib ada persetujuan dari minimal 2 orang pejabat (contoh: manager + direktur).<br>
        2. Larangan Bertindak Hanya Berdasarkan Video/Audio<br>Instruksi penting harus disertai dokumen tertulis resmi, tanda tangan digital, atau pertemuan tatap muka. Video call atau voice note tidak boleh jadi satu-satunya dasar keputusan.<br>
        3. Penggunaan MFA (Multi-Factor Authentication)<br> Semua akses sistem internal wajib pakai OTP atau autentikasi ganda. Jika deepfake mencoba masuk dengan suara palsu, tetap gagal tanpa kode OTP.<br>
        4. Protokol Eskalasi<br>Buat jalur jelas: jika ada instruksi mencurigakan, karyawan tahu harus melapor ke siapa. Jangan biarkan staf bingung atau takut dianggap tidak loyal.</p><br>
      </div>
      <br>
      <div class="content-card">
        <h3>Pelatihan Karyawan & Edukasi</h3>
         <img src="Image/training.jpg" alt="training" width="200">
        <h4>Kenapa Edukasi Penting?</h4>
        <p>Sebagus apa pun SOP, kalau karyawan tidak paham tentang ancaman deepfake, tetap akan gagal. Edukasi adalah benteng utama agar semua anggota organisasi melek ancaman digital.</p><br>
        <h4>Program yang Bisa Diterapkan:</h4>
        <p>1. Pelatihan Rutin<br>Workshop tentang cara mengenali deepfake (visual, audio, konteks). Simulasi kasus nyata, misalnya karyawan menerima panggilan palsu dari “direktur.”<br>
        2. Simulasi Serangan Deepfake (Red Teaming)<br>Buat tes internal: karyawan dikirimi video/audio palsu, lalu dievaluasi bagaimana reaksi mereka. Dari sini organisasi tahu kelemahan mana yang harus diperbaiki.<br>
        3. Materi Edukasi Ringan<br> Poster “Tanda-tanda Deepfake” ditempel di kantor. Newsletter bulanan tentang kasus terbaru penipuan deepfake di dunia nyata.<br>
        4. Budaya Laporkan Tanpa Takut<br>Karyawan harus merasa aman untuk melaporkan konten mencurigakan, tanpa takut dimarahi. Buat sistem whistleblowing atau hotline internal.</p><br>
      </div>
    <br>
      <div class="content-card">
        <h3>Teknologi & Sistem Keamanan</h3>
            <img src="Image/keamanan.jpg" alt="SOP" width="200">
        <h4>Kenapa Teknologi Dibutuhkan?</h4>
        <p>Deepfake berkembang cepat, sehingga manusia sering kesulitan mendeteksi. Dengan bantuan teknologi, organisasi bisa melakukan screening otomatis.</p><br>
        <h4>angkah Teknis yang Bisa Dilakukan:</h4>
        <p>1. Gunakan Alat Deteksi Deepfake<br>Microsoft Video Authenticator, Sensity AI, Deepware Scanner, Hive AI Detection Tools<br>
        2. Integrasi dengan SIEM (Security Information and Event Management)<br>File media yang masuk (email, pesan, upload) otomatis dipindai. Jika mencurigakan, langsung ada alert ke tim IT.<br>
        3. Tanda Tangan Digital pada Konten Resmi<br>Semua video resmi perusahaan/kampus diberi watermark atau content credential. Ini memudahkan publik membedakan mana yang asli dan mana yang palsu.<br>
        4. Enkripsi dan Kontrol Akses<br>Rekaman rapat internal atau presentasi penting disimpan dengan enkripsi. Hanya bisa diakses oleh orang tertentu dengan autentikasi ganda.</p><br>
      </div>
       <br>
      <div class="content-card">
        <h3>Manajemen Komunikasi Publik</h3>
        <h4>Kenapa Komunikasi Penting?</h4>
        <p>Kadang deepfake digunakan bukan untuk menyerang secara langsung, tapi untuk merusak reputasi. Misalnya video palsu seorang rektor yang berbicara kasar, atau CEO yang membuat pernyataan kontroversial. Kalau organisasi lambat merespons, reputasi bisa hancur.</p><br>
        <h4>Strategi yang Bisa Dilakukan:</h4>
        <p>1. Siapkan Tim Krisis<br>Tim PR/komunikasi harus siap siaga menghadapi serangan digital. Harus ada rencana komunikasi darurat (press release, konferensi pers, klarifikasi di media sosial).<br>
        2. Gunakan Bukti Digital<br>Saat mengklarifikasi, tunjukkan metadata, watermark, atau content credential dari video asli. Buktikan secara teknis bahwa video yang beredar palsu.<br>
        3. Kolaborasi dengan Media dan Platform<br>Segera hubungi media mainstream untuk menyebarkan klarifikasi. Lapor ke platform (YouTube, Facebook, TikTok) untuk meminta take down.<br>
        4. Pendidikan Publik<br>Rekaman rapat internal atau presentasi penting disimpan dengan enkripsi.Gunakan kesempatan ini untuk mengedukasi masyarakat bahwa deepfake itu nyata dan berbahaya. Dengan begitu, publik jadi lebih waspada dan tidak mudah termakan hoaks.</p><br>
      </div>
      <h3>Dengan pertahanan organisasi yang kuat, deepfake akan jauh lebih sulit menimbulkan kerugian. Kombinasi SOP, pelatihan, teknologi, dan komunikasi publik adalah tameng empat lapis yang bisa menjaga reputasi dan aset organisasi.</h3>
    `
  },
  'defense-phishing': {
    title: 'Respon Saat Menjadi Korban Deepfake',
    hasVideo: true,
    videoSource: 'videos/defense3.mp4',
    content: `
      <div class="content-section-title">Respon Saat Menjadi Korban Deepfake</div>
      <p>Deepfake bisa menyasar siapa saja: individu, publik figur, kampus, perusahaan, hingga lembaga pemerintah. Saat jadi korban, jangan panik, tapi lakukan langkah-langkah terstruktur agar dampak serangan bisa diminimalisir.
       <div class="content-card">
        <h3>Dokumentasi & Pengumpulan Bukti</h3>
        <h4>Kenapa penting?</h4>
        <p>Deepfake sering disebarkan di internet dengan cepat. Begitu viral, sulit dikendalikan. Maka, mengumpulkan bukti sejak awal sangat penting untuk:<br>1. keperluan investigasi<br>2. laporan hukum<br>3. permintaan take down ke platform<br>4. klarifikasi publik</p><br>
        <h4>Langkah Praktis</h4>
        <p>1. Simpan file asli (jangan hanya link). Download video/audio/foto yang mencurigakan<br>
        2. Ambil tangkapan layar dari postingan, komentar, atau pesan yang menyebarkannya.<br>
        3. Catat metadata (tanggal unggah, akun pengunggah, URL).<br>
        4. Gunakan hashing atau tanda digital pada file agar keaslian bukti tidak diragukan di pengadilan.</p><br>
        <h4>Contoh Kasus:</h4>
        <p>Seorang jurnalis yang diserang deepfake di India berhasil membuktikan dirinya tidak bersalah karena segera mengumpulkan bukti digital dan melaporkannya ke otoritas cybercrime.</p>
      </div>
      <br>
        <div class="content-card">
        <h3>Laporkan & Tindakan Hukum</h3>
        <h4>Mengapa perlu?</h4>
        <p>Deepfake bisa masuk kategori kejahatan: penipuan, pencemaran nama baik, pelecehan digital, atau penyebaran konten palsu. Tindakan hukum memberi dasar kuat untuk melawan</p><br>
        <h4>Langkah yang Bisa Dilakukan:</h4>
        <p>1. Laporkan ke Platform Media Sosial<br>Gunakan fitur “Report” atau “Takedown request.” Sertakan alasan jelas: konten manipulasi, merusak reputasi, atau berpotensi penipuan.<br>
        2. Laporkan ke Otoritas Cybercrime<br>Di Indonesia: bisa melapor ke Polri - Direktorat Tindak Pidana Siber (Dittipidsiber Bareskrim Polri). Sertakan bukti yang sudah dikumpulkan.<br> 
        3. Gunakan Jalur Hukum<br>Jika merusak reputasi, bisa menggunakan UU ITE tentang pencemaran nama baik. Jika terkait penipuan, bisa menggunakan pasal penipuan dalam KUHP.<br> 
        4. Minta Dukungan Hukum Organisasi<br> Jika korban adalah bagian dari organisasi (misalnya karyawan kampus/perusahaan), mintalah tim legal organisasi untuk ikut membantu.</p><br>
       </div>
       <br>
       <div class="content-card">
        <h3>Klarifikasi Publik & Pemulihan Reputasi</h3>
        <h4>Kenapa penting?</h4>
        <p>Dalam kasus deepfake, kerusakan terbesar sering kali bukan hanya materi (uang), tapi kehilangan kepercayaan publik. Maka, klarifikasi publik yang cepat bisa menyelamatkan reputasi.</p><br>
        <h4>Langkah Praktis</h4>
        <p>1. Buat Pernyataan Resmi<br>Jelaskan bahwa konten yang beredar adalah deepfake. Sertakan bukti teknis (metadata, tanda tangan digital, watermark). Gunakan bahasa yang tegas tapi profesional.<br>  
        2. Gunakan Kanal Resmi<br>Publikasikan klarifikasi di website resmi, akun media sosial resmi, atau konferensi pers. Pastikan publik bisa langsung membedakan mana sumber asli dan mana hoaks.<br>
        3. Kerja Sama dengan Media<br>Hubungi media mainstream agar mereka juga memberitakan klarifikasi. Semakin banyak media kredibel meluruskan, semakin cepat publik tahu kebenarannya.
       </p><br>
        <h4>Contoh Kasus:</h4>
        <p>Tahun 2020, sebuah video deepfake meniru seorang politisi di AS. Tim kampanye langsung membuat klarifikasi publik dengan bukti teknis, sehingga dampak negatif bisa ditekan.</p>
      </div>
      <br>
      <div class="content-card">
        <h3>Evaluasi & Perbaikan Sistem</h3>
        <h4>Kenapa penting?</h4>
        <p>Serangan deepfake tidak selalu berhenti sekali. Jika celah tidak ditutup, penyerang bisa mengulanginya. Evaluasi membantu organisasi atau individu belajar dari pengalaman.</p><br>
        <h4>Langkah yang Bisa Dilakukan:</h4>
        <p>1. Post-Mortem Analysis (Analisis Pasca Insiden)<br> Bagaimana serangan bisa menyebar? Apakah SOP keamanan sudah dijalankan dengan benar? Apa kelemahan paling besar (teknologi, manusia, atau komunikasi)? 
        2. Perbaiki SOP & Pelatihan<br> Update SOP agar kasus serupa tidak terulang. Update SOP agar kasus serupa tidak terulang.<br>
        3. Investasi pada Teknologi Baru<br> Jika belum ada, gunakan sistem deteksi otomatis. Terapkan watermark digital pada konten resmi.<br>
        4. Bangun Budaya Waspada<br>Dorong semua anggota organisasi atau keluarga untuk terbuka membahas ancaman digital. Jadikan kasus deepfake sebagai pelajaran bersama. </p><br>
    
      </div>
      <br>
      <div class="content-card">
        <h3>Pemulihan Psikologis</h3>
        <h4>Kenapa penting?</h4>
        <p>Deepfake tidak hanya merugikan materi atau reputasi, tapi juga bisa merusak kondisi mental korban. Banyak orang yang wajahnya dipakai di deepfake pornografi mengalami trauma berat, malu, atau depresi.</p><br>
        <h4>Langkah Praktis:</h4>
        <p>1. Jangan menghadapi sendirian, minta dukungan dari teman, keluarga, atau organisasi.<br>
        2. Jika perlu, konsultasikan ke psikolog untuk mengurangi beban mental.<br>
        3.Ikut komunitas korban kekerasan digital agar tidak merasa sendiri.<br></p><br>
    
      </div>
      <br>
      <p>Dengan respon yang cepat, tegas, dan terstruktur, dampak serangan deepfake bisa ditekan. Ingat: deepfake bukan hanya soal teknologi, tapi juga soal manusia, reputasi, dan kepercayaan.</p>
    `
  },
  'hands-case': {
    title: 'Studi Kasus',
    content: `
      <div class="content-section-title">Hands On Studi Kasus</div>
      <div class="content-card">
        <h4>Latihan 1 : “Baim Wong Giveaway” </h4>
        <p> Buat video deepfake pendek berisi wajah dan suara mirip Baim Wong yang berkata: <br>
           “Halo teman-teman! Gue Baim, lagi bagi-bagi rezeki buat 100 orang. Cukup daftar lewat link di bio ya. Buruan, hari ini aja!” <br>
           <br>
           Teknologi yang Dipakai <br>
             • Deepfake video (Veo3): memakai foto Baim dari Sosial Media, lalu buat menjadi video dengan narasi promosi palsu. <br>
             • Voice cloning (Minimax.io): meniru suara khas Baim dari rekaman publik (podcast, vlog).

           
           </p>
      </div>
      
      <div class="content-card">
        <h4>Latihan 2 : “Voice Note Baim Wong” </h4>
        <p> Buat Voice Note Palsu dengan suara mirip Baim Wong: “Halo Raka, ini Baim ya. Selamat ya, kamu pemenang giveaway-nya. Admin aku udah chat kamu, bantu ya prosesnya biar cepat. Setelah kamu transfer, nanti hadiahnya langsung dikirim.”<br>
            <br>
           Teknologi yang Dipakai <br>
             • Voice cloning (Minimax.io): meniru suara khas Baim dari rekaman publik (podcast, vlog).
           </p>
      </div>
    `
  }
};

// Resource content data
const resourceData = {
  'handbook': {
    title: 'Tools Deepfake',
    content: `
      <div class="content-section-title">Daftar Tools</div>
      <div class="content-card">
        <h4>Google Veo 3</h4>
        <p>Google Veo 3 adalah generator video berbasis kecerdasan buatan (AI) yang dapat mengubah deskripsi teks menjadi video berkualitas tinggi, lengkap dengan suara, efek, dan gaya sinematik, sehingga memudahkan kreator untuk membuat konten tanpa perlu keahlian editing video yang ekstensif. Model AI ini mampu menghasilkan video dengan resolusi hingga 1080p atau lebih, dan dapat memahami perintah teks yang kompleks untuk mengontrol elemen visual dan narasi secara mendalam</p>
      <button style="background-color: #2563eb; 
         color: white; 
         padding: 10px 20px; 
         border: none; 
         border-radius: 6px; 
         cursor: pointer; 
         font-size: 16px; 
         font-weight: bold;
         margin: 20px 0;" onclick="window.open('https://gemini.google.com/', '_blank')">
  Kunjungi Google Veo 3
</button>
        </div>
       <div class="content-card">
        <h4>Minimax.io</h4>
        <p>Minimax.io adalah situs web resmi dari perusahaan MiniMax, sebuah perusahaan kecerdasan buatan (AI) terkemuka yang berbasis di Shanghai, Tiongkok. Dalam modul ini web ini digunakan sebagaib voice clone.</p>
     <button style="background-color: #2563eb; 
         color: white; 
         padding: 10px 20px; 
         border: none; 
         border-radius: 6px; 
         cursor: pointer; 
         font-size: 16px; 
         font-weight: bold;
         margin: 20px 0;" onclick="window.open('https://www.minimax.io/', '_blank')">
  Kunjungi Minimaxi.io
</button>
      
    `
  },
  'tools': {
    title: 'Detection Tools',
    content: `
      <div class="content-section-title">Tools Deteksi yang Direkomendasikan</div>
      <div class="content-card">
        <h4>🛠️ Essential Detection Tools</h4>
        <p>Daftar tools standar industri untuk penilaian kerentanan, monitoring jaringan, dan respons insiden khusus deteksi manipulasi media.</p>
      </div>
      <table>
        <thead><tr><th>Tool</th><th>Kategori</th><th>Tujuan</th></tr></thead>
        <tbody>
          <tr><td>DeeperForensics</td><td>DeepFake Detection</td><td>Deteksi video manipulasi</td></tr>
          <tr><td>FotoForensics</td><td>Image Analysis</td><td>Analisis manipulasi gambar</td></tr>
          <tr><td>Truepic</td><td>Content Verification</td><td>Verifikasi keaslian konten</td></tr>
          <tr><td>Microsoft Authenticator</td><td>Video Verification</td><td>Autentikasi video</td></tr>
        </tbody>
      </table>
    `
  },
  'references': {
    title: 'Referensi Eksternal',
    content: `
      <div class="content-section-title">Materi Bacaan Tambahan</div>
      <div class="content-card">
        <h4>🔗 Sumber Daya Berguna</h4>
        <p>Link eksternal dan referensi untuk meningkatkan pengetahuan cybersecurity dan tetap update dengan tren terbaru dalam deteksi manipulasi media.</p>
      </div>
      <p><strong>Standar Industri:</strong></p>
      <p>• NIST AI Risk Management Framework<br>
         • IEEE Standards untuk Media Forensics<br>
         • OWASP AI Security Guidelines<br>
         • ISO/IEC 23053 Framework</p>
      <div class="content-card">
        <h4>💡 Stay Updated</h4>
        <p>Bidang deteksi manipulasi media berkembang pesat. Ikuti blog industri, hadiri konferensi, dan berpartisipasi dalam komunitas profesional.</p>
      </div>
    `
  },
  'glossary': {
    title: 'Glosarium',
    content: `
      <div class="content-section-title">Glosarium Cybersecurity & AI</div>
      <div class="content-card">
        <h4>📖 Istilah dan Definisi Kunci</h4>
        <p>Memahami terminologi sangat penting dalam cybersecurity dan AI. Glosarium ini menyediakan definisi untuk istilah kunci yang digunakan sepanjang kursus.</p>
      </div>
      <p><strong>DeepFake</strong> - Media sintetis yang dibuat menggunakan deep learning untuk mengganti wajah atau suara</p>
      <p><strong>Voice Cloning</strong> - Teknologi untuk mereplikasi suara seseorang menggunakan AI</p>
      <p><strong>Forensik Digital</strong> - Proses mengidentifikasi, mengekstrak, dan menganalisis bukti digital</p>
    `
  }
};

// Video state management
let isVideoLoaded = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupMobileMenu();
  setupTabs();
  setupModules();
  setupContentItems();
  setupProgressTracking();
  setupVideoFunctionality();
  loadContent('pengantar'); // Load introduction as default instead of defense-detection
}

// Mobile menu functionality
function setupMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      toggleMobileMenu();
    });
  }
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function() {
      closeMobileMenu();
    });
  }
  
  // Close mobile menu when clicking on content items
  const contentItems = document.querySelectorAll('.module-content div[data-content], .resource-item');
  contentItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeMobileMenu();
      }
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  
  if (sidebar && mobileOverlay && mobileMenuToggle) {
    const isOpen = sidebar.classList.contains('mobile-open');
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }
}

function openMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  
  if (sidebar && mobileOverlay && mobileMenuToggle) {
    sidebar.classList.add('mobile-open');
    mobileOverlay.classList.add('active');
    mobileMenuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  
  if (sidebar && mobileOverlay && mobileMenuToggle) {
    sidebar.classList.remove('mobile-open');
    mobileOverlay.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Video functionality setup with dynamic source loading
function setupVideoFunctionality() {
  const videoPlaceholder = document.getElementById('video-placeholder');
  const playButton = document.getElementById('play-button');
  const mainVideo = document.getElementById('main-video');

  // Play button click
  if (playButton) {
    playButton.addEventListener('click', function(e) {
      e.stopPropagation();
      playVideo();
    });
  }

  // Video placeholder click
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
      playVideo();
    });
  }

  // Handle video events
  if (mainVideo) {
    mainVideo.addEventListener('loadeddata', function() {
      console.log('Video loaded successfully');
    });

    mainVideo.addEventListener('error', function(e) {
      console.error('Video loading error:', e);
      showMessage('Error loading video. Please check the video source.');
    });

    mainVideo.addEventListener('ended', function() {
      // Video ended, show placeholder again
      resetToPlaceholder();
    });

    mainVideo.addEventListener('pause', function() {
      // Optional: Show placeholder when paused
      // resetToPlaceholder();
    });
  }
}

// Play video function with dynamic source
function playVideo() {
  const videoPlaceholder = document.getElementById('video-placeholder');
  const mainVideo = document.getElementById('main-video');

  if (!mainVideo || !videoPlaceholder) return;

  try {
    // Hide placeholder, show video
    videoPlaceholder.style.display = 'none';
    mainVideo.style.display = 'block';
    
    // Load and play video
    mainVideo.load();
    const playPromise = mainVideo.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isVideoLoaded = true;
        showMessage('Video playing...');
      }).catch(error => {
        console.error('Play failed:', error);
        showMessage('Could not play video. Please check the video format.');
        resetToPlaceholder();
      });
    }
    
  } catch (error) {
    console.error('Error playing video:', error);
    showMessage('Error playing video.');
    resetToPlaceholder();
  }
}

// Update video source dynamically
function updateVideoSource(videoPath) {
  const mainVideo = document.getElementById('main-video');
  if (!mainVideo || !videoPath) return;
  
  // Update video source
  const sources = mainVideo.querySelectorAll('source');
  if (sources.length > 0) {
    sources[0].src = videoPath;
  } else {
    // If no source elements, set src directly
    mainVideo.src = videoPath;
  }
  
  // Reset video state
  resetToPlaceholder();
  
  console.log('Video source updated to:', videoPath);
}

// Reset to placeholder state
function resetToPlaceholder() {
  const videoPlaceholder = document.getElementById('video-placeholder');
  const mainVideo = document.getElementById('main-video');

  if (!mainVideo || !videoPlaceholder) return;

  // Pause video
  mainVideo.pause();
  
  // Show placeholder, hide video
  mainVideo.style.display = 'none';
  videoPlaceholder.style.display = 'flex';
  
  // Update state
  isVideoLoaded = false;
}

// Show temporary message
function showMessage(message) {
  // Create or update message element
  let messageEl = document.getElementById('temp-message');
  if (!messageEl) {
    messageEl = document.createElement('div');
    messageEl.id = 'temp-message';
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #2563eb;
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      z-index: 1000;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    document.body.appendChild(messageEl);
  }
  
  messageEl.textContent = message;
  messageEl.style.transform = 'translateX(0)';
  
  // Hide after 3 seconds
  setTimeout(() => {
    if (messageEl) {
      messageEl.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (messageEl && messageEl.parentNode) {
          messageEl.parentNode.removeChild(messageEl);
        }
      }, 300);
    }
  }, 3000);
}

// Tab switching functionality
function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      switchTab(this.id);
    });
    
    tab.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        switchTab(this.id);
      }
    });
  });
}

function switchTab(tabId) {
  // Remove active class from all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('tabindex', '-1');
  });
  
  // Hide all panels
  document.querySelectorAll('.module-list').forEach(panel => {
    panel.style.display = 'none';
    panel.setAttribute('hidden', '');
  });
  
  // Activate clicked tab
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');
    activeTab.setAttribute('tabindex', '0');
    
    // Show corresponding panel
    const panelId = activeTab.getAttribute('aria-controls');
    const activePanel = document.getElementById(panelId);
    if (activePanel) {
      activePanel.style.display = 'block';
      activePanel.removeAttribute('hidden');
    }
  }
}

// Module expand/collapse functionality
function setupModules() {
  const moduleTitles = document.querySelectorAll('.module-title');
  moduleTitles.forEach(title => {
    title.addEventListener('click', function() {
      toggleModule(this);
    });
    
    title.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleModule(this);
      }
    });
  });
}

function toggleModule(moduleTitle) {
  const moduleContent = moduleTitle.nextElementSibling;
  const isExpanded = moduleTitle.classList.contains('expanded');
  
  if (isExpanded) {
    // Collapse
    moduleTitle.classList.remove('expanded');
    moduleTitle.setAttribute('aria-expanded', 'false');
    moduleContent.classList.remove('open');
    moduleContent.setAttribute('hidden', '');
  } else {
    // Expand
    moduleTitle.classList.add('expanded');
    moduleTitle.setAttribute('aria-expanded', 'true');
    moduleContent.classList.add('open');
    moduleContent.removeAttribute('hidden');
  }
}

// Content item interactions with dynamic video source
function setupContentItems() {
  const contentItems = document.querySelectorAll('.module-content div[data-content]');
  contentItems.forEach(item => {
    item.addEventListener('click', function() {
      const contentKey = this.getAttribute('data-content');
      const videoSource = this.getAttribute('data-video');
      
      if (contentKey && contentData[contentKey]) {
        selectContentItem(this);
        loadContent(contentKey, videoSource);
      }
    });
  });
  
  // Resource items
  const resourceItems = document.querySelectorAll('.resource-item');
  resourceItems.forEach(item => {
    item.addEventListener('click', function() {
      const resourceKey = this.getAttribute('data-resource');
      loadResource(resourceKey);
    });
  });
}

function selectContentItem(item) {
  // Remove active class from all content items
  document.querySelectorAll('.module-content div').forEach(div => {
    div.classList.remove('active');
  });
  
  // Add active class to clicked item
  item.classList.add('active');
}

// Progress tracking
function setupProgressTracking() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      updateProgress();
      
      if (this.checked) {
        checkModuleCompletion(this.getAttribute('data-module'));
      }
    });
  });
}

function updateProgress() {
  const totalCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
  const progressPercentage = Math.round((checkedBoxes / totalCheckboxes) * 100);
  
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  if (progressBar) progressBar.style.width = progressPercentage + '%';
  if (progressText) progressText.textContent = `Progress: ${progressPercentage}%`;
}

function checkModuleCompletion(moduleId) {
  const moduleCheckboxes = document.querySelectorAll(`input[data-module="${moduleId}"]`);
  const checkedInModule = document.querySelectorAll(`input[data-module="${moduleId}"]:checked`);
  
  if (moduleCheckboxes.length === checkedInModule.length && moduleCheckboxes.length > 0) {
    const moduleTitle = document.querySelector(`[data-module="${moduleId}"].module-title`);
    if (moduleTitle) {
      moduleTitle.classList.add('completed');
    }
  }
}

// Enhanced content loading with dynamic video source
function loadContent(contentKey, videoSource = null) {
  const data = contentData[contentKey];
  if (!data) return;
  
  // Update header
  const header = document.getElementById('content-header');
  if (header) header.textContent = data.title;
  
  // Update Image placeholder
  const ImagePlaceholder = document.querySelector('.content-Image-placeholder span');
  if (ImagePlaceholder) ImagePlaceholder.textContent = data.title;
  
  // Update video container visibility and source
  const videoContainer = document.getElementById('video-container');
  const ImageContainer = document.getElementById('Image-container');
  
  if (videoContainer) {
    if (data.hasVideo) {
      videoContainer.style.display = 'block';
      
      // Use video source from data attribute first, fallback to contentData
      const sourceToUse = videoSource || data.videoSource;
      if (sourceToUse) {
        updateVideoSource(sourceToUse);
      }
      
    } else {
      videoContainer.style.display = 'none';
    }
  }
  
  // Image container is hidden by default
  if (ImageContainer) {
    ImageContainer.style.display = 'none';
  }
  
  // Update content detail
  const contentDetail = document.getElementById('content-detail');
  if (contentDetail) contentDetail.innerHTML = data.content;
}

function loadResource(resourceKey) {
  const data = resourceData[resourceKey];
  if (data) {
    const header = document.getElementById('content-header');
    const ImagePlaceholder = document.querySelector('.content-Image-placeholder span');
    const videoContainer = document.getElementById('video-container');
    const ImageContainer = document.getElementById('Image-container');
    const contentDetail = document.getElementById('content-detail');
    
    if (header) header.textContent = data.title;
    if (ImagePlaceholder) ImagePlaceholder.textContent = data.title;
    if (videoContainer) videoContainer.style.display = 'none';
    if (ImageContainer) ImageContainer.style.display = 'none';
    if (contentDetail) contentDetail.innerHTML = data.content;
  }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close mobile menu if open
    if (window.innerWidth <= 768) {
      closeMobileMenu();
    }
    
    // Close expanded modules
    const expandedModules = document.querySelectorAll('.module-title.expanded');
    expandedModules.forEach(module => {
      toggleModule(module);
    });
  }

});



