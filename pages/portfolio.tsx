import { NextPage } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import HoldingSection from "@/components/HoldingSection";
import { useState } from "react";

const Portfolio: NextPage = () => {
  const [showTabOne, setShowTabOne] = useState(true);
  const [showTabTwo, setShowTabTwo] = useState(false);

  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="bg-white shadow overflow-hidden rounded-lg">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/portfolio"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Portfolio
              </Link>
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Investment Approach
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Team
              </a>
              <a
                href="/Contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="bg-white shadow overflow-hidden rounded-lg">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-evenly h-16">
              <button
                onClick={() => {
                  setShowTabOne(true);
                  setShowTabTwo(false);
                }}
                className={`text-gray-700 py-2 px-4 rounded-l-lg focus:outline-none ${
                  showTabOne ? "bg-gray-300" : ""
                }`}
              >
                Current
              </button>
              <button
                onClick={() => {
                  setShowTabOne(false);
                  setShowTabTwo(true);
                }}
                className={`text-gray-700 py-2 px-4 rounded-r-lg focus:outline-none ${
                  showTabTwo ? "bg-gray-300" : ""
                }`}
              >
                Divested
              </button>
            </div>
          </div>
        </nav>
        {/* Tab contents */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div>
            {showTabOne && (
              <ul>
                <HoldingSection name="Advanced Enzyme">
                  <>
                    <p>
                      Advanced Enzyme is the largest Indian enzyme company
                      engaged in the research and development, manufacturing,
                      and marketing of over 400 proprietary products. It
                      primarily caters to customers in the US and Indian markets
                      through its human nutrition, animal nutrition, and
                      bio-processing segments.
                    </p>
                    <p>
                      Advanced Enzyme website:{" "}
                      <a href="https://www.advancedenzymes.com">
                        www.advancedenzymes.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Ahluwalia Contracts">
                  <>
                    <p>
                      Ahluwalia Contracts was founded in 1965 as a civil
                      engineering & construction company. Today, Ahluwalia is
                      one of India's top-5 contractors focused on buildings and
                      factories. They design and construct hotels, hospitals,
                      educational institutions, corporate head offices & other
                      office buildings, IT/ITES offices, high-end residential
                      apartment blocks and malls. Ahluwalia also builds
                      factories, civil structures for power-plants,
                      metro-stations, airport terminals and sports-stadiums.
                    </p>
                    <p>
                      Ahluwalia website:{" "}
                      <a href="https://www.acilnet.com">www.acilnet.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="AIA Engineering">
                  <>
                    <p>
                      AIA Engineering specialises in the design, development,
                      manufacture, installation and servicing of high chromium
                      wear, corrosion and abrasion resistant castings used in
                      the cement, mining and thermal power generation
                      industries. In this industry, AIA is largest player in
                      India and the second largest globally.
                    </p>
                    <p>
                      AIA website:{" "}
                      <a href="https://www.aiaengineering.com">
                        www.aiaengineering.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Amara Raja">
                  <>
                    <p>
                      Amara Raja Batteries Limited (Amara) is India's second
                      largest lead acid battery company. Amara's storage
                      batteries cover a broad spectrum of applications such as
                      automotive (for both OEM and replacement market), power
                      back-up and industrial. From a standing start in 2000,
                      Amara's Amaron brand has built a credible #2 position in
                      the attractive automotive lead acid battery market with
                      sharp focus and disciplined execution.
                    </p>
                    <p>
                      Amara website:{" "}
                      <a href="https://www.amararajabatteries.com">
                        www.amararajabatteries.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Berger Paints">
                  <>
                    <p>
                      Berger is India's second largest paints company. Berger
                      sells its decorative paints across India under well-known
                      brands such as Lewis Berger, Rangoli, Weathercoat and
                      Illusions.
                    </p>
                    <p>
                      Berger website:{" "}
                      <a href="https://www.bergerpaints.com">
                        www.bergerpaints.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Cera Sanitaryware">
                  <>
                    <p>
                      Cera Sanitaryware is a leading 'bathroom products' company
                      in India. The company sells sanitaryware, faucets and
                      tiles under the 'Cera' brand.
                    </p>
                    <p>
                      Cera website:{" "}
                      <a href="https://www.cera-india.com">
                        www.cera-india.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="DB Corp">
                  <>
                    <p>
                      DB Corp Limited (DB Corp) is India's largest regional
                      language print media company. DB Corp publishes newspapers
                      in Hindi, Gujarati and Marathi languages, and is either #1
                      or credible #2 in most markets that it operates. In
                      addition to the newspapers, DB Corp also operates an FM
                      radio network and web portals.
                    </p>
                    <p>
                      DB Corp website:{" "}
                      <a href="https://www.bhaskarnet.com">
                        www.bhaskarnet.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Elgi Equipments">
                  <>
                    <p>
                      Elgi Equipments Limited is a leading air compressor
                      manufacturer in India with a broad line of innovative and
                      technologically superior compressed air systems. Elgi has
                      earned worldwide distinction for designing sustainable
                      solutions that help companies achieve their productivity
                      goals and keep the cost of ownership low. Elgi offers a
                      complete range of compressed air solutions from
                      oil-lubricated and oil-free rotary screw compressors,
                      oil-lubricated and oil-free reciprocating compressors and
                      centrifugal compressors, to dryers, filters and downstream
                      accessories. The company's portfolio of over 400 products
                      has found wide application across industries.
                    </p>
                    <p>
                      Elgi website:{" "}
                      <a href="https://www.elgi.com">www.elgi.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Genpact">
                  <>
                    <p>
                      Genpact is India's leading provider of Business Process
                      Outsourcing services. Genpact primarily serves clients in
                      the US, UK, Australia and Japan, including more than 100
                      of the Fortune 500 companies, from a global network of
                      delivery locations.
                    </p>
                    <p>
                      Genpact website:{" "}
                      <a href="https://www.genpact.com">www.genpact.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="GESCO">
                  <>
                    <p>
                      Great Eastern Shipping ('GESCO') is the largest private
                      sector shipping company in India. The company has two main
                      businesses: shipping and offshore. The shipping business
                      is involved in transportation of crude oil, petroleum
                      products, gas and dry bulk commodities. The offshore
                      business, conducted through GESCO's wholly owned
                      subsidiary Greatship (India) Limited, helps oil companies
                      in conducting oil exploration and production activities in
                      shallow waters.
                    </p>
                    <p>
                      GESCO website:{" "}
                      <a href="https://www.greatship.com">www.greatship.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Havells">
                  <>
                    <p>
                      Havells is India's leading consumer-electricals brand with
                      products ranging across switchgear, cables & wires,
                      motors, fans, CFL/LED lamps, luminaires, switches, water
                      heaters and domestic appliances. Havells entered large
                      home appliances market (primarily air conditioners) by
                      acquiring Lloyd in mid-2017.
                    </p>
                    <p>
                      Havells website:{" "}
                      <a href="https://www.havells.com">www.havells.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Info Edge">
                  <>
                    <p>
                      Info Edge is India's premier on-line classifieds business.
                      Info Edge runs India's leading job site{" "}
                      <a href="htt[s://www.naukri.com">www.naukri.com</a>, where
                      it has consistently maintained a dominant competitive
                      position. Its real estate portal{" "}
                      <a href="https://www.99acres.com">www.99acres.com</a> is
                      the leader in India's nascent on-line real estate
                      classifieds space. Info Edge also has investments in
                      Zomato and Policybazaar.
                    </p>
                    <p>
                      Info Edge website:{" "}
                      <a href="https://www.infoedge.in">www.infoedge.in</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Jyothy Labs">
                  <>
                    <p>
                      Jyothy Labs Limited (JLL) was founded by MP Ramachandran
                      in Kerala in 1983. Today, JLL is a leading player in India
                      in fabric care, dishwashing, household insecticides and
                      personal care categories. JLL's key brands - Ujala (#1 in
                      fabric whitener), Exo and Pril (#2 in dishwashing bar and
                      dishwashing liquid respectively), Maxo (#3 in mosquito
                      repellents) and Margo (leader in a niche category in
                      'natural' bath soap) - have been built organically as well
                      as through the 2011 acquisition of Henkel India.
                    </p>
                    <p>
                      Jyothy Labs website:{" "}
                      <a href="https://www.jyothylabs.com">
                        www.jyothylabs.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Matrimony">
                  <>
                    <p>
                      Matrimony.com Ltd (Matrimony) delivers matchmaking
                      services to its users in India and the Indian diaspora
                      outside India through its websites, mobile sites and
                      mobile apps complemented by its on-the-ground network in
                      India. Matrimony is the leader in matchmaking services in
                      India with ~60% revenue share and operates 300+ community
                      matrimony sites and 15 regional matrimony sites.
                    </p>
                    <p>
                      Matrimony website:{" "}
                      <a href="https://www.matrimony.com">www.matrimony.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="MRF">
                  <>
                    <p>
                      MRF Limited (MRF) is India's largest tyre company, both by
                      revenue and profit. It has the most diversified product
                      portfolio among the domestic tyre makers, which caters to
                      all segments of the auto industry.
                    </p>
                    <p>
                      MRF website:{" "}
                      <a href="https://www.mrftyres.com">www.mrftyres.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="NRB Bearings">
                  <>
                    <p>
                      NRB Bearings Ltd (NRB), incorporated in 1965 is an
                      anti-friction bearing solution provider with leadership in
                      needle roller bearings for automotive applications in
                      India. In addition, NRB also sells cylindrical bearings to
                      automotive industry. NRB's product portfolio consists of
                      over 3000 products which are used in critical applications
                      across two wheelers, cars, commercial vehicles and farm
                      equipment. NRB sells primarily to the automotive OEMs in
                      India and has a growing presence in international markets
                      and replacement market in India.
                    </p>
                    <p>
                      NRB Bearings website:{" "}
                      <a href="https://www.nrbbearings.com">
                        www.nrbbearings.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Page Industries">
                  <>
                    <p>
                      NRB Bearings Ltd (NRB), incorporated in 1965 is an
                      anti-friction bearing solution provider with leadership in
                      needle roller bearings for automotive applications in
                      India. In addition, NRB also sells cylindrical bearings to
                      automotive industry. NRB's product portfolio consists of
                      over 3000 products which are used in critical applications
                      across two wheelers, cars, commercial vehicles and farm
                      equipment. NRB sells primarily to the automotive OEMs in
                      India and has a growing presence in international markets
                      and replacement market in India.
                    </p>
                    <p>
                      Page Industries website:{" "}
                      <a href="https://www.jockeyindia.com">
                        www.jockeyindia.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Ratnamani">
                  <>
                    <p>
                      Ratnamani Metals and Tubes Limited ('Ratnamani')
                      manufactures a wide range of seamless and welded tubes and
                      pipes of various materials like stainless steel and carbon
                      steel. Ratnamani's products are used in high-pressure,
                      high-temperature applications in refineries, petrochemical
                      plants and power plants.
                    </p>
                    <p>
                      Ratnamani website:{" "}
                      <a href="https://www.ratnamani.com">www.ratnamani.com</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Sundaram Finance">
                  <>
                    <p>
                      Sundaram Finance Limited (Sundaram) is one of India's
                      oldest, most trusted and prudently managed NBFCs. Founded
                      in 1954 with a focus on truck finance, Sundaram has since
                      widened its scope to include lending for purchase of cars,
                      construction equipment, tractors and other commercial
                      vehicles. Through its subsidiaries, Sundaram is also
                      present in home loans, general insurance and asset
                      management.
                    </p>
                    <p>
                      Sundaram website:{" "}
                      <a href="https://www.sundaramfinance.in">
                        www.sundaramfinance.in
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Supreme">
                  <>
                    <p>
                      Supreme is India's leading plastics products company. It
                      has a diversified product portfolio across plastic pipes
                      and fittings, industrial, consumer and packaging
                      divisions. In addition, it owns 30% of Supreme Petrochem,
                      India's largest polystyrene manufacturer.
                    </p>
                    <p>
                      SundaSupremeram website:{" "}
                      <a href="https://www.supreme.co.in">www.supreme.co.in</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Thermax">
                  <>
                    <p>
                      Thermax, founded in 1966, is one of the oldest and most
                      well-regarded engineering and capital goods major and is
                      headquartered in Pune, India. It operates through three
                      business segments: Energy, Environment, and Chemical.
                      Thermax manages its business operations through 29
                      international offices and 14 manufacturing facilities.
                    </p>
                    <p>
                      Thermax website:{" "}
                      <a href="https://www.thermaxglobal.com">
                        www.thermaxglobal.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Triveni Turbine">
                  <>
                    <p>
                      Triveni Turbine is a leading industrial steam turbine
                      manufacturer. It has a dominant market share of over 60%
                      in India in sub-30MW steam turbines .It also has a strong
                      export business in Europe, Africa, Central and Latin
                      America, SE Asian and SAARC countries.
                    </p>
                    <p>
                      Triveni Turbine website:{" "}
                      <a href="https://www.triveniturbines.com">
                        www.triveniturbines.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="TTK Prestige">
                  <>
                    <p>
                      TTK Prestige is India's largest kitchen products company.
                      It sells a wide range of products such as pressure
                      cookers, cookware and small domestic appliances under the
                      well-known 'Prestige' brand, through its extensive
                      distribution network across India.
                    </p>
                    <p>
                      TTK Prestige website:{" "}
                      <a href="https://www.ttkprestige.com">
                        www.ttkprestige.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="V-Guard">
                  <>
                    <p>
                      V-Guard Industries is a leading player in the consumer
                      electricals industry in India. V-Guard's product portfolio
                      includes voltage stabilizers (in which it is the market
                      leader in India), cables, fans, geysers, pumps and
                      inverters. The company sells its product under the
                      'V-Guard' brand.
                    </p>
                    <p>
                      V-Guard website:{" "}
                      <a href="https://www.vguard.in">www.vguard.in</a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Vaibhav">
                  <>
                    <p>
                      Vaibhav Global ('VGL') is a retailer of fashion and
                      lifestyle accessories in the US, UK, and Germany. VGL
                      primarily sells its products to consumers through TV
                      shopping channels and over the Internet.
                    </p>
                    <p>
                      Vaibhav Global website:{" "}
                      <a href="https://www.vaibhavglobal.com">
                        www.vaibhavglobal.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="Voltamp Transformers">
                  <>
                    <p>
                      Voltamp is India's leading manufacturer of transformers
                      for industrial and building applications. Voltamp mostly
                      sells to private sector projects (buildings and
                      factories), offering a full product-range spanning both
                      oil-filled and dry-type transformers.
                    </p>
                    <p>
                      Voltamp website:{" "}
                      <a href="https://www.voltamptransformers.com">
                        www.voltamptransformers.com
                      </a>
                    </p>
                  </>
                </HoldingSection>
                <HoldingSection name="WNS">
                  <>
                    <p>
                      WNS is a leading Business Process Outsourcing service
                      provider. WNS primarily serves clients in travel,
                      financial services, healthcare, utilities and
                      manufacturing industries in the UK, US, and Australia,
                      from a global network of delivery locations.
                    </p>
                    <p>
                      WNS website: <a href="https://www.wns.com">www.wns.com</a>
                    </p>
                  </>
                </HoldingSection>
              </ul>
            )}
            {showTabTwo && (
              <div>
                <h2>Sold</h2>
                <ul>
                  <HoldingSection name="Carborundum Universal">
                    <p>
                      Carborundum Universal Limited (CUMI) is India's leading
                      manufacturer of bonded and coated abrasives. CUMI also
                      manufactures technical ceramics that operate under extreme
                      conditions and are subjected to high temperature, high
                      voltage, chemical corrosion or physical wear-and-tear.
                      CUMI has built a sizeable international business as well,
                      both organically and through acquisitions.
                    </p>
                    <p>
                      CUMI website:{" "}
                      <a href="https://www.cumi-murugappa.com/index.html">
                        www.cumi-murugappa.com/index.html
                      </a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="Exide">
                    <p>
                      Exide Industries Limited (Exide) is India's largest lead
                      acid battery company. Exide's storage batteries cover a
                      broad spectrum of applications such as automotive (for
                      both OEM and replacement market), power back-up and
                      industrial. With geographically distributed manufacturing
                      plants at strategic locations, pan-India sales and service
                      network, well-known brands, and backward integration for
                      lead sourcing, Exide has built a strong consumer franchise
                      in India.
                    </p>
                    <p>
                      Exide website:{" "}
                      <a href="https://www.exideindustries.com">
                        www.exideindustries.com
                      </a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="Kirloskar Oil Engines">
                    <p>
                      Kirloskar Oil Engines Limited (KOEL) is India's leading
                      manufacturer of off-highway engines, covering a power
                      range of 3hp to 11,000hp. The primary application of
                      KOEL's engines is in its 'Kirloskar GREEN' branded
                      generator-sets, which is India's largest selling genset
                      brand. KOEL's engines are also used in industrial &
                      construction machinery, tractors, agricultural pumpsets
                      and marine applications.
                    </p>
                    <p>
                      KOEL website:{" "}
                      <a href="https://koel.kirloskar.com">
                        koel.kirloskar.com
                      </a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="KKCL">
                    <p>
                      Kewal Kiran Clothing Limited ('KKCL') is a marketer of
                      branded apparel in India. KKCL designs, manufactures and
                      sells apparel under the 'Killer', 'Integriti', 'LawmanPg3'
                      and 'Easies' brand names, which address a number of market
                      segments in mid-priced denim, casual wear, club wear and
                      semi-formal apparel. KKCL's products are sold through
                      multi-brand apparel outlets, department stores, online and
                      through KKCL's specialty retail network.
                    </p>
                    <p>
                      KKCL website:{" "}
                      <a href="https://www.kewalkiran.com">
                        www.kewalkiran.com
                      </a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="Lovable">
                    <p>
                      Lovable Lingerie Ltd (LLL) manufactures and markets
                      women's branded innerwear in India. LLL has two major
                      brands - Lovable (premium brand launched in 1995) and
                      Daisy Dee (mid-market brand launched in 2005).
                    </p>
                    <p>
                      LLL website:{" "}
                      <a href="https://www.lovableindia.in">
                        www.lovableindia.in
                      </a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="Mastek">
                    <p>
                      Mastek is a global software solutions and systems
                      integration service provider which designs, develops,
                      integrates and maintains business applications.
                    </p>
                    <p>
                      Mastek website:{" "}
                      <a href="https://www.mastek.com">www.mastek.com</a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="Shree Cement">
                    <p>
                      Shree Cement is India's most efficient cement producer,
                      with a proven track record of low-cost operations and
                      timely capacity expansion. Shree enjoys a leadership
                      position in the North Indian cement market.
                    </p>
                    <p>
                      Shree Cement website:{" "}
                      <a href="https://www.shreecement.in">
                        www.shreecement.in
                      </a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="Sun TV">
                    <p>
                      Sun TV Network is the leading regional language cable /
                      satellite TV broadcaster in three of the four states in
                      South India, and a strong #2 player in the fourth state.
                      It operates over 20 channels that offer general
                      entertainment, movies, news, kids and music programming in
                      Tamil, Telugu, Kannada and Malayalam languages. In
                      addition, it produces movies and operates over 40 radio
                      stations in India.
                    </p>
                    <p>
                      Sun TV website:{" "}
                      <a href="https://www.sunnetwork.in">www.sunnetwork.in</a>
                    </p>
                  </HoldingSection>
                </ul>

                <h2>Acquired by Strategics</h2>
                <ul>
                  <HoldingSection name="Just Dial">
                    <p>
                      Just Dial (JD) is India's leading local search firm. JD's
                      platform has listings of tens of millions of local SMEs
                      and their products/services, augmented with verified
                      location/contact information and consumer ratings.
                      Consumers can search this database across multiple
                      channels such as voice-calls, sms, PC internet, mobile
                      internet and mobile app in a seamless manner, enabling
                      them to find relevant local vendors in a timely manner for
                      their diverse requirements. For most local SMEs, running
                      campaigns on JD is their primary and most effective lead
                      generation channel. JD also offers 'search plus' services,
                      wherein consumers can complete bookings and purchases on
                      JD's platform.
                    </p>
                    <p>
                      Just Dial website:{" "}
                      <a href="https://www.justdial.com">www.justdial.com</a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="MindTree">
                    <p>
                      MindTree is India's leading mid-tier IT Services company,
                      with deep expertise in its chosen set of industry
                      verticals (Travel/Hospitality, Retail/CPG, BFSI,
                      High-tech) and service offerings (Digital Transformation,
                      Infrastructure Management, Testing, ERP, Engineering
                      Services).
                    </p>
                    <p>
                      MindTree website:{" "}
                      <a href="https://www.mindtree.com">www.mindtree.com</a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="TCNS Clothing">
                    <p>
                      TCNS Clothing is India's leading women's ethnic branded
                      apparel business. Founded in 2002, TCNS has built category
                      leading brands in W and Aurelia. TCNS has widespread
                      distribution, with its products retailed at thousands of
                      exclusive outlets large format stores, in addition to
                      multi-brand outlets and online.
                    </p>
                    <p>
                      TCNS website:{" "}
                      <a href="https://www.wforwoman.com">www.wforwoman.com</a>
                    </p>
                  </HoldingSection>
                  <HoldingSection name="Thyrocare">
                    <p>
                      Thyrocare Technologies ('Thyrocare') is a leading provider
                      of pathology lab testing services in India. Thyrocare's
                      100% owned subsidiary Nueclear Healthcare Limited
                      ('Nueclear') provides whole-body scans for cancer-related
                      testing.
                    </p>
                    <p>
                      Thyrocare website:{" "}
                      <a href="https://www.thyrocare.com">www.thyrocare.com</a>
                    </p>
                  </HoldingSection>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
