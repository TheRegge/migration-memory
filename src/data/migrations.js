import Locs from "./locations";

export default [
  {
    student_email: "student@example.com",
    student_name: "P-B",
    enrolled_course: "Davidson (Core A period)",
    paper_title: "Korean migration: an extension of the Korean War ",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy, Refugee Status",
    research_questions:
      "How were Korean refugees treated during or after the war? What prompted Korea’s to migrate to the U.S. and Australia? What was the stigma surrounding Korean refugees after the war? Did western opinions on Korean refugees vary based on where they were from (north vs south)",
    migration_region_start: "East Asia",
    topics: "",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: ""
  },
  {
    student_email: "student@example.com",
    student_name: "A-R",
    enrolled_course: "Davidson (Core A period)",
    paper_title: "Beyond the Political: A Vietnamese Refugee Story in America",
    paper_themes:
      "Childhood, Economic Opportunity/Livelihood, Political Identity, Parenthood/Marriage/Family Life",
    research_questions:
      "To what extent did politics play a role in the social lives and socialization of Vietnamese refugees in America from the mid-1970s to the late 1980s?",
    migration_region_start: Locs.SOUTH_EAST_ASIA,
    topics: "",
    migration_city_start: Locs.SAIGON,
    migration_country_start: Locs.VIETNAM,
    migration_steps: [
      { year: "1975", location: Locs.PHILIPPINES },
      { year: null, location: Locs.GUAM },
      { year: null, location: Locs.INDIANTOWN_GAP },
      { year: null, location: Locs.NEW_MEXICO }
    ],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: ""
  },
  {
    student_email: "student@example.com",
    student_name: "M-A",
    enrolled_course: "Davidson (Core E period)",
    paper_title: "Partition & Nationalist Identity",
    paper_themes: "Religion, Human Survival",
    research_questions:
      "How did the the new nationalist identities forged in the partition lead to violence?",
    migration_region_start: "South Asia",
    topics: "",
    migration_city_start: Locs.MYMENSINGH,
    migration_country_start: Locs.INDIA,
    migration_steps: [],
    migration_start_year: "1950",
    migration_end_location_year: { year: "1950", location: Locs.KHARAGPUR },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "P-C",
    enrolled_course: "Kalbag (Core B period)",
    paper_title:
      "The Untold Story of World War II: An Investigation into the Recruitment and Contributions of the OSS",
    paper_themes:
      "Economic Opportunity/Livelihood, Law/Legislation/National or State Policy",
    research_questions:
      "To what extent did the “types” of American individuals (including economists, businessmen, doctors, immigrants, and labor union leaders) recruited by the OSS to serve in Europe contribute to Allied victory in World War II?",
    migration_region_start: "United States/Canada",
    topics: "",
    migration_city_start: Locs.NEW_YORK_CITY,
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "1942",
    migration_end_location_year: { year: "1942", location: Locs.LONDON },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "N-H",
    enrolled_course: "Kalbag (Core F period)",
    paper_title: "The Lost Story of Partition",
    paper_themes:
      "Gender, Religion, Urban Life, Law/Legislation/National or State Policy, Parenthood/Marriage/Family Life, Human Survival, Refugee Status",
    research_questions:
      "How were women disproportionately affected by the changes brought along by the Partition of India in 1947 and in what ways did the competing nationalist movements of the time exacerbate these issues?",
    migration_region_start: "Southeast Asia",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Nationalism and National Identity, Personal Identities",
    migration_city_start: Locs.LAHORE,
    migration_country_start: Locs.PAKISTAN,
    migration_steps: [],
    migration_start_year: "1947",
    migration_end_location_year: { year: "1948", location: Locs.DELHI },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-S",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "How Culture Thrives in Camps",
    paper_themes:
      "Race/Ethnicity, Religion, Economic Opportunity/Livelihood, Urban Life, Parenthood/Marriage/Family Life, Human Survival, Refugee Status",
    research_questions:
      "How did the Terezin Ghetto's isolation and culture, as well as Hitler's propaganda films, affect the prisoners, the ways they spent their time, and how they saw their future?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.WARDER,
    migration_country_start: Locs.GERMANY,
    migration_steps: [
      { year: "1942", location: Locs.AACHEN },
      { year: "1942", location: Locs.THERESIENSTADT }
    ],
    migration_start_year: "1925",
    migration_end_location_year: { year: "1943", location: Locs.AUSCHWITZ },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "J-K",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "Latino Migration to North Carolina",
    paper_themes:
      "Race/Ethnicity, Language, Childhood, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Education",
    research_questions:
      "What obstacles to assimilation did Latino migrants face in North Carolina’s rural, mostly white communities in the 1960s, 70s, and 80s?",
    migration_region_start: "United States/Canada",
    topics: "",
    migration_city_start: Locs.SAN_JUAN_PR,
    migration_country_start: Locs.PUERTO_RICO,
    migration_steps: [],
    migration_start_year: "1965",
    migration_end_location_year: { year: "1965", location: Locs.AHOSKIE },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "J-E",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "Ayaan Hirsi Ali: A Journey to Salvation",
    paper_themes:
      "Gender, Race/Ethnicity, Language, Religion, Childhood, Political Identity, Parenthood/Marriage/Family Life, Human Survival, Refugee Status",
    research_questions:
      "What factors (other than violence and persecution) of the civil war led to the absolutely massive exodus of Somali refugees? Push/pull factors?\nHow did the clan-based societal organization of Somalia facilitate the massive migration of millions?",
    migration_region_start: "Sub-Saharan Africa",
    topics: "",
    migration_city_start: Locs.MOGADISHU,
    migration_country_start: Locs.SOMALIA,
    migration_steps: [
      { year: "1992", location: Locs.FRANKFURT },
      { year: "1992", location: Locs.BONN }
    ],
    migration_start_year: "1991",
    migration_end_location_year: { year: "1992", location: Locs.ZEEWOLDE },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "D-O",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "Arshile Gorky Migration Paper",
    paper_themes: "Race/Ethnicity, Childhood, Parenthood/Marriage/Family Life",
    research_questions:
      "How does Gorky's work represent other Armenian immigrants?",
    migration_region_start: "Middle East (Southwest Asia)",
    topics:
      "Cultural Representations (Film, Art, Fashion), Nationalism and National Identity, Personal Identities",
    migration_city_start: Locs.VAN_VILAYET,
    migration_country_start: Locs.OTTOMAN_EMPIRE,
    migration_steps: [],
    migration_start_year: "1915",
    migration_end_location_year: { year: "1915", location: Locs.NEW_YORK },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "D-P",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "The Nazi Lebensborn Program in World War II",
    paper_themes: "Religion, Childhood, Human Survival, Refugee Status",
    research_questions:
      "How did German obsession with “racial purity” and obedience to authority spawn the World War II era Lebensborn program? How were the identities of the Lebensborn children transformed by Nazi policy? ",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: "",
    migration_country_start: Locs.YUGOSLAVIA,
    migration_steps: [],
    migration_start_year: "1942",
    migration_end_location_year: { year: "1942", location: Locs.GRAZ },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "C-G",
    enrolled_course: "Davidson (Core E period)",
    paper_title: "The Northern Struggle",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Suburbanization, Law/Legislation/National or State Policy",
    research_questions:
      "What were the main factors that prompted African Americans to leave the South and migrate to the North and what impact did the Great Migration have on race relations in Northern cities?",
    migration_region_start: "United States/Canada",
    topics: "People, Place, Movement",
    migration_city_start: Locs.MISSISSIPPI,
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "1942",
    migration_end_location_year: { year: "", location: Locs.DETROIT },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "K-S",
    enrolled_course: "Davidson (Core E period)",
    paper_title: "Asian-American: The Modeling of a Minority ",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy",
    research_questions:
      "Do what degree did Japanese and Chinese immigrants actually attain the prosperity that is generalized about/attributed to them?",
    migration_region_start: "East Asia",
    topics: "",
    migration_city_start: "",
    migration_country_start: Locs.JAPAN,
    migration_steps: [],
    migration_start_year: "1920",
    migration_end_location_year: { year: "1930", location: Locs.SAN_CLEMENTE },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "L-K",
    enrolled_course: "Davidson (Core E period)",
    paper_title:
      "Help and Hinderance: How Allied Immigration Law Impacted Jewish Migration in the 1930s",
    paper_themes:
      "Religion, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Human Survival, Refugee Status",
    research_questions:
      "How and why did allied immigration law limit German Jews' ability to escape the Third Reich?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.HAMBERG,
    migration_country_start: Locs.GERMANY,
    migration_steps: [
      { year: "1939", location: Locs.HAVANA_CUBA },
      { year: "1939", location: Locs.MIAMI },
      { year: "1939", location: Locs.ANTWERP },
      { year: "1949", location: Locs.PARIS }
    ],
    migration_start_year: "1939",
    migration_end_location_year: { year: "1942", location: Locs.BUFFALO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-P",
    enrolled_course: "Davidson (Core E period)",
    paper_title: "The Consequences of Republikflucht",
    paper_themes:
      "Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy, Refugee Status",
    research_questions:
      "How did collectivization in East Germany affect the flow of\nimmigrants into West Berlin, how did the West Berlin government respond,\nand how did their response affect that flow?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.BERLIN,
    migration_country_start: Locs.EAST_GERMANY,
    migration_steps: [],
    migration_start_year: "1953",
    migration_end_location_year: { year: "1953", location: Locs.TORONTO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "L-K",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "Mexican Repatriation During the Great Depression",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy",
    research_questions:
      "What effects did Mexican repatriation have on the American economy and the Chicano community? ",
    migration_region_start: "United States/Canada",
    topics: "",
    migration_city_start: "",
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "1936",
    migration_end_location_year: { year: "1936", location: Locs.MEXICO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "R-L",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title:
      "An Outsider at Home and Abroad: Jacobo Timerman’s Alienation from the Argentinian and Israeli Establishments",
    paper_themes:
      "Race/Ethnicity, Religion, Political Identity, Law/Legislation/National or State Policy",
    research_questions:
      "To what extent did the state of Israel directly intervene in Argentina in order to bring about Jewish immigration to Israel during the 1976-83 military dictatorship?\nWhy were Jews targeted by Argentina’s 1976-83 military dictatorship—were Jews targeted primarily due to political beliefs, or due to their ethnic identity?\nHow did non-governmental Jewish institutions in Argentina and Israel react to the treatment of Argentine Jews before and during Argentina’s Dirty War?\n",
    migration_region_start: "South America",
    topics: "",
    migration_city_start: Locs.BUENOS_AIRES,
    migration_country_start: Locs.ARGENTINA,
    migration_steps: [{ year: "1979", location: Locs.TEL_AVIV }],
    migration_start_year: "1979",
    migration_end_location_year: { year: "1984", location: Locs.BUENOS_AIRES },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "E-U",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "26 Ullmanns: Belgium to New York in 1940",
    paper_themes:
      "Gender, Race/Ethnicity, Religion, Childhood, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Parenthood/Marriage/Family Life, Human Survival",
    research_questions:
      "How did Western European Jews decide when it was time to emigrate out of Western Europe during the Third Reich, and why, or why weren’t, they successful in doing so?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.ANTWERP,
    migration_country_start: Locs.BELGIUM,
    migration_steps: [
      { year: "1940", location: Locs.SAINT_LUNNAIRE },
      { year: "1949", location: Locs.LONDON },
      { year: "1940", location: Locs.CANADA }
    ],
    migration_start_year: "1940",
    migration_end_location_year: { year: "1940", location: Locs.NEW_YORK_CITY },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "L-I",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "Mexican immigration into America in the early 1900's. ",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Urban Life, Political Identity",
    research_questions:
      "1. What initiated the influx of Mexican immigration into America in the early 20th century? (How did Diaz affect Mexican immigration into the US)\n2. What was life like for Mexican immigrants in America? What challenges did they face?\n3. How did the US respond to the influx of Mexican immigration? ",
    migration_region_start: "",
    topics: "",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "C-J",
    enrolled_course: "Kalbag (Core F period)",
    paper_title: "The Chinese Government and China; an Evolution in Attitude ",
    paper_themes: "Race/Ethnicity, Language, Religion, Education",
    research_questions:
      "How did the communist ascension to power in China affect Christianity and how did this impact the movement of Missionaries in and out of China? \n",
    migration_region_start: "East Asia",
    topics: "",
    migration_city_start: Locs.Fukien,
    migration_country_start: Locs.CHINA,
    migration_steps: [],
    migration_start_year: "1950",
    migration_end_location_year: { year: "1950", location: Locs.GRAND_RAPIDS },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-B",
    enrolled_course: "Kalbag (Core F period)",
    paper_title: "Migration within the  Socialist Education Movement",
    paper_themes:
      "Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Education",
    research_questions:
      "How did the Socialist Education Movement impact Chinese intellectuals? To what extent did it achieve its stated goals?\n",
    migration_region_start: "East Asia",
    topics: "",
    migration_city_start: Locs.BEIJING,
    migration_country_start: Locs.CHINA,
    migration_steps: [],
    migration_start_year: "1963",
    migration_end_location_year: { year: "1963", location: Locs.SHANGDONG },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "John-Shaw Moazami",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "Pakistani Migration to the UK in the 1960s",
    paper_themes:
      "Race/Ethnicity, Childhood, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Parenthood/Marriage/Family Life, Education, Refugee Status",
    research_questions:
      "What initially pushed Pakistani migrants to the UK, and how did their transient migration transform into a permanent one? How did Pakistanis integrate into British society, and how did their departure affect their regions of origin?",
    migration_region_start: "South Asia",
    topics: "",
    migration_city_start: Locs.MIRPUR,
    migration_country_start: Locs.PAKISTAN,
    migration_steps: [],
    migration_start_year: "1960",
    migration_end_location_year: { year: "1965", location: Locs.BIRMINGHAM },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "G-M",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "Tep Khan: From Cambodia to Michigan ",
    paper_themes:
      "Gender, Language, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Parenthood/Marriage/Family Life, Human Survival",
    research_questions:
      "What was life like from 1944-1990 in Cambodia and how did it directly/indirectly lead to migration out of Cambodia?\nWhat were the major difficulties of migrating out of Cambodia and into the United States and were there any programs in place to assist with this?\nIn what ways were the experiences of women and children living in Cambodia different or similar to those of men?",
    migration_region_start: "Southeast Asia",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Nationalism and National Identity, Personal Identities",
    migration_city_start: Locs.PHNOM_PENH,
    migration_country_start: Locs.CAMBODIA,
    migration_steps: [],
    migration_start_year: "1975",
    migration_end_location_year: { year: "1989", location: Locs.HOLLAND },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "E-S",
    enrolled_course: "Davidson (Core A period)",
    paper_title:
      "The American Struggle to Help European Jewry: Zionism and Jewish Refugees After World War II",
    paper_themes:
      "Religion, Law/Legislation/National or State Policy, Refugee Status",
    research_questions:
      "How and why did American Jews take risks and defy the law to help the European Jewry? How and why were American Jews who aimed to help the Zionist movement and the Yishuv hindered by American and British policies following World War II? ",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.VOLOZHIN,
    migration_country_start: Locs.BELARUS,
    migration_steps: [{ year: "1960", location: Locs.CLEVELAND }],
    migration_start_year: "1906",
    migration_end_location_year: { year: "1971", location: Locs.JERUSALEM },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-M",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "The lasting impacts of the Great Migration on Chicago",
    paper_themes: "Race/Ethnicity, Economic Opportunity/Livelihood, Urban Life",
    research_questions:
      "How did the Great Migration effect Chicago? How did it help African Americans life in the city, and how did it hurt them?",
    migration_region_start: "United States/Canada",
    topics: "",
    migration_city_start: Locs.LAURENS,
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "1924",
    migration_end_location_year: { year: "", location: Locs.CHICAGO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "H-S",
    enrolled_course: "Kalbag (Core F period)",
    paper_title:
      "Crisis Response in Fukushima: The Movement and Stigma of the Hibakusha",
    paper_themes:
      "Economic Opportunity/Livelihood, Urban Life, Law/Legislation/National or State Policy, Human Survival",
    research_questions:
      "— Disaster management - How effective was the Japanese government’s initial disaster management in response to the needs of those directly affected by the Fukushima nuclear blasts?    \n\n— Crisis communication - Why was the government’s subsequent crisis communication so ineffective and how did it impact the immigration patterns of survivors?     \n\n— Stigma - Why were the survivors of nuclear fallout stigmatized and to what extent did the official Japanese response address or exacerbate the fear and discrimination against those labelled the Fukushima hibakusha?     \n\n— Microhistory - How did the Japanese government let down those in regions like Minamisoma and Nagadoro, and how did the local governments and individuals cope with the after-effects of the Fukushima disaster?",
    migration_region_start: "East Asia",
    topics: "",
    migration_city_start: Locs.MINAMISOMA,
    migration_country_start: Locs.JAPAN,
    migration_steps: [
      { year: "", location: Locs.TOKYO },
      { year: "", location: Locs.KANAGAWA }
    ],
    migration_start_year: "2011",
    migration_end_location_year: { year: "", location: Locs.MINAMISOMA },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "D-H",
    enrolled_course: "Kalbag (Core B period)",
    paper_title:
      "A New Home: Refugee Resettlement and the Formation of New Neighborhoods During the Partition of India and Pakistan",
    paper_themes:
      "Urban Life, Law/Legislation/National or State Policy, Refugee Status",
    research_questions:
      "How did the partition of India and Pakistan lead to the rise of neighborhood communities in the cities to which migrants fled?",
    migration_region_start: "South Asia",
    topics: "",
    migration_city_start: Locs.SHEIKHPURA,
    migration_country_start: Locs.PAKISTAN,
    migration_steps: [],
    migration_start_year: "1947",
    migration_end_location_year: { year: "1947", location: Locs.MEERUT },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-J",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "Hamida's Hike: Bengali Nationalism Post-Partition",
    paper_themes:
      "Race/Ethnicity, Language, Religion, Political Identity, Law/Legislation/National or State Policy, Refugee Status",
    research_questions:
      "What does Hamida's migration from India to East Pakistan tell us about religious nationalism in Bengal after the Partition of 1947?",
    migration_region_start: "South Asia",
    topics:
      "People, Place, Movement, Nationalism and National Identity, Personal Identities",
    migration_city_start: Locs.MALDA,
    migration_country_start: Locs.INDIA,
    migration_steps: { year: "1947", location: Locs.BHOLAHAT },
    migration_start_year: "1947",
    migration_end_location_year: { year: "1947", location: Locs.PIROJPUR },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-F",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "Journey From Taiwan To The United States: Taiwanese Women",
    paper_themes: "",
    research_questions:
      "How did gender play a role in the immigration from Taiwan to the United States that took place during the late 60’s and early 70’s?",
    migration_region_start: "Southeast Asia",
    topics: "",
    migration_city_start: Locs.CHIYI,
    migration_country_start: "Taiwan",
    migration_steps: [],
    migration_start_year: "1968",
    migration_end_location_year: { year: "1968", location: Locs.NEW_YORK_CITY },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "N-S",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "Queer Migration in 20th Century America",
    paper_themes:
      "Gender/Sexuality, Urban Life, Suburbanization, Law/Legislation/National or State Policy",
    research_questions:
      "How did gender and sexual identity influence migration within 20th century America?",
    migration_region_start: "United States/Canada",
    topics: "",
    migration_city_start: Locs.ILLINOIS,
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "1970s",
    migration_end_location_year: { year: "", location: Locs.SAN_FRANCISCO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-T",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "The Red Cross and Neutrality",
    paper_themes: "Economic Opportunity/Livelihood, Human Survival",
    research_questions:
      "What does the work of Red Cross nurses who migrated to the front in Europe reveal about Red Cross policy, neutrality, and the nature of World War II?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.COUNTY_GALWAY,
    migration_country_start: Locs.IRELAND,
    migration_steps: [],
    migration_start_year: "1940",
    migration_end_location_year: { year: "", location: Locs.LONDON },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "S-A",
    enrolled_course: "Kalbag (Core B period)",
    paper_title:
      "Political Exodus: Cuban refugees in the United States 1959-1980",
    paper_themes:
      "Race/Ethnicity, Religion, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy, Refugee Status",
    research_questions:
      "How were Cuban refugees portrayed by the American media following the Cuban Revolution? How did Cuban refugees in the United States form a conservative political identity revolving around anti-communism? ",
    migration_region_start: "",
    topics: "",
    migration_city_start: Locs.HAVANA_CUBA,
    migration_country_start: Locs.CUBA,
    migration_steps: [],
    migration_start_year: "1962",
    migration_end_location_year: { year: "1962", location: Locs.MIAMI },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "J-S",
    enrolled_course: "Davidson (Core A period)",
    paper_title:
      "Get in Kids, We're Going to Canada': Twentieth Century Emigration of British Home Children to Canada ",
    paper_themes:
      "Childhood, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Parenthood/Marriage/Family Life",
    research_questions:
      "How did changing opinions of the role of British children in society shape child emigration and Canadian foreign policy to during the early 20th century?; ",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.LONDON,
    migration_country_start: Locs.ENGLAND,
    migration_steps: [{ year: "1913", location: Locs.SUFFOLK }],
    migration_start_year: "1913",
    migration_end_location_year: { year: "1925", location: Locs.HALIFAX },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "T-R",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "Information and the State: Migration During the Cold War",
    paper_themes:
      "Religion, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy",
    research_questions:
      "How did government control of information influence migration out of the Soviet Union during the Cold War?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.LENINGRAD,
    migration_country_start: Locs.SOVIET_UNION,
    migration_steps: [
      { year: "1976", location: Locs.VIENNA },
      { year: "1977", location: Locs.TUCSON }
    ],
    migration_start_year: "1976",
    migration_end_location_year: { year: "1979", location: Locs.MURRAY_HILL },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "Juwan",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title:
      "Denied: Japanese American Identity as Defined by WWII Internment",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy, Education",
    research_questions:
      "How did Japanese immigrants and Japanese Americans contend with their dueling identities before, during, and after internment?",
    migration_region_start: "United States/Canada",
    topics: "",
    migration_city_start: Locs.INGLEWOOD,
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "1942",
    migration_end_location_year: { year: "1942", location: Locs.INYO_COUNTY },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "G-D",
    enrolled_course: "Kalbag (Core F period)",
    paper_title:
      "The Gendered and Occupational Migration of Young Women from Ireland to England",
    paper_themes:
      "Gender/Sexuality, Religion, Law/Legislation/National or State Policy, Education",
    research_questions:
      "Why did so many young, Irish women migrate to England in the first half of the 20th century? Why was this migration so occupationally focused?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.GALWAY,
    migration_country_start: Locs.IRELAND,
    migration_steps: [],
    migration_start_year: "1938",
    migration_end_location_year: { year: "1938", location: Locs.LONDON },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "DaCosta, Toni",
    enrolled_course: "Davidson (Core A period)",
    paper_title: "Ottoman Government Manipulation",
    paper_themes:
      "Race/Ethnicity, Language, Childhood, Economic Opportunity/Livelihood, Human Survival, Education, Refugee Status",
    research_questions:
      "How did the Ottoman Empire try to manipulate the people during and after the Armenian Genocide?",
    migration_region_start: "Middle East (Southwest Asia)",
    topics: "",
    migration_city_start: Locs.ARMENIA,
    migration_country_start: Locs.TURKEY,
    migration_steps: [],
    migration_start_year: "1920",
    migration_end_location_year: { year: "1951", location: Locs.NEW_YORK_CITY },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "J-R",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "Castles Burning: How Children Survived the War",
    paper_themes:
      "Childhood, Economic Opportunity/Livelihood, Parenthood/Marriage/Family Life, Human Survival",
    research_questions:
      "How does Denes’s account of her survival inform our understanding of the Jewish Hungarian experience in WWII?  How did most Jews survive?  What was the experience of most Hungarian Jews in hiding? To what extent did the choices Jews made during the Holocaust account for their survival?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.BUDAPEST,
    migration_country_start: Locs.HUNGARY,
    migration_steps: [
      { year: "1945", location: Locs.AUSTRIA },
      { year: "1946", location: Locs.PARIS },
      { year: "1946", location: Locs.LA_HABANA }
    ],
    migration_start_year: "1945",
    migration_end_location_year: { year: "1950", location: Locs.NEW_YORK_CITY },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "R-E",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "Holocaust Train Deportation and Rehabilitation",
    paper_themes: "Religion, Parenthood/Marriage/Family Life, Human Survival",
    research_questions:
      "How did Germany go about deporting Jews during World War II? Once it was over, how did survivors manage get back to ‘normalcy’ in the displaced persons camps, and how did they use marriage to do so?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.KRAKÓW,
    migration_country_start: Locs.POLAND,
    migration_steps: [{ year: "1944", location: Locs.AUSCHWITZ }],
    migration_start_year: "1942",
    migration_end_location_year: { year: "1945", location: Locs.BERGEN_BELSEN },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "K-H",
    enrolled_course: "Kalbag (Core F period)",
    paper_title: "The US WWII Hypocrisy",
    paper_themes: "Race/Ethnicity, Political Identity",
    research_questions:
      "What were the range of experiences for German Americans during WWII?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.LEMGO,
    migration_country_start: Locs.GERMANY,
    migration_steps: [],
    migration_start_year: "1928",
    migration_end_location_year: { year: "1928", location: Locs.LONG_ISLAND },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "C-M",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "Vietnamese Migration after the Vietnam War",
    paper_themes:
      "Race/Ethnicity, Language, Economic Opportunity/Livelihood, Refugee Status",
    research_questions:
      " Starting in 1974, how did Vietnamese acclimate to the United States and what were obstacles they faced in their migration?",
    migration_region_start: "Southeast Asia",
    topics: "",
    migration_city_start: "",
    migration_country_start: Locs.VIETNAM,
    migration_steps: [{ year: "", location: Locs.THAILAND }],
    migration_start_year: "",
    migration_end_location_year: { year: "", location: Locs.UNITED_STATES },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "S-R",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "A New Wave of Indian Immigration After 1965",
    paper_themes:
      "Race/Ethnicity, Religion, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Education",
    research_questions:
      "How did the Hart-Cellar Act of 1965 influence the influx of Indian immigration to the United States that followed? How did the preservation of Indian culture as well as Western assimilation play a role in the shaping of Indian-American identity?",
    migration_region_start: "South Asia",
    topics: "",
    migration_city_start: Locs.MUMBAI,
    migration_country_start: Locs.INDIA,
    migration_steps: [],
    migration_start_year: "1969",
    migration_end_location_year: { year: "1969", location: Locs.FRESH_MEDOWS },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-M",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "How to Survive When No One Else Does",
    paper_themes: "Language, Human Survival",
    research_questions:
      "To what extent did language affect the experience and survival of Jews who were sent to concentration camps? How did the prevalence of German, Polish, and Yiddish in the camps affect Sephardic Jews? ",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.STIP_MACEDONIA,
    migration_country_start: Locs.GREECE,
    migration_steps: [],
    migration_start_year: "1943",
    migration_end_location_year: { year: "", location: Locs.JERUSALEM },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "T-A",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "The Tamil Diaspora in Toronto: 1983 to Now",
    paper_themes:
      "Race/Ethnicity, Language, Urban Life, Political Identity, Law/Legislation/National or State Policy, Human Survival, Refugee Status",
    research_questions:
      "How has living in a liberal and accepting society, such as Canada, allowed for the growth of a community founded on political activism that would not have been possible for Tamils in Sri Lanka?\n\nHow has the passage and expiration of various immigration laws since the 1960s dictated the form of the Tamil community in Toronto?\n\nTo what extent are the Tamil diaspora and homeland interdependent? Could either exist without the each other? Has, and if so how, the success of the Tamil diaspora allowed for the survival of the LTTE?\n",
    migration_region_start: "Southeast Asia",
    topics: "",
    migration_city_start: Locs.JAFFNA,
    migration_country_start: Locs.SRI_LANKA,
    migration_steps: [
      { year: "1978", location: Locs.MADRAS },
      { year: "1985", location: Locs.JAFFNA }
    ],
    migration_start_year: "1978",
    migration_end_location_year: { year: "1986", location: Locs.LONDON },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "K-W",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "Cuban-American Politics After the Mariel Boatlift",
    paper_themes:
      "Race/Ethnicity, Childhood, Economic Opportunity/Livelihood, Political Identity, Refugee Status",
    research_questions:
      "How did the experiences of Cuban refugees during Fidel Castro’s regime affect the development of their powerful and distinct political voice in Miami? In what ways did the political alignment of Cuban Americans shift as a result of the Mariel Boatlift?",
    migration_region_start: "Caribbean",
    topics: "",
    migration_city_start: Locs.SANTOS_SUÁREZ_CUBA,
    migration_country_start: Locs.CUBA,
    migration_steps: [],
    migration_start_year: "1980",
    migration_end_location_year: { year: "1980", location: Locs.FLORIDA },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "J-E",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title:
      "Motives Behind the Emigration of Jewish Families/Women from Russia to the United States ",
    paper_themes:
      "Gender/Sexuality, Race/Ethnicity, Economic Opportunity/Livelihood",
    research_questions:
      "How were Jews treated compared to the rest of society in Russia? What were their motives to emigrate from Russia? How did the role of Jews, in particular of women, change upon arrival in the United States. ",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.ANTWERP,
    migration_country_start: Locs.BELGIUM,
    migration_steps: [],
    migration_start_year: "1911",
    migration_end_location_year: { year: "1911", location: Locs.CHICAGO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "D-M",
    enrolled_course: "Davidson (Core A period)",
    paper_title:
      "Mexican Immigration to the United States in the 1990s in the Context of Gender",
    paper_themes:
      "Gender/Sexuality, Race/Ethnicity, Language, Economic Opportunity/Livelihood, Urban Life, Parenthood/Marriage/Family Life, Education",
    research_questions:
      "What is being a Mexican female undocumented immigrant like? What are conditions like for said immigrants back in Mexico? How does being a woman affect the journey over? How does one’s gender affect one’s adjustment and adaptation upon arriving in the United States? What image has the media painted of Mexican female undocumented immigrants and which parts of that image are fact and which are myth?",
    migration_region_start: "North America",
    topics: "",
    migration_city_start: Locs.OAXACA,
    migration_country_start: Locs.MEXICO,
    migration_steps: [],
    migration_start_year: "1995",
    migration_end_location_year: { year: "1995", location: Locs.NEW_YORK_CITY },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "Kronenberg, Lucy",
    enrolled_course: "Davidson (Core A period)",
    paper_title: "Grassroots and Government",
    paper_themes:
      "Religion, Economic Opportunity/Livelihood, Law/Legislation/National or State Policy, Human Survival, Refugee Status",
    research_questions:
      "How did the mobilization of Americans in advocacy of Soviet Jews, in combination with US government action, facilitate their immigration to the United States during the 1980’s?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.LENINGRAD,
    migration_country_start: Locs.SOVIET_UNION,
    migration_steps: [{ year: "1988", location: Locs.ISRAEL }],
    migration_start_year: "1988",
    migration_end_location_year: { year: "1998", location: Locs.PHILADELPHIA },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "W-R",
    enrolled_course: "Davidson (Core A period)",
    paper_title:
      "Wives, Midwives and Sex Workers: Lives and Legacies of Issei Women in the American Northwest",
    paper_themes:
      "Gender/Sexuality, Race/Ethnicity, Economic Opportunity/Livelihood, Suburbanization, Political Identity",
    research_questions:
      "How did marriage, sex and reproduction shape the experiences of Issei women living in and migrating to the American Northwest?\nWho built issei communities in the American west during the early 20th century? How did issei women fight against discrimination and form the strong Japanese communities that characterized the American West pre-interment?",
    migration_region_start: "East Asia",
    topics: "",
    migration_city_start: "",
    migration_country_start: Locs.JAPAN,
    migration_steps: [],
    migration_start_year: "1911",
    migration_end_location_year: { year: "1912", location: Locs.SEATTLE },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "A-S",
    enrolled_course: "Davidson (Core A period)",
    paper_title:
      "Jewish Immigrant Women on the Lower East Side: Oppression to Activism",
    paper_themes: "Gender/Sexuality, Religion",
    research_questions:
      "What caused the wave of woman's activism seen by Jewish immigrant women on the upper east side? Why was the lower east side host to so many activism movements?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "People, Place, Movement, Personal Identities",
    migration_city_start: Locs.GORODOK,
    migration_country_start: Locs.UKRAINE,
    migration_steps: [],
    migration_start_year: "1903",
    migration_end_location_year: { year: "1903", location: Locs.NEW_YORK },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "M-F",
    enrolled_course: "Davidson (Core A period)",
    paper_title: "Iran’s Brain Drain: The Impact of Iranian Migration",
    paper_themes:
      "Gender/Sexuality, Religion, Childhood, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy, Parenthood/Marriage/Family Life, Human Survival",
    research_questions:
      "What were the reasons (cultural, economic, political, safety concerns) for the mass migration of Iranian people out of the country during and directly after the 1979 revolution? What kind of people left, and how did their departure affect the country?",
    migration_region_start: "Middle East (Southwest Asia)",
    topics: "",
    migration_city_start: Locs.TEHRAN,
    migration_country_start: Locs.IRAN,
    migration_steps: [],
    migration_start_year: "1979",
    migration_end_location_year: { year: "1979", location: Locs.LONDON },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "A-B",
    enrolled_course: "Kalbag (Core F period)",
    paper_title:
      "‘Nisht Ahin un Nisht Aher’: Yiddish Theater and how it changed American and Jewish Culture",
    paper_themes:
      "Race/Ethnicity, Language, Religion, Economic Opportunity/Livelihood, Parenthood/Marriage/Family Life",
    research_questions:
      "How did Yiddish theater act as a benefit or detriment for Jewish Assimilation into America and how did it create a Jewish community in New York?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.ODESSA,
    migration_country_start: Locs.SOVIET_UNION,
    migration_steps: [{ year: "1880", location: Locs.LONDON }],
    migration_start_year: "1880",
    migration_end_location_year: { year: "1890", location: Locs.NEW_YORK_CITY },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "T-F",
    enrolled_course: "Kalbag (Core F period)",
    paper_title:
      "Family and Opportunity: Emigration from Ireland in the First Half of the 20th Century",
    paper_themes:
      "Religion, Childhood, Economic Opportunity/Livelihood, Urban Life, Law/Legislation/National or State Policy, Parenthood/Marriage/Family Life",
    research_questions:
      "How did the dynamic of a rural Irish family, the limited scope of the Irish economy, and the opportunities provided by the American sponsorship program cause and influence migration within and without of Ireland during the first half of the 20th century?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.COUNTY_KERRY,
    migration_country_start: Locs.IRELAND,
    migration_steps: [{ year: "1951", location: Locs.NEW_YORK_CITY }],
    migration_start_year: "1951",
    migration_end_location_year: { year: "1951", location: Locs.CHICAGO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "R-E",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "Pan-Africanism during the Civil Rights Era",
    paper_themes: "Race/Ethnicity",
    research_questions:
      "Why, in the midst of the civil rights era did prominent black intellectuals move to Africa?",
    migration_region_start: "United States/Canada",
    topics: "",
    migration_city_start: Locs.NEW_YORK_CITY,
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "1960",
    migration_end_location_year: { year: "1961", location: Locs.GHANA },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "L-F",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title: "A Jewish Community: From Rhodes to Atlanta",
    paper_themes:
      "Language, Religion, Economic Opportunity/Livelihood, Urban Life, Education",
    research_questions:
      "Were many Jews from the Island of Rhodes still connected in the places they migrated to? Did they form new communities in their new homes?\nWhat were Rhodian Jews looking for in a new home (an education, a job, or a more accepting place)?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.ISLAND_OF_RHODES,
    migration_country_start: Locs.GREECE,
    migration_steps: [],
    migration_start_year: "1931",
    migration_end_location_year: { year: "1931", location: Locs.GEORGIA_US },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "T-M",
    enrolled_course: "Davidson (Core E period)",
    paper_title: "Greek Ethnic Enclaves in the Unites States",
    paper_themes:
      "Race/Ethnicity, Language, Childhood, Economic Opportunity/Livelihood, Urban Life, Parenthood/Marriage/Family Life, Education",
    research_questions:
      "What was life like in Greece for the lower class in the mid 20th century?\nWhat factors caused people to want to immigrate from Greece to the United States in the mid 20th century?\nHow and why did ethnic enclaves form in the United States?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.FLORINA,
    migration_country_start: Locs.GREECE,
    migration_steps: [{ year: "1956", location: Locs.NEW_YORK }],
    migration_start_year: "1956",
    migration_end_location_year: { year: "1956", location: Locs.DETROIT },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "H-L",
    enrolled_course: "Davidson (Core A period)",
    paper_title:
      "The Avengers: A Jewish Underground Resistance to Ghettoization in the Holocaust",
    paper_themes: "Religion, Human Survival, Refugee Status",
    research_questions:
      "What social and political factors in Lithuania during World War II caused the rise of the Jewish resistance group, The Avengers?",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "",
    migration_city_start: Locs.PLOSK,
    migration_country_start: Locs.POLAND,
    migration_steps: [{ year: "1939", location: Locs.VILNA }],
    migration_start_year: "1939",
    migration_end_location_year: { year: "1945", location: Locs.EILON },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "I-S",
    enrolled_course: "Kalbag (Core F period)",
    paper_title:
      "Fabric of their lives: How Jewish immigrants revoluntionized the clothing industry",
    paper_themes: "Religion, Economic Opportunity/Livelihood",
    research_questions:
      "Why did Jewish immigrants to the United States choose to enter the garment industry? What conditions made the garment industry so popular for Jewish immigrants and what conditions led to Jewish immigrants’ success in the industry?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.AURICH,
    migration_country_start: Locs.GERMANY,
    migration_steps: [],
    migration_start_year: "1936",
    migration_end_location_year: { year: "1936", location: Locs.BATON_ROUGE },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "J-F",
    enrolled_course: "Davidson (Core E period)",
    paper_title: "Trujillo Lasting Effects on the Dominican Racial Identity",
    paper_themes: "Race/Ethnicity, Language, Urban Life",
    research_questions:
      "How did the Trujillo era shape the racial and cultural identities of Dominican migrants?",
    migration_region_start: "Caribbean",
    topics: "",
    migration_city_start: Locs.SANTO_DOMINGO,
    migration_country_start: Locs.DOMINICAN_REPUBLIC,
    migration_steps: [],
    migration_start_year: "1939",
    migration_end_location_year: { year: "1939", location: Locs.NEW_YORK },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "L-M",
    enrolled_course: "Kalbag (Core F period)",
    paper_title:
      "Westernization Through Coercion: The Restructuring of Korean Education and Migration",
    paper_themes:
      "Race/Ethnicity, Language, Economic Opportunity/Livelihood, Urban Life, Political Identity, Law/Legislation/National or State Policy, Education",
    research_questions:
      "\tHow did American participation in the Korean War (1950-1953) stimulate education-related migration to the United States from South Korea? How did increased American involvement in South Korean affairs transform the principles of education in South Korea?",
    migration_region_start: "East Asia",
    topics: "",
    migration_city_start: Locs.SEOUL,
    migration_country_start: Locs.SOUTH_KOREA,
    migration_steps: [],
    migration_start_year: "1956",
    migration_end_location_year: { year: "1956", location: Locs.SAN_FRANCISCO },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "S-B",
    enrolled_course: "Davidson (Core E period)",
    paper_title: "How Pizza Went from the Slummies to Your Tummies",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Suburbanization, Political Identity, Law/Legislation/National or State Policy, Education",
    research_questions:
      "How did Italian Americans become perceived as white in America after World War II? ",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.TORREMAGGIORE,
    migration_country_start: Locs.ITALY,
    migration_steps: [],
    migration_start_year: "1908",
    migration_end_location_year: { year: "1908", location: Locs.MILFORD_MA },
    in_slick_class: "No"
  },
  {
    student_email: "student@example.com",
    student_name: "J-Y",
    enrolled_course: "Davidson (Core E period)",
    paper_title:
      "Displaced Persons: Reasons for European Jewish Immigration to Palestine after World War II and the Founding of the State of Israel",
    paper_themes:
      "Religion, Political Identity, Law/Legislation/National or State Policy, Human Survival, Refugee Status",
    research_questions:
      "What were the factors influencing Jewish refugee migration after World War II? How were those factors affected by policies which nations put in place surrounding refugee immigration? What were the geopolitical trends behind those policies?",
    migration_region_start: "Western Europe",
    topics: "",
    migration_city_start: Locs.TORNALA,
    migration_country_start: Locs.CZECHOSLOVAKIA,
    migration_steps: [
      { year: "1946", location: Locs.MARSEILLES },
      { year: "1946", location: Locs.CYPRUS }
    ],
    migration_start_year: "1946",
    migration_end_location_year: { year: "1948", location: Locs.HAIFA },
    in_slick_class: "No"
  },
  {
    student_email: "",
    student_name: "A-B",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "Propaganda About Women During the World Wars",
    paper_themes: "",
    research_questions:
      "Did WW2 spark a feminist movement?\nWhat are the differences in the ways that women are represented in WW1 and WW2?\nHow did having women join the workforce change family life and ideal dynamics?\nWho was Rosie the Riveter?",
    migration_region_start: "",
    topics:
      "People, Place, Movement, Cultural Representations (Film, Art, Fashion), Nationalism and National Identity, Personal Identities",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "D-S",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "Fashion During The Roaring 20’s",
    paper_themes: "",
    research_questions:
      "Did the time (end of world war 1) affect fashion styles and trends? Did men have an influence on women’s fashion? What types of people influenced fashion during this time? ",
    migration_region_start: "",
    topics: "Cultural Representations (Film, Art, Fashion)",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "E-H",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title:
      "The KGB: Loyalty to the party – Loyalty to motherland (Верность партии — Верность Родине)",
    paper_themes: "",
    research_questions:
      "What were the major implications of the KGB in the cold war? How was new technology employed within the organization to further their goals? What did this technology look like? What is the legacy of the KGB in Russia and the world today?",
    migration_region_start: "",
    topics:
      "The Intersection of Technological Development and Politics, Technology: Communication, Transportation, Medicine, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "G-A",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "Hitler Youth ",
    paper_themes: "",
    research_questions:
      "1. How did Hitler youth spread throughout the country and world-wide\n2. How was Hitler able to appeal to the younger generations?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "J-D",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title:
      "Space is the Place - Afrofuturism from Sun Ra to Black Panther",
    paper_themes: "",
    research_questions:
      "How has the definition of Afrofuturism changed throughout the last 50 years? What about black music makes it 'afrofuturistic'? Has the significance of Afrofuturism changed as it became more mainstream? Why has there been an insurgence of popularity to the movement? How has the legacy of Afrofuturism changed?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Cultural Representations (Film, Art, Fashion), Personal Identities",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "M-M",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "Graphene: the Material of the Future",
    paper_themes: "",
    research_questions:
      "What advancements will graphene produce in the future? How will graphene affect types of materials that are flourishing in the 21st century?",
    migration_region_start: "",
    topics:
      "Cultural Representations (Film, Art, Fashion), The Intersection of Technological Development and Politics, Technology: Communication, Transportation, Medicine",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "O-S",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title:
      "Investigating US Russia relations through the space race, korean war, and vietnam war",
    paper_themes: "",
    research_questions:
      "What does the space race illustrate about the United States and Russia relations?\nWhat does the korean war illustrate about the United States and Russia relations?\nWhat does the Vietnam war illustrate about the United States and Russia relations?\nAre these three competitions a part of the cold war, or an extension of it?\nTo what extent are these three things proxy wars?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "J-K",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "The Rosenberg Trial",
    paper_themes: "",
    research_questions:
      "How did mass media affect the Rosenberg trial. How has the public opinion changed during the Rosenberg trial and now in present day. Why was the public divided on the fate of the Rosenberg.",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, The Intersection of Technological Development and Politics, Technology: Communication, Transportation, Medicine, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "T-L",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "TV Through the Ages",
    paper_themes: "",
    research_questions:
      "How has viewing habits of television changed throughout the century? How have the developments of cable TV and streaming affected viewing habits? What are generational differences?",
    migration_region_start: "",
    topics:
      "People, Place, Movement, Technology: Communication, Transportation, Medicine",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "E-F",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "The Ignored Positive Effect of Social Media",
    paper_themes: "",
    research_questions:
      "What ways has mixing technology and humanity improved society?",
    migration_region_start: "",
    topics:
      "People, Place, Movement, Cultural Representations (Film, Art, Fashion), Technology: Communication, Transportation, Medicine, Personal Identities",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "E-W",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: '"Whitey on The Moon"',
    paper_themes: "",
    research_questions:
      "How did the general public feel about the United States Space Program? How did artists and activists demonstrate the public's opinion? How did the government respond to the activists opposing the space program?",
    migration_region_start: "",
    topics:
      "People, Place, Movement, Cultural Representations (Film, Art, Fashion), The Intersection of Technological Development and Politics, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "A-E",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "Driverless Cars: Transportation of the future",
    paper_themes: "",
    research_questions:
      "What are the risks of driverless cars?\nWill driverless cars be accepted by people?\nWho will be the first people to buy driverless cars?\nHow will we need to change our current system of roads to accommodate driverless cars?",
    migration_region_start: "",
    topics: "Technology: Communication, Transportation, Medicine",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "C-M",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "The Taboo on Chemical Weapons: Nothing New",
    paper_themes: "",
    research_questions:
      "How have chemical weapons been used throughout history? When have chemical weapons been deemed socially and politically acceptable to use? How have chemical weapons been used as a threat? What is the role of chemical weapons in international relations today?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, The Intersection of Technological Development and Politics",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "L-B",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "Air Defense",
    paper_themes: "",
    research_questions:
      "How has Air Defense improved between WW1 and WW2? What nations were most effective in their arial tactics and how?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, Cultural Representations (Film, Art, Fashion), The Intersection of Technological Development and Politics, Technology: Communication, Transportation, Medicine",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "A-R",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "Remembrance of the Atomic Bombing of Hiroshima and Nagasaki",
    paper_themes: "",
    research_questions:
      "What was the attitude towards the usage of the atomic bomb in both the United States and Japan? Did most feel it was justified? How did the memory/attitude change over time? What is the role of museums and cultural commemoration towards the bombing both in the United States and Japan? ",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, Cultural Representations (Film, Art, Fashion), Curation, Exhibition, and the Methods and Meaning of Museums, The Intersection of Technological Development and Politics, Technology: Communication, Transportation, Medicine, Nationalism and National Identity, Personal Identities",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "D-H",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: "Restrictive Covenants and the Great Migration to Chicago",
    paper_themes:
      "Race/Ethnicity, Economic Opportunity/Livelihood, Urban Life, Law/Legislation/National or State Policy",
    research_questions:
      "How were certain neighborhoods in Chicago transformed by the Great Migration?\nHow did the response to the influx of African-Americans during the Great Migration change the social scene in Chicago for years to come?\nWhat were the effects of restrictive covenants in Chicago?",
    migration_region_start: Locs.UNITED_STATES,
    topics: "",
    migration_city_start: Locs.LAWRENCE,
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "1916",
    migration_end_location_year: { year: "1916", location: Locs.CHICAGO },
    in_slick_class: "No"
  },
  {
    student_email: "",
    student_name: "G-D",
    enrolled_course: "Kohn/Okpalugo (Core H period)",
    paper_title: 'Chicago: a "Racial Tinderbox"',
    paper_themes:
      "Gender/Sexuality, Race/Ethnicity, Economic Opportunity/Livelihood, Urban Life, Parenthood/Marriage/Family Life, Human Survival, Refugee Status",
    research_questions: "What caused the race riot of 1919",
    migration_region_start: Locs.UNITED_STATES,
    topics:
      "People, Place, Movement, Nationalism and National Identity, Personal Identities",
    migration_city_start: "",
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [],
    migration_start_year: "Early twentieth century",
    migration_end_location_year: { year: "", location: Locs.CHICAGO },
    in_slick_class: "No"
  },
  {
    student_email: "",
    student_name: "J-B",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title:
      "A Bridge Torn Apart: Understanding the Differing Collective Memories in the Israeli-Palestinian Conflict",
    paper_themes:
      "Race/Ethnicity, Language, Religion, Political Identity, Law/Legislation/National or State Policy",
    research_questions:
      "How do the collective memories around the Middle East Conflict differ on each side? In what ways have past historical events reinforced competing narratives around the Israeli-Palestinian conflict?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "M-E",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "African American History In Sports",
    paper_themes: "",
    research_questions:
      "How are African Americans treated in sports?\nWhat countries are most affected by this?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Technology: Communication, Transportation, Medicine, Nationalism and National Identity, Personal Identities",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "L-S",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "Pop Art in the 1960's ",
    paper_themes: "",
    research_questions:
      "Where did the pop art movement originate and how did it reach the US? Which artists contributed to the movement, and how did their styles differ from one another? ",
    migration_region_start: "",
    topics:
      "People, Place, Movement, Cultural Representations (Film, Art, Fashion), Curation, Exhibition, and the Methods and Meaning of Museums",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "A-S",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "The New World Order: Expectations vs. Reality",
    paper_themes: "",
    research_questions:
      "To what extent was U.S. foreign policy shaped by the idea of creating a New World Order?\nWere American efforts to establish such an order supported abroad? If so, by whom, and for what reasons?\nWhat events caused the decline in popularity/prominence of the idea of the New World Order? Has U.S. foreign policy shifted in a less idealistic direction in the 21st century?\nHow did the idea of the New World Order evolve since Bush’s initial declaration of it in the early 90’s?\nWhat would a New World Order look like in today’s world? How have new developments paved the way for a different kind of order?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, The Intersection of Technological Development and Politics, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "A-M",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "Korean Reunification",
    paper_themes: "",
    research_questions:
      "Is Korean reunification possible, or have the respective cultures of North and South Korea deviated too much since the Korean War? What is the memory of the Korean War? How has the money of this way changed over time?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Cultural Representations (Film, Art, Fashion), Nationalism and National Identity, Personal Identities",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "L-J",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "The Rise of Aviation in the 20th Century",
    paper_themes: "",
    research_questions:
      "Why were planes initially invented? \nWhy has the airplane become so important?\nHow did the airplane become a global phenomenon?\nHow has the airplane evolved into modern day technologies for war?",
    migration_region_start: "",
    topics:
      "The Intersection of Technological Development and Politics, Technology: Communication, Transportation, Medicine",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "J-F",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "The Space Race",
    paper_themes: "",
    research_questions:
      "How did the U.S. catch up to Russia and eventually win the Space Race? How was/is the Space Race represented in popular media? How did the U.S. see itself in a global context during the Space Race?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, Cultural Representations (Film, Art, Fashion), The Intersection of Technological Development and Politics, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "I-M",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title:
      "Shooting the War: developing the social and political aspects of photography during World War II ",
    paper_themes: "",
    research_questions:
      "How reliable was photography during World War II? What role did photography play in WWII?\n",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Cultural Representations (Film, Art, Fashion), The Intersection of Technological Development and Politics",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "A-L",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title:
      "Exploring Genocide through Religious Iconography & Artifact [snappier title to come soon ...]",
    paper_themes: "",
    research_questions:
      "How do the moralistic teachings of religion shape public perception of extreme organized  violence? Can spiritual faith provide a “reason” for unthinkable atrocity (i.e. genocide)? How do religious teachings provide healing and comfort in the wake of tragedy? \n",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, Cultural Representations (Film, Art, Fashion), Curation, Exhibition, and the Methods and Meaning of Museums",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "E-H",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title:
      "Voices of a Movement: Song and Media of the Vietnam War Protest Movement",
    paper_themes: "",
    research_questions:
      "How did the Vietnam War shift the American Identity with war and conflict?\nTo what extent did Media influence protest movements?  To what extent was the opposite true?\n",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, Cultural Representations (Film, Art, Fashion), Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "No"
  },
  {
    student_email: "",
    student_name: "J-Y",
    enrolled_course: "Slick (Nature, Technology, Power I Period)",
    paper_title: "The debate about Artificial Intelligence",
    paper_themes: "",
    research_questions:
      "How is this era, the fourth industrial revolution, different from preceding revolutions?\nWhat are the different perspectives on AI?\nWhat are some recent developments in AI?\nHow will AI affect society in 50 years?  Can it lead to a technological holocaust?\nDo we, as a society, have anything to fear about AI? ",
    migration_region_start: "",
    topics:
      "Cultural Representations (Film, Art, Fashion), The Intersection of Technological Development and Politics, Technology: Communication, Transportation, Medicine",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "S-R",
    enrolled_course: "Stolper Muenz (Core G Period)",
    paper_title:
      "The Jews of Libya: Changes in Colonial Power during World War II",
    paper_themes:
      "Race/Ethnicity, Religion, Childhood, Urban Life, Political Identity, Law/Legislation/National or State Policy, Human Survival",
    research_questions:
      "How did the shifts in colonial power affect the daily lives of Libyan Jews? How did the Nazis institute laws to discriminate against Jews in Libya?",
    migration_region_start: "North Africa",
    topics: "",
    migration_city_start: Locs.BENGHAZI,
    migration_country_start: Locs.LIBYA,
    migration_steps: [],
    migration_start_year: "1942",
    migration_end_location_year: { year: "1946", location: Locs.BEN_SHEMEN },
    in_slick_class: "No"
  },
  {
    student_email: "",
    student_name: "A-S",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "Racism in the Fashion Industry",
    paper_themes: "",
    research_questions:
      "What is the reasoning for the persistent and continuous insensitivity an racism in the industry? How does the rest of society and it's culture effect the industry and vice versa? What mindset supports the racism, and prevents progress or realization from finally occuring within the fashion and arts industry?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Cultural Representations (Film, Art, Fashion), Curation, Exhibition, and the Methods and Meaning of Museums, Nationalism and National Identity",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "",
    student_name: "N-A",
    enrolled_course: "Slick (Seeing the Century C Period)",
    paper_title: "Colombia through the eyes of a second generation",
    paper_themes: "",
    research_questions:
      "What historical events in 20th century Colombia had a lasting effect on Colombia's collective memory and how? How have these seeped into Colombian's every day lives?",
    migration_region_start: "",
    topics:
      "Historical and Collective Memory, People, Place, Movement, Personal Identities",
    migration_city_start: "",
    migration_country_start: "",
    migration_steps: [],
    migration_start_year: "",
    migration_end_location_year: "",
    in_slick_class: "Yes"
  },
  {
    student_email: "student@example.com",
    student_name: "P-H",
    enrolled_course: "Kalbag (Core B period)",
    paper_title: "Life Behind the Iron Curtain",
    paper_themes:
      "Childhood, Economic Opportunity/Livelihood, Political Identity, Law/Legislation/National or State Policy",
    research_questions:
      "What was the genesis behind the third wave of Polish immigration",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "Historical and Collective Memory, People, Place, Movement",
    migration_city_start: Locs.GOLENIOW,
    migration_country_start: Locs.POLAND,
    migration_steps: [{ year: "1989", location: Locs.ENGLAND }],
    migration_start_year: "1989",
    migration_end_location_year: { year: "1996", location: Locs.NEW_YORK },
    in_slick_class: "No"
  },
  {
    student_email: "",
    student_name: "J-G",
    enrolled_course: "Kalbag (Core B period)",
    paper_title:
      " Started From The Bottom, Now They’re Here: The Economic and Social Ascension of Russian-Jewish Immigrants In America",
    paper_themes:
      "Race/Ethnicity, Religion, Economic Opportunity/Livelihood, Urban Life, Education",
    research_questions:
      "How and why did the U.S., and specifically the Philadelphia area, present the conditions for economic and social mobility of Ukrainian Jewish immigrants in the first half of the twentieth century?\n",
    migration_region_start: "Eastern Europe/U.S.S.R.",
    topics: "People, Place, Movement, Personal Identities",
    migration_city_start: Locs.KIEV,
    migration_country_start: Locs.UKRAINE,
    migration_steps: [],
    migration_start_year: "1894",
    migration_end_location_year: { year: "1894", location: Locs.PHILADELPHIA },
    in_slick_class: "No"
  },
  {
    student_email: "",
    student_name: "D-D",
    enrolled_course: "Kalbag (Core B period)",
    paper_title:
      "Through the Eyes of Eugene Bullard:  The Black Experience from 1900-1961",
    paper_themes: "Race/Ethnicity, Childhood, Economic Opportunity/Livelihood",
    research_questions:
      "How did racism shape African-American migration during the first half of the twentieth century?\nWhat enabled and kept Bullard migrating throughout his life?",
    migration_region_start: Locs.UNITED_STATES,
    topics: "",
    migration_city_start: Locs.COLUMBUS,
    migration_country_start: Locs.UNITED_STATES,
    migration_steps: [
      { year: "1905", location: Locs.NEWPORT_NEWS },
      { year: "1905", location: Locs.PARIS }
    ],
    migration_start_year: "1905",
    migration_end_location_year: { year: "1941", location: Locs.NEW_YORK },
    in_slick_class: "No"
  }
];
