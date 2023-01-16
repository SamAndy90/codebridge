import { ReactNode } from "react";
import { Paper, Stack } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import '../../main.scss';

export interface ArticleCardProps {
  title: ReactNode,
  description: ReactNode,
  imageSrc: string,
}

export function ArticleCard(props: ArticleCardProps) {
  const { title, description, imageSrc } = props;

  return (
    <Paper elevation={2}>
      <Stack spacing={2}
        sx={{
          height: 530 + 'px',
        }} >
        <img
          src={imageSrc}
          alt="someImg"
          className="article-picture" />
        <Stack spacing={2}
          sx={{
            padding: 25 + 'px',
            display: 'flex',
            justifyContent: "space-between",
            height: 100 + '%',
          }} >
          {title}
          {description}
          <div className="read-more" >
            <span>Read more</span>
            <EastIcon  />
          </div>
        </Stack>
      </Stack>
    </Paper>
  );
}
