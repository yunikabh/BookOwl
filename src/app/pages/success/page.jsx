import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-96 p-6 text-center shadow-lg border border-green-500">
        <CardContent className="flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <h2 className="text-2xl font-semibold font-serif text-[#8F3623] mt-4">Success!</h2>
          <p className="text-gray-600 mt-2">Your payment is successful.</p>
          <Button className="mt-4 bg-[#265073]" onClick={() => window.location.href = "/pages/homepage"}>
            Go to Home Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
