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
        title: "This is for Matt",
        subtitle: "An opening note",
        images: [REGION_IMAGES.picture1, REGION_IMAGES.picture2, REGION_IMAGES.picture3],
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
    title: "How we researched and survived",
    subtitle: "A short note on method, persistence, and chaos",
    preview:
      "A behind-the-scenes article on how the archive was built: document hunting, false leads, spelling variants, and the slow work of turning confusion into a story.",
    pages: [
      {
        title: "How we researched and survived",
        subtitle: "A short note on method, persistence, and chaos",
        images: [PLACEHOLDER_IMAGE],
        content: `How we researched and survived

 

We knew that working with genealogical records of families who emigrated from Poland to the United States in the early 20th century means dealing with fair share of questions, gaps and irregularities. And we were right. The research showed the typical patterns: different spellings of the same names, missing documents, dates that don’t match, unclear place names, and entries that feel incomplete. The issues are normal and reflect how records were created and preserved at the time but still, sometimes we were losing our minds. Here is the list of what we dealt with:

 

Names, all variations of names

Apart from the fact that Brejlak and Brilski don't really sound simmilar but somehow are the same, there were other things that made the research challening when it comes to names. It is very common to find the same person listed under several versions of their surname. In Polish records, these differences are usually small — Dobrzyńska instead of Dobrzańska, Rosiak instead of Rasiak — and they mostly come from clerks writing quickly or phonetically. That slowed the research down, but  rarely caused major problems.

The Russian Partition adds more complexity. . Clerks wrote names as they heard them, and most rural residents could not check what was written. Repeated names across generations make things even harder. In the Brilski family, there were four different men named Stanisław Brejlak, most with mother or father named the same, or even father and son.

 

American records bring another set of challenges. Immigrants often did not speak English, and officials wrote down whatever they thought they heard. Because of this, one person might appear under several different spellings throughout their life. Josephine (Wojcicki) Brilski is the best example that names were kind of fluid back then. She appeared under six forms:

Józefa Wójcicka – her Polish name
Josefa Wojcicka – passenger list
Josie Wicicka – marriage certificate
Josephine Wojeski – her son’s birth certificate
Josie Brilsky – 1930 census
Josephine Brilski – death certificate
 

Archives in Chaos

Confirming identities in 100-year-old registers is not simple, or at least not as simple as we wished it was. Some records from the Russian Partition are incomplete because they were lost, damaged, or reorganized out of existence. Others survived but are written in Cyrillic cursive, which requires experience to read correctly. Adiitionaly most of the official documents were written in Russian, often in Cyrillic, which we do not know and we would not go far if ChatGTP didn't come to help. Even ChatGTP had troubles sometimes tho. Digitalization of the archives is not fully done in Poland, which adds another challenge.

American records have their own issues: a large, huge amount of data, search tools that are not always precise, and handwritten entries that vary widely in clarity. The struggle was real.

 

Math not mathing

Birth dates in early 20th-century records often do not match. People did not always know their exact age, misunderstandings happened, and estimates were common. Moving between countries added more confusion.

Another important factor is the calendar system. The Russian Partition used the Julian calendar until 1918, which was 12 days behind the Gregorian calendar in the 19th century and 13 days behind in the early 20th. Many civil and parish records include both dates — one Julian (“old style”) and one Gregorian (“new style”), such as 1/13 January. Later American documents usually kept only one version, which naturally leads to differences.

 

Where was it again?

Place names also change across documents. Under the partitions, a single location could have a Polish local name, a Russian administrative name, and sometimes a German or Latin version.

After immigration, names were often simplified or anglicized based on how they sounded to English-speaking officials. Polish names are not easy to transcribe phonetically, so variations are common. Leszno usually stays recognizable - Lesno, but Przasnysz appears as Prarnysz, Prisnis, or Prasnis. Oh Polish - how not to love it.

 

The Interesting Case of Victor Brilski

Victor Brilski’s death certificate lists his mother as Josephine and his father as Victor, and some sources also mention Anthony. That left us really confused as we already discovered that his parents were Stanisław and Marcjanna. We considered a big family drama but in reality, Josephine and Anthony were his older siblings. Victor arrived in the United States as a minor in 1908,and older siblings often acted as guardians in such cases. Immigration procedures required every child to have an identified adult responsible for them, otherwise, they would stay at Ellis Island until one was found. Because of this, siblings or other relatives were sometimes recorded as “parents” for administrative reasons.

 

Moral of the story

We did anticipate that it won't be a smooth sailing. We expected some inconsistencies in the documents and registers but all the spelling variations, missing records, conflicting dates, shifting place names, and incomplete entries were more than challenging. They do come from the historical context also: foreign rule, limited literacy, multilingual bureaucracy, and uneven archive preservation so the research was a lot more than just confirming the dates if we wanted to paint somewhat accurate picture. Plus we would not be able to do it without speaking Polish.`,
      },
    ],
  },
];
export default ARCHIVE_CHAPTERS;
export { ARCHIVE_CHAPTERS, SPECIAL_ARTICLES };