const BASE_URL = import.meta.env.BASE_URL;

const PLACEHOLDER_IMAGE = `${BASE_URL}images/brilski-sepia.png`;

const REGION_IMAGES = {
  market1920s: `${BASE_URL}region/przasnysz-market-1920s.jpg`,
  marketEarly: `${BASE_URL}region/przasnysz-market-early.PNG`,
  parishArchive: `${BASE_URL}region/przasnysz-parish-archive.jpg`,
  parishModern: `${BASE_URL}region/przasnysz-parish-modern.jpg`,
  streetArchive: `${BASE_URL}region/przasnysz-street-archive.PNG`,
  townhallModern: `${BASE_URL}region/przasnysz-townhall-modern.jpg`,
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
            content: `Przasnysz and Leszno belonged to a world shaped by parish life, local custom, agricultural rhythms, and the slower administrative order of the nineteenth century. For families rooted in this landscape, identity was recorded less through modern civil systems and more through church books, household continuity, village belonging, and kinship ties stretching across neighboring communities.

This article serves as a concise historical introduction to that environment. Its purpose is not only to frame the earliest family records geographically, but also to show the social and cultural setting in which those entries were created. Names that later appear in parish books or migration records did not emerge in isolation. They belonged to a stable local world of church structures, market links, inherited occupations, and community memory.

In that sense, Przasnysz and Leszno should be understood not simply as locations on a map, but as part of the background world of the archive itself: the place where identities were first anchored before later disruption, movement, and migration altered how the family appeared in the historical record.`,
          },
          {
            title: "Parish life and documentary continuity",
            subtitle: "The church as a keeper of identity",
            images: [REGION_IMAGES.parishArchive, REGION_IMAGES.parishModern],
            content: `In nineteenth-century rural Poland, the parish often formed the strongest and most reliable framework of recorded identity. Baptisms, marriages, and deaths were preserved through church registers, which in practice became the backbone of family continuity across generations. For many families, the parish was not only a religious institution but also the main documentary anchor of existence.

This matters for genealogical reconstruction because many early references to a family line survive precisely through that ecclesiastical structure. A surname might shift in spelling, a household might move slightly within the same area, and local usage might differ from formal notation, yet the parish record often preserves the thread that holds the branch together.

Understanding this local system helps explain why the earliest archive chapter is built around villages, parish books, and branch origins. Before migration, family identity was often local first, administrative second, and only much later national or transatlantic in the way modern descendants would recognize it.`,
          },
          {
            title: "Town, market, and local movement",
            subtitle: "How regional life connected families",
            images: [REGION_IMAGES.streetArchive, REGION_IMAGES.townhallModern],
            content: `The region around Przasnysz was not isolated, even if daily life remained strongly local. Towns, parish centers, markets, roads, and neighboring settlements created regular points of contact through which families worked, traded, married, worshipped, and maintained wider ties. A market town was therefore more than a commercial location: it was one of the places where the rhythms of regional life became visible.

For families that later appear scattered across records, this local interconnectedness is important. It reminds us that branch development in Old Poland did not happen in total isolation. Even when people remained close to home, their lives were shaped by movement between village and town, by church attendance, by economic exchange, and by the social habits of the district.

Seen in that way, Przasnysz and Leszno form part of a larger historical fabric. They belong to the early world of the archive: a rooted landscape of parish memory, regional connection, and family continuity that existed before Atlantic migration began to transform how those same lives would later be recorded.`,
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
      images: [],
      content: `Research into the family history shows that before the start of their emigration to the United States in 1904, the surname recorded in Polish documents was Brejlak. This form appears consistently in civil and parish records from the region, yet it never appears in American documents.

There is no way to know with certainty why the change happened. Was it a conscious decision made by Victor Brylski and Frank Brilski when they came in 1904, with the rest of the family simply following later? Was it the result of deeper cultural, historical, and linguistic processes already underway in Poland? Or perhaps a combination of both.

We will probably never know the exact moment or motivation, but we can explore the most likely explanations by looking at the broader context.

The first theory suggests that the surname change was a clear, deliberate shift that took place after the first family members arrived in the United States in 1904. This would not have been unusual. Many immigrants modified their surnames to simplify pronunciation, to fit English spelling patterns, or because the new form felt more practical in everyday American life. The ending -ski is strongly associated with Polish identity, so choosing Brylski or Brilski may have also been a way to signal their origins within Polish communities.

However, this explanation does not fully match what happened later. Over time, the family went through naturalization, joined the U.S. military, and did not emphasize their Polish heritage. This makes it less likely that the change was motivated purely by a desire to highlight Polish identity and traditions.`,
    },
    {
      title: "A change already underway",
      subtitle: "Why Brylski may have existed in Poland first",
      images: [],
      content: `The second theory argues that the name Brylski was already in use in Poland before emigration, and several findings support this idea.

In birth records, Balbina Łukasiak—identified as the aunt of Frank Brilski—is listed as Balbina Brejlak, yet in the Polish note written at the time of her death she is described as the daughter of Andrzej Brylski. A similar pattern appears in the case of Michalina Brejlak, the sister of Frank Brilski, who remained in Poland. She was born as Brejlak, and the birth records of her children with Władysław Sobierajski initially list her maiden name as Brejlak. In later entries, however, her maiden name appears as Brylska.

This gradual shift strongly supports the idea that the transformation began before emigration.

How did Brejlak become Brylski, though?

The first part of the change—from Brejl- to Bryl-—can be explained by pronunciation. In some Polish dialects, the vowel combination “ej” can be pronounced closer to “y,” making Brejlak sound more like Brylak. Especially in a heavily Russian-influenced environment, softer or altered pronunciation patterns may have been encouraged.

The second part of the change—from -ak to -ski—is much more complex and tied to the political and cultural situation of the late nineteenth century.`,
    },
    {
      title: "From Brylski to Brilski",
      subtitle: "Polish, American, and linguistic influences",
      images: [],
      content: `At the time, Poland did not exist as an independent state and was divided between the Russian, Prussian, and Austro-Hungarian empires. The Brejlak family lived in the Russian Partition, where strong Russification policies were enforced, especially after the January Uprising of 1863. These policies pushed Polish families toward Russian-style forms and discouraged anything that emphasized Polish cultural identity.

Changing names to more Polish-sounding forms could become a quiet act of resistance, even though it was difficult to do officially. At the same time, there was a broader trend toward Polonizing surnames by adopting endings such as -ski, which sounded more Polish and carried associations of respectability. This cultural tendency makes the appearance of Brylski in Polish records easier to understand.

The transition from Brylski to Brilski likely occurred later, most probably in the United States. The change from “y” to “i” fits English spelling habits, making Brilski an Americanized version of the name. The form Brylski is linguistically more natural in Polish, as the consonant cluster “bryl” fits typical phonetic patterns, whereas “bril” is unusual and does not sound natural in Polish usage.

What is clear is that the family consistently preferred the Brylski/Brilski form once they arrived in the United States. The name Brejlak appears only on the official passenger lists of the ship—such as for Leonora and Władysław, siblings of Frank Brilski, and the family of Victor Brylski—but never again in American records.

The exact path from Brejlak to Brilski cannot be reconstructed with complete certainty. What can be said is that multiple surname forms coexisted, linguistic and political factors encouraged variation, and both Polish and American environments contributed to the evolution.

Today, three forms appear most commonly: Brilski, Brylski, and Brilsky.`,
    },
  ],
},
      {
        id: "brejlak",
        year: "1840s",
        label: "Family branch",
        title: "Brejlak",
        subtitle: "Early branch notes",
        preview:
          "A placeholder article space for the Brejlak family branch. This area can later hold the oldest known records, village references, and possible links to the wider line.",
        pages: [
          {
            title: "Branch overview",
            subtitle: "Earliest known outline",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This is a temporary first page for the Brejlak family branch. Later you can place here the broad overview of the family line, the oldest confirmed records, possible village ties, and the first working reconstruction of the branch.",
          },
          {
            title: "Records and village context",
            subtitle: "Parish and locality notes",
            images: [PLACEHOLDER_IMAGE],
            content:
              "This page can later hold specific parish references, surrounding local history, notes about handwriting, variants in spelling, and how the family appears in early records from the region.",
          },
          {
            title: "Working interpretation",
            subtitle: "Research notes",
            images: [PLACEHOLDER_IMAGE],
            content:
              "Use this page for uncertain links, theory building, branch reconstruction, and evidence interpretation. It works well for genealogical commentary that is too detailed for the short preview panel.",
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

export default ARCHIVE_CHAPTERS;
export { ARCHIVE_CHAPTERS };