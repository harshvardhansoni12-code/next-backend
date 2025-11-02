import axios from "axios";

export default async function UserPage() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details");
  const data: any = response.data;
  return (
    <>
      <div>
        <h1>User Page</h1>
        Title:
        {data.username}
      </div>
    </>
  );
}
