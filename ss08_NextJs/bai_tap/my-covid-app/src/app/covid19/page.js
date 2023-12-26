"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const covid19 = ({ covid }) => {
  return (
    <>
      <div className="container">
        <h1>Covid Information</h1>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Active</th>
              <th scope="col">Recorved</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            {covid.map((data) => (
              <tr key={data.id}>
                <td scope="col">{new Date(data.Date).toLocaleDateString()}</td>
                <td scope="col">{data.Confirmed}</td>
                <td scope="col">{data.Deaths}</td>
                <td scope="col">{data.Recovered}</td>
                <td scope="col">{data.Active}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await axios.get("http://localhost:8080/posts");
    const covids = response.data;

    return {
      props: {
        covids: covids,
      },
    };
  } catch (error) {
    console.error("Error fetching COVID-19 data:", error.message);
    return {
      props: {
        covids: [],
      },
    };
  }
};

export default covid19;
