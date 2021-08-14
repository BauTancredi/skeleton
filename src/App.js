import { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";

import Header from "./components/Header";
import Card from "./components/Card";
import SkeletonCard from "./components/SkeletonCard";

import "./App.css";

const AMOUNT_OF_SKELETONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://random-data-api.com/api/users/random_user?size=9"
        );
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderCards = () => {
    return data.map((user) => (
      <Grid item xs={12} md={6} lg={4}>
        <Card key={user.id} user={user} isLoading={isLoading} />
      </Grid>
    ));
  };

  const renderSkeletonCards = () => {
    return AMOUNT_OF_SKELETONS.map((num) => (
      <Grid item xs={12} md={6} lg={4}>
        <SkeletonCard key={num} isLoading={isLoading} />
      </Grid>
    ));
  };

  return (
    <div className="App">
      <Header />
      <div className="main__container">
        <Grid container spacing={3}>
          {isLoading ? renderSkeletonCards() : renderCards()}
        </Grid>
      </div>
    </div>
  );
}

export default App;
