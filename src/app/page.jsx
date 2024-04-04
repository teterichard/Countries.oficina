"use client"
import styles from "./page.module.css";
import { Card } from "@/components/Card/Card";
import {useState, useEffect} from "react";

export default function Home() {
  const[countries, setCountries] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      const response = await fetch("/Api/Country", {cache: "no-store"});
      const data = await response.json();
      setCountries(data)
    }
    fetchData();
  },[]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {countries.map((country, index)=>{
          return (
          <Card
          imagePath={country.flag}
          country={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          code={country.code}
          key={index}/>)
        })}
        
      </div>
    </main>
  );
}
