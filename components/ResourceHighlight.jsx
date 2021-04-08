import Link from "next/link";
import ResourceLabel from "./ResourceLabel";
import moment from "moment";

const ResourceHighlight = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources
            .slice(0, 2)
            .map(
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
                <section className="section" key={id}>
                  <div className="columns">
                    <div className="column is-8 is-offset-2">
                      <div className="content is-medium">
                        <h2 className="subtitle is-4">
                          {moment(createdAt).format("LLL")}
                          <ResourceLabel status={status} />
                        </h2>
                        <h1 className="title">{title}</h1>
                        <p className="mb-0">{description}</p>
                        <Link href={`/resources/${id}`}>
                          <a className="button is-light">Details</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
