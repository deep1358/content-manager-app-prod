import ResourceForm from "../../../components/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const Edit = ({ data }) => {
  const router = useRouter();

  const updateResource = (formData) => {
    axios
      .patch("/api/resources", formData)
      .then((res) => {
        router.push("/");
      })
      .catch((e) => {
        alert(e?.response?.data);
      });
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <ResourceForm initialData={data} onFormSubmit={updateResource} />
        </div>
      </div>
    </div>
  );
};

export default Edit;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}/resources/` + params.id);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
