import { configureStore } from "@reduxjs/toolkit";
import addtoCard from "./addto-card";

export const store = configureStore(
     {
          reducer:{
               add:addtoCard,
          },
     }
)
