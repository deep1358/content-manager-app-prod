import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const ActiveResource = () => {
  const [resources, setResources] = useState({});
  const [second, setSecond] = useState();
  const [tim, setTim] = useState();

  useEffect(() => {
    const fetchResource = async () => {
      await axios.get("/api/activeresource").then((res) => {
        const resource = res.data;
        setTim(resource.time);
        const timeToFinish = parseInt(resource.time, 10);
        const elapsedTime = moment().diff(
          moment(resource.activationTime),
          "seconds"
        );
        const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;
        if (updatedTimeToFinish >= 0) {
          resource.time = updatedTimeToFinish;
          setSecond(updatedTimeToFinish);
        }
        setResources(resource);
      });
    };
    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(second - 1);
    }, 1000);
    if (second < 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [second]);

  const completeResource = () => {
    console.log(tim);
    axios
      .patch("/api/resources", {
        ...resources,
        status: "complete",
        time: tim,
      })
      .then((res) => location.reload())
      .catch((e) => alert("Can't Complete the resource"));
  };

  const hasResource = resources && resources.id;

  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resources.title : "No Active Resource"}
      </h1>
      <div className="time-wrapper">
        {hasResource &&
          (second > 0 ? (
            <h2 className="elapsed-time">{second}</h2>
          ) : (
            <h2 className="elapsed-time">
              <button onClick={completeResource} className="button is-success">
                Click and Done!
              </button>
            </h2>
          ))}
        {hasResource ? (
          <Link href={`/resources/${resources.id}`}>
            <a className="button">Go to resource</a>
          </Link>
        ) : (
          <Link href="/">
            <a className="button">Go to resources</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ActiveResource;
