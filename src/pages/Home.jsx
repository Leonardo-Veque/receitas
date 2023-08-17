import { useEffect, useState } from "react";
import api from ".././services/api";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const response = await api.get("search.php");
    }
  }, []);
}

export default Home;
