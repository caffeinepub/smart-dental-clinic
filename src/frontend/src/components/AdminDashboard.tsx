import { useAuth } from "@/components/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  CalendarDays,
  LogOut,
  MessageSquare,
  Shield,
} from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

export function AdminDashboard({ onBack }: AdminDashboardProps) {
  const { logout, principal } = useAuth();
  const { actor, isFetching } = useActor();

  const { data: appointments, isLoading: loadingAppts } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllAppointments();
    },
    enabled: !!actor && !isFetching,
  });

  const { data: contacts, isLoading: loadingContacts } = useQuery({
    queryKey: ["contactForms"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactForms();
    },
    enabled: !!actor && !isFetching,
  });

  const formatTimestamp = (ts: bigint) => {
    const ms = Number(ts / BigInt(1_000_000));
    return new Date(ms).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const handleLogout = () => {
    logout();
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50" data-ocid="admin.page">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#2E86C1] transition-colors"
              data-ocid="admin.link"
            >
              <ArrowLeft size={16} />
              Back to Website
            </button>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-[#2E86C1]" />
              <span className="font-bold text-gray-800 text-lg">
                Admin Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-gray-500 font-mono max-w-[200px] truncate">
                {principal?.slice(0, 20)}...
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
              data-ocid="admin.delete_button"
            >
              <LogOut size={14} className="mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <CalendarDays size={22} className="text-[#2E86C1]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Appointments</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {loadingAppts ? "—" : (appointments?.length ?? 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                  <MessageSquare size={22} className="text-[#48C9B0]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Messages</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {loadingContacts ? "—" : (contacts?.length ?? 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="appointments" data-ocid="admin.tab">
          <TabsList className="mb-6 bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
            <TabsTrigger
              value="appointments"
              className="data-[state=active]:bg-[#2E86C1] data-[state=active]:text-white rounded-lg"
              data-ocid="admin.tab"
            >
              <CalendarDays size={15} className="mr-2" />
              Appointments
              {appointments && appointments.length > 0 && (
                <Badge className="ml-2 bg-white text-[#2E86C1] text-xs px-1.5 py-0">
                  {appointments.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="contacts"
              className="data-[state=active]:bg-[#48C9B0] data-[state=active]:text-white rounded-lg"
              data-ocid="admin.tab"
            >
              <MessageSquare size={15} className="mr-2" />
              Contact Messages
              {contacts && contacts.length > 0 && (
                <Badge className="ml-2 bg-white text-[#48C9B0] text-xs px-1.5 py-0">
                  {contacts.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-semibold text-gray-700">
                  Appointment Bookings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {loadingAppts ? (
                  <div
                    className="p-6 space-y-3"
                    data-ocid="admin.loading_state"
                  >
                    {["a", "b", "c"].map((k) => (
                      <Skeleton key={k} className="h-12 w-full rounded-lg" />
                    ))}
                  </div>
                ) : !appointments || appointments.length === 0 ? (
                  <div
                    className="text-center py-16 text-gray-400"
                    data-ocid="admin.empty_state"
                  >
                    <CalendarDays
                      size={40}
                      className="mx-auto mb-3 opacity-30"
                    />
                    <p className="font-medium">No appointments yet</p>
                    <p className="text-sm mt-1">
                      Bookings will appear here once patients submit the form.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table data-ocid="admin.table">
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-semibold text-gray-600">
                            #
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Patient Name
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Phone
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Service
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Preferred Date
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Booked At
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {appointments.map((appt, i) => (
                          <TableRow
                            key={`${appt.name}-${String(appt.timestamp)}`}
                            className="hover:bg-blue-50/40 transition-colors"
                            data-ocid={`admin.row.${i + 1}`}
                          >
                            <TableCell className="text-gray-400 text-sm">
                              {i + 1}
                            </TableCell>
                            <TableCell className="font-medium text-gray-800">
                              {appt.name}
                            </TableCell>
                            <TableCell>
                              <a
                                href={`tel:${appt.phone}`}
                                className="text-[#2E86C1] hover:underline"
                              >
                                {appt.phone}
                              </a>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className="text-xs border-blue-200 text-[#2E86C1]"
                              >
                                {appt.service}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-gray-600">
                              {appt.date}
                            </TableCell>
                            <TableCell className="text-gray-400 text-sm">
                              {formatTimestamp(appt.timestamp)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-semibold text-gray-700">
                  Contact Form Submissions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {loadingContacts ? (
                  <div
                    className="p-6 space-y-3"
                    data-ocid="admin.loading_state"
                  >
                    {["a", "b", "c"].map((k) => (
                      <Skeleton key={k} className="h-12 w-full rounded-lg" />
                    ))}
                  </div>
                ) : !contacts || contacts.length === 0 ? (
                  <div
                    className="text-center py-16 text-gray-400"
                    data-ocid="admin.empty_state"
                  >
                    <MessageSquare
                      size={40}
                      className="mx-auto mb-3 opacity-30"
                    />
                    <p className="font-medium">No messages yet</p>
                    <p className="text-sm mt-1">
                      Contact form submissions will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table data-ocid="admin.table">
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-semibold text-gray-600">
                            #
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Name
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Email
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Message
                          </TableHead>
                          <TableHead className="font-semibold text-gray-600">
                            Received At
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((msg, i) => (
                          <TableRow
                            key={`${msg.name}-${String(msg.timestamp)}`}
                            className="hover:bg-teal-50/40 transition-colors"
                            data-ocid={`admin.row.${i + 1}`}
                          >
                            <TableCell className="text-gray-400 text-sm">
                              {i + 1}
                            </TableCell>
                            <TableCell className="font-medium text-gray-800">
                              {msg.name}
                            </TableCell>
                            <TableCell>
                              <a
                                href={`mailto:${msg.email}`}
                                className="text-[#48C9B0] hover:underline"
                              >
                                {msg.email}
                              </a>
                            </TableCell>
                            <TableCell className="max-w-xs">
                              <p className="text-gray-600 text-sm line-clamp-2">
                                {msg.message}
                              </p>
                            </TableCell>
                            <TableCell className="text-gray-400 text-sm">
                              {formatTimestamp(msg.timestamp)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
