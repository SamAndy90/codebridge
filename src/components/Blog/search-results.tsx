import { Paper } from "@mui/material";

interface ISearchResults {
    searchId: number
}

export const SearchResults = (props: ISearchResults) => {
    const { searchId } = props;
    return (
        <Paper elevation={1} sx={{ padding: '5px'}} >
            <span className="result">{`Results: ${searchId}`}</span>
        </Paper>
    )
}