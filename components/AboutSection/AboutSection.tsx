import { Paragraph } from '@/ui';

export function AboutSection() {
  return (
    <section className='w-full'>
      <Paragraph largeMarginX>
        Czas wakacji to&nbsp;czas najlepszych koncertów! Przeżyj ekscytującą
        przygodę i&nbsp;zobacz swoich ulubionych artystów na żywo -&nbsp;pojedź
        z&nbsp;YSL nad&nbsp;morze na&nbsp;największy w&nbsp;Polsce festiwal
        muzyczny&nbsp;-&nbsp;Open’er Festiwal 2024! Wystarczy, że weźmiesz
        udział w&nbsp;naszym konkursie.
      </Paragraph>

      <Paragraph largeText>
        Na zwyciężczynie czeka aż&nbsp;10&nbsp;podwójnych biletów
        na&nbsp;Open’er Festival na&nbsp;całe 4&nbsp;dni wydarzenia razem
        z&nbsp;akomodacją w trakcie wydarzenia oraz WELCOME GIFT od marki YSL
        BEAUTY. Zabierz swoją bestie i&nbsp;przeżyjcie razem niezapomniany
        event!
      </Paragraph>

      <Paragraph largeText>
        Jak wziąć udział? Zobacz TikToki dodane przez @tojahania oraz
        @majafirekk i&nbsp;odpowiedz w&nbsp;komentarzu na&nbsp;pytanie: „Jakich
        kosmetyków YSL Beauty użyjesz do&nbsp;stworzenia festiwalowego makijażu
        i&nbsp;dlaczego?”
      </Paragraph>

      <Paragraph>Nie zapomnij oznaczyć w komentarzu:</Paragraph>

      <p className='flex flex-col items-center justify-center gap-5 px-6 text-lg md:flex-row lg:text-2xl'>
        <span>@yslbeauty</span>
        <span>#yslbeautypoland</span>
        <span>#makeup</span>
        <span>#fragrance</span>
        <span>#yslbeautylightclub</span>
      </p>

      <Paragraph largeText>
        Na zgłoszenia czekamy od 27.05 do 09.06, a zwyciężczynie ogłosimy 12.06!
      </Paragraph>

      <Paragraph>
        <span>Trzymamy za Was kciuki!</span>
        <span>Do zobaczenia pod sceną!</span>
      </Paragraph>
    </section>
  );
}
