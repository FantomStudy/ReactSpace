const BASE_URL = "http://127.0.0.1:8000/api";

const f = async (method, url, data = null, blob = null) => {
  const token = localStorage.getItem("token");
  const options = {
    method,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  const response = await fetch(BASE_URL + url, options);

  if (
    response.status === 204 ||
    response.headers.get("Content-Length") === "0"
  ) {
    return null;
  }
  if (blob) {
    return await response.blob();
  }

  try {
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const registration = async (data) => {
  return await f("POST", "/registration", data);
};
export const login = async (data) => {
  return await f("POST", "/login", data);
};
export const logout = async () => {
  return await f("GET", "/logout");
};
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const gagarinFlight = async () => {
  return await f("GET", "/gagarin-flight");
};
export const flight = async () => {
  return await f("GET", "/flight");
};

export const search = async () => {
  return await f("GET", "/search");
};
export const getLunarMissions = async () => {
  return await f("GET", "/lunar-missions");
};
export const createLunarMissions = async () => {
  return await f("POST", "/lunar-missions");
};
export const deleteLunarMission = async (missionId) => {
  return await f("DELETE", `/lunar-missions/${missionId}`);
};
export const editLunarMission = async (missionId) => {
  return await f("PATCH", `/lunar-missions/${missionId}`);
};

export const createSpaceFlights = async () => {
  return await f("POST", "/space-flights");
};
export const getSpaceFlights = async () => {
  return await f("GET", "/space-flights");
};
export const bookFlight = async () => {
  return await f("Post", "/book-flight");
};
export const watermark = async () => {
  return await f("GET", "/lunar-watermark");
};
