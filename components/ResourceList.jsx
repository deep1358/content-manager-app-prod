import Link from "next/link";
import ResourceLabel from "./ResourceLabel";
import moment from "moment";

const ResourceList = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-variable is-multiline is-8">
              {resources.map(
                ({
                  id,
                  title,
                  description,
                  link,
                  image,
                  priority,
                  timeToFinish,
                  active,
                  createdAt,
                  status,
                }) => (
                  <div className="column is-5 is-offset-1" key={id}>
                    <div className="content is-medium">
                      <h2 className="subtitle is-5 has-text-grey">
                        {moment(createdAt).format("LLL")}
                        <ResourceLabel status={status} />
                      </h2>
                      <h1 className="title has-text-black is-3">{title}</h1>
                      <p className="has-text-dark">{description}</p>
                      <Link href={`/resources/${id}`}>
                        <a className="button is-light">Details</a>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
