export async function getRickMorty() {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow" as RequestRedirect,
  };

  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("La respuesta de la red no fue correcta");
    }
    const data = await response.json();
    return data; // No necesitas hacer otra llamada a la API
  } catch (error) {
    console.error("Hubo un problema con la operación de recuperación:", error);
    return [];
  }
}
