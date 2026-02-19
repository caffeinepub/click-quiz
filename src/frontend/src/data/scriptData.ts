import { ScriptNode } from '../types/script';

export const scriptData: ScriptNode = {
  id: 'start',
  title: 'START',
  question: 'Waarin zijn we u tekortgekomen? Gaat het om het financiële aspect, bent u ergens ontevreden over, of gebruikt u het systeem simpelweg niet?',
  children: [
    {
      id: 'fina',
      title: 'FINA – Financieel',
      question: 'Mag ik u vragen: vindt u het bedrag de investering niet meer waard, kiest u ervoor om uw prioriteiten anders te leggen, of zit u in een situatie waarin elke euro echt telt?',
      children: [
        {
          id: 'fina-waarde',
          title: 'Waarde mismatch',
          diagnosis: 'Als ik u goed begrijp, voelt het bedrag op dit moment niet in verhouding tot wat u ervoor terugkrijgt, klopt dat?',
          questions: [
            'Wat was destijds de reden dat u voor het alarmsysteem koos?',
            'Is dat minder belangrijk geworden, of is vooral het gevoel van urgentie veranderd?',
            'Als er morgen toch iets zou gebeuren en het systeem was er niet meer, hoe zou dat voor u voelen?'
          ],
          reframing: 'Veiligheid is niet verdwenen. Alleen de beleving van de investering is veranderd. Vaak verschuift gevoel, niet de waarde zelf.',
          solution: 'Als ik u zo hoor, is veiligheid nog steeds belangrijk voor u. Dan zou het zonde zijn om iets op te zeggen dat juist bedoeld is om te beschermen wat voor u belangrijk is — zeker ook gezien de investering die u destijds heeft gedaan in het systeem.\n\nWat we specifiek voor u kunnen doen, is uw maandelijkse bijdrage voor 12 maanden verlagen naar X. Dat komt neer op ongeveer X per dag.\n\nZo behoudt u de volledige beveiliging waar u destijds bewust voor heeft gekozen, maar tegen een lagere maandlast.\n\nDaarnaast behoudt u de maandelijkse mogelijkheid om te stoppen als het in de toekomst echt niet passend is.\n\nMijn advies is om het op deze manier te blijven ervaren, zodat u beschermd blijft terwijl het financieel beter in balans voelt.',
          closingQuestion: 'Zullen we het op deze manier voor u aanpassen?'
        },
        {
          id: 'fina-prioriteit',
          title: 'Prioriteitsconflict',
          diagnosis: 'Het klinkt alsof veiligheid niet onbelangrijk is geworden, maar dat andere zaken nu tijdelijk voorrang krijgen, klopt dat?',
          questions: [
            'Wat is er veranderd sinds u het alarmsysteem nam?',
            'Waar kiest u op dit moment wél voor, waardoor het systeem naar de achtergrond schuift?',
            'Als deze fase voorbij is, zou veiligheid dan weer hoger op uw prioriteitenlijst staan?'
          ],
          reframing: 'Dit is een tijdelijke verschuiving, geen structurele afwijzing van veiligheid.',
          solution: 'Dan zou het zonde zijn om een structurele bescherming volledig los te laten vanwege een tijdelijke fase — zeker ook gezien de investering die u destijds heeft gedaan.\n\nWat we specifiek kunnen doen, is uw maandelijkse bijdrage voor 12 maanden verlagen naar X. Dat is ongeveer X per dag.\n\nZo blijft uw woning beschermd terwijl u ruimte houdt voor de andere prioriteiten die nu spelen.\n\nU behoudt bovendien de maandelijkse flexibiliteit om te stoppen als het echt niet meer passend is.\n\nZo houdt u controle, zonder direct een definitieve keuze te maken.',
          closingQuestion: 'Zullen we het zo voor u inrichten?'
        },
        {
          id: 'fina-nood',
          title: 'Financiële nood',
          diagnosis: 'Begrijp ik goed dat dit geen kwestie is van waarde, maar dat het financieel op dit moment echt lastig is?',
          questions: [
            'Is dit een tijdelijke financiële druk, of verwacht u dat dit langer gaat spelen?',
            'Wat is er concreet veranderd in uw situatie?',
            'Wat zou op dit moment wél haalbaar zijn voor u?'
          ],
          reframing: 'Juist in een financieel kwetsbare periode wilt u geen extra risico lopen.',
          solution: 'Ik begrijp dat dit een lastige fase kan zijn. Dan zou het zonde zijn om de bescherming volledig los te laten — zeker ook gezien de investering die u destijds heeft gedaan.\n\nWat we specifiek kunnen doen, is uw maandelijkse bijdrage tijdelijk verlagen naar X voor 12 maanden. Dat komt neer op ongeveer X per dag.\n\nZo blijft uw woning beschermd terwijl de druk op uw maandlasten vermindert.\n\nDaarnaast behoudt u de maandelijkse mogelijkheid om te stoppen als het echt niet meer lukt.\n\nMijn advies is om dit te zien als een overbrugging, zodat u beschermd blijft zonder dat het financieel te zwaar wordt.',
          closingQuestion: 'Zou dit u voldoende lucht geven om beschermd te blijven?'
        }
      ]
    },
    {
      id: 'unhappy',
      title: 'UNHAPPY – Ontevreden',
      question: 'Waar bent u precies ontevreden over: de prijs, onze service of het systeem zelf?',
      children: [
        {
          id: 'unhappy-price',
          title: 'PRICE',
          diagnosis: 'Gaat het u vooral om de recente prijsverhoging of om het gevoel dat het bedrag niet meer in verhouding staat?',
          questions: [
            'Wat maakt dat u het niet eens bent met deze prijsverhoging?',
            'Voelt het vooral onverwacht of niet in verhouding tot wat u ervoor terugkrijgt?',
            'Als de maandelijkse bijdrage beter zou aansluiten bij uw verwachting, zou u het systeem dan willen behouden?'
          ],
          reframing: 'Het probleem zit in de beleving van de prijs, niet in de behoefte aan veiligheid.',
          solution: 'Ik begrijp dat prijsverhogingen vervelend kunnen voelen, zeker als ze onverwacht komen.\n\nWat we specifiek voor u kunnen doen, is uw maandelijkse bijdrage voor 12 maanden stabiliseren of verlagen naar X. Dat komt neer op ongeveer X per dag.\n\nZo behoudt u volledige bescherming zonder dat de verhoging direct zwaar weegt.\n\nDaarnaast blijft u maandelijks flexibel om te stoppen als het in de toekomst echt niet passend is.\n\nZo behoudt u de zekerheid, maar voelt het bedrag weer in verhouding.',
          closingQuestion: 'Als we het bedrag op deze manier aanpassen, wilt u het systeem dan behouden?'
        },
        {
          id: 'unhappy-service',
          title: 'SERVICE',
          diagnosis: 'Gaat het u vooral om hoe het is verlopen in de communicatie of uitvoering?',
          questions: [
            'Wat is er precies gebeurd?',
            'Wat had u in die situatie anders verwacht van ons?',
            'Wat zou voor u nodig zijn om het vertrouwen weer te herstellen?'
          ],
          reframing: 'Het probleem ligt in de ervaring, niet in de functie van het systeem.',
          solution: 'Het spijt me dat u deze ervaring heeft gehad. Dat is niet de standaard die wij nastreven.\n\nWat ik voor u kan doen, is persoonlijk eigenaarschap nemen over uw dossier.\n\nIk zorg voor directe opvolging, duidelijke terugkoppeling en bewaak dat alles correct wordt opgepakt.\n\nIndien nodig plannen we kosteloos een controle- of servicebezoek in om dit volledig te herstellen.\n\nMijn doel is dat u zich weer gehoord voelt en met vertrouwen gebruik kunt maken van het systeem.',
          closingQuestion: 'Als we dit zo oplossen, wilt u het systeem dan behouden?'
        },
        {
          id: 'unhappy-system',
          title: 'SYSTEEM',
          diagnosis: 'Gaat het u vooral om een technisch probleem of om gebruiksgemak?',
          questions: [
            'Wat werkt er op dit moment niet zoals u had verwacht?',
            'Is het een technisch probleem of voelt het systeem te ingewikkeld?',
            'Wanneer zou u zeggen dat het systeem wél naar tevredenheid functioneert?'
          ],
          reframing: 'Het systeem moet doen wat beloofd is.',
          solution: 'Dat hoort natuurlijk niet zo te zijn.\n\nWat we voor u kunnen doen, is kosteloos een monteur inplannen om het systeem opnieuw af te stellen, te controleren en rustig uit te leggen.\n\nIndien er een defect is, zorgen we direct voor vervanging.\n\nZo zorgen we ervoor dat het systeem weer werkt zoals bedoeld en u er vertrouwen in terugkrijgt.',
          closingQuestion: 'Als dit wordt opgelost, wilt u het systeem dan behouden?'
        }
      ]
    },
    {
      id: 'nouse',
      title: 'NO USE – Geen gebruik',
      question: 'Gebruikt u het systeem niet omdat uw situatie is veranderd, omdat u zelf maatregelen heeft genomen, of omdat het eigenlijk niet uw intentie was?',
      children: [
        {
          id: 'nouse-situatie',
          title: 'Situatie is veranderd',
          diagnosis: 'Wat is er precies veranderd waardoor u het systeem minder of niet meer gebruikt?',
          children: [
            {
              id: 'nouse-situatie-thuis',
              title: 'Ik ben vaker thuis',
              questions: [
                'Wat geeft thuis zijn u het gevoel dat extra beveiliging niet nodig is?',
                'Wat zou er gebeuren als er toch iemand binnenkomt terwijl u boven bent of uw telefoon niet bij u heeft?',
                'Heeft u er wel eens bij stilgestaan dat het systeem ook bescherming biedt bij brand of medische nood terwijl u thuis bent?'
              ],
              reframing: 'Thuis zijn betekent niet automatisch dat u controle heeft over alles wat gebeurt. Juist wanneer u aanwezig bent, wilt u niet zelf in een noodsituatie moeten handelen.',
              solution: 'Juist omdat u vaker thuis bent, is het prettig dat het systeem actief is.\n\nPersoonlijk zou ik liever niet thuis zijn op het moment dat er wordt ingebroken.\n\nDaarnaast: als er \'s nachts brand ontstaat terwijl u slaapt, wilt u dat het alarm direct afgaat en er meteen opvolging is.\n\nHet systeem beschermt u dus niet alleen wanneer u weg bent, maar juist ook wanneer u er bent.\n\nWat we specifiek kunnen doen, is het systeem zo instellen dat het actief is terwijl u thuis bent, bijvoorbeeld via gedeeltelijke inschakeling of nachtmodus.\n\nZo blijft u beschermd tegen het onverwachte, zonder dat het zwaar of overdreven voelt.',
              closingQuestion: 'Zullen we het systeem zo voor u instellen?'
            },
            {
              id: 'nouse-situatie-nooit',
              title: 'Er gebeurt hier nooit wat',
              questions: [
                'Waar baseert u dat gevoel op?',
                'Is dat gebaseerd op ervaring of vooral omdat er tot nu toe niets is gebeurd?',
                'Wilt u liever voorbereid zijn voor het geval dat, of reageren als het al gebeurd is?'
              ],
              reframing: 'Het feit dat er niets is gebeurd, betekent niet dat er geen risico is. Vaak is het juist de voorbereiding die rust geeft.',
              solution: 'Dat is natuurlijk fijn om te horen.\n\nMaar het is een beetje zoals een airbag in een auto.\n\nU gebruikt hem nooit — en hopelijk ook nooit nodig — maar op het moment dat het wél gebeurt, bent u blij dat hij er is.\n\nHet alarmsysteem werkt precies zo.\n\nWat we kunnen doen, is het systeem alleen activeren wanneer u het echt nodig vindt, bijvoorbeeld bij afwezigheid of in de nacht.\n\nZo blijft u voorbereid, zonder dat het als overdreven voelt.',
              closingQuestion: 'Is dat een middenweg die voor u logisch klinkt?'
            },
            {
              id: 'nouse-situatie-dreiging',
              title: 'De dreiging is weg',
              questions: [
                'Wat is er precies veranderd in de situatie?',
                'Was het systeem alleen bedoeld voor die specifieke dreiging?',
                'Denkt u dat algemene risico\'s zoals inbraak of brand ook volledig zijn verdwenen?'
              ],
              reframing: 'Specifieke dreiging verdwenen betekent niet dat algemene risico\'s verdwijnen.',
              solution: 'Goed om te horen dat die specifieke situatie is opgelost.\n\nMaar de meeste mensen nemen een alarmsysteem niet alleen vanwege één persoon of gebeurtenis, maar vanwege algemene risico\'s zoals inbraak, brand of medische noodsituaties.\n\nWat we specifiek kunnen doen, is het systeem aanpassen naar uw huidige situatie, bijvoorbeeld alleen bij afwezigheid of via nachtmodus.\n\nZo behoudt u bescherming tegen het onverwachte, zonder dat het voelt als een reactie op iets dat niet meer speelt.',
              closingQuestion: 'Zullen we het systeem zo voor u aanpassen?'
            }
          ]
        },
        {
          id: 'nouse-maatregelen',
          title: 'Zelf maatregelen genomen',
          diagnosis: 'Wat heeft u zelf aangepast waardoor u het gevoel heeft dat extra beveiliging niet nodig is?',
          children: [
            {
              id: 'nouse-maatregelen-hond',
              title: 'Hond',
              questions: [
                'Wat doet uw hond op het moment dat er daadwerkelijk iemand binnenkomt?',
                'Wie schakelt hulp in als u niet direct kunt handelen?',
                'Wat gebeurt er bij brand terwijl u niet thuis bent?'
              ],
              reframing: 'Een hond schrikt af en signaleert, maar schakelt geen professionele hulp in.',
              solution: 'Wat mooi dat u een hond heeft, dat werkt zeker afschrikwekkend.\n\nAlleen een hond kan signaleren, maar niet automatisch hulp inschakelen.\n\nStel dat er brand ontstaat terwijl u slaapt of niet thuis bent, dan is het prettig dat er direct opvolging plaatsvindt.\n\nWat we specifiek kunnen doen, is het systeem huisdiervriendelijk instellen zodat uw hond geen vals alarm veroorzaakt.\n\nZo combineert u afschrikking met directe professionele opvolging.\n\nDat geeft een complete vorm van beveiliging.',
              closingQuestion: 'Zullen we het systeem zo optimaliseren dat het samenwerkt met uw hond?'
            },
            {
              id: 'nouse-maatregelen-camera',
              title: 'Camera',
              questions: [
                'Wat doet u als u een melding krijgt terwijl u niet direct kunt reageren?',
                'Wat als uw telefoon niet binnen handbereik is?',
                'Bent u op zoek naar inzicht achteraf of directe actie op het moment zelf?'
              ],
              reframing: 'Camera\'s geven inzicht. Het alarmsysteem zorgt voor directe interventie.',
              solution: 'Camera\'s zijn waardevol omdat ze inzicht geven in wat er gebeurt.\n\nMaar bescherming zit in snelle interventie.\n\nAls u op vakantie bent of uw telefoon ligt even weg, ziet u achteraf wat er is gebeurd.\n\nHet alarmsysteem zorgt juist voor directe opvolging via de meldkamer.\n\nWat we kunnen doen, is het systeem zo instellen dat camera\'s en alarm elkaar versterken.\n\nZo heeft u zowel zicht als directe actie.',
              closingQuestion: 'Wilt u zicht combineren met directe opvolging?'
            },
            {
              id: 'nouse-maatregelen-rolluiken',
              title: 'Rolluiken / Hekwerk / Hang- en sluitwerk',
              questions: [
                'Vertragen deze maatregelen een indringer of schakelen ze ook hulp in?',
                'Wat gebeurt er als iemand ondanks deze maatregelen toch binnenkomt?',
                'Wie zorgt ervoor dat er direct actie wordt ondernomen?'
              ],
              reframing: 'Beveiliging bestaat uit twee lagen: Voorkomen én opvolgen.',
              solution: 'Extra hang- en sluitwerk en rolluiken zijn uitstekende preventieve maatregelen.\n\nZe vertragen en schrikken af.\n\nMaar vertragen is iets anders dan direct hulp inschakelen.\n\nHet alarmsysteem zorgt voor die tweede laag: directe opvolging via de meldkamer.\n\nWat we specifiek kunnen doen, is het systeem optimaliseren zodat het perfect samenwerkt met uw huidige beveiliging.\n\nZo creëert u een complete beveiliging: afschrikking én directe actie.',
              closingQuestion: 'Zullen we preventie combineren met directe opvolging?'
            }
          ]
        },
        {
          id: 'nouse-intentie',
          title: 'Niet mijn intentie',
          diagnosis: 'Voelt het alsof dit systeem niet volledig uw eigen keuze was?',
          children: [
            {
              id: 'nouse-intentie-verkoop',
              title: 'Agressieve verkoop',
              questions: [
                'Wat voelde destijds als te veel druk?',
                'Wat had u liever anders gezien in dat gesprek?',
                'Wat vindt u vandaag belangrijk in veiligheid?'
              ],
              reframing: 'Verkoopmoment uit het verleden ≠ huidige waarde van bescherming.',
              solution: 'Het is nooit de bedoeling dat iemand zich onder druk gezet voelt.\n\nUiteindelijk heeft u wél gekozen voor extra veiligheid in uw woning.\n\nDe vraag is niet zozeer hoe het gesprek toen ging, maar of de bescherming vandaag voor u van waarde is.\n\nWat we specifiek kunnen doen, is samen opnieuw kijken of het systeem aansluit bij wat u nu belangrijk vindt.\n\nIndien nodig passen we het aan naar uw huidige situatie.\n\nZo maakt u er alsnog een bewuste keuze van, in plaats van een beslissing uit het verleden.',
              closingQuestion: 'Zullen we het systeem samen opnieuw bekijken?'
            },
            {
              id: 'nouse-intentie-partner',
              title: 'Partner heeft het aangeschaft',
              questions: [
                'Was u het destijds eens met de keuze?',
                'Hoe kijkt u vandaag naar veiligheid in huis?',
                'Wilt u dit samen opnieuw bekijken?'
              ],
              reframing: 'Veiligheid werkt het beste als beide partners erachter staan.',
              solution: 'Een alarmsysteem werkt alleen goed als beide partners erachter staan.\n\nVeiligheid is geen individuele keuze, maar gezamenlijke bescherming.\n\nWat we kunnen doen, is het systeem vereenvoudigen of samen opnieuw afstemmen zodat het aansluit bij wat u beiden prettig vindt.\n\nEventueel kunnen we een gezamenlijke afspraak plannen.\n\nZo wordt het een bewuste gezamenlijke keuze.',
              closingQuestion: 'Zullen we het samen opnieuw afstemmen?'
            },
            {
              id: 'nouse-intentie-woning',
              title: 'Nieuwe woning / beginfase',
              questions: [
                'Wat maakte dat u het toen belangrijk vond om het systeem te nemen?',
                'Wat is er concreet veranderd sinds die periode?',
                'Is het gevoel van urgentie verdwenen of alleen de onzekerheid?'
              ],
              reframing: 'Onzekerheid verdwenen betekent niet dat risico verdwenen is.',
              solution: 'Veel mensen nemen een alarmsysteem in een nieuwe fase van hun leven, omdat ze voorbereid willen zijn op het onbekende.\n\nHet feit dat u zich nu rustiger voelt, kan juist betekenen dat het systeem zijn werk heeft gedaan.\n\nWat we specifiek kunnen doen, is het systeem aanpassen naar uw huidige situatie, bijvoorbeeld alleen nachtmodus of gedeeltelijke inschakeling.\n\nZo behoudt u bescherming zonder dat het voelt als een overreactie op die eerste periode.',
              closingQuestion: 'Zullen we het systeem zo voor u aanpassen?'
            }
          ]
        }
      ]
    }
  ]
};
