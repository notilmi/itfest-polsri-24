import { Link } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  Users,
  TrendingUp,
  DollarSign,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CampaignCard from "@/components/campaign-card";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        className="div z-20"
      >
        <main className="flex flex-1 flex-col gap-2 md:gap-4">
          <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            <CampaignCard
              title="Total Jangkauan"
              icon={<Users />}
              value="2,7 Juta"
              description="+15,2% dari bulan lalu"
              percentage=""
            />
            <CampaignCard
              title="Kampanye Aktif"
              icon={<TrendingUp />}
              value="24"
              description="+3 dari minggu lalu"
              percentage=""
            />
            <CampaignCard
              title="ROI"
              icon={<DollarSign />}
              value="287%"
              description="+32% dari kuartal lalu"
              percentage=""
            />
            <CampaignCard
              title="Tingkat Keterlibatan"
              icon={<Activity />}
              value="5,8%"
              description="+0,7% dari kampanye terakhir"
              percentage=""
            />
          </div>
          <div className="grid gap-2 md:gap-4 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Kampanye Terbaru</CardTitle>
                  <CardDescription>
                    Ikhtisar kampanye influencer terbaru Anda.
                  </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link to="#">
                    Lihat Semua
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kampanye</TableHead>
                      <TableHead className="hidden xl:table-column">
                        Influencer
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Status
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Tanggal
                      </TableHead>
                      <TableHead className="text-right">Keterlibatan</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Koleksi Musim Panas</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          Mode
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        @fashionista
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Aktif
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        23-06-2023
                      </TableCell>
                      <TableCell className="text-right">7,2%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Tantangan Kebugaran</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          Kesehatan & Kebugaran
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        @fitguru
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Selesai
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        24-06-2023
                      </TableCell>
                      <TableCell className="text-right">9,5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">
                          Peluncuran Gadget Tech
                        </div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          Teknologi
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        @techreview
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Terjadwal
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        25-06-2023
                      </TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">
                          Produk Ramah Lingkungan
                        </div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          Keberlanjutan
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        @greenlife
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Aktif
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        26-06-2023
                      </TableCell>
                      <TableCell className="text-right">6,8%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">
                          Promo Festival Makanan
                        </div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          Kuliner
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        @foodiedelights
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Aktif
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        27-06-2023
                      </TableCell>
                      <TableCell className="text-right">8,3%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Influencer Terbaik</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-2">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      @fashionista
                    </p>
                    <p className="text-sm text-muted-foreground">Mode & G</p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Star className="h-4 w-4 text-yellow-400 inline mr-1" />
                    4,9
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">@fitguru</p>
                    <p className="text-sm text-muted-foreground">
                      Kesehatan & Kebugaran
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Star className="h-4 w-4 text-yellow-400 inline mr-1" />
                    4,8
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      @techreview
                    </p>
                    <p className="text-sm text-muted-foreground">Teknologi</p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Star className="h-4 w-4 text-yellow-400 inline mr-1" />
                    4,7
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>GR</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      @greenlife
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Keberlanjutan
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Star className="h-4 w-4 text-yellow-400 inline mr-1" />
                    4,6
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>FD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      @foodiedelights
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Makanan & Kuliner
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Star className="h-4 w-4 text-yellow-400 inline mr-1" />
                    4,5
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
