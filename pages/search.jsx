import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import format from "date-fns/format";
import Head from "next/head";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Head>
        <title>{`${location} | ${range} | ${noOfGuests}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range}- for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation flexibilty</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map((item) => {
              return (
                <>
                  <InfoCard
                    img={item.img}
                    location={item.location}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                    total={item.total}
                    star={item.star}
                    key={`image-${item.title}`}
                    className="rounded-xl"
                  />
                </>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => {
      return res.json();
    }
  );

  return {
    props: {
      searchResults,
    },
  };
};
