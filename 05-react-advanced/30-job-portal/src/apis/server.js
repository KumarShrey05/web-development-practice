const API_URL = "/api/v1/jobs?limit=50";

export async function getJobData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to Fetch Jobs.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error fetching jobs:", error)
    return[]
  }
};