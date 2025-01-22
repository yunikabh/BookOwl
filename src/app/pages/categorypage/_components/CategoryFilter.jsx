"use client"
import { useEffect, useState } from "react"
import $axios from "../../../../lib/axios.instance";
import { Separator } from "@/components/ui/separator";

const moods = [
    {id:1, value: "happy" },
    { id:2, value: "sad"},
    {id:3, value: "excited" },
  ];
export default function CategoryFilter(){
    const [data, setData] = useState([]);
    useEffect(() => {
      getData();
    }, []);
  
  const getData = async () => {
      try {
        const response = await $axios.get("/category/getCategory");
  
        // Check if the response has the expected structure
        if (response && response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setError("Unexpected response structure");
        }
      } catch (err) {
        // If an error occurs during the API call, set the error state
        setError(`Error fetching data: ${err.message}`);
      }
    };
    
    return(
        <>
        <div className="w-64 bg-gray-100 p-4  mt-5">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter</h2>
              <Separator className="my-3 bg-gray-300" />

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Categories</h3>
                <ul className="space-y-2">
                  {data.map((category) => (
                    <li key={category._id}>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={category.categoryName}
                        //   checked={selectedCategories.includes(category)}
                        //   onChange={() => handleCategoryChange(category)}
                          className="form-checkbox h-5 w-5 text-blue-500"
                        />
                        <span className="text-gray-700 capitalize">
                        {category.categoryName}

                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
                <Separator className="mt-5 bg-gray-300" />
              </div>
    
              <div className="mb-3">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Mood</h3>
                <ul className="space-y-2">
                  {moods.map((mood) => (
                    <li key={mood.id}>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={mood.value}
                        //   checked={selectedMoods.includes(mood)}
                        //   onChange={() => handleMoodChange(mood)}
                          className="form-checkbox h-5 w-5 text-blue-700"
                        />
                        <span className="text-gray-700 capitalize">
                            {mood.value}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
</>
    )
}