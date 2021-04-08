import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import ResourceLabel from "../../../components/ResourceLabel";
import moment from "moment";

const ResourceDetail = ({ resource }) => {
  const router = useRouter();

  //    FOR FALLBACK FALSE
  //   if (router.isFallback) {
  //     return <div>Loading..</div>;
  //   }

  const activateResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "active" })
      .then((res) => location.reload())
      .catch((e) => alert("Can't Acivate"));
  };

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  <h2 className="subtitle is-4">
                    {moment(resource.createdAt).format("LLL")}
                    <ResourceLabel status={resource.status} />
                  </h2>
                  <h1 className="title">{resource.title}</h1>
                  <p>{resource.description}</p>
                  <p>Time to finish: {resource.time} min</p>
                  {resource.status === "inactive" && (
                    <>
                      <Link href={`${resource.id}/edit`}>
                        <a className="button is-warning">Update</a>
                      </Link>
                      <button
                        onClick={activateResource}
                        className="button is-success ml-1"
                      >
                        Active
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResourceDetail;

// ResourceDetail.getInitialProps = async ({ query }) => {
//   const res = await fetch("http://localhost:3001/api/resources/" + query.id);
//   const data = await res.json();
//   console.log("Hello");

//   return {
//     resource: data,
//   };
// };

export const getServerSideProps = async ({ params, query }) => {
  //   console.log(params.id);
  //   console.log(query.id);

  const res = await fetch(`${process.env.API_URL}/resources/` + params.id);
  const data = await res.json();

  return {
    props: {
      resource: data,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3001/api/resources");
//   const data = await res.json();
//   const paths = data.map((r) => {
//     return {
//       params: { id: r.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params, query }) => {
//   //   console.log(params.id);
//   //   console.log(query.id);

//   const res = await fetch("http://localhost:3001/api/resources/" + params.id);
//   const data = await res.json();

//   return {
//     props: {
//       resource: data,
//     },
//     revalidate: 1,
//   };
// };
