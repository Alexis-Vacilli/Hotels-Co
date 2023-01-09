import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";
import data from "../data";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import LargeCard from "../components/LargeCard";
import largeImage from '../assets/discover.jpeg'

export default function Home({ exploreData }) {
  return (
    <>
      <div className="">
        <Head>
          <title>Hotels&Co</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Header */}
        <Header />
        {/* Main */}
        <main className="max-w-9xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <Menu />
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-4 -ml-3">
              {data?.map(({ id, slides, location, owner, price }) => (
                <Card
                  key={id}
                  id={id}
                  slides={slides}
                  location={location}
                  owner={owner}
                  price={price}
                />
              ))}
            </div>
          </section>
          <LargeCard 
          img={largeImage}
          title="The greatest outdoors"
          description="wishlist created by airbnb"
          buttonText="Get inspired"
        />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

// export const getStaticProps = async() => {
//   const exploreData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       exploreData
//     }
//   }
// }
