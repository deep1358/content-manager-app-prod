import { useState } from "react";

const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(
    initialData || {
      title: "",
      desc: "",
      link: "",
      priority: "2",
      time: 60,
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () =>
    setForm({ title: "", desc: "", link: "", priority: "2", time: 60 });

  return (
    <div className="resource-form">
      <h1 className="title">Add New Resources</h1>
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Learn Next js"
              value={form.title}
              onChange={handleChange}
              name="title"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Learn this to become good web developer"
              value={form.desc}
              onChange={handleChange}
              name="desc"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="https://deep.com"
              value={form.link}
              onChange={handleChange}
              name="link"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select
                value={form.priority}
                onChange={handleChange}
                name="priority"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="60"
              value={form.time}
              onChange={handleChange}
              name="time"
            />
          </div>
          <p className="help">Time in minutes</p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              type="button"
              onClick={() => onFormSubmit(form)}
            >
              Submit
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              className="button is-link is-light"
              onClick={resetForm}
            >
              Reset Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResourceForm;
