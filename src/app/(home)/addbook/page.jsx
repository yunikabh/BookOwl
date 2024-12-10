"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  bookname: z
    .string()
    .min(1, { message: "Book name must be atleast 1 character" }),
  authorname: z
    .string()
    .min(1, { message: "Author name must be atleast 1 character" }),
  publisher: z
    .string()
    .min(1, { message: "Author name must be atleast 1 character" }),
  description: z
    .string()
    .min(100, { message: "Author name must be atleast 100 character" }),
});

export default function AddBook() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookname: "",
    },
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    //form
    <div className="w-full flex flex-row justify-center items-center mt-10">
      <Card className="w-[50%] items-center bg-transparent space-y-6 text-[#945F39] text-center text-2xl shadow-2xl p-10">
        {/* Title */}
        <h1 className="text-3xl font-bold">Add Book</h1>
        <Form {...form} className="w-[40%]">
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            {/* //formfield control */}

            <FormField
              control={form.control}
              name="bookname"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-2xl">Bookname</FormLabel>
                  <FormControl>
                    <Input
                      className="text-center"
                      placeholder="Bookname"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="authorname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl">Author name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-center"
                      placeholder="Author name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="publisher"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl">Publisher</FormLabel>
                  <FormControl>
                    <Input
                      className="text-center"
                      placeholder="Publisher"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl">Description</FormLabel>
                  <FormControl>
                    <Input
                      className="text-center"
                      placeholder="Book Description"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <Button className="bg-[#945F39]" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
