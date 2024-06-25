import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Project1: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-10 text-muted-yellow">Holobox Project</h1>
      <div className="text-xl leading-9 max-w-prose mx-auto text-light-gray">
        <h2 className='text-muted-yellow font-bold'>De opdracht</h2>
        <br />
          <p>Voor dit project kregen we van onze opdrachtgever, Mijke van der Zee de opdracht om
onderzoek te doen naar manieren om het leerproces van kinderen te verbeteren door
middel van de Holobox in combinatie met AI. Onze opdrachtgever doet onderzoek naar
“interactieve design” voor het lectoraat. Ons onderzoek zal hierdoor van groot belang
zijn voor het onderzoek van onze opdrachtgever.
<br /><br />
Het onderwijs benaderd vaak het leerproces op basis van een bepaald niveau, terwijl
ieder kind uniek is. Het doel van dit onderzoek is om te verkennen hoe we elk individueel
kind in hun kracht kunnen zetten. Het is de bedoeling dat we ons focussen op het
creëren van een concept en het ontwikkelen van een prototype dat de interactie en de
gebruikservaring optimaliseert en hiermee kinderen in hun kracht worden gezet met
behulp van de technieken van de Holobox in combinatie met AI.
</p>

<br />
<h2 className='text-muted-yellow font-bold'>Aanpak en Resultaat</h2>
<p>
  <br />
Na de briefing van het project zijn we begonnen met het schrijven van een <Link 
href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FProjectaanpak%20%281%29%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'>plan van
aanpak</span></Link>. In de briefing hebben we deelvragen opgesteld op basis van de hoofdvraag die
we van onze opdrachtgever hebben gekregen. Nadat we de hoofdvraag “Hoe kunnen,
met behulp van technieken als de Holobox in combinatie met AI, kinderen in hun kracht
gezet worden om te leren?” in deelvragen hadden verdeeld, zijn we begonnen aan
onderzoek om deze vragen te kunnen beantwoorden.
<br /><br />
Om erachter te komen welke technieken er worden gebruikt om een object te
projecteren in een Holobox, heb ik <Link href='https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Gebruikte%20technieken%20Holobox.pdf?csf=1&web=1&e=VgVmM6' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'>online onderzoek</span></Link> gedaan naar verschillende Holobox
leveranciers en om de objecten interactief te maken heb ik onderzoek gedaan naar de
mogelijkheden op verschillende platformen zoals Unity en Unreal Engine.
<br /><br />
Vervolgens heb ik <Link href='https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Doelgroep%20onderzoek.pdf?csf=1&web=1&e=6KhBm4' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'>online onderzoek</span></Link> gedaan om erachter te komen wat kinderen per
leeftijdsgroep doen in de klas. Uit dit onderzoek is gebleken dat we ons niet moeten
richten op de oudere kinderen die net in de puberteit zitten en zich vaak te stoer voelen
voor activiteiten zoals de Holobox, maar ook niet op kleuters omdat zij nog geen echt
leerstof hebben gekregen en net te speels zijn voor zulke activiteiten.
<br /><br />
Aan de hand van verschillende onderzoeken hebben we bepaald dat we ons gaan
richten op kinderen uit groep 4, omdat deze kinderen nog niet te oud zijn en wel al wat
lesstof hebben gehad vergeleken met kinderen uit de kleuterklas.
<br /><br />
Om een overzicht te behouden van al onze bevindingen, hebben Daniek en ik <Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FOnderzoek%20samenvatting%20%281%29%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'>samenvattingen</span></Link> gemaakt van alle onderzoeken die uit onze deelvragen zijn gekomen.
<br /><br />
Vervolgens hebben we <Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FEpics%20en%20Userstories%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'>epics opgesteld en hieruit user stories gemaakt</span></Link> op basis van de
samenvattingen die we eerder hadden gemaakt. Aan de hand van onze user stories
konden we taken aanmaken en indelen in ons <Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FSCRUM%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'>SCRUM-bord.</span></Link>
<br /><br />
Hierna hebben we <Link href='https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Concept%20brainstorm%20holobox.pdf?csf=1&web=1&e=BtOvLT' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'>gebrainstormd</span></Link> om een 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FConcept%20verslag%20%281%29%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> concept</span></Link> te kunnen vaststellen. Van dit eerste
iteratie hebben we met behulp van AI, 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/stream.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2Finvideo%2Dai%2D1080%20Alien%20Explorer%5F%20Earthly%20Adventures%20with%20%202024%2D02%2D29%20%281%29%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E729cecd4%2D217a%2D427b%2Dbad2%2D5d9471f64b9c' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> een filmpje </span></Link> 
gemaakt om ons concept op een
duidelijker en leuker manier te presenteren bij onze opdrachtgever. En om een beter
beeld te schetsen van ons concept hebben we een 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FConcept%20schets%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> storyboard </span></Link>
getekend.
<br /><br />
Vervolgens hebben Roos en ik 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20Holobox%2FLeercyclus%20onderzoek%20en%20interviews%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20Holobox' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> interviews </span></Link>
gehouden met leerkrachten op de
basisschool, om een beter beeld te krijgen bij hoe de vier leerstijlen worden toegepast
in de klas. Uit dit onderzoek bleek dat de vier leerstijlen niet worden toegepast in het
regulier onderwijs. Door dit onderzoek zijn we er wel achter gekomen dat we een andere
methode kunnen toepassen. Dit is het IPC-leercylcus wat wordt gebruikt bij thematisch
leren.
<br /><br />
Nadat we feedback van een eerste versie van ons concept terug hadden gekregen en
meer duidelijkheid hadden gekregen door de interviews met de leerkrachten heb ik 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FConcept%20verslag%20%281%29%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> het concept </span></Link>
volledig uitgewerkt uitgeschreven.
<br /><br />
Om de ideeën uit ons concept uit te kunnen werken, hebben Daniek en ik een poging
gedaan om een interactief prototype te maken met een Kinectbox. Dit was helaas een
mislukte poging, omdat de Kinectbox die we tot ons beschikking hadden niet op de
laatste besturingssystemen toegepast kon worden.
<br /><br />
Vervolgens hebben we besloten om een “minimal value product” uit te werken, om de
interactie door middel van audio te testen met onze doelgroep.
<br /><br />
Hierna hebben Daniek en ik de 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20Holobox%2FCustomer%20journey%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20Holobox' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> customer journey </span></Link>
op basis van de het IPC-leercyclys
uitgeschreven en gevisualiseerd om een duidelijk overzicht te krijgen hoe het project
voor de kinderen uit moet zien.
<br /><br />
Daarna hebben we besloten om bepaalde onderdelen uit de customer journey uit te
werken. Ik heb besloten om de introductie uit te werken. Mijn groepsgenoten hadden
een schets gemaakt van een storyboard voor een introductiefilm wat aan het begin van
het project getoond zou moeten worden aan onze doelgroep. Deze heb ik vervolgens
omgezet naar een 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/Documents/Bewijslast%20semester%206/Holobox%20project/Storyboard-intro-stripvorm.png?csf=1&web=1&e=FJjz3q&CID=ffd3229c-c415-4de8-add2-617a80e6ee4b' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> gevisualiseerd storyboard </span></Link>
in de vorm van een strip, om ons concept
duidelijker te laten overkomen bij onze opdrachtgever.
</p>
<br />
<h2 className='text-muted-yellow'>Reflectie</h2>
<br />
<p>Tijdens ons project hebben we gebruikgemaakt van de SCRUM-methode, wat bijdroeg
aan een gestructureerde aanpak. Deze methode was voor mij bekend, waardoor ik
effectief het overzicht kon behouden over de diverse taken. De dagelijkse stand-up
meetings waren een waardevol element binnen ons project. Ze boden de gelegenheid
om de voortgang van de werkzaamheden te bespreken, evenals de activiteiten van de
vorige dag. Desondanks viel het me op dat sommige taken onnodig lang in beslag
namen. Om dit te verbeteren, lijkt het mij goed om de volgende keer halverwege de dag
een korte update te geven over de voortgang en eventueel ook aan het einde van de dag.
Tijdens het project zijn we echter ook enkele uitdagingen tegengekomen. Zo werden
sommige goede ideeën niet serieus genomen door bepaalde teamleden, en werden
afspraken op het laatste moment niet nagekomen. Dit leidde tot frustratie, zowel bij
mijzelf als bij anderen. In het vervolg wil ik hier direct actie op ondernemen, in plaats
van het te negeren. Het is belangrijk om goed te communiceren en eventuele
problemen tijdig aan te pakken om de samenwerking van het team te bevorderen en het
maximale te halen uit het project.</p>
      </div>
      <br /><br />
      <div className='flex flex-col items-center text-center text-xl'>
<h1 className='font-bold text-3xl'>Bedankt voor het lezen 🥳</h1>
<br /><br />
<Link href='./project2'><span className=' bg-muted-yellow text-black hover:bg-white px-3 py-2 rounded-full transition duration-100 cursor-pointer'>Ga door naar het volgende project</span> </Link>
<br /><br />
      <Link href='./bewijslast'><span className=' bg-muted-yellow text-black hover:bg-white px-3 py-2 rounded-full transition duration-100 '>Zie mijn bewijslast</span> </Link>
<br /><br />
      <Image className='rotate' src="/smiley.png" alt="Smiley face" width={200} height={200} />
      </div> 

    </div>
  )
}

export default Project1
