const PLACEHOLDER_IMAGE = "/images/brilski-sepia.png";

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
            image: PLACEHOLDER_IMAGE,
            content:
              "This is a temporary first page for the Brejlak family branch. Later you can place here the broad overview of the family line, the oldest confirmed records, possible village ties, and the first working reconstruction of the branch.",
          },
          {
            title: "Records and village context",
            subtitle: "Parish and locality notes",
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later hold specific parish references, surrounding local history, notes about handwriting, variants in spelling, and how the family appears in early records from the region.",
          },
          {
            title: "Working interpretation",
            subtitle: "Research notes",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This is a placeholder first page for the Wojcicki branch. Later it can summarize the branch, its place in the wider archive, and the earliest strong records connected to the family.",
          },
          {
            title: "Parish structure",
            subtitle: "Old Poland background",
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later describe church life, regional structure, local marriage patterns, and how the branch appears in parish material before migration reshapes the archive.",
          },
          {
            title: "Research notes",
            subtitle: "Open questions",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This is a placeholder first page for the Olszewski branch. Later it can contain the basic entry point into this family line and its place in the archive.",
          },
          {
            title: "Document layer",
            subtitle: "Record connections",
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later be used for document interpretation, linked entries, and branch-specific notes that do not fit into the short preview.",
          },
          {
            title: "Context and notes",
            subtitle: "Working archive",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This is a placeholder opening page for the Dobrzanski family branch. Later it can present the main branch summary and key genealogical anchors.",
          },
          {
            title: "Sources and evidence",
            subtitle: "Archive material",
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later hold evidence notes, parish references, linked documents, and branch-specific observations drawn from your research.",
          },
          {
            title: "Interpretation",
            subtitle: "Working branch notes",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This is a placeholder article page for departure. Later you can use it for port departure, family separation, first migration decisions, and the earliest traces of movement.",
          },
          {
            title: "Crossing",
            subtitle: "Transit and uncertainty",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This placeholder page is meant for arrival records, first official registration, and the new archival reality created by immigration processing.",
          },
          {
            title: "Guardianship",
            subtitle: "Why records can differ",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later be used for marriages, census appearances, first settled addresses, and the creation of new family units in America.",
          },
          {
            title: "New branches",
            subtitle: "Identity after migration",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later summarise later generations, branch continuity, and the way family structure continues beyond migration-era records.",
          },
          {
            title: "Branch development",
            subtitle: "Expanding lines",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later hold remembered stories, oral family tradition, and the traces that survive outside official documentation.",
          },
          {
            title: "Photographs",
            subtitle: "Visual archive",
            image: PLACEHOLDER_IMAGE,
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
            image: PLACEHOLDER_IMAGE,
            content:
              "This page can later describe the research process itself, the current reconstruction effort, and the method behind reconnecting scattered lines.",
          },
          {
            title: "Looking forward",
            subtitle: "Future work",
            image: PLACEHOLDER_IMAGE,
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