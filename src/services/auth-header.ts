export default function authHeader() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = JSON.parse(localStorage.getItem("user")!);

  if (user && user.access_token) {
    return { Authorization: "Bearer " + user.access_token };
  } else {
    return {};
  }
}
