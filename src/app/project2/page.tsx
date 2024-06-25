import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const Project2: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-10 text-muted-yellow">Verzuimnavigator Project</h1>
      <div className="text-xl leading-9 max-w-prose mx-auto text-light-gray">
        <h2 className='text-muted-yellow font-bold'>De opdracht</h2>
        <br />
          <p>Het project is in opdracht van Indicia, met Rik Scholten als product owner. Ons doel is
het ontwikkelen van een user interface van een website en webapplicatie die
werkgevers ondersteunt bij het begeleiden van zieke werknemers en het creëren van
een veilige werkomgeving. Onze taak is om dit op een gebruiksvriendelijke manier te
realiseren. Hoewel er al een bestaande website is, streven we naar maximale
creativiteit en innovatie door vanaf de grond af aan te beginnen.
<br /><br />
Om dit te bereiken, is het project opgedeeld in vier sprints van twee weken. Elke sprint
staat in het teken van een ander onderdeel van zowel de website als de webapplicatie.
Deze onderdelen omvatten het uitwerken van een homepagina, een overzichtspagina,
een bestelmodule voor diensten en een finale integratie van alle componenten.
</p>
<br />
<h2 className='text-muted-yellow font-bold'>Aanpak en Resultaat</h2>
<p>
  <br />
  Na het ontvangen van de briefing hebben we de nodige vragen aan onze opdrachtgever
gesteld om een helder beeld van het project te creëren. Met de verkregen inzichten
hebben we een gedetailleerde planning opgesteld, waarbij we 
<Link href='https://trello.com/invite/b/3NCZUNCt/ATTIedf2bba59d7185d199268db6dcf83ebe5459CB3B/verzuimnavigator-project' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> agile-methodologie </span></Link>
hebben toegepast.
<br /><br />
Het probleem hebben we geformuleerd tot een hoofdvraag, die vervolgens is opgedeeld
in kleinere deelvragen. Dit zorgde voor een gestructureerd overzicht van de benodigde
stappen om tot een goed product te komen.
<br /><br />
Om inzicht te verkrijgen in de webpagina’s en webapplicaties van vergelijkbare
bedrijven, hebben we 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FBenchmark%20onderzoek%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> benchmarking </span></Link>
uitgevoerd. Hierdoor hebben we zowel
succesvolle als te vermijden keuzes geïdentificeerd. Deze bevindingen zijn samengevat
door Daniek en mij voor toekomstig gebruik tijdens verschillende fases van het project.
<br /><br />
Voor de ontwikkeling van een gebruiksvriendelijk navigatiemenu op de website heb ik een 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FNavigatiebalken%20onderzoek%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> onlineonderzoek </span></Link>
naar navigatiebalken uitgevoerd, zowel voor websites als
webapplicaties. De resultaten hiervan wezen uit dat relevante onderdelen van de
website in het menu moeten worden opgenomen. Een centrale zoekbalk in het
navigatiemenu wordt als mogelijke overweging gezien voor dit project.
<br /><br />
Met alle bevindingen uit het onderzoek hebben we 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FWireframe%20navigatiemenu%20en%20zoekbalk%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> wireframes </span></Link>
gemaakt. Mijn focus lag
hierbij op de wireframes van de navigatiebalk van de webversie. 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FNavigatiebalken%20onderzoek%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> Validatie </span></Link>
hiervoor heb ik gehaald uit de navigatiemenu’s van websites van bedrijven zoals Airbnb, Coolblue en
Ebay en de principes van Nielsen Norman Group, waarbij ik mijn conclusies uit het navigatiemenu-onderzoek heb meegenomen.
<br /><br />
Om de eerste versie van de wireframes te valideren op gebruiksvriendelijkheid, hebben we 
<Link href='https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/wireframe%20usertest.pdf?csf=1&web=1&e=krIqUQ' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> user testen </span></Link>
uitgevoerd, met nadruk op hoe gebruikers informatie op de website
zoeken en het gebruik van het stappenplan.
<br /><br />
Om de bevindingen en resultaten van de eerste sprint te kunnen presenteren heb ik een
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FPresentatie%20sprint%201%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> presentatie </span></Link>
gemaakt, welke vervolgens door een van mijn groepsleden is
gepresenteerd.
<br /><br />
In de tweede sprint concentreren we ons op een overzichtspagina en contentpagina.
Om diverse creatieve ideeën van alle teamleden te benutten, hebben we een 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FIdeationsessie%20verslag%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> ideation-sessie </span></Link>
gehouden. Hieruit zijn verschillende ideeën voortgekomen over de flow van de
homepagina naar een contentpagina, welke door alle leden zijn omgezet naar
<Link href='https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Wireframe.pdf?csf=1&web=1&e=Lz7U5P' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> wireframes. </span></Link>
<br /><br />
Bij het ontwikkelen van het stappenplan heb ik met name gekeken naar de bevindingen
van de user testen uit de vorige sprint. Voor het preventiegedeelte heb ik 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FContentpagina%20onderzoek%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> validatie </span></Link>
gehaald uit bedrijven waar gebruikers doorgaans een duidelijk idee hebben van wat ze
zoeken, zoals Coolblue en Apple.
<br /><br />
De verschillende wireframes zijn samengevoegd en door Daniek en mij omgezet naar
een 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FMidfi%20prototype%20verslag%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> midfy-prototype</span></Link>,
welke later getest zal worden bij een eindgebruiker die aansluit bij
onze doelgroep.
<br /><br />
De resultaten en bevindingen van deze sprint zijn door mij gevisualiseerd in een
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FVerzuimnavigator%20Sprint%202%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> presentatie</span></Link>, 
welke ik vervolgens heb gepresenteerd aan de opdrachtgever.
<br /><br />
Als groep hebben we besloten om twee onderdelen als proof of concept uit te werken.
Om een geschikt frontend framework te selecteren, hebben we 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FAdviesrapport%20verzuimnavigator2%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> gezamenlijk onderzoek gedaan naar verschillende frameworks. </span></Link>
In dit kader heb ik 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FVue%2Ejs%20onderzoek%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> Vue.JS </span></Link>
onderzocht. Daarnaast heb ik de onderzoeken van mijn groepsleden geanalyseerd en hieruit een
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FAdviesrapport%20verzuimnavigator2%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> conclusie </span></Link>
getrokken als advies voor de opdrachtgever.
<br /><br />
Voor een vlot verloop van het ontwikkelproces heb ik het project opgezet in het React-
framework. Tevens heb ik een 
<Link href='https://git.fhict.nl/I482137/verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> GIT-repository </span></Link>
opgezet en duidelijke afspraken gemaakt
met mijn groepsleden om een soepel verloop van de ontwikkelfase te garanderen. Ik
was verantwoordelijk voor het beheer van de GIT-repository en ervoor te zorgen dat het
werk van mijn groepsleden naadloos samenkwam.
<br /><br />
We hebben ervoor gekozen om twee pagina’s uit te werken als proof of concept. Mijn
bijdrage was gericht op de homepagina, waarvoor ik twee componenten heb
ontwikkeld: de 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FVerslag%20componenten%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> “CategoryCard” </span></Link>
en de 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FVerslag%20componenten%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> “SearchBar”</span></Link>. 
 Hierbij heb ik gezorgd dat deze
componenten herbruikbaar zijn en ook functioneren op mobiele apparaten. Daarnaast
heb ik ervoor gezorgd dat de 
<Link href='https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2FVerslag%20componenten%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator' target='blank'
><span className='font-bold text-white hover:text-muted-yellow'> navigatiebalk</span></Link>
, ontwikkeld door een groepslid, bruikbaar is
op mobiele apparaten.
</p>
<br />
<h2 className='text-muted-yellow font-bold'>Reflectie</h2>
<br />
<p>Tijdens het project hebben we de agile-methode toegepast, wat heeft bijgedragen aan
een gestructureerde aanpak. Dit stelde ons in staat om een goed overzicht te behouden
van de diverse taken die ik en mijn groepsgenoten moesten uitvoeren. Echter, de
samenwerking binnen de groep verliep in eerste instantie niet vlekkeloos. Dit werd
voornamelijk veroorzaakt door het gebrek aan open communicatie over irritaties tussen
groepsleden. Bovendien besloot ik vrijwillig te stoppen met het organiseren en
bespreken van taken, omdat er niet naar mijn inbreng werd geluisterd.
<br /><br />
Na een open discussie over deze problemen, verbeterde de samenwerking aanzienlijk
en werd de taakverdeling opnieuw opgepakt. Toch blijft het voor mij een streven om
groepsleden direct aan te spreken wanneer taken niet(volledig) worden voltooid. Ook
ben ik van mening dat het verder vooruit plannen van taken kan helpen om lange
dagelijkse besprekingen te vermijden. Ik geloof dat als deze aspecten beter worden
beheerd, we meer uit het project kunnen halen.
</p>
      </div>
      <br /><br />
      <div className='flex flex-col items-center text-center text-xl'>
      <h1 className='font-bold text-3xl'>Bedankt voor het lezen 🥳</h1>
<br /><br />
<Link href='./project3'><span className=' bg-muted-yellow text-black hover:bg-white px-3 py-2 rounded-full transition duration-100 '>Ga door naar het volgende project</span> </Link>
      <br /><br />
      <Link href='./bewijslast'><span className=' bg-muted-yellow text-black hover:bg-white px-3 py-2 rounded-full transition duration-100 '>Zie mijn bewijslast</span> </Link>
<br /><br />
      <Image className='rotate' src="/smiley.png" alt="Smiley face" width={200} height={200} />
      </div> 
    </div>
  )
}


export default Project2
