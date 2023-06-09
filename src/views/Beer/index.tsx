import { useEffect, useState } from "react";
import { Beer as IBeer } from "../../types";
import { fetchData } from "./utils";
import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <article>
      <section>
        <Paper className="mainPaper">
          <header>
            <h1>{beer?.name}</h1>
          </header>
          <main>
            <span>
              <b>Type: </b> {beer?.brewery_type}
            </span>
          </main>
        </Paper>
      </section>
    </article>
  );
};

export default Beer;
