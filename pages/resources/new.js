import axios from "axios";
import { useRouter } from "next/router";
import ResourceForm from "../../components/ResourceForm";

const ResourceCreate = () => {
  const router = useRouter();

  const createdResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then((res) => {
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
        alert(e?.response?.data);
      });
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <ResourceForm onFormSubmit={createdResource} />
        </div>
      </div>
    </div>
  );
};

export default ResourceCreate;
