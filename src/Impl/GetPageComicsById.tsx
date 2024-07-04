import { useParams } from "react-router-dom";
import { comics } from "../data/objects/Comics";

function GetPageComicsById()
{
  let url_page = useParams<"id">();

  return comics.find((item) => item.id === Number(url_page.id))?.page
}

export default GetPageComicsById