"use client"
import { MainDBEng } from "@/app/lib/db";
import { useState } from "react";

export default function AboutWorkE() {
  const [aboutData,setAboutData] = useState(MainDBEng[0])

  return (
    <section id="work" className="w-[100%] min-h-[100vh] overflow-x-hidden border-2">
    WorkExperience
  </section>
);
}
