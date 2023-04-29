export interface IGeoLocation {
  postcode: string;
  city: string;
  state: string;
}


export async function getGeolocation(): Promise<IGeoLocation> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
            {
              cache: "no-store",
            }
          );

          if (response.ok) {
            const data = await response.json();
            const { postcode, city, state } = data.address;

            resolve({ postcode, city, state });
          } else {
            reject(
              new Error(
                `Failed to fetch geolocation. Status code: ${response.status}`
              )
            );
          }
        } catch (error) {
          reject(error);
        }
      });
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}
