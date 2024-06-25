// pages/table.tsx
import type { NextPage } from 'next';
import Link from 'next/link';

const BewijsLast: NextPage = () => {
  return (
    <div className="min-h-screen bg-dark-bg p-6">
      <h1 className="text-muted-yellow text-4xl font-bold mb-8 text-center">Bewijslast</h1>
      <div className="overflow-x-auto mx-auto max-w-3xl">
        <table className="bg-dark-card border border-dark-border mx-auto">
          <thead>
            <tr className="min-w-3.5 bg-dark-hover text-left">
              <th className="py-3 px-4 border-b border-dark-border">Leeruitkomst</th>
              <th className="py-3 px-4 border-b border-dark-border">Bewijs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b border-dark-border">LO1: User interaction (analysis & advice)</td>
              <td className="py-3 px-4 border-b border-dark-border">
                <strong>Holobox project</strong>
                <ul className="list-disc ml-5">
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Gebruikte%20technieken%20Holobox.pdf?csf=1&web=1&e=mxwAi5" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Online onderzoek technieken Holobox</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Doelgroep%20onderzoek.pdf?csf=1&web=1&e=9rTLaG" target='blank'
                  className="text-dark-text hover:text-muted-yellow">Online onderzoek Doelgroep(lesstof regulier onderwijs)</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20semester%206/Holobox%20project/Onderzoek%20samenvatting%20(1).pdf?csf=1&web=1&e=7A6gey" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Onderzoek samenvatting(onderzoeksvragen)</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Leercyclus%20onderzoek%20en%20interviews.pdf?csf=1&web=1&e=qDNHqo" target='blank'
                  className="text-dark-text hover:text-muted-yellow">Online onderzoek Leercyclus & interviews met docenten</Link></li>
                </ul>
                <strong>Verzuimnavigator</strong>
                <ul className="list-disc ml-5">
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Benchmark%20onderzoek.pdf?csf=1&web=1&e=qzBRMk" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Benchmarking</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Navigatiebalken%20onderzoek.pdf?csf=1&web=1&e=4CJwWk" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Online onderzoek/validatie navigatiemenu’s</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Contentpagina%20onderzoek.pdf?csf=1&web=1&e=6oOaTD" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Online onderzoek/validatie overzichtspagina</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Ideationsessie%20verslag.pdf?csf=1&web=1&e=fRcgZM" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Ideation sessie overzicht- en contentpagina</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Vue.js%20onderzoek.pdf?csf=1&web=1&e=sy2Apf" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Framework onderzoek(Vue.js)</Link></li>
                </ul>
                <strong>Eigen project</strong>
                <ul className='list-disc ml-5'>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Vooronderzoek.pdf?csf=1&web=1&e=BMuMei" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Vooronderzoek</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Interviews.pdf?csf=1&web=1&e=KXazXz" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Interviews</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Concept.pdf?csf=1&web=1&e=fjjf5n" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Concept</Link></li>

                </ul>
              </td>
            </tr>

            <tr>
              <td className="py-3 px-4 border-b border-dark-border">LO2: User interaction (execution & validation)</td>
              <td className="py-3 px-4 border-b border-dark-border">
                <strong>Holobox project</strong>
                <ul className="list-disc ml-5">
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Concept%20brainstorm%20holobox.pdf?csf=1&web=1&e=iuUpxN" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Brainstorm concept</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Brainstorm%20ideee%CC%88n.pdf?csf=1&web=1&e=fN0eyN" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Brainstorm ideeën</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:v:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20semester%206/Holobox%20project/invideo-ai-1080%20Alien%20Explorer_%20Earthly%20Adventures%20with%20%202024-02-29%20(1).mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=yM31et" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Concept film</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FConcept%20schets%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Concept Storyboard schets</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:i:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20semester%206/Holobox%20project/Storyboard-intro-stripvorm.png?csf=1&web=1&e=FJjz3q" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Storyboard introductiefilm</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:i:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20semester%206/Holobox%20project/Customer%20journey_.png?csf=1&web=1&e=7vM9pI" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Customer journey visualisatie</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Customer%20journey.pdf?csf=1&web=1&e=fbFbmc" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Customer journey</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FConcept%20verslag%20%281%29%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Concept</Link></li>
                </ul>
                <strong>Verzuimnavigator</strong>
                <ul className="list-disc ml-5">
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Benchmark%20onderzoek.pdf?csf=1&web=1&e=qzBRMk" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Benchmarking</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Navigatiebalken%20onderzoek.pdf?csf=1&web=1&e=4CJwWk" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Online onderzoek/validatie navigatiemenu’s</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Contentpagina%20onderzoek.pdf?csf=1&web=1&e=6oOaTD" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Online onderzoek/validatie overzichtspagina</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator%2Fwireframe%20usertest%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20eindoplevering%20verzuimnavigator" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Wireframe usertest</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Ideationsessie%20verslag.pdf?csf=1&web=1&e=fRcgZM" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Ideation sessie</Link></li>                
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Midfi%20prototype%20verslag.pdf?csf=1&web=1&e=GE3lhg" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Mid-fy prototype verslag</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FMidfy%20prototype%20challenge%202%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Mid-fy prototype overzicht</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Wireframe.pdf?csf=1&web=1&e=Lz7U5P" 
                  className="text-dark-text hover:text-muted-yellow">Wireframe verslag</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FWireframe%20stappenplan%20en%20preventie%20eerste%20versie%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206" target='blank' 
                  className="text-dark-text hover:text-muted-yellow">Wireframe overzicht</Link></li>
                </ul>
                <strong>Eigen project</strong>
                <ul className="list-disc ml-5">
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Verslag%20wireframes.pdf?csf=1&web=1&e=w1pOAF" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Wireframe verslag</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:i:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Wireframes.png?csf=1&web=1&e=otbkva" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Wireframe overzicht</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Usertest%20Wireframe.pdf?csf=1&web=1&e=XKTO6t" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Wireframe user test</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Verslag%20high-fi%20prototype.pdf?csf=1&web=1&e=gUnAeC" target='blank' 
                className="text-dark-text hover:text-muted-yellow">High-fidelity prototype verslag</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:i:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Hi-fi%20prototype%20overzicht.png?csf=1&web=1&e=552POS" target='blank' 
                className="text-dark-text hover:text-muted-yellow">High-fidelity prototype overzicht</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/User%20test%20prototype%20TravelMate.pdf?csf=1&web=1&e=NqB7M9" target='blank' 
                className="text-dark-text hover:text-muted-yellow">High-fidelity prototype user test</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Heurastics.pdf?csf=1&web=1&e=1krRir" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Nielsen Norman Heurastics validatie</Link></li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="py-3 px-4 border-b border-dark-border">LO3: Software design and realisation</td>
              <td className="py-3 px-4 border-b border-dark-border">
                <strong>Verzuimnavigator</strong>
                <ul className="list-disc ml-5">
                  <li><Link href="https://git.fhict.nl/I482137/verzuimnavigator" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">GIT</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Verslag%20componenten.pdf?csf=1&web=1&e=KwAw1k" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Development & componenten verslag</Link></li>
                </ul>
                <strong>Eigen project</strong>
                <ul className='list-disc ml-5'>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Adviesrapport.pdf?csf=1&web=1&e=KqpVOt" target='blank'
                className="text-dark-text hover:text-muted-yellow">Adviesrapport</Link></li>
                </ul>
                <strong>Persoonlijk</strong>
                <ul className='list-disc ml-5'>
                <li><Link href="/" target='blank'
                className="text-dark-text hover:text-muted-yellow">Portfolio website</Link></li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="py-3 px-4 border-b border-dark-border">LO4: Professional standard</td>
              <td className="py-3 px-4 border-b border-dark-border">
                <strong>Holobox project</strong>
                <ul className="list-disc ml-5">
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FProjectaanpak%20%281%29%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Plan van aanpak</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FEpics%20en%20Userstories%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Epics en Userstories</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20Holobox/Adviesrapport%20Holobox.pdf?csf=1&web=1&e=E7ZVzf" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Adviesrapport Holobox</Link></li>
                </ul>
                <strong>Verzuimnavigator</strong>
                <ul className="list-disc ml-5">
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eindoplevering%20verzuimnavigator/Adviesrapport%20verzuimnavigator2.pdf?csf=1&web=1&e=68JdPK" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Adviesrapport Verzuimnavigator</Link></li>
                 <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FConcept%20verslag%20%281%29%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Concept</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FPresentatie%20sprint%201%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Presentatie sprint 1</Link></li>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FVerzuimnavigator%20Sprint%202%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206" target='blank' 
                className="text-dark-text hover:text-muted-yellow">Presentatie sprint 2</Link></li>
                </ul>
                <strong>Eigen project</strong>
                <ul className='list-disc ml-5'>
                <li><Link href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/482137_student_fontys_nl/Documents/Bewijslast%20eigen%20project/Adviesrapport.pdf?csf=1&web=1&e=KqpVOt" target='blank'
                className="text-dark-text hover:text-muted-yellow">Adviesrapport</Link></li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="py-3 px-4 border-b border-dark-border">LO5: Personal leadership</td>
              <td className="py-3 px-4 border-b border-dark-border">
                <strong>Holobox project</strong>
                <ul className="list-disc ml-5">
                  <li><Link href="https://trello.com/invite/b/3NCZUNCt/ATTIedf2bba59d7185d199268db6dcf83ebe5459CB3B/verzuimnavigator-project" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Scrum bord</Link></li>

                </ul>
                <strong>Verzuimnavigatir</strong>
                <ul className="list-disc ml-5">
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project%2FSCRUM%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FHolobox%20project" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Trello-bord</Link></li>

                </ul>
                <strong>Persoonlijk</strong>
                <ul className="list-disc ml-5">
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FPersonal%20Journey%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Personal Journey</Link></li>
                  <li><Link href="https://stichtingfontys-my.sharepoint.com/personal/482137_student_fontys_nl/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206%2FToekomstvisie%2Epdf&parent=%2Fpersonal%2F482137%5Fstudent%5Ffontys%5Fnl%2FDocuments%2FBewijslast%20semester%206" target='blank' 
                    className="text-dark-text hover:text-muted-yellow">Toekomstvissie</Link></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BewijsLast;
