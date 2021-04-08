const ResourceLabel = ({ status }) => {
  return <span className={`tag ml-4 ${status}`}>{status}</span>;
};

export default ResourceLabel;
