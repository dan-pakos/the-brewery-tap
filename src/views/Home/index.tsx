import { useEffect, useState } from "react";
import { fetchData, getStorred, updateStorred } from "./utils";
import { Beer } from "../../types";
import { Link as RouterLink } from "react-router-dom";
import { Button, Checkbox, Paper, TextField, Link } from "@mui/material";
import styles from "./Home.module.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Home = () => {
  const beerFavsStoreKey = "beer-favourites";
  const defaultBeerFavourites = getStorred(beerFavsStoreKey) ?? [];
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [savedList, setSavedList] = useState<Array<string>>(
    defaultBeerFavourites
  );

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  const handleFavSelection = (event: any) => {
    const { checked, value: beerId } = event.target;

    if (checked && !savedList.includes(beerId)) {
      setSavedList([...savedList, beerId]);
    } else {
      setSavedList(savedList.filter((favBeerId) => favBeerId !== beerId));
    }
  };

  useEffect(() => {
    updateStorred(beerFavsStoreKey, savedList);
  }, [savedList]);

  const clearBeerFavourites = () => {
    setSavedList([]);
  };

  const isFavourite = (beerId: string) => {
    return !!savedList.find((favId) => favId === beerId);
  };

  return (
    <article>
      <section>
        <main>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <TextField label="Filter..." variant="outlined" />
                <Button variant="contained" disabled>
                  Reload list
                </Button>
              </div>
              <ul className={styles.list}>
                {beerList.map((beer, index) => (
                  <li key={index.toString()}>
                    <Checkbox
                      value={beer.id}
                      onChange={handleFavSelection}
                      icon={<FavoriteBorderIcon />}
                      checkedIcon={<FavoriteIcon />}
                      className={styles.favCheckbox}
                      checked={isFavourite(beer.id)}
                    />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Paper>

          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3>Favourites</h3>
                <Button
                  variant="contained"
                  size="small"
                  onClick={clearBeerFavourites}
                >
                  Remove all items
                </Button>
              </div>
              <ul className={styles.list}>
                {savedList.map((beerId, index) => {
                  const beer = beerList.find((beer) => beer.id === beerId);
                  return (
                    beer && (
                      <li key={index.toString()}>
                        <Link component={RouterLink} to={`/beer/${beer.id}`}>
                          {beer.name}
                        </Link>
                      </li>
                    )
                  );
                })}
                {!savedList.length && <p>No Favourites</p>}
              </ul>
            </div>
          </Paper>
        </main>
      </section>
    </article>
  );
};

export default Home;
