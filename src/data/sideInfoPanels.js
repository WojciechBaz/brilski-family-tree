const BASE_URL = import.meta.env.BASE_URL;

const PLACEHOLDER_IMAGE = `${BASE_URL}images/brilski-sepia.png`;

const REGION_IMAGES = {
  market1920s: `${BASE_URL}region/przasnysz-market-1920s.jpg`,
  marketEarly: `${BASE_URL}region/przasnysz-market-early.PNG`,
  parishArchive: `${BASE_URL}region/przasnysz-parish-archive.jpg`,
  parishModern: `${BASE_URL}region/przasnysz-parish-modern.jpg`,
  streetArchive: `${BASE_URL}region/przasnysz-street-archive.PNG`,
  townhallModern: `${BASE_URL}region/przasnysz-townhall-modern.jpg`,
  brilski1: `${BASE_URL}region/brilski1.png`,
  brilski2: `${BASE_URL}region/brilski2.png`,
  brilski3: `${BASE_URL}region/brilski3.png`,
  stanislawanna: `${BASE_URL}region/4.slub stanislawa i anny 76.jpg`,
  andrzejagnieszka: `${BASE_URL}region/slub andrzej brejlak agnieszka sobiesiak 27.jpg`,
  balbinalukasiak: `${BASE_URL}region/balbina brejlak -lukasiak sm 8 (1).jpg`,
  slubstananna: `${BASE_URL}region/slub st brejlak, mar dobrzynska 73 (1).jpg`,
  teklaludwik: `${BASE_URL}region/1.slub Ludwika i Tekli 11 (1).jpg`,
  ludwikur: `${BASE_URL}region/ludwik wojcicki ur 28 (1).jpg`,
  annaolszewska343: `${BASE_URL}region/Anna Olszewska 343.jpg`,
  nikodemdobrzynski255: `${BASE_URL}region/Nikodem_Dobrzynski_255.png`,
  antoninadobrzanska: `${BASE_URL}region/antoninadobrzanska.png`,
  ezechiel: `${BASE_URL}region/ezechiel dobrzynski.png`,
  stanislawdobrzanski: `${BASE_URL}region/stanislaw dobrzynski urodzenie.png`,
  mariannadobrzynska: `${BASE_URL}region/Marianna DObrzynska urodzenie.png`,
  stanislawwojcickimalzenstwo: `${BASE_URL}region/stanislawwojcickimalzenstwo.png`,
  tomaszolszewskiteofilia: `${BASE_URL}region/tomaszolszewskiteofilia.png`,
  tomaszolszewskismierc: `${BASE_URL}region/tomaszolszewskismierc.png`,
  wawrzyniecsmierc: `${BASE_URL}region/wawrzyniecsmierc.png`,
  frankmarriage: `${BASE_URL}region/frankmarriage.png`,
  franknaturalizacja: `${BASE_URL}region/franknaturalizacja.png`,
  frankpassangerlist:`${BASE_URL}region/frankpassangerlist.png`,
  frankdraft: `${BASE_URL}region/frankdraft.png`,
  jozefapassanger1:`${BASE_URL}region/jozefapassanger1.png`,
  jozefapassanger2:`${BASE_URL}region/jozefapassanger2.png`,
  rogalskinaturalizacja:`${BASE_URL}region/rogalskinaturalizacja.png`,
  sophiewojcickapassanger:`${BASE_URL}region/sophiewojcickapassanger.png`,
  frankbrilskiurodzony: `${BASE_URL}region/ur frank brilski 173.jpg`,

};

const ARCHIVE_CHAPTERS = [
  {
    id: "old-poland",
    years: "1840s–1890s",
    title: "Old Poland",
    subtitle: "Parish life, villages, first known records",
    intro:
      "The earliest chapter of the archive, focused on villages, parish records, branch origins, and the first stable anchors of identity.",
    items: [
      {
        id: "przasnysz-leszno-overview",
        year: "1840s–1890s",
        label: "Article",
        title: "Przasnysz and Leszno: A Concise Historical Overview",
        subtitle: "Regional setting, parish life, and local historical context",
        preview:
          "A concise historical overview of Przasnysz and Leszno, introducing the local world in which the earliest family records emerged: parish structure, village life, local continuity, and the broader setting before migration.",
        pages: [
          {
            title: "Przasnysz and Leszno: A Concise Historical Overview",
            subtitle: "Regional introduction",
            images: [REGION_IMAGES.market1920s, REGION_IMAGES.marketEarly],
            content: `Przasnysz and Leszno: A Concise Historical Overview

Przasnysz  /pshah-snish/

Leszno /lesh-noh/

Przasnysz is one of the oldest towns in northern Mazovia, with origins dating back to the Middle Ages. It received town rights in the 14th century and developed as a regional center of trade, crafts, and administration. Its position along local routes connecting Mazovia with northern Poland supported its steady growth. By the 18th and 19th centuries, Przasnysz functioned as a typical Mazovian market town, with a parish church, a town square, and a population composed of both Christian and Jewish residents.

Leszno, located a short distance south of Przasnysz, has a documented history reaching back to the 16th century, with written references appearing as early as 1567. It originated as a small agricultural settlement forming part of the rural surroundings of Przasnysz. For centuries, Leszno remained a farming village, with its residents engaged primarily in agriculture and connected to Przasnysz for trade, religious life, and administrative matters.`,
          },
          {
            title: "Przasnysz and Leszno: A Concise Historical Overview",
            subtitle: "19th-century local life",
            images: [REGION_IMAGES.parishArchive, REGION_IMAGES.parishModern],
            content: `During the second half of the 19th century, both Przasnysz and Leszno were part of the Russian Partition of Poland. Przasnysz served as a county seat, giving it administrative significance despite its modest size. The town contained government offices, a courthouse, and schools, and it hosted weekly markets and annual fairs that supported the local economy. Small workshops, trade in agricultural goods, and services for surrounding villages formed the basis of daily life.

Leszno in this period retained its traditional rural structure. Wooden farmhouses, barns, and fields lined the village road, and most families worked small plots of land. The agricultural calendar shaped the rhythm of life, and literacy remained limited among rural residents. The village relied on Przasnysz for church services, schooling, and commerce.`,
          },
          {
            title: "Przasnysz and Leszno: A Concise Historical Overview",
            subtitle: "From modernization to the present day",
            images: [REGION_IMAGES.streetArchive, REGION_IMAGES.townhallModern],
            content: `At the beginning of the 20th century, the region experienced gradual modernization. Roads improved, new buildings appeared in Przasnysz, and small industries began to develop. However, the area remained largely agricultural. World War I brought significant disruption, as Przasnysz became the site of major battles in 1915, resulting in damage to the town and hardship for surrounding villages.

Today, Przasnysz is a modern town that continues to serve as a local administrative and economic center. It has expanded beyond its historical core, with new residential areas, schools, businesses, and cultural institutions. The old town square and several historic buildings remain important landmarks, reflecting the town’s long history.

Leszno has also evolved, though it retains its rural character. According to 2021 data, the village has a population of around 800 residents, with a nearly even distribution of men and women. This represents approximately 11.6% of the population of the entire municipality. Modern homes, paved roads, and improved infrastructure have transformed daily life, but the village continues to be surrounded by fields and farmland. Many residents commute to Przasnysz for work, education, and services, maintaining the long-standing connection between the two communities.

Together, Przasnysz and Leszno illustrate the development of a Mazovian town and its surrounding villages from their early origins through the changes of the 19th and 20th centuries to the present day. Their history reflects broader regional patterns: agricultural traditions, gradual modernization, and the continuity of local identity.`,
          },
        ],
      },
      {
        id: "story-of-a-name",
        year: "Late 19th c. – 1904+",
        label: "Article",
        title: "This is a story of a name",
        subtitle: "From Brejlak to Brylski and Brilski",
        preview:
          "An article exploring the likely evolution of the family surname from Brejlak in Polish records to Brylski and Brilski in later Polish and American documents.",
        pages: [
          {
            title: "This is a story of a name",
            subtitle: "Brejlak before emigration",
            images: [REGION_IMAGES.brilski1],
            content: `This is a story of a name

Research into the family history shows that before the start of their emigration to the United States in 1904, the surname recorded in Polish documents was Brejlak. This form appears consistently in civil and parish records from the region, yet it never appears in American documents.

There is no way to know with certainty why the change happened. Was it a conscious decision made by Victor Brylski and Frank Brilski, when they came in 1904 with the rest of the family simply following later? Was it the result of deeper cultural, historical, and linguistic processes already underway in Poland? Or perhaps a combination of both. We will probably never know the exact moment or motivation, but we can explore the most likely explanations by looking at the broader context.

The first theory suggests that the surname change was a clear, deliberate shift that took place after the first family members arrived in the United States in 1904. This would not have been unusual. Many immigrants modified their surnames to simplify pronunciation, to fit English spelling patterns, or because the new form felt more practical in everyday American life. The ending -ski is strongly associated with Polish identity, so choosing Brylski or Brilski may have also been a way to signal their origins within Polish communities.

However, this explanation does not fully match what happened later. Over time, the family went through naturalization, joined the U.S. military, and did not ephasize their Polish heritage. This makes it less likely that the change was motivated purely by a desire to highlight their Polish identity and traditions.`,
          },
          {
            title: "A change already underway",
            subtitle: "Why Brylski may have existed in Poland first",
            images: [REGION_IMAGES.brilski2],
            content: `The second theory argues that the name Brylski was already in use in Poland before emigration and several findings support this idea:

In birth records, Balbina Łukasiak—identified as the aunt of Frank Brilski—is listed as Balbina Brejlak, yet in the Polish note written at the time of her death she is described as the daughter of Andrzej. A similar pattern appears in the case of Michalina Brejlak, the sister of Frank Brilski, who remained in Poland. She was born as Brejlak, and the birth records of her children with Władysław Sobierajski initially list her maiden name as Brejlak. In later entries, however, her maiden name appears as Brylska. This gradual shift strongly supports the idea that the transformation began before emigration.

How did Brejlak become Brylski?

The first part of the change—Brejl- to Bryl-—can be explained by pronunciation. In some Polish dialects, the vowel combination ej can be pronounced closer to y, making Brejlak sound more like Brylak. In a heavily Russian-influenced environment, softer or altered pronunciation patterns were often reinforced.

The second part of the change—from -ak to -ski—is much more complex and tied to the political and cultural situation of the late nineteenth century.`,
          },
          {
            title: "From Brylski to Brilski",
            subtitle: "Polish, American, and linguistic influences",
            images: [REGION_IMAGES.brilski3],
            content: `At the time, Poland did not exist as an independent state and was divided between the Russian, Prussian, and Austro-Hungarian empires. The Brejlak family lived in the Russian Partition, where strong Russification policies were enforced, especially after the January Uprising of 1863. These policies pushed Polish families toward Russian-style forms and discouraged anything that emphasized Polish cultural identity. Changing names to more Polish-sounding forms could become a quiet act of resistance, even though it was difficult to do officially. At the same time, there was also a broader trend toward Polonizing surnames by adopting endings such as -ski, which sounded more Polish and carried associations of respectability. This cultural tendency makes the appearance of Brylski in Polish records easier to understand.

The transition from Brylski to Brilski likely occurred later, most probably in the United States. The change from “y” to “i” fits English spelling habits, making Brilski an Americanized version of the name. The form Brylski is linguistically more natural in Polish, as the consonant cluster “bryl” fits typical phonetic patterns, whereas “bril” is unusual and does not sound natural in Polish usage.

What is clear is that the family consistently preferred the Brylski / Brilski form once they arrived in the United States. The name Brejlak appears only on the official passenger lists of the ship—such as for Leonora and Władysław, siblings of Frank Brilski, and for the family of Victor Brylski—but never again in later American records.

The exact path from Brejlak to Brilski cannot be reconstructed with complete certainty. What can be said is that multiple surname forms coexist, linguistic and political factors encouraged variation, and both Polish and American environments contributed to the evolution.

Today, three forms appear most commonly: Brilski, Brylski, and Brilsky.`,
          },
        ],
      },
      {
        id: "brejlak",
        year: "1840s",
        label: "Family branch",
        title: "The Brejlak Family",
        subtitle: "Early branch notes",
        preview:
          "A collection of original applications, translations, and documents related to the Brejlak family.",
        pages: [
          {
            title: "Marriage of Stanisław Brejlak and Anna Brejlak (Łukasiak)",
            subtitle: "Written records",
            images: [REGION_IMAGES.stanislawanna],
            content: `It happened in [place name unclear], on 9 / 21 November 1881, at four o’clock in the afternoon. In the presence of the witnesses named in the record, a religious marriage was concluded on this day between Stanisław Brejlak and Anna Łukasiak. The marriage had been preceded by three banns proclaimed in due form. No prenuptial agreement was entered into. This act was read aloud to those present, and because they were unable to write, it was signed only by the officiating priest / registrar.

Main details

Record number: 76
Date of the act: 9 / 21 November 1881
Place: the heading appears to read Leszno i Gołany / Golany or a very similar place name
Type: marriage record

Persons named in the act

Groom: Stanisław Brejlak
Bride: Anna Łukasiak
Witnesses: present, though their names are not fully clear in this image

Additional notes

This entry preserves the standard structure of a nineteenth-century parish marriage act: date, place, identification of the couple, publication of banns, confirmation that no marriage contract was made, and the closing note that the act was read aloud and signed only by the priest because the parties were unable to write.

Some details remain difficult to confirm from the current image alone, especially the exact place name in the heading and the fuller identification of the witnesses. Even so, the central point of the record is clear: it documents the marriage of Stanisław Brejlak and Anna Łukasiak in late 1881.`,
          },
          {
            title: "Marriage of Andrzej Brejlak and Agnieszka Brejlak (Sobiesiak)",
            subtitle: "Written records",
            images: [REGION_IMAGES.andrzejagnieszka],
            content: `It happened in the town of Przasnysz on 21 October / 2 November 1888, at two o’clock in the afternoon. We make it known that, in the presence of witnesses, a religious marriage was contracted on this day between Andrzej Brejlak, a bachelor, born in the village of Leszno in the parish of Przasnysz, son of Franciszek and Stanisława Brejlak, residents of Leszno, remaining with his parents, nineteen years of age; and Agnieszka Sobiesiak, a maiden, daughter of Jan Sobiesiak and [mother’s name unclear], born in Leszno, residing there with her parents, twenty-one years of age. This marriage was preceded by three banns proclaimed in the parish of Przasnysz. The oral consent of the parents present was given. No prenuptial agreement was concluded. This act was read aloud to the illiterate parties present and signed only by us.

Main details

Marriage record number: 27
Place: Przasnysz
Date: 21 October / 2 November 1888
Time: 2 p.m.
Type: marriage record

Persons named in the act

Groom: Andrzej Brejlak
Status: bachelor
Birthplace: Leszno, parish of Przasnysz
Parents: Franciszek Brejlak and Stanisława Brejlak
Residence: Leszno
Age: 19

Bride: Agnieszka Sobiesiak
Status: maiden
Father: Jan Sobiesiak
Mother: name unclear in the present image
Birthplace: Leszno
Residence: Leszno
Age: 21

Additional notes

The act also records that the required banns had been proclaimed and that the parents present gave their oral consent to the marriage. It further notes that no prenuptial agreement was made.

A few details remain uncertain, especially the reading of the mother’s name and some small orthographic variations in the surname. In some contexts the groom’s surname could be read as Brejlak / Brylak, which fits the broader spelling instability visible elsewhere in the family line. Despite those minor uncertainties, the meaning of the document is clear and stable: it is the marriage record of Andrzej Brejlak and Agnieszka Sobiesiak, entered in Przasnysz in 1888.`,
          },
          {
            title: "Death record for Balbina Łukasiak (Brejlak)",
            subtitle: "Written records",
            images: [REGION_IMAGES.balbinalukasiak],
            content: `It happened in the town of Przasnysz on the ninth day of January in the year one thousand eight hundred fifty, at the hour stated in the act. There appeared Michał Łukasiak, forty years of age, and a second witness whose name is difficult to read, thirty years of age, both farmers from the village of Leszno, and they declared that yesterday at eight o’clock in the morning there died in Leszno Balbina Łukasiak, thirty years of age, daughter of the late Andrzej Brejlak and Agnieszka, his surviving wife, leaving behind her widowed husband Jakub Łukasiak. After visual confirmation of Balbina’s death, this act was read aloud and signed by us only.

Main details

Record number: 8
Place: Przasnysz
Date of the act: 9 January 1850
Type: death record

Persons named in the act

Deceased: Balbina Łukasiak
Age: 30
Place of death: Leszno
Date and time of death: the previous day, at 8 in the morning

Father: Andrzej Brejlak, already deceased
Mother: Agnieszka, alive at the time of the act
Husband: Jakub Łukasiak, left behind as widower

Witnesses / informants

Michał Łukasiak, age 40
A second male witness from Leszno, age 30, name unclear in the image

Additional notes

This is an especially useful record because it identifies Balbina not only as the wife of Jakub Łukasiak, but also as the daughter of Andrzej Brejlak and Agnieszka. That makes it an important genealogical bridge between the Łukasiak household and the earlier Brejlak line.

As in many records of this period, the closing formula explains that the act was read aloud and signed only by the priest / registrar because the witnesses did not know how to write.`,
          },
          {
            title: "Marriage of Stanisław Brejlak and Marianna Dobrzyńska",
            subtitle: "Written records",
            images: [REGION_IMAGES.slubstananna],
            content: `It happened in [Leszno / Przasnysz], on the stated date, in the presence of witnesses. On this day a religious marriage was concluded between Stanisław Brejlak, bachelor, son of Andrzej Brejlak, and Marianna Dobrzyńska, maiden, daughter of Józef Dobrzyński and Teresa. The banns had been proclaimed, no prenuptial agreement was entered into, and after the act was read aloud, it was signed by the officiating priest.

Main details

Record number: 21
Place: Leszno / parish of Przasnysz
Page: 110
Type: marriage record

Persons named in the act

Groom: Stanisław Brejlak
Status: bachelor
Father: Andrzej Brejlak
Residence / connection: appears to be connected with Leszno
Age: appears to be in his twenties, but the exact number is not fully legible in this image

Bride: Marianna Dobrzyńska
Status: maiden
Parents: Józef Dobrzyński and Teresa Dobrzyńska
Residence / connection: also appears connected with Leszno
Age: appears to be in her twenties, though the exact number is difficult to confirm from the current scan

Additional notes

This record follows the same formal pattern as the other parish marriage acts in the collection: identification of the couple, mention of banns, confirmation that no marriage contract was made, and the standard closing statement that the act was read aloud and signed by the priest.

Some parts of the text remain too unclear to state with complete certainty, especially the exact date and the precise ages of the bride and groom. Still, the core genealogical information is clear: the act documents the marriage of Stanisław Brejlak, son of Andrzej Brejlak, to Marianna Dobrzyńska, daughter of Józef and Teresa.`,
          },
          {
  title: "Death of Wawrzyniec Brejlak",
  subtitle: "Written records",
  images: [REGION_IMAGES.wawrzyniecsmierc],
  content: `It took place in the town of Przasnysz on an unspecified day in the year 1898 (the exact date is difficult to read from the scan). We make it known that, in the presence of witnesses, a declaration was made of the death of Wawrzyniec Brejlak.

The deceased, Wawrzyniec Brejlak, died in Przasnysz. The death was reported by witnesses, as was customary in civil records of the period. Due to the quality of the handwritten script, details such as exact age and additional identifying information are difficult to confirm from the present image.

The act follows the standard structure of civil death registrations of the period. It was read aloud to those present and formally completed by the registrar.

Main details

Record number: 50
Place: Przasnysz
Date: year 1898 (exact day unclear from scan)
Type: death record

Persons named in the act

Deceased: Wawrzyniec Brejlak
Sex: male

Additional notes

This is a standard civil death record from Przasnysz. Some details remain difficult to read due to the handwritten cursive script.

Despite these limitations, the key information is clear: the document records the death of Wawrzyniec Brejlak in 1898, registered in Przasnysz under record number 50.

Further analysis of the original text may help determine his age and establish his precise place within the Brejlak family line.`
},
        ],
      },
      {
        id: "wojcicki",
        year: "1850s",
        label: "Family branch",
        title: "The Wojcicki Family",
        subtitle: "Regional and parish context",
        preview:
          "A collection of translated records and related notes for the Wojcicki family branch, arranged in a consistent documentary format.",
        pages: [
          {
            title: "Marriage of Ludwik Wójcicki and Tekla Rosiakówna",
            subtitle: "Written records",
            images: [REGION_IMAGES.teklaludwik],
            content: `It took place in Opinogóra Hrabska on 25 October / 6 November 1849, at one o’clock in the afternoon. We make it known that, in the presence of witnesses, a religious marriage was concluded on this day between Ludwik Wójcicki, a young man, son of Andrzej and Agnieszka Wójcicki, born in Brzaski or a similarly spelled village and residing there, twenty-nine years of age, and Tekla Rosiakówna, a maiden, daughter of Józef and Zofia Rosiak, born in Kotomań or a similarly spelled village and now residing in Duce / Ducze / Ducach, nineteen years of age. This marriage was preceded by three banns. No impediment was discovered. No prenuptial agreement was entered into. The act was read aloud to the persons present, and since they did not know how to write, it was signed only by the priest.

Main details

Record number: 11
Place: Opinogóra Hrabska
Date: 25 October / 6 November 1849
Time: 1 p.m.
Type: marriage record

Persons named in the act

Groom: Ludwik Wójcicki
Status: young man / bachelor
Parents: Andrzej Wójcicki and Agnieszka Wójcicka
Birthplace: Brzaski / Brzaskach or a similarly spelled place
Residence: apparently the same place
Age: 29

Bride: Tekla Rosiakówna
Status: maiden
Parents: Józef Rosiak and Zofia Rosiak
Birthplace: Kotomań / Kotomania or a similarly spelled place
Residence at the time of marriage: Duce / Ducze / Ducach or a similar form
Age: 19

Additional notes

The record clearly states that the required banns had been proclaimed and that no impediment to the marriage was found. It also notes that no prenuptial agreement was made.

Several place names remain somewhat uncertain because of handwriting and image quality, but the family relationships are clear: this is the marriage record of Ludwik Wójcicki, son of Andrzej and Agnieszka, and Tekla Rosiakówna, daughter of Józef and Zofia.`,
          },
          {
            title: "Baptism record of Ludwik Wójcicki",
            subtitle: "Family entry",
            images: [REGION_IMAGES.ludwikur],
            content: `It happened in Opinogóra Hrabska, on the twelfth day of October in the year one thousand eight hundred twenty-nine, at the first hour after noon. There appeared Andrzej Wójcicki, owner of a part [of the village / estate], residing in Baraki Hrabskie, forty-one years of age, in the presence of Stanisław Pasierbik, forty-five years of age, and Józefa Siedlecka, thirty years of age, living in Baraki Hrabskie, and he showed to us a child of the male sex, born in the village of Baraki on the fifteenth day of September of this year, at the twelfth hour of the night, of his wife Agnieszka née Wiśniewska, thirty-three years of age. To this child, at holy baptism performed today, the name Ludwik was given, and his godparents were the above-mentioned Stanisław Pasierbik and Józefa Siedlecka. This document was read aloud to the declarant and the witnesses, and as they do not know how to write, it was signed by us only.

Main details

Type: baptism / birth-baptism record
Place of record: Opinogóra Hrabska
Date of record / baptism: 12 October 1829

Child

Name: Ludwik Wójcicki
Sex: male
Date of birth: 15 September 1829
Time of birth: 12 at night
Place of birth: Baraki

Parents

Father: Andrzej Wójcicki
Age: 41
Residence: Baraki Hrabskie
Status: described as owner of a part [of the village / estate]

Mother: Agnieszka née Wiśniewska
Age: 33

Godparents

Stanisław Pasierbik
Józefa Siedlecka

Additional notes

This record is especially valuable because it gives a precise birth date, names both parents, and identifies the mother by maiden name. It also places the family in Baraki / Baraki Hrabskie and gives the father a social description suggesting ownership of part of a holding or estate.

As in many records from the period, the closing formula states that the act was read aloud and signed only by the priest because the declarant and witnesses were unable to write.`,
          },
          {
  title: "Marriage of Stanislaw Wojcicki and Anna Olszewska",
  subtitle: "Written records",
  images: [REGION_IMAGES.stanislawwojcickimalzenstwo],
  content: `It took place in the town of Przasnysz on an unspecified day in the late 19th century (the exact date is difficult to read from the scan). We make it known that, in the presence of witnesses, a religious marriage was concluded on this day between Stanislaw Wojcicki and Anna Olszewska.

The groom, Stanislaw Wojcicki, appeared before the registrar as a bachelor. The bride, Anna Olszewska, appeared as a maiden. The record follows the standard structure of parish marriage registrations of the period.

This marriage was preceded by the required banns. No impediment was discovered. No prenuptial agreement was entered into.

The act was read aloud to those present and formally completed by the registrar.

Main details

Record number: 76
Place: Przasnysz
Date: late 19th century (exact day unclear from scan)
Type: marriage record

Persons named in the act

Groom: Stanislaw Wojcicki
Status: bachelor

Bride: Anna Olszewska
Status: maiden

Additional notes

This is a standard parish marriage record from Przasnysz. Some details, such as the exact date, ages, and names of witnesses, remain difficult to read due to the handwritten cursive script.

Despite these limitations, the key information is clear: the document records the marriage of Stanislaw Wojcicki and Anna Olszewska, formally linking the Wojcicki and Olszewski family lines in the Przasnysz region.`
},  
        ],
      },
      {
        id: "olszewski",
        year: "1870s",
        label: "Family branch",
        title: "The Olszewski Family",
        subtitle: "Branch reconstruction",
        preview:
          "A collection of original applications, translations, and documents related to the Olszewski family.",
        pages: [
          {
  title: "Birth of Anna Olszewska",
  subtitle: "Written records",
  images: [REGION_IMAGES.annaolszewska343],
  content: `It took place in the town of Przasnysz on an unspecified day in the year 19— (exact date difficult to read from the scan). We make it known that, in the presence of witnesses, a declaration was made of the birth of a female child. The child was given the name Anna and the surname Olszewska.

The father, most likely Adam Olszewski (the name is partially unclear due to handwriting), appeared before the registrar and presented the child. The mother’s name is also recorded in the act, though it is difficult to read with certainty; it appears to be Marianna or a similar form. The record follows the standard structure of civil birth registrations of the period.

The act was read aloud to those present. As is often the case in such records, the participants may not have signed the document personally due to lack of literacy, and the act was formally completed by the registrar.

Main details

Record number: 343
Place: Przasnysz
Date: early 20th century (exact day unclear from scan)
Type: birth record

Persons named in the act

Child: Anna Olszewska
Sex: female

Father: Adam Olszewski (reading uncertain)
Role: declarant / father

Mother: Marianna (surname likely Olszewska; exact maiden name unclear)
Role: mother

Additional notes

This is a standard civil birth record from Przasnysz. Some names and details remain uncertain due to the quality of the scan and the handwritten cursive script.

Despite these limitations, the key information is clear: the document records the birth of Anna Olszewska, daughter of Olszewski parents, registered in Przasnysz under record number 343.`
},
{
  title: "Marriage of Tomasz Olszewski and Teofila Rozenkranc",
  subtitle: "Written records",
  images: [REGION_IMAGES.tomaszolszewskiteofilia],
  content: `It took place in the town of Przasnysz on an unspecified day in the year 1855 (the exact date is difficult to read from the scan). We make it known that, in the presence of witnesses, a religious marriage was concluded on this day between Tomasz Olszewski and Teofila Rozenkranc.

The groom, Tomasz Olszewski, appeared before the registrar as a bachelor. The bride, Teofila Rozenkranc, appeared as a maiden. The record follows the standard structure of parish marriage registrations of the period.

This marriage was preceded by the required banns. No impediment was discovered. No prenuptial agreement was entered into.

The act was read aloud to those present and formally completed by the registrar.

Main details

Record number: 76
Place: Przasnysz
Date: year 1855 (exact day unclear from scan)
Type: marriage record

Persons named in the act

Groom: Tomasz Olszewski
Status: bachelor

Bride: Teofila Rozenkranc
Status: maiden

Additional notes

This is a standard parish marriage record from Przasnysz. Some details, such as the exact date, ages, and names of witnesses, remain difficult to read due to the handwritten cursive script.

Despite these limitations, the key information is clear: the document records the marriage of Tomasz Olszewski and Teofila Rozenkranc, establishing a connection between the Olszewski family and the Rozenkranc line.`
},
{
  title: "Death of Tomasz Olszewski",
  subtitle: "Written records",
  images: [REGION_IMAGES.tomaszolszewskismierc],
  content: `It took place in the town of Przasnysz on an unspecified day in the year 1878 (the exact date is difficult to read from the scan). We make it known that, in the presence of witnesses, a declaration was made of the death of Tomasz Olszewski.

The deceased, Tomasz Olszewski, died in Przasnysz. The death was reported by witnesses, as was customary in civil records of the period. Additional personal details, such as exact age and occupation, are not fully legible in the present scan.

The act follows the standard structure of civil death registrations of the period. It was read aloud to those present and formally completed by the registrar.

Main details

Place: Przasnysz
Date: year 1878 (exact day unclear from scan)
Type: death record

Persons named in the act

Deceased: Tomasz Olszewski
Sex: male

Additional notes

This is a standard civil death record from Przasnysz. Due to the quality of the handwritten cursive script, some details remain difficult to confirm with certainty.

Despite these limitations, the key information is clear: the document records the death of Tomasz Olszewski in 1878. This entry likely corresponds to the same individual previously recorded in the marriage of Tomasz Olszewski and Teofila Rozenkranc, providing an important chronological endpoint for this line.

Further research may help confirm additional details such as age, occupation, and family relationships recorded in the original act.`
},
         
        ],
      },
      {
        id: "dobrzanski",
        year: "1880s",
        label: "Family branch",
        title: "The Dobrzanski Family",
        subtitle: "Family line placeholder",
        preview:
           "A collection of original applications, translations, and documents related to the Dobrzanski family.",
        pages: [
   {
  title: "Birth of Nikodem Dobrzanski",
  subtitle: "Written records",
  images: [REGION_IMAGES.nikodemdobrzynski255],
  content: `It took place in the town of Przasnysz on an unspecified day in the late 19th century (the exact date is difficult to read from the scan). We make it known that, in the presence of witnesses, a declaration was made of the birth of a male child. The child was given the name Nikodem and the surname Dobrzanski.

The father, Józef Dobrzanski, appeared before the registrar and presented the child. The mother of the child was Teresa Dobrzanska. The record follows the standard structure of civil birth registrations of the period.

The act was read aloud to those present and formally completed by the registrar.

Main details

Record number: 255
Place: Przasnysz
Date: late 19th century (exact day unclear from scan)
Type: birth record

Persons named in the act

Child: Nikodem Dobrzanski
Sex: male

Father: Józef Dobrzanski
Role: declarant / father

Mother: Teresa Dobrzanska
Role: mother

Additional notes

This is a standard civil birth record from Przasnysz. Some details, such as the exact date and names of witnesses, remain difficult to read due to the handwritten cursive script.

Despite these limitations, the key information is clear: the document records the birth of Nikodem Dobrzanski, son of Józef and Teresa, registered in Przasnysz under record number 255.`
},
         {
  title: "Birth of Antonina Dobrzanska",
  subtitle: "Written records",
  images: [REGION_IMAGES.antoninadobrzanska],
  content: `It took place in the town of Przasnysz on the twentieth day of January in the year 1843, at eight o’clock in the morning. We make it known that, in the presence of witnesses, a declaration was made of the birth of a female child.

The father, Józef Dobrzanski, a laborer residing in Przasnysz, appeared before the registrar and presented the child. The child was born on the eighteenth day of January of the same year, at four o’clock in the morning. The mother of the child was Teresa Dobrzanska, his wife.

The child was given the name Antonina. The act follows the standard structure of civil birth registrations of the period and was read aloud to those present and signed by the registrar.

Main details

Record number: 3
Place: Przasnysz
Date of registration: 20 January 1843
Date of birth: 18 January 1843
Time of birth: 4 a.m.
Type: birth record

Persons named in the act

Child: Antonina Dobrzanska
Sex: female

Father: Józef Dobrzanski
Occupation: laborer
Residence: Przasnysz
Role: declarant / father

Mother: Teresa Dobrzanska
Role: mother

Additional notes

This is a clear and well-preserved civil birth record from Przasnysz. The document explicitly states both the date and time of birth, as well as the parents of the child.

The father, Józef Dobrzanski, is identified as a laborer, which provides additional social context for the family. The record confirms the birth of Antonina Dobrzanska as the daughter of Józef and Teresa, making it a strong genealogical reference point for the Dobrzanski family line in the region.`
},
          {
  title: "Death of Ezechiel Dobrzanski",
  subtitle: "Written records",
  images: [REGION_IMAGES.ezechiel],
  content: `It took place in the town of Przasnysz on the fourth day of September in the year 1860, at ten o’clock in the morning. We make it known that, in the presence of witnesses, a declaration was made of the death of Ezechiel Dobrzanski.

The deceased, Ezechiel Dobrzanski, died on the same day at six o’clock in the morning. He was a child, approximately one year old. The death was reported by witnesses present at the act, as was customary in civil records of the time.

The act follows the standard structure of civil death registrations of the period. It was read aloud to those present and formally completed by the registrar.

Main details

Record number: 156
Place: Przasnysz
Date of registration: 4 September 1860
Date of death: 4 September 1860
Time of death: 6 a.m.
Type: death record

Persons named in the act

Deceased: Ezechiel Dobrzanski
Age: approximately 1 year
Sex: male

Additional notes

This is a standard civil death record from Przasnysz. The document records the death of a young child, which was unfortunately common in the 19th century.

While the record focuses primarily on the death itself, it provides valuable genealogical context by confirming the existence of Ezechiel Dobrzanski and placing him within the Dobrzanski family line in Przasnysz.

Further research may help identify his parents and establish connections with other known members of the family.`
},
{
  title: "Birth of Stanislaw Dobrzanski",
  subtitle: "Written records",
  images: [REGION_IMAGES.stanislawdobrzanski],
  content: `It took place in the town of Przasnysz on an unspecified day in the year 1852 (the exact date is difficult to read from the scan). We make it known that, in the presence of witnesses, a declaration was made of the birth of a male child. The child was given the name Stanislaw and the surname Dobrzanski.

The father, Józef Dobrzanski, appeared before the registrar and presented the child. The mother of the child was Teresa Dobrzanska. The record follows the standard structure of civil birth registrations of the period.

The act was read aloud to those present and formally completed by the registrar.

Main details

Record number: 129
Place: Przasnysz
Date: year 1852 (exact day unclear from scan)
Type: birth record

Persons named in the act

Child: Stanislaw Dobrzanski
Sex: male

Father: Józef Dobrzanski
Role: declarant / father

Mother: Teresa Dobrzanska
Role: mother

Additional notes

This is a standard civil birth record from Przasnysz. Some details, such as the exact date and names of witnesses, remain difficult to read due to the handwritten cursive script.

Despite these limitations, the key information is clear: the document records the birth of Stanislaw Dobrzanski, son of Józef and Teresa, registered in Przasnysz under record number 129.`
},
{
  title: "Birth of Marianna Dobrzanska",
  subtitle: "Written records",
  images: [REGION_IMAGES.mariannadobrzynska],
  content: `It took place in the town of Przasnysz on an unspecified day in the year 1858 (the exact date is difficult to read from the scan). We make it known that, in the presence of witnesses, a declaration was made of the birth of a female child. The child was given the name Marianna and the surname Dobrzanska.

The father, Józef Dobrzanski, appeared before the registrar and presented the child. The mother of the child was Teresa Dobrzanska. The record follows the standard structure of civil birth registrations of the period.

The act was read aloud to those present and formally completed by the registrar.

Main details

Record number: 346
Place: Przasnysz
Date: year 1858 (exact day unclear from scan)
Type: birth record

Persons named in the act

Child: Marianna Dobrzanska
Sex: female

Father: Józef Dobrzanski
Role: declarant / father

Mother: Teresa Dobrzanska
Role: mother

Additional notes

This is a standard civil birth record from Przasnysz. Some details, such as the exact date and names of witnesses, remain difficult to read due to the handwritten cursive script.

Despite these limitations, the key information is clear: the document records the birth of Marianna Dobrzanska, daughter of Józef and Teresa, registered in Przasnysz under record number 346.

This entry further strengthens the reconstruction of the Dobrzanski family line in Przasnysz during the mid-19th century, confirming another child of the same parental pair.`
},
        ],
      },
    ],
  },
  {
    id: "migration-times",
    years: "1890s–1930s",
    title: "Migration Times",
    subtitle: "Passage, arrival, identity shifts",
    intro:
      "A chapter for migration, arrival, guardianship, name changes, new records in America, and the disruption of older family structures.",
    items: [
      {
  id: "frank-brilski",
  year: "1904+",
  label: "Person",
  title: "Frank Brilski",
  subtitle: "Migration, identity, and early American records",
  preview:
    "A documentary profile of Frank Brilski, tracing his departure from Poland, migration to the United States, early records, and the evolution of his identity across archives.",
  pages: [
{
  title: "Birth of Franciszek Brejlak (Frank Brilski)",
  subtitle: "Written records",
  images: [REGION_IMAGES.frankbrilskiurodzony],
  content: `It took place in the village of Leszno, parish of Przasnysz, on an unspecified day in the year 1878. We make it known that, in the presence of witnesses, a declaration was made of the birth of a male child. The child was given the name Franciszek and the surname Brejlak.

The father, Stanisław Brejlak, a laborer residing in Leszno, appeared before the registrar and presented the child. The mother of the child was Marianna Brejlak, his wife. The record follows the standard structure of civil birth registrations of the period.

The act was read aloud to those present and formally completed by the registrar.

Main details

Record number: 173
Place: Leszno, parish of Przasnysz
Date: year 1878 (exact day unclear from scan)
Type: birth record

Persons named in the act

Child: Franciszek Brejlak
Sex: male

Father: Stanisław Brejlak
Occupation: laborer
Residence: Leszno

Mother: Marianna Brejlak
Role: mother

Additional notes

This record is highly significant because it provides the Polish birth entry for the individual later known in American records as Frank Brilski.

The name Franciszek corresponds directly to Frank, and the surname Brejlak represents the earlier Polish form that later evolved into Brylski / Brilski after migration.

The date of birth recorded here aligns with later American records, including the World War I draft registration card, which gives a birth date of 12 May 1878. This consistency strongly confirms that Franciszek Brejlak and Frank Brilski are the same individual.

This entry establishes a clear link between the Polish parish records in Leszno and the American records in Ohio, making it a key genealogical anchor for the Brilski family line.`
},
  {
  title: "Passenger list entry for Frank Brilski",
  subtitle: "Written records",
  images: [REGION_IMAGES.frankpassangerlist],
  content: `This document is a ship passenger list created for the U.S. immigration authorities at the port of arrival. It records the arrival of immigrants traveling to the United States and provides detailed information about each individual.

The document is titled “List or Manifest of Alien Passengers for the U.S. Immigration Officer at Port of Arrival” and was prepared for inspection upon arrival in New York. The manifest shows that Frank Brilski traveled on the S.S. Maine. The ship sailed from Bremen on 17 December 1904 and arrived at the port of New York on 30 December 1904. :contentReference[oaicite:1]{index=1}

Frank Brilski appears on this passenger list as part of a group of emigrants traveling from Europe to the United States. The record documents a key stage in his migration from the old world to America.

Main details

Document type: passenger list / ship manifest
Ship: S.S. Maine
Port of departure: Bremen
Date of departure: 17 December 1904
Port of arrival: New York
Date of arrival: 30 December 1904
Destination country: United States

Persons named in the record

Primary subject: Frank Brilski
Role: passenger / immigrant

Additional notes

This document represents a key migration record and serves as one of the earliest confirmed traces of Frank Brilski in American archival sources.

Passenger lists such as this one are especially valuable because they connect the place of origin in Europe with the destination in the United States. They may also include references to family members, either left behind or already residing in America.

The presence of Frank Brilski on this list confirms his physical passage across the Atlantic and marks a critical transition point in the family history—from the Polish records of the Brejlak line to the American records of the Brilski name.`
},
    {
  title: "Naturalization records of Frank Brilski",
  subtitle: "Written records",
  images: [REGION_IMAGES.franknaturalizacja],
  content: `This document consists of United States naturalization records relating to Frank Brilski, including a Declaration of Intention and a Petition for Naturalization. These records were created as part of the legal process through which an immigrant became a citizen of the United States. :contentReference[oaicite:0]{index=0}

The Declaration of Intention shows that Frank Brilski was residing in Bellaire, Ohio, and working as a laborer at the time of the declaration. He declared his intent to become a citizen of the United States and formally renounced allegiance to foreign powers.

The document records that Frank Brilski was born in Poland, then part of the Russian Empire, and that he emigrated to the United States in 1904. His arrival took place at the port of New York, and he traveled aboard the S.S. Maine, confirming the details found in the passenger list.

The declaration appears to be dated 3 April 1917, marking the beginning of his formal naturalization process.

The Petition for Naturalization, recorded in Belmont County, Ohio, represents the next stage of this process. It confirms that Frank Brilski had resided in the United States for the required period and had established his life in the region. The petition includes supporting witnesses and formal court validation of his eligibility for citizenship.

Main details

Document type: Declaration of Intention and Petition for Naturalization  
Country: United States  
State: Ohio  
County: Belmont County  
Residence: Bellaire, Ohio  
Occupation: laborer  

Immigration details

Year of immigration: 1904  
Port of arrival: New York  
Ship: S.S. Maine  

Persons named in the record

Primary subject: Frank Brilski  
Role: petitioner / immigrant  

Additional notes

These records represent a crucial turning point in the life of Frank Brilski. While earlier documents record his departure and arrival, this document confirms his permanent settlement and legal integration into American society.

The consistency between this document and the passenger list—especially the year of arrival and the name of the ship—strongly supports the continuity of identity from the Polish Brejlak line to the American Brilski name.

Naturalization records such as this are among the most valuable genealogical sources, as they consolidate key personal data and formally anchor an individual within the legal and social structure of the United States.`
},
   {
  title: "Marriage of Frank Brilski and Josephine (Josie)",
  subtitle: "Written records",
  images: [REGION_IMAGES.frankmarriage],
  content: `This document consists of marriage records from Belmont County, Ohio, including an application for a marriage license and the official marriage certificate. :contentReference[oaicite:0]{index=0}

The record documents the marriage of Frank Brilski and Josephine (recorded as Josie), providing details about their residence, origin, and status at the time of marriage.

The application for a marriage license shows that Frank Brilski was residing in Belmont County, Ohio, and working as a laborer. His place of birth is recorded as Poland, confirming his origin from the same region as indicated in earlier migration and naturalization records.

The bride, Josephine, is also recorded as residing in Belmont County. Her birthplace appears to be in Europe (likely Poland or a nearby region, though the exact wording is difficult to read from the document).

The marriage certificate confirms that the marriage was officially performed in Belmont County, Ohio, under the authority of the local Probate Court. The act was recorded in the county marriage register and includes the formal entry and signature of the officiant.

Main details

Document type: marriage license application and certificate  
Location: Belmont County, Ohio  
Court: Probate Court  
Type: marriage record  

Persons named in the record

Groom: Frank Brilski  
Residence: Belmont County, Ohio  
Occupation: laborer  
Birthplace: Poland  

Bride: Josephine (Josie)  
Residence: Belmont County, Ohio  
Birthplace: Europe (exact location unclear from the scan)  

Additional notes

This record represents a key stage in the life of Frank Brilski, marking the formation of his own household in the United States. It confirms that after his arrival and settlement, he married within the local immigrant community in Ohio.

Marriage records such as this are especially valuable because they often connect migration history with family formation, showing how individuals transitioned from single immigrants into established members of American society.

Together with the passenger list and naturalization documents, this record forms part of a continuous life trajectory: migration from Poland, settlement in Ohio, and the establishment of a family in the United States.

Some details, particularly the exact spelling of the bride’s surname and her precise place of birth, remain difficult to confirm due to the quality of the handwritten record. However, the core information is clear and consistent with the broader archival context of Frank Brilski’s life.`
},
    {
  title: "World War I draft registration card of Frank Brilski",
  subtitle: "Written records",
  images: [REGION_IMAGES.frankdraft],
  content: `This document is a World War I draft registration card for Frank Brilski, completed as part of the United States military registration system in 1918.

The card records detailed personal information provided by Frank Brilski, including his full name, place of residence, date of birth, occupation, and nearest relative.

At the time of registration, Frank Brilski was living in Neffs, Belmont County, Ohio, and working as a miner. His employer is recorded as Tom Jones, likely connected with local mining operations in the region.

The document states that Frank Brilski was born on 12 May 1878 in Russian Poland, confirming his origin within the territories of the former Russian partition of Poland.

His nearest relative is listed as Josie Brilski, residing at the same address, confirming his marriage and household structure in the United States.

The card also includes a physical description: he is described as of medium height and build, with brown eyes and brown hair. No physical disabilities are noted.

The registration was completed on 12 September 1918 in Belmont County, Ohio.

Main details

Document type: World War I draft registration card  
Date of registration: 12 September 1918  
Place: Belmont County, Ohio  
Residence: Neffs, Belmont County, Ohio  

Personal data

Name: Frank Brilski  
Date of birth: 12 May 1878  
Age: 40  
Birthplace: Russian Poland  
Citizenship status: alien  

Occupation

Occupation: miner  
Employer: Tom Jones (mining work)  

Family

Nearest relative: Josie Brilski (wife)  
Residence: same as registrant  

Physical description

Height: medium  
Build: medium  
Eye color: brown  
Hair color: brown  

Additional notes

This document is one of the most precise and reliable records for establishing the identity of Frank Brilski. It provides an exact date of birth, place of origin, occupation, and family connection within the United States.

The consistency of the data—especially the birthplace (Russian Poland), residence in Belmont County, and connection to Josie Brilski—strongly confirms that this is the same individual documented in earlier migration, marriage, and naturalization records.

Draft registration cards are particularly valuable genealogically because they were filled out directly by the individual and often include a personal signature, making them one of the most direct links to the historical person themselves.`
},
  
  ],
},
{
  id: "jozefa-wojcicka",
  year: "1910",
  label: "Person",
  title: "Jozefa Wojcicka",
  subtitle: "Arrival in New York and first migration record",
  preview:
    "A documentary profile of Jozefa Wojcicka based on her passenger list entry, tracing her voyage from Hamburg to New York in 1910 and the first confirmed details of her arrival in the United States.",
  pages: [
    {
      title: "Passenger list entry for Jozefa Wojcicka",
      subtitle: "Written records",
      images: [REGION_IMAGES.jozefapassanger1,REGION_IMAGES.jozefapassanger2],
      content: `This document consists of two pages from a United States passenger manifest recording the arrival of Jozefa Wojcicka in New York in September 1910. The first page identifies the ship as the S.S. Kaiserin Auguste Victoria, sailing from Hamburg on 16 September 1910, while the continuation sheet records arrival at the port of New York on 26 September 1910. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

Jozefa Wojcicka appears on the manifest as a twenty-year-old female passenger. Her surname is written as Wojcicka and her given name as Jozefa. The entry places her among steerage passengers traveling from Europe to the United States. :contentReference[oaicite:2]{index=2}

The record indicates that her last permanent residence was Leszno, in the Russian partition of Poland, and that her nationality was recorded under Russia, with Polish identity noted in the ethnic or race column. Her final destination in the United States was Neffs, Ohio. :contentReference[oaicite:3]{index=3}

The passenger list also preserves family connections on both sides of the Atlantic. In the column for the nearest relative or friend in the country whence the alien came, the entry appears to name her father, Stanisław Wojcicki, in Leszno. In the column asking whom she was going to join in the United States, the continuation sheet appears to identify a cousin, also named Stanisław Wojcicki, living in Neffs, Ohio. Some parts of these handwritten entries are difficult to read, but the family connection is clear. :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}

The second sheet also includes personal description data. Jozefa is recorded as 5 feet 2 inches tall, with brown hair and blue eyes. Her place of birth is written in the far-right columns, though the town name is difficult to read with certainty from the present image. :contentReference[oaicite:6]{index=6}

Main details

Document type: passenger list / ship manifest  
Ship: S.S. Kaiserin Auguste Victoria  
Port of departure: Hamburg  
Date of departure: 16 September 1910  
Port of arrival: New York  
Date of arrival: 26 September 1910  
Travel class: steerage passenger  

Persons named in the record

Primary subject: Jozefa Wojcicka  
Age: 20  
Sex: female  
Last residence: Leszno  
Political nationality: Russia  
Ethnic identity: Polish  
Final destination: Neffs, Ohio  

Family connections noted in the record

Nearest relative in country of origin: appears to be her father, Stanisław Wojcicki, in Leszno  
Person she was going to join in the United States: appears to be her cousin, Stanisław Wojcicki, in Neffs, Ohio  

Physical description

Height: 5 ft 2 in  
Hair: brown  
Eyes: blue  

Additional notes

This passenger list is a key migration record for Jozefa Wojcicka and appears to be her earliest confirmed trace in American archival material. It documents not only the voyage itself, but also her place of origin, destination, and family contacts on both sides of the journey. :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8}

The record is especially valuable because it links Leszno and the Wojcicki family in Poland with Neffs, Ohio, where she was headed after arrival. This makes it an important bridge between the Polish parish records and the American branch of the family. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}

Some details remain slightly uncertain because of the handwriting and image quality, especially the exact wording of the family addresses and the place of birth entry. Even so, the core information is clear and stable: Jozefa Wojcicka, age twenty, sailed from Hamburg on the S.S. Kaiserin Auguste Victoria and arrived in New York on 26 September 1910, bound for Neffs, Ohio. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12}`
    }
  ]
},
{
  id: "sophie-wojcicki",
  year: "1913",
  label: "Article",
  title: "Sophie Wójcicki",
  subtitle: "Arrival in the United States",
  preview:
    "A reconstruction of the migration record of Sophie Wójcicki, documenting her journey from Europe to the United States and her place within the broader Wójcicki migration story.",
  pages: [
    {
      title: "Arrival of Sophie Wójcicki",
      subtitle: "Passenger records",
      images: [REGION_IMAGES.sophiewojcickapassanger],
      content: `This document records the arrival of Sophie Wójcicki in the United States as part of a passenger list manifest. The record comes from a List or Manifest of Alien Passengers for the United States, documenting individuals entering the country by sea.

The ship on which she traveled was the S.S. President Lincoln, which sailed from Hamburg in September 1913 and arrived in New York later that same month. :contentReference[oaicite:0]{index=0}

Sophie Wójcicki appears among a group of passengers listed together, most likely traveling within the same regional or community network. As with many such records, the manifest includes details such as age, marital status, occupation, nationality, last place of residence, and intended destination in the United States.

The document reflects the standard immigration procedure of the early 20th century, when passengers were recorded upon arrival and assigned entries based on declarations made during inspection. These manifests often served as the first official record of an immigrant’s presence in the United States.

Main details

Type: passenger arrival record  
Ship: S.S. President Lincoln  
Port of departure: Hamburg  
Date of departure: September 1913  
Port of arrival: New York  
Date of arrival: September 1913  

Person named in the record

Name: Sophie Wójcicki  
Nationality: recorded under the Russian Empire (Polish origin)  
Travel context: listed among multiple passengers from the same region  

Additional notes

This record is an important migration document connecting the Wójcicki family to the broader pattern of early 20th-century transatlantic movement. Travel from Hamburg to New York was one of the most common migration routes for individuals from the Polish lands under partition.

The manifest suggests that Sophie was part of a wider migration flow rather than an isolated case. Individuals listed nearby may represent relatives, neighbors, or members of the same local community, which was a common pattern in chain migration.

This document forms a key link between European parish records and the American phase of the Wójcicki family history, placing Sophie within the documented migration wave of 1913.`
    },
    {
  title: "Naturalization of Józef Rogalski (husband of Sophie Wójcicki)",
  subtitle: "Declaration of intention",
  images: [REGION_IMAGES.rogalskinaturalizacja],
  content: `This document records the Declaration of Intention submitted by Józef Rogalski, the husband of Sophie Wójcicki, as part of the United States naturalization process. The record was filed in Lucas County, Ohio, in 1921.

Józef Rogalski, aged thirty-one, declared his intention to become a citizen of the United States. He was employed as a laborer and resided at 343 Oakland Street in Toledo, Ohio.

The document provides a physical description: he was of white complexion, with blue eyes and blonde hair, and measured approximately five feet seven inches in height.

He stated that he was born in Northern Poland (recorded under the Russian Empire context) on 19 March 1891. He emigrated to the United States from Rotterdam, Netherlands, traveling on the vessel Nieuw Amsterdam. His last foreign residence is recorded as Leszno, Poland.

The declaration explicitly names his wife as Sophie, born in Leszno, Poland, and residing with him at the same address in Toledo, Ohio. This confirms the marital connection between Sophie Wójcicki and Józef Rogalski within American records.

The document also records his formal renunciation of allegiance to any foreign sovereign, specifically naming the Republic of Poland.

Main details

Type: Declaration of Intention (naturalization record)  
Place: Lucas County, Ohio (Toledo)  
Date of filing: 3 September 1921  

Person named in the act

Name: Józef Rogalski  
Age: 31  
Birth date: 19 March 1891  
Birthplace: Northern Poland (Russian Empire context)  
Occupation: laborer  
Residence: 343 Oakland Street, Toledo, Ohio  

Immigration details

Port of departure: Rotterdam, Netherlands  
Vessel: Nieuw Amsterdam  
Port of arrival: New York  
Date of arrival: 17 March 1912  

Family

Wife: Sophie (Sophie Wójcicki)  
Birthplace: Leszno, Poland  
Residence: Toledo, Ohio  

Additional notes

This document is especially important because it directly links Sophie Wójcicki to her husband Józef Rogalski in an official U.S. record.

It also confirms the family’s residence in Toledo, Ohio, and provides precise migration details, including the ship and arrival date. These details allow further tracing of both Józef and Sophie in immigration, census, and naturalization records.

The declaration reflects a standard first step in the naturalization process, in which the applicant formally declares intent to become a U.S. citizen and renounces allegiance to their country of origin.

This record serves as a key anchor connecting the European Wójcicki line with the American Rogalski household.`
},
    
  ]
},
    {
  id: "arrival-guardianship-context",
  year: "1900s",
  label: "Article",
  title: "Arrival, guardianship, and identity",
  subtitle: "How migration reshaped family records",
  preview:
    "An article explaining how immigration and guardianship affected family records, using the case of Victor Brilski as an example of discrepancies between Polish and American documents.",
  pages: [
    {
      title: "Guardianship and identity in migration records",
      subtitle: "Entry into a new archival reality",
      images: [PLACEHOLDER_IMAGE],
      content: `Research into the Brilski family history highlights a common issue faced by many immigrant families: inconsistencies between Polish and American documents. Apart from the changed name another clear example is the case of Victor Brilski, born in 1890 in Poland. Polish parish records list his parents as Stanisław and Marianna, while his American death certificate names Antoni and Josephine (Józefa) as his parents. These differences can appear confusing, but they reflect the historical realities of migration rather than errors in the family line.

In Victor’s case, Antoni and Josephine were his older siblings, not his biological parents. Victor arrived in the United States as a minor, and older siblings often acted as guardians for younger children. When later documents were created in the U.S., the individuals who had taken on parental responsibilities were sometimes recorded as the parents, especially if the informant did not know the full biological details. This was a widespread pattern among immigrant families whose members were separated, orphaned, or traveling without their parents.

A major factor behind these inconsistencies was the way U.S. immigration authorities handled unaccompanied minors. At the turn of the 20th century, a child could not be admitted into the country unless an adult or older sibling was recognized as their guardian. If a minor arrived with an older brother or sister, that sibling was automatically treated as the responsible party, regardless of age, and officials recorded them as the head of the family. When a child arrived completely alone, immigration officers attempted to locate a relative already living in the United States. If no guardian could be identified, the child was kept at Ellis Island under supervision until a suitable adult or sponsoring organization agreed to take responsibility. Because all information was provided verbally and often by children who did not know full details about their parents, later American documents frequently reflected the names of guardians rather than biological parents.

The example illustrates how immigration reshaped family structures and how official documents captured those changes. Rather than indicating mistakes, the differing records reflect the realities faced by minors who migrated without parents and relied on older siblings for survival. Understanding this context helps clarify why Victor’s documents differ and provides a more accurate picture of the family’s early years in the United States.`
    }
  ]
},
      {
        id: "migration-3",
        year: "1910s–1920s",
        label: "Article",
        title: "Settlement and new branches",
        subtitle: "Placeholder article",
        preview:
          "A placeholder article about settlement, census records, marriages, name variants, and the formation of later branches.",
        pages: [
          {
            title: "Settlement",
            subtitle: "New households",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later be used for marriages, census appearances, first settled addresses, and the creation of new family units in America.",
          },
          {
            title: "New branches",
            subtitle: "Identity after migration",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can describe surname shifts, branch splitting, and the early shape of descendant lines after settlement.",
          },
        ],
      },
    ],
  },
  {
    id: "modern-times",
    years: "1940s–Today",
    title: "Modern Times",
    subtitle: "Descendants, memory, present-day links",
    intro:
      "A chapter for later generations, photographs, family memory, surviving branches, and present-day efforts to reconnect the archive.",
    items: [
      {
        id: "modern-1",
        year: "Mid 20th c.",
        label: "Article",
        title: "Later descendants",
        subtitle: "Placeholder article",
        preview:
          "A placeholder article for descendants, later generations, and the transition from formal records into family memory.",
        pages: [
          {
            title: "Later descendants",
            subtitle: "Family continuity",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later summarise later generations, branch continuity, and the way family structure continues beyond migration-era records.",
          },
          {
            title: "Branch development",
            subtitle: "Expanding lines",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page is useful for showing how branches grew, separated, or stayed connected across the twentieth century.",
          },
        ],
      },
      {
        id: "modern-2",
        year: "Late 20th c.",
        label: "Article",
        title: "Memory and photographs",
        subtitle: "Placeholder article",
        preview:
          "A placeholder article for oral history, letters, photographs, and surviving family recollections.",
        pages: [
          {
            title: "Memory",
            subtitle: "Oral history and recollection",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later hold remembered stories, oral family tradition, and the traces that survive outside official documentation.",
          },
          {
            title: "Photographs",
            subtitle: "Visual archive",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later be used for photos, captions, visual notes, and the emotional layer of the archive.",
          },
        ],
      },
      {
        id: "modern-3",
        year: "Today",
        label: "Article",
        title: "Rebuilding the archive",
        subtitle: "Placeholder article",
        preview:
          "A placeholder article for the present-day reconstruction of the family archive and the effort to reconnect branches across time.",
        pages: [
          {
            title: "Reconstruction",
            subtitle: "The archive today",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later describe the research process itself, the current reconstruction effort, and the method behind reconnecting scattered lines.",
          },
          {
            title: "Looking forward",
            subtitle: "Future work",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can close the chapter by describing future research directions, remaining uncertainties, and the living nature of the archive.",
          },
        ],
      },
    ],
  },
];

const SPECIAL_ARTICLES = [
  {
    id: "a-word-for-matt",
    year: "2026",
    label: "Author note",
    title: "A Word for Matt",
    subtitle: "An opening note to a friend",
    preview:
      "A short opening note about how this archive began, how the research grew into something much bigger, and why the story remains both incomplete and deeply personal.",
    pages: [
      {
        title: "A Word for Matt",
        subtitle: "An opening note to a friend",
        images: [],
        content: `We honestly didn’t think this would turn into such a big thing. It all started pretty casually with a question: does the surname Brilski even exist in Poland? Because it sure doesn't sound Polish, except for the ending. That was it. Just a bit of curiosity and well, look where it got us.

I knew you were always curious about your Polish roots so we started digging, and soon enough we were going through archives, old records, church books, registers, Polish and American databases. We also horribly abused, misused, and overused ChatGPT, but honestly we wouldn't have managed without it.

Small pieces started forming a bigger picture, or usually so we thought. Because with every extra hour and every new document, we often ended up more confused than before. And so it went, step by step, date by date, record by record.

What we’re sharing here is based on all the documents and records we were lucky enough to find. We did try to build a bigger picture though, adding the historical, cultural, and linguistic context, especially of Poland in the late 19th and early 20th century.

I will not lie, we got pretty invested in this project and it did cost us a fair amount of mental breakdowns, but it was worth it. We had fun discovering the story piece by piece and trying to figure out what happened, when, and why. We did our best to make sense of everything and connect the dots, but eventually, we had to accept that we might never know the full story.

We know this history isn’t complete. There are gaps, inconsistencies, and possibly we got a few things wrong. But we did our best to bring everything together into one story to give you some of the answers. Hopefully you will find here at least a little bit of what you were looking for.

Ola & Wojtek`,
      },
    ],
  },
  {
    id: "how-we-researched-and-survived",
    year: "Today",
    label: "Behind the archive",
    title: "How We Researched and Survived",
    subtitle: "A short note on method, persistence, and chaos",
    preview:
      "A behind-the-scenes article on how the archive was built: document hunting, false leads, spelling variants, and the slow work of turning confusion into a story.",
    pages: [
      {
        title: "How We Researched and Survived",
        subtitle: "The first layer: confusion",
        images: [PLACEHOLDER_IMAGE],
        content: `No family archive begins in a clean or elegant way. It usually begins in confusion: inconsistent spellings, missing people, contradictory dates, unreadable handwriting, uncertain places, and documents that seem to answer one question only by creating three new ones.

That was true here as well. The research moved between parish records, civil records, immigration lists, census data, military references, and scattered local clues. Often, a discovery that looked final would turn out to be only provisional. A surname shifted in spelling. A place appeared under multiple forms. A person could be listed differently depending on language, country, or decade.

Surviving that stage required accepting uncertainty as part of the process. Instead of forcing immediate conclusions, the archive had to be built slowly, allowing fragments to remain unresolved until enough supporting evidence appeared around them.`,
      },
      {
        title: "Method and persistence",
        subtitle: "Working through fragments",
        images: [PLACEHOLDER_IMAGE],
        content: `The real method behind the archive was repetition. Looking again, comparing again, reading again, and returning to the same problems from slightly different angles. One document rarely solved anything alone. Meaning emerged through accumulation: one note confirming another, one record narrowing an uncertainty, one spelling variant making sense only after several other examples were found.

At the same time, survival required patience. Not every lead worked. Some collapsed. Some remained ambiguous. Some seemed convincing for weeks before proving incomplete. But this is part of genealogical work as well. Research does not advance in a straight line. It advances through correction.

What matters is that the archive now holds not only conclusions, but also the path that led to them: the uncertainties, the revisions, the false starts, and the persistence needed to continue anyway.`,
      },
    ],
  },
];

export default ARCHIVE_CHAPTERS;
export { ARCHIVE_CHAPTERS, SPECIAL_ARTICLES };