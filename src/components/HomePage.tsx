import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { ArticleCard } from "./Blog";
import { SearchResults } from "./search-results";
import { Link } from "react-router-dom";

import { getHighlightedText } from "helpers/search";

interface ArticleData {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
}

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const getArticles = useQuery(["articles"], async () => {
    const res = await axios.get<ArticleData[]>(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );
    return res.data;
  });
  

  const filteredArticles = getArticles.isSuccess
    ? getArticles.data.filter(
        (i) =>
          i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.summary.toLowerCase().includes(searchQuery.toLowerCase())
      ).splice(0, 6)
    : [];

  const searchId = filteredArticles.length;
  
  return (
    <Container>
      <Stack spacing={4}>
        <Stack alignItems={"start"}>
          <Stack maxWidth={600} width={"100%"} spacing={1}>
            <Typography 
              sx={{
                fontWeight: 600,
                fontFamily: 'Montserrat'
                }} 
              variant={"subtitle2"}>
                Filter by keywords
            </Typography>

            <TextField
              size="small"
              fullWidth
              variant={"outlined"}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>

        <SearchResults searchId={searchId}/>

        {getArticles.isLoading && (
          <Stack alignItems={"center"}>
            <CircularProgress />
          </Stack>
        )}

        {getArticles.isError && <Alert severity="error">Some error</Alert>}

        <Box>
          <Grid container spacing={4}>
            {filteredArticles.map((i) => {
                return (
                  <Grid item xs={4} key={i.id}>
                    <Link to={"/codebridge/article/"} >
                    <ArticleCard
                      imageSrc={i.imageUrl}
                      title={
                        <Typography variant={"h4"}
                                    component={"h2"}
                                    sx={{
                                      fontFamily: 'Montserrat',
                                      fontSize: 24+'px',
                                      fontWeight: 400,
                                      maxHeight: 58+'px',
                                      overflow: 'hidden',
                                    }} >
                          {getHighlightedText(i.title, searchQuery)}
                        </Typography>
                      }
                      description={
                        <Typography sx={{
                                      fontFamily: 'Montserrat',
                                      fontSize: 16+'px',
                                      fontWeight: 400,
                                      maxHeight: 96+'px',
                                      overflow: 'hidden',
                                      flex: 'auto',
                                    }} >
                          {getHighlightedText(i.summary, searchQuery)}
                        </Typography>
                      }
                    /></Link>
                  </Grid>
                )
            })}

            {filteredArticles.length === 0 && <p>Nothing here</p>}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}