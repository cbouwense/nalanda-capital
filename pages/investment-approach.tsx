import { NextPage } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import HoldingSection from "@/components/HoldingSection";

const Portfolio: NextPage = () => {
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
                href="/investment-approach"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Investment Approach
              </a>
              <a
                href="/team"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Team
              </a>
              <a
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-yellow"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </section>
      <section className="max-w-4xl mx-auto pb-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="p-4">
            <h2 className="text-2xl font-medium mb-2 text-rust">
              Investment Approach
            </h2>
            <ul>
              <HoldingSection name="Long term fundamental investing">
                <>
                  <p className="mt-4">
                    The "long term fundamental investing" approach demands deep
                    diligence, fundamental research, and an independent analysis
                    of the investment opportunities irrespective of the general
                    prevailing opinions or state of the markets.
                  </p>
                  <p className="mt-4">
                    One of the ways to describe this approach is to discuss what
                    it is not. It is not about investing based on
                    recommendations of analysts, or investing based on a
                    one-hour meeting with the management team in a sell-side
                    conference. It also does not entail seeking protection from
                    extreme diversification. Instead, this approach envisages
                    employing a lot of time and effort to understand the
                    industry, management, company, competition, and demands that
                    the investor puts its eggs in very few baskets, and then
                    watches the baskets carefully.
                  </p>
                </>
              </HoldingSection>
              <HoldingSection name="Proprietary idea generation">
                <>
                  <p className="mt-4">
                    This is an "ideas" business. At its core, good investing is
                    about generating good ideas. Ideas that are popular or are
                    followed by every investor cannot remain good for too long.
                    Over time, it is only by following up on ideas that are
                    proprietary (and potentially unpopular) that any investment
                    team can create value.
                  </p>
                  <p className="mt-4">
                    Nalanda focuses on generating and implementing its own
                    ideas, and shies away from ideas that are already popular or
                    have been made popular by bankers or analysts. This idea
                    generation broadly has two sources - proprietary analysis,
                    and friends of Nalanda.
                  </p>
                  <p className="mt-4">
                    <strong>Proprietary Analysis</strong> - This involves
                    reading annual reports, analyzing industry reports,
                    generating deal screens, reading and analyzing the business
                    press, deep diving into stocks that are out of favor or have
                    sell recommendations, and attending seminars and
                    conferences, especially those that are focused on an
                    industry or on small and mid-cap companies.
                  </p>
                  <p className="mt-4">
                    <strong>Friends of the Fund</strong> - Over time, the team
                    at Nalanda Capital has built many relationships in India
                    with intermediaries, accountants, lawyers, entrepreneurs,
                    and senior professionals. These relationships have been a
                    very good source of ideas in the past, and will continue to
                    be mined in a focused manner in the future.
                  </p>
                  <p className="mt-4">
                    To date, almost all the Nalanda investments have been
                    through the "proprietary analysis" route.
                  </p>
                </>
              </HoldingSection>
              <HoldingSection name="Passively active style of investing">
                <>
                  <p className="mt-4">
                    Nalanda invests primarily in those situations where it can
                    be an active partner with the management team. Nalanda needs
                    to be convinced before making the investment that the
                    management team of the portfolio company is open minded and
                    values and appreciates discussion and debate. The style of
                    Nalanda's interaction with the portfolio company management
                    teams is not "activist", but "active". We call it a
                    "passively active" style of investing.
                  </p>
                  <p className="mt-4">
                    Nalanda's focus is not to make a third rate company a first
                    rate one (it does not have the skills to do so), but to help
                    a great company become even better. And this is possible not
                    because the professionals at Nalanda Capital are "smarter"
                    than the entrepreneurs (they aren't), but because they bring
                    a different perspective to the table. The Nalanda Capital
                    team has observed many Indian companies across a wide range
                    of industries deal with many fundamental issues over a long
                    period of time. They seek to bring this perspective into
                    their discussions with the management teams of the portfolio
                    companies. The experience of the investment management team
                    has shown that Indian entrepreneurs value feedback and
                    criticism if it is done in a constructive and collegial
                    manner.
                  </p>
                  <p className="mt-4">
                    Nalanda does not seek to interfere with the management teams
                    of the portfolio companies, but simply seeks to intervene
                    selectively. The approach aims to add value in a few areas
                    every year, and does not involve giving daily or weekly
                    advice to the management team. The interaction is programmed
                    (e.g. once every few weeks), and is not event-based.
                  </p>
                  <p className="mt-4">
                    Nalanda has added value in the following areas: strategy
                    (whether a portfolio company should trim the number of its
                    brands, whether the portfolio company should launch a new
                    business), mergers and acquisitions (whether a portfolio
                    company should be acquiring overseas companies, whether a
                    portfolio company should sell or shut down its
                    non-performing business), corporate structure (should the
                    company demerge its disparate businesses or create a
                    subsidiary), financial structure (whether a portfolio
                    company should be raising debt instead of equity) and
                    organization (whether the portfolio company needs a Chief
                    Operating Officer, or whether its Chief Financial Officer is
                    serving the function of a Chief Accountant) - i.e. in all
                    the areas that could help the management team of a portfolio
                    company create greater value.
                  </p>
                  <p className="mt-4">
                    Overall, Nalanda does not invest unless it is convinced that
                    the management team is clean, outstanding, and is open to
                    external ideas, and discussion and debate.
                  </p>
                </>
              </HoldingSection>
              <HoldingSection name="Companies need to qualify a rigorous screening process">
                <>
                  <p className="mt-4">
                    Nalanda adopts a rigorous screening process to select
                    potential portfolio companies. The four screens are: high
                    return on capital, attractive industry, clean and
                    outstanding entrepreneur, and an asymmetric risk-reward
                    trade-off.
                  </p>
                  <p className="mt-4">
                    <strong>High return on capital</strong> - Nalanda invests in
                    only those companies that have, or have had a consistently
                    high return on capital. This includes companies that may
                    have had a temporary decline of returns. Being a long term
                    (and not momentum) investor, Nalanda's approach is to invest
                    only in high quality businesses, and return on capital is a
                    very good indicator of the quality of the management team
                    and the competitive advantage of the business of the
                    portfolio companies.
                  </p>
                  <p className="mt-4">
                    <strong>Attractive industry</strong> - Nalanda analyzes the
                    industry structure, conduct of industry participants and
                    performance of key companies in the industry to assess if
                    the industry is attractive from the point of view of long
                    term value creation. Industry analysis in India is made
                    quite difficult by the high growth rates of companies and
                    changing dynamics of the competitive environment. Also, many
                    Indian industries are not likely to follow the path of
                    industries in the west (e.g. information technology
                    services), and so, a bottoms up analysis and independent
                    thinking is required to develop a point of view.
                  </p>
                  <p className="mt-4">
                    <strong>Clean and outstanding entrepreneur</strong> -
                    Nalanda's focus has been and will be to back entrepreneurs
                    who are clean and transparent, and have an outstanding track
                    record. This assessment involves doing a lot of reference
                    checks on the entrepreneur and the management team. Nalanda
                    needs to be convinced that the company is a “leader”. It
                    need not be a leader in market share or volume, but the
                    management team needs to demonstrate its leadership in some
                    area(s) that could potentially create significant value in
                    the future. For example, the company may be a leader in
                    profitability, it may be a leader in a fast growing and
                    potentially large niche segment of the market, it may be a
                    leader on cost structure, or in creating and spotting
                    opportunities that competitors have not been able to match.
                  </p>
                  <p className="mt-4">
                    <strong>Asymmetric risk-reward tradeoff</strong> -
                    Ultimately, Nalanda will perform well only if it ends up
                    getting disproportionately rewarded for the level of risk it
                    assumes. In other words, it seeks situations where there is
                    an asymmetry in the risk and reward. This involves assessing
                    the probability and quantum of various outcomes through a
                    rigorous financial modeling process, and a thoughtful
                    qualitative analysis of the industry and the management
                    team.
                  </p>
                </>
              </HoldingSection>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
