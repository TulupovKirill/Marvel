import { useParams } from "react-router-dom";
import { characters } from "../data/objects/Characters";

function GetPageCharacterById()
{
    let url_page = useParams<"id">();

    return characters.find((item) => item.id === Number(url_page.id))?.page
}

export default GetPageCharacterById