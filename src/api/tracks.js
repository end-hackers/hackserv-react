import { mainAxios } from "./utils";

export const getAllTracks = () => mainAxios.get("/track/");

export const createTrack = (name) =>
  mainAxios.post("/track/create", {
    trackName: name,
  });