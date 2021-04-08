import axios from "axios";

export default async function activeResource(req, res) {
  const Res = await axios.get(`${process.env.API_URL}/activeresources`);
  const resource = await Res.data;
  return res.send(resource);
}
