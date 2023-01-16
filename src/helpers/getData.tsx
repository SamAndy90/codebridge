import { useQuery } from "react-query";
import axios from "axios";

interface ArticleData {
    id: number;
    title: string;
    summary: string;
    imageUrl: string;
  }

export const GetArticles = () => {
    const data = useQuery(["articles"], async () => {
        const res = await axios.get<ArticleData[]>(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        return res.data;
      });

    return data
}