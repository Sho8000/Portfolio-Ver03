"use client"
import { MainDBEng } from "@/app/lib/db";
import { useState } from "react";

export default function AboutProject() {
  const [aboutData,setAboutData] = useState(MainDBEng[0])

  return (
    <section id="project" className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2">
    project
  </section>
);
}
