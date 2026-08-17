import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "../components/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";
import {Toaster} from "react-hot-toast"

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes", error);

        if (error.response?.status === 429) {
          setRateLimited(true);
        } else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimit />}
    </div>
  );
};

export default HomePage;
