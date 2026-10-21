"use client";
// Loads Bootstrap's JavaScript (navbar toggler) in the browser only.
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
