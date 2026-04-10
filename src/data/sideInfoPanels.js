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
  andrzejagnieszka:`${BASE_URL}region/slub andrzej brejlak agnieszka sobiesiak 27.jpg`,
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

In birth records, Balbina Łukasiak—identified as the aunt of Frank Brilski—is listed as Balbina Brejlak, yet in the Polish note written at the time of her death she is described as the daughter of Andrzej  A similar pattern appears in the case of Michalina Brejlak, the sister of Frank Blirski, who remained in Poland. She was born as Brejlak, and the birth records of her children with Władysław Sobierajski initially list her maiden name as Brejlak. In later entries, however, her maiden name appears as Brylska. This gradual shift strongly supports the idea that the transformation began before emigration.

How did Brejlak became Brylski tho?

The first part of the change—Brejl- to Bryl-—can be explained by pronunciation. In some Polish dialects, the vowel combination ej can be pronounced closer to y, making Brejlak sound like Brylak. Especially in heavily russian influenced environment the softer way of pronouncing was encouraged.

The second part of the change—from -ak to -ski—is much more complex and tied to the political and cultural situation of the late nineteenth century.`,
    },
    {
      title: "From Brylski to Brilski",
      subtitle: "Polish, American, and linguistic influences",
      images: [REGION_IMAGES.brilski3],
      content: `At the time, Poland did not exist as an independent state and was divided between the Russian, Prussian, and Austro-Hungarian empires. The Brejlak family lived in the Russian Partition, where strong Russification policies were enforced, especially after the January Uprising of 1863. These policies pushed Polish families toward Russian-style forms and discouraged anything that emphasized Polish cultural identity. Changing names to Polish-sounding forms became a quiet act of resistance, even though it was difficult to do officially. At the same time, there was a broader trend toward Polonizing surnames by adopting endings such as -ski, which sounded more Polish and carried associations of respectability. This cultural tendency makes the appearance of Brylski in Polish records easier to understand.

The transition from Brylski to Brilski likely occurred later, most probably in the United States. The change from “y” to “i” fits English spelling habits making Brilski an Americanized verison of he nameki. The form Brylski is linguistically more natural in Polish, as the consonant cluster “bryl” fits typical phonetic patterns, whereas “bril” is unusual and does not sound natural in Polish usage.

What is clear is that the family consistently preferred the Brylski/Brilski form once they arrived in the United States. The name Brejlak appears only on the official passenger lists of the ship—such as for Leonora, and Władysław, siblings of Frank Brilski and the family of Victor Brylski—but never again in American records.

The exact path from Brejlak to Brilski cannot be reconstructed with complete certainty. What can be said is that multiple surname forms coexist, linguistic and political factors encouraged variations, and both Polish and American environments contributed to the evolution.

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
      content: `Marriage of Stanisław Brejlak and Anna Brejlak (Łukasiak): “It happened in [place], on 9/21 November 1881, at 4 o’clock in the afternoon. In the presence of the witnesses, this day a religious marriage was concluded between Stanisław … and Anna …. The banns had been proclaimed on three occasions. No marriage contract was entered into. This act was read aloud to those present, and since they could not write, it was signed only by us.”

Record number: 76

Date of the act: written as 9 / 21 November and the year appears to be 1881
Place: the heading looks like Leszno i Golany / Gołany or a very similar place name
The marriage was performed in the presence of two witnesses
The groom is Stanisław
The bride is Anna
The record states that the usual marriage banns were announced
It also says that no prenuptial agreement was made
At the end it notes that the document was read aloud, and because the newlyweds and witnesses were illiterate / unable to write, the act was signed only by the priest / registrar`,
    },
    {
      title: "Marriage of Andrzej Brejlak and Agnieszka Brejlak (Sobiesiak)",
      subtitle: "Written records",
      images: [REGION_IMAGES.andrzejagnieszka],
      content: `"It happened in the town of Przasnysz on 21 October / 2 November 1888 at 2 o’clock in the afternoon.
We make it known that in the presence of the witnesses, a religious marriage was contracted on this day between Andrzej Brejlak, a bachelor, born in the village of Leszno in the parish of Przasnysz, son of Franciszek and Stanisława Brejlak, residents of Leszno, remaining with his parents, nineteen years of age; and Agnieszka Sobiesiak, maiden, daughter of Jan Sobiesiak and [mother’s name unclear], born in Leszno, residing there with her parents, twenty-one years of age.
This marriage was preceded by three banns proclaimed in the parish of Przasnysz. The oral consent of the parents present was given. No prenuptial agreement was concluded. This act was read aloud to the illiterate parties present and signed only by us."

Marriage record no. 27

Place: Przasnysz
Date: 21 October / 2 November 1888, at 2 p.m.
(the record uses the old/new style double date)

This record states that, in the presence of witnesses, a religious marriage was concluded between:

Groom

Andrzej Brejlak / Brylak

a bachelor
born in the village of Leszno, parish of Przasnysz
son of Franciszek (or a very similar name) Brejlak/Brylak and Stanisława
his parents were living in Leszno
he was 19 years old
he was still living with his parents

Bride

Agnieszka Sobiesiak

a maiden
daughter of Jan Sobiesiak and Marianna / Małgorzata? (the mother’s name is hard to read)
connected with Grochowice / Trochowice or a similarly spelled place
born in Leszno
living in Leszno
she was 21 years old
she was also still living with her parents

Additional details
The marriage was preceded by the three banns.
The banns were announced on:
16, 23, and 30 October old style
corresponding to 28 October, 4 November, and 11 November new style
The record says that the oral consent of the parents present was given.
It also states that the couple did not make a prenuptial agreement.
The act was read aloud to those present, and because they did not know how to write, it was signed only by the priest / registrar.`,
    },
  ],
},
      {
        id: "wojcicki",
        year: "1850s",
        label: "Family branch",
        title: "Wojcicki",
        subtitle: "Regional and parish context",
        preview:
          "A placeholder article area for the Wojcicki family branch. Use this later for core records, church references, and local family structure before migration.",
        pages: [
          {
            title: "Branch overview",
            subtitle: "Family entry",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This is a placeholder first page for the Wojcicki branch. Later it can summarize the branch, its place in the wider archive, and the earliest strong records connected to the family.",
          },
          {
            title: "Parish structure",
            subtitle: "Old Poland background",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later describe church life, regional structure, local marriage patterns, and how the branch appears in parish material before migration reshapes the archive.",
          },
          {
            title: "Research notes",
            subtitle: "Open questions",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This section is ideal for uncertainties, spelling shifts, related households, and hypotheses that connect the branch with neighboring lines.",
          },
        ],
      },
      {
        id: "olszewski",
        year: "1870s",
        label: "Family branch",
        title: "Olszewski",
        subtitle: "Branch reconstruction",
        preview:
          "A placeholder article area for the Olszewski line. This can later contain branch identity, record connections, and local context from Old Poland.",
        pages: [
          {
            title: "Branch overview",
            subtitle: "Identity and structure",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This is a placeholder first page for the Olszewski branch. Later it can contain the basic entry point into this family line and its place in the archive.",
          },
          {
            title: "Document layer",
            subtitle: "Record connections",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later be used for document interpretation, linked entries, and branch-specific notes that do not fit into the short preview.",
          },
          {
            title: "Context and notes",
            subtitle: "Working archive",
            images: [PLACEHOLDER_IMAGE],
            content:
              "Use this page for open genealogical questions, name variants, branch ambiguities, and any notes that help reconstruct the family line.",
          },
        ],
      },
      {
        id: "dobrzanski",
        year: "1880s",
        label: "Family branch",
        title: "Dobrzanski",
        subtitle: "Family line placeholder",
        preview:
          "A placeholder article area for the Dobrzanski line. This section can later hold branch background, source notes, and family connections.",
        pages: [
          {
            title: "Branch overview",
            subtitle: "Family entry",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This is a placeholder opening page for the Dobrzanski family branch. Later it can present the main branch summary and key genealogical anchors.",
          },
          {
            title: "Sources and evidence",
            subtitle: "Archive material",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later hold evidence notes, parish references, linked documents, and branch-specific observations drawn from your research.",
          },
          {
            title: "Interpretation",
            subtitle: "Working branch notes",
            images: [PLACEHOLDER_IMAGE],
            content:
              "Use this page for interpretation, uncertain relationships, branch reconstruction, and long-form explanatory text.",
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
        id: "migration-1",
        year: "1890s",
        label: "Article",
        title: "Departure and crossing",
        subtitle: "Placeholder article",
        preview:
          "A placeholder article for departure, transit, and the beginning of migration. Later this can cover ports, manifests, and family separation.",
        pages: [
          {
            title: "Departure",
            subtitle: "Leaving the old world",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This is a placeholder article page for departure. Later you can use it for port departure, family separation, first migration decisions, and the earliest traces of movement.",
          },
          {
            title: "Crossing",
            subtitle: "Transit and uncertainty",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later describe the crossing itself, incomplete information, travel conditions, and how migration began to reshape identity.",
          },
        ],
      },
      {
        id: "migration-2",
        year: "1900s",
        label: "Article",
        title: "Arrival and guardianship",
        subtitle: "Placeholder article",
        preview:
          "A placeholder article for arrival in the United States, guardianship issues, and the way official paperwork reshaped family identity.",
        pages: [
          {
            title: "Arrival",
            subtitle: "Entry into a new archive",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This placeholder page is meant for arrival records, first official registration, and the new archival reality created by immigration processing.",
          },
          {
            title: "Guardianship",
            subtitle: "Why records can differ",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later explain why siblings or guardians may appear as parents in later documents, and how migration changed recorded family structure.",
          },
        ],
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
    year: "Today",
    label: "Author note",
    title: "A Word for Matt",
    subtitle: "An opening note to a friend",
    preview:
      "A short opening note about how this archive began, how the research grew into something much bigger, and why the story remains both incomplete and deeply personal.",
    pages: [
      {
        title: "A Word for Matt",
        subtitle: "How this all began",
        images: [],
        content: `We honestly did not think this would turn into such a big thing. It all started pretty casually with a simple question: does the surname Brilski even exist in Poland? Because, apart from the ending, it did not really sound Polish. That was it. Just a bit of curiosity — and, well, look where it got us.

I knew you had always been curious about your Polish roots, so we started digging. Before long, we found ourselves moving through archives, old records, church books, registers, and both Polish and American databases. We also horribly abused, misused, and overused ChatGPT, but honestly, I do not think we would have managed without it.

At first, small pieces seemed to form a bigger picture — or at least so we thought. Because with every extra hour and every new document, we often ended up more confused than before. And so it went, step by step, date by date, record by record.`,
      },
      {
        title: "Trying to build the bigger picture",
        subtitle: "What this archive is and what it is not",
        images: [],
        content: `What we are sharing here is based on all the documents and records we were lucky enough to find. At the same time, we also tried to build a larger picture around them by adding historical, cultural, and linguistic context, especially the context of Poland in the late nineteenth and early twentieth century.

I will not lie — we got pretty invested in this project, and it cost us a fair number of minor mental breakdowns. But it was worth it. There was something genuinely exciting in discovering the story piece by piece and trying to understand what happened, when it happened, and why.

We did our best to make sense of everything and connect the dots. At some point, though, we also had to accept that we might never know the full story.`,
      },
      {
        title: "An incomplete story, still worth telling",
        subtitle: "What we hope you find here",
        images: [],
        content: `We know this history is not complete. There are gaps, inconsistencies, and quite possibly a few things we got wrong. That is part of the nature of this kind of work. The past rarely survives in a neat and orderly way, and family history is often preserved through fragments rather than certainty.

Still, we wanted to bring everything together into one story and give you at least some of the answers you were looking for. Even if the archive cannot recover every missing detail, it can still restore connections, preserve memory, and make the past feel a little less distant.

Hopefully, somewhere in these pages, you will find at least a little of what you came looking for.`,
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