"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-tailwindcss-select";
import $axios from "@/lib/axios.instance";
import { useEffect, useState } from "react";

const formSchema = z.object({
  bookName: z.string().min(1, "Book Name is required"),
  author: z.object({name: z.string().min(1, "Author's Name is required")}),
  bookSummary: z.string(),
  price: z.preprocess((value) => parseFloat(value), z.number().positive({ message: "Price must be a positive number." })),
  pages: z.preprocess((value) => parseFloat(value), z.number().positive({ message: "Pages must be a positive number." })),
  publishedDate: z.preprocess((val) => (typeof val === "string" ? new Date(val) : val),z.date()),
  category:z.array(z.string()),
  language: z.string(),
  rating: z.preprocess((value) => parseFloat(value), z.number() .min(1, { message: "Rating must be at least 1." }).max(5, { message: "Rating cannot exceed 5." })),
  ISBN: z.preprocess((value) => parseFloat(value), z.number().positive({ message: "Pages must be a positive number." })),
  publisher: z.string(),
  mood: z.array(z.string()),
//   customTags: z.array(z.string()),
  stocks: z.preprocess((value) => parseFloat(value), z.number().positive({ message: "Pages must be a positive number." })),
});
export default function AddBooks() {
   const [data, setData] = useState([]);
    useEffect(() => {
      getCategory();
    }, []);

  const getCategory = async () => {
    const CategoryResponse = await $axios.get("/category/getCategory");
    console.log(CategoryResponse);
    if (!CategoryResponse){
      throw new Error(`HTTP erroe!:Status: ${CategoryResponse.status}`)
    }
    setData(CategoryResponse?.data.data);
  };
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookName: "",
     author: {name : ""} ,
      bookSummary: "",
      price: 1,
      pages: 1, 
      publishedDate: "",
      category: [],
      rating: "",
      ISBN: 1,
      language: "",
      publisher: "",
      mood: [],
    //   customTags: [],
      stocks: 1,
    },
  });
  const options = data.map((CategoryItems)=>({
    value :CategoryItems._id,
    label :CategoryItems.categoryName,

}))
const moodoptions = [
  { value: "happy", label: "happy"},
  { value: "sad", label: "sad"},
  { value: "excited", label: "excited"},
];



  async function onSubmit(values) {
    console.log(values);
    const response = await $axios.post("/book/addBook",values);
    
    if (!response) {
      throw new Error(`HTTP erroe!:Status: ${response.status}`);
    }
    if (response.status===200){
      console.log(response);
      console.log("Submitted values",values);
    }
    
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl text-center mt-[50px]">Add Book</h1>
      <Form {...form }>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[50%]">
          {/* Book Name */}
          <FormField
            control={form.control}
            name="bookName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter book name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <FormControl>
                  <Input placeholder="Enter book script" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publisher"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publisher</FormLabel>
                <FormControl>
                  <Input placeholder="Enter publisher" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          {/* Author's Name */}
          <FormField
            control={form.control}
            name="author.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author&apos;s Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter author's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        
              <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>category</FormLabel>
              <FormControl>
                <Select
                isMultiple
                  placeholder="Select category" 
                  value={options.filter((option) =>
                    field.value.includes(option.value)
                  )}
                  onChange={(selectedOptions) => {
                    field.onChange(
                      selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : []
                    );
                  }}
                  options={options}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          
          {/* <FormField
            control={form.control}
            name="author.bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter a short bio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* Book Summary */}
          <FormField
            control={form.control}
            name="bookSummary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book Summary</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter a short Book Summary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
          control={form.control}
          name="mood"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mood</FormLabel>
              <FormControl>
                <Select
                  isMultiple
                  placeholder="Select your mood" 
                  value={moodoptions.filter((option) =>
                    field.value.includes(option.value)
                  )}
                  onChange={(selectedOptions) => {
                    field.onChange(
                      selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : []
                    );
                  }}
                  options={moodoptions}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* {/* Pages */}
          <FormField
            control={form.control}
            name="pages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pages</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 
           {/* {/*RAting */}
           <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RAting</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 


        
          {/* ISBN */}
          <FormField
            control={form.control}
            name="ISBN"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="Enter ISBN" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Stocks */}
          <FormField
            control={form.control}
            name="stocks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stocks</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter stock quantity"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="publishedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Published Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Enter stock quantity"
                    {...field}
                  />


                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
