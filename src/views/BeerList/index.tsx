import { useEffect, useState } from "react";
import { Beer } from "../../types";
import { fetchData } from "./utils";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SportsBar from "@mui/icons-material/SportsBar";
import { useNavigate } from "react-router-dom";
import { ApiParams } from "../../types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NameFilter from "./NameFilter";
import SortSelect from "./SortSelect";
import Paginator from "./Paginator";

const BeerList = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);

  const listLimit = 12; // TODO: move to config
  const defaultParams = {
    sort: `name:asc`,
    per_page: listLimit + 1, // add one more item to evaluate if there are more results to load
    page: page,
  };

  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [params, setParams] = useState<ApiParams>(defaultParams);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, params, setBeerList), [params]);

  const onBeerClick = (id: string) => navigate(`/beer/${id}`);

  const updateParams = (params: ApiParams) => {
    setParams((curr) => {
      return { ...curr, ...params };
    });
  };

  const loadMore = () => {
    const nextPage = page + 1;
    updateParams({ ...params, ...{ page: nextPage } });
    setPage(nextPage);
  };

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
        </header>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <NameFilter onFilter={updateParams} />
            </Grid>
            <Grid item xs={6}>
              <SortSelect onChange={updateParams} />
            </Grid>
          </Grid>
        </Box>
        <main>
          {beerList.length ? (
            <Box>
              <List>
                {beerList.map((beer, i) => {
                  if (i < listLimit) {
                    return (
                      <ListItemButton
                        key={beer.id}
                        onClick={onBeerClick.bind(this, beer.id)}
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <SportsBar />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={beer.name}
                          secondary={beer.brewery_type}
                        />
                      </ListItemButton>
                    );
                  }
                })}
              </List>
              <Paginator onNext={loadMore} />
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100px"
            >
              <strong>No breweries found.</strong>
            </Box>
          )}
        </main>
      </section>
    </article>
  );
};

export default BeerList;
