import Head from "next/head";
import Newsletter from "../components/Newsletter";
import ResourceList from "../components/ResourceList";
import Footer from "../components/Footer";
import ResourceHighlight from "../components/ResourceHighlight";

export default function Home({ data }) {
  return (
    <>
    <Head>
      <title>Content Manager</title>
    </Head>
      <ResourceHighlight resources={data} />
      <Newsletter />
      <ResourceList resources={data} />
      <Footer />
    </>
  );
}

//Run Every Time Page is visited
//Always fresh data
export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/resources`);
  const data = await res.json();

  // console.log(
  //   data.map((r) => {
  //     return {
  //       params: { id: r.id },
  //     };
  //   })
  // );
  return {
    props: {
      data,
    },
  };
};

//Run Only once in Building Process
//Data when build occured
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/resources");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
