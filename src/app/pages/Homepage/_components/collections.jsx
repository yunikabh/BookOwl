// // pages/index.jsx

import Sidebar from "./Sidebar1";
export default function Collections() {
  return (
<>
<Sidebar/>
    <Layout>
      {/* <h1 className="text-3xl font-bold">Welcome to Book Owl</h1> */}
      <p className="mt-4 text-gray-600">
        Select a genre from the left to explore books!
      </p>
    </Layout>
    </>
  );
}
