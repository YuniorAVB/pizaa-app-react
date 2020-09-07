export function getMeza() {
  try {
    const meza = window.localStorage.getItem("numero-meza");
    return meza;
  } catch (error) {
    throw new Error(error);
  }
}
