import { Paper, Stack, Box } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import CalendarTodaySharpIcon from "@mui/icons-material/CalendarTodaySharp";
import { ReactNode } from "react";

export interface ArticleCardProps {
    title: ReactNode;
    description: ReactNode;
    imageSrc: string;
    publishedAt: string;
}

export function ArticleCard(props: ArticleCardProps) {
    const { title, description, imageSrc, publishedAt } = props;

    return (
        <Paper elevation={2} className={"article"}>
            <Stack spacing={2} height={"530px"}>
                <Box className="article__image-box">
                    <img src={imageSrc} alt="article_picture" className="article__picture" />
                </Box>
                <Stack
                    spacing={2}
                    padding={"25px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    height={"100%"}>
                    <Box
                        fontSize={14}
                        fontWeight={400}
                        color={"#868686"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}>
                        <CalendarTodaySharpIcon />
                        {publishedAt.slice(0, 10)}
                    </Box>
                    {title}
                    {description}
                    <Box className="article__read-more">
                        <span>Read more</span>
                        <EastIcon fontSize="small" />
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    );
}
