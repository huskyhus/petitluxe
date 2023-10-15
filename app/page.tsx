"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { User } from "@prisma/client";

import BasicExample from "./components/accordion";
import Navigation from "./components/navbar";
import { Accordion } from "react-bootstrap";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Yourname = () => {
  const { data, error, isLoading } = useSWR("/api/users", fetcher);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return <p>hello {data[2].email}!</p>;
};

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <BasicExample></BasicExample>
      <Yourname></Yourname>
    </div>
  );
};

export default Home;
