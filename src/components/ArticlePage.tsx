import { Paper, Typography } from "@mui/material"
import { Container } from "@mui/system"

// interface ArticlePageData {
//     id: number,
//     title: string,
//     description: string,
//     imageSrc: string
// }

export const ArticlePage = () => {
    // const {id} = useParams()

    // const getData = useQuery(["articles"], async () => {
    //     const res = await axios.get<ArticlePageData[]>(
    //       `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    //     );
    //     return res.data;
    //   });
    
    return (
        <Container>
            <Paper>
                <Typography variant={"h4"}
                    component={"h2"} >
                        Title
                </Typography>
                <Typography>
                    Description
                </Typography>
            </Paper>
        </Container>
    )
}