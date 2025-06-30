import { Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OrderManagement() {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">New Order v0</CardTitle>
          <Button variant="outline" size="sm" className="h-8">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm text-muted-foreground">
                  <th className="pb-3 text-left font-medium">Order ID</th>
                  <th className="pb-3 text-left font-medium">Client</th>
                  <th className="pb-3 text-left font-medium">Package</th>
                  <th className="pb-3 text-left font-medium">Amount</th>
                  <th className="pb-3 text-left font-medium">Order Date</th>
                  <th className="pb-3 text-left font-medium">Status</th>
                  <th className="pb-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 text-sm">#ORD-2024001</td>
                  <td className="py-4">
                    <div className="font-medium">McDonald's</div>
                    <div className="text-sm text-muted-foreground">
                      jennings@example.com
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="font-medium">Social Media Post</div>
                    <div className="text-sm text-muted-foreground">
                      With 3 Add Ons
                    </div>
                  </td>
                  <td className="py-4 font-medium">$245.00</td>
                  <td className="py-4 text-sm">Feb 18, 2024</td>
                  <td className="py-4">
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-600 hover:bg-amber-50 border-amber-200"
                    >
                      Pending Assignment
                    </Badge>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-600"
                      >
                        <User className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 text-sm">#ORD-2024001</td>
                  <td className="py-4">
                    <div className="font-medium">McDonald's</div>
                    <div className="text-sm text-muted-foreground">
                      weaver@example.com
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="font-medium">Email Design</div>
                  </td>
                  <td className="py-4 font-medium">$99.00</td>
                  <td className="py-4 text-sm">Feb 17, 2024</td>
                  <td className="py-4">
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-600 hover:bg-amber-50 border-amber-200"
                    >
                      Pending Assignment
                    </Badge>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-600"
                      >
                        <User className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm">#ORD-2024001</td>
                  <td className="py-4">
                    <div className="font-medium">eBay</div>
                    <div className="text-sm text-muted-foreground">
                      simmons@example.com
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="font-medium">SEO Backlinks</div>
                    <div className="text-sm text-muted-foreground">
                      With 1 Add Ons
                    </div>
                  </td>
                  <td className="py-4 font-medium">$120.00</td>
                  <td className="py-4 text-sm">Feb 17, 2024</td>
                  <td className="py-4">
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-600 hover:bg-amber-50 border-amber-200"
                    >
                      Pending Assignment
                    </Badge>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-600"
                      >
                        <User className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
