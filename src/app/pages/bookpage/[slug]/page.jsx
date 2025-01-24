"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import $axios from "../../../../lib/axios.instance";
import Starting from "../_components/Starting";
import Author from "../_components/Author";
import DisplayReview from "../_components/DisplayReview";
import You from "../_components/You";
import Recommendations from "../_components/Recommendation";
import AddReview from "../_components/AddReview"


export default function BookDetailsId() {
  const { slug } = useParams();
  const [data, setData] = useState();
  console.log(slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $axios.get(`/book/getBookById/${slug}`);
        console.log(response);
        if (!response) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        setData(response?.data.data);
      } catch (error) {
        console.error("Failed to fetch book data:", error);
      }
    };

    fetchData();
  }, [slug]); // Include `slug` as a dependency
  if (!data) {
    return <p>Loading...</p>; // Show loading state while data is being fetched
  }

  return (
    <>
      <Starting data={data} />
      <Author data = {data} />
      <AddReview bookData= {data} />
      <DisplayReview data = {data} />
      <You />
      <Recommendations />
    </>
  );
}
