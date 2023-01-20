import { Paper, Typography, Stack, Box } from "@mui/material"
import { Container } from "@mui/system"
import { West } from "@mui/icons-material"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import '../main.scss'
interface ArticlePageData {
    id: number,
    title: string,
    summary: string,
    imageUrl: string
}

export const ArticlePage = () => {
    const {id} = useParams()
    const getData = useQuery(["articles"], async () => {
        const res = await axios.get<ArticlePageData>(
          `https://api.spaceflightnewsapi.net/v3/articles/${id}`
        );
        return res.data;
      });

    const filteredData:any = getData.isSuccess
        ? getData.data
        : {};

    const { title, summary, imageUrl } = filteredData;
    
    return (
        <>
        <Box className="article-image__wrapper" >
            <img src={imageUrl} alt="img" className="article-image__item" />
        </Box>
        <Container >
            <Paper sx={{px: 6.25, border: '1px solid #EAEAEA', borderRadius: 1.25, mt: -12, position: 'relative', zIndex: 1, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }} >
                <Typography variant={"h4"} 
                            component={"h2"}
                            textAlign={"center"}
                            sx={{fontFamily: 'Montserrat',
                                mt: 4.5, mb: 6.25 }} >
                    {title}
                </Typography>
                <Typography sx={{fontFamily: 'Montserrat',
                                mb: 6.25 }} >
                    {summary}
                </Typography>
            </Paper>
            <Link to={"/codebridge/"} >
                <Stack  alignItems={'center'} 
                        direction={'row'} 
                        gap={1} 
                        pl={6} pt={4.5} pb={5.5} 
                        color={'black'} 
                        fontWeight={'700'}
                        className={'artical__link-backhome'} >
                    <West />
                    <span>Back to homepage</span>
                </Stack>
            </Link>
        </Container>
        </>
    )
}