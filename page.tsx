import Link from "next/link"
import {
  ArrowLeft,
  Bell,
  ChevronDown,
  Edit,
  Grid,
  HelpCircle,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Users,
  CreditCard,
  FileText,
  Activity,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CustomerProfile() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[220px] border-r bg-white flex flex-col">
        <div className="p-4 border-b flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-semibold text-gray-800">PayHaven</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarItem icon={<CreditCard size={18} />} label="Payments" />
          <SidebarItem icon={<Users size={18} />} label="Customers" active />
          <SidebarItem icon={<Grid size={18} />} label="Products" />
          <SidebarItem icon={<FileText size={18} />} label="Invoices" />
          <SidebarItem icon={<Activity size={18} />} label="Reports" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft size={16} />
            </Link>
            <span className="text-sm text-gray-500">Back to customers list</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell size={18} />
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              Create <ChevronDown size={14} />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="David Smith" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Customer Profile */}
        <div className="p-6">
          {/* Customer Header */}
          <div className="flex items-start mb-6">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Elizabeth Allen" />
              <AvatarFallback className="bg-purple-100 text-purple-600">EA</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">Elizabeth Allen</h1>
                  <p className="text-sm text-gray-500">elizabeth1998@gmail.com</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Sections */}
          <div className="space-y-6">
            {/* General Information */}
            <ProfileSection
              title="General information"
              icon="info"
              actionButton={
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Edit size={14} />
                </Button>
              }
            >
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div>
                  <p className="text-gray-500">Create Date</p>
                  <p className="font-medium">May 27, 2022</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium">(484) 896-2341</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Address</p>
                  <p className="font-medium">3675 Beach Street, Indianapolis, IN 46225</p>
                </div>
              </div>
            </ProfileSection>

            {/* Customer Insights */}
            <ProfileSection
              title="Customer Insights"
              icon="insights"
              badge={
                <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100 rounded-full text-xs font-normal">
                  New
                </Badge>
              }
            >
              <p className="text-sm">Customers have a good history of purchasing products, services and payments</p>
            </ProfileSection>

            {/* Subscriptions */}
            <ProfileSection
              title="Subscriptions"
              icon="subscriptions"
              actionButton={
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-3 text-xs bg-purple-100 text-purple-600 hover:bg-purple-200"
                >
                  + New
                </Button>
              }
            >
              <div className="border rounded-md p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-md text-xs font-medium">Active</div>
                  <div>
                    <p className="font-medium">1-Month Subscription $30</p>
                    <p className="text-xs text-gray-500">Next payment on Jun 27, 2022 at 8:00 AM</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-3 text-xs bg-purple-100 text-purple-600 hover:bg-purple-200"
                >
                  Cancel
                </Button>
              </div>
            </ProfileSection>

            {/* Payment Method */}
            <ProfileSection
              title="Payment method"
              icon="payment"
              actionButton={
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Plus size={14} />
                </Button>
              }
            >
              <div className="flex gap-4">
                <PaymentCard type="visa" last4="6789" expiry="05/2025" />
                <PaymentCard type="mastercard" last4="2345" expiry="08/2024" />
              </div>
            </ProfileSection>

            {/* Payments */}
            <ProfileSection
              title="Payments"
              icon="payments"
              actionButton={
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Plus size={14} />
                </Button>
              }
            >
              <Tabs defaultValue="all">
                <TabsList className="bg-transparent border-b w-full justify-start h-9 mb-4">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    All payments
                  </TabsTrigger>
                  <TabsTrigger
                    value="scheduled"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    Scheduled
                  </TabsTrigger>
                  <TabsTrigger
                    value="pending"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    Pending
                  </TabsTrigger>
                  <TabsTrigger
                    value="failed"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    Failed
                  </TabsTrigger>
                  <TabsTrigger
                    value="incomplete"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    Incomplete
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="m-0">
                  <div className="text-xs text-gray-500 mb-2">3 rows</div>
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase">
                        <tr>
                          <th className="px-4 py-2 text-left">Code</th>
                          <th className="px-4 py-2 text-left">Amount</th>
                          <th className="px-4 py-2 text-left">Status</th>
                          <th className="px-4 py-2 text-left">Time</th>
                          <th className="px-4 py-2 text-left">Date</th>
                          <th className="px-4 py-2 text-left">Device</th>
                          <th className="px-4 py-2 text-left">IP Address</th>
                          <th className="px-4 py-2 text-left">Payment Method</th>
                          <th className="px-4 py-2 text-left"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <PaymentRow
                          code="P23456"
                          amount="$30"
                          status="Successful"
                          time="02:00 AM"
                          date="Mar 15, 2023"
                          device="MAC"
                          ip="192.168.0.1"
                          last4="6789"
                        />
                        <PaymentRow
                          code="P23455"
                          amount="$30"
                          status="Successful"
                          time="02:00 AM"
                          date="Feb 15, 2023"
                          device="MAC"
                          ip="192.168.0.1"
                          last4="6789"
                        />
                        <PaymentRow
                          code="P23454"
                          amount="$30"
                          status="Successful"
                          time="02:00 AM"
                          date="Jan 15, 2023"
                          device="MAC"
                          ip="192.168.0.1"
                          last4="6789"
                        />
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </ProfileSection>

            {/* Invoices */}
            <ProfileSection
              title="Invoices"
              icon="invoices"
              actionButton={
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Plus size={14} />
                </Button>
              }
            >
              <Tabs defaultValue="all">
                <TabsList className="bg-transparent border-b w-full justify-start h-9 mb-4">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    All invoices
                  </TabsTrigger>
                  <TabsTrigger
                    value="open"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    Open
                  </TabsTrigger>
                  <TabsTrigger
                    value="paid"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none"
                  >
                    Paid
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="m-0">
                  <div className="text-xs text-gray-500 mb-2">3 rows</div>
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase">
                        <tr>
                          <th className="px-4 py-2 text-left">Invoice Code</th>
                          <th className="px-4 py-2 text-left">Amount</th>
                          <th className="px-4 py-2 text-left">Status</th>
                          <th className="px-4 py-2 text-left">Due Date</th>
                          <th className="px-4 py-2 text-left">Created Date</th>
                          <th className="px-4 py-2 text-left"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <InvoiceRow
                          code="INV2023-001"
                          amount="$30"
                          status="Open"
                          dueDate="May 15, 2023"
                          createdDate="Apr 30, 2023"
                        />
                        <InvoiceRow
                          code="INV2023-002"
                          amount="$30"
                          status="Paid"
                          dueDate="Feb 15, 2023"
                          createdDate="Feb 01, 2023"
                        />
                        <InvoiceRow
                          code="INV2023-003"
                          amount="$30"
                          status="Paid"
                          dueDate="Jan 15, 2023"
                          createdDate="Jan 01, 2023"
                        />
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </ProfileSection>

            {/* Activities */}
            <ProfileSection title="Activities" icon="activities">
              <div className="space-y-4">
                <ActivityItem title="Payment for $30 successful" time="02:00 PM | Feb 15, 2023" type="payment" />
                <ActivityItem title="A new payment method was created" time="07:23 PM | May 27, 2022" type="card" />
                <div className="pt-2">
                  <Button variant="ghost" size="sm" className="text-purple-600">
                    Show more
                  </Button>
                </div>
              </div>
            </ProfileSection>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
        active ? "bg-purple-100 text-purple-600 font-medium" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

function ProfileSection({ title, icon, children, badge, actionButton }) {
  const iconMap = {
    info: <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs">i</div>,
    insights: (
      <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs">i</div>
    ),
    subscriptions: (
      <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs">S</div>
    ),
    payment: <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs">P</div>,
    payments: (
      <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs">P</div>
    ),
    invoices: (
      <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs">I</div>
    ),
    activities: (
      <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs">A</div>
    ),
  }

  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {iconMap[icon]}
          <h2 className="font-medium">{title}</h2>
          {badge}
        </div>
        {actionButton}
      </div>
      <div>{children}</div>
    </div>
  )
}

function PaymentCard({ type, last4, expiry }) {
  return (
    <div className="border rounded-md p-3 flex-1">
      <div className="flex items-center justify-between mb-2">
        <div className="h-8 w-12 flex items-center">
          {type === "visa" ? (
            <div className="text-blue-600 font-bold text-lg">VISA</div>
          ) : (
            <div className="flex">
              <div className="h-5 w-5 bg-red-500 rounded-full opacity-80 -mr-2"></div>
              <div className="h-5 w-5 bg-yellow-500 rounded-full opacity-80"></div>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 px-2 text-xs bg-purple-100 text-purple-600 hover:bg-purple-200"
        >
          Edit
        </Button>
      </div>
      <div className="text-sm">
        <p className="font-medium">**** **** **** {last4}</p>
        <p className="text-xs text-gray-500">Expires {expiry}</p>
      </div>
    </div>
  )
}

function PaymentRow({ code, amount, status, time, date, device, ip, last4 }) {
  const statusColor = status === "Successful" ? "text-green-600" : "text-gray-600"

  return (
    <tr className="bg-white">
      <td className="px-4 py-3 text-blue-600">{code}</td>
      <td className="px-4 py-3">{amount}</td>
      <td className={`px-4 py-3 ${statusColor}`}>{status}</td>
      <td className="px-4 py-3">{time}</td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3">{device}</td>
      <td className="px-4 py-3">{ip}</td>
      <td className="px-4 py-3 flex items-center gap-1">
        <div className="h-4 w-4 bg-blue-600 rounded-full opacity-80"></div>
        **** {last4}
      </td>
      <td className="px-4 py-3">
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <MoreHorizontal size={14} />
        </Button>
      </td>
    </tr>
  )
}

function InvoiceRow({ code, amount, status, dueDate, createdDate }) {
  const statusColor = status === "Paid" ? "text-green-600" : "text-blue-600"

  return (
    <tr className="bg-white">
      <td className="px-4 py-3 text-blue-600">{code}</td>
      <td className="px-4 py-3">{amount}</td>
      <td className={`px-4 py-3 ${statusColor}`}>{status}</td>
      <td className="px-4 py-3">{dueDate}</td>
      <td className="px-4 py-3">{createdDate}</td>
      <td className="px-4 py-3">
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <MoreHorizontal size={14} />
        </Button>
      </td>
    </tr>
  )
}

function ActivityItem({ title, time, type }) {
  return (
    <div className="flex">
      <div className="mr-3 relative">
        <div className={`w-4 h-4 rounded-full ${type === "payment" ? "bg-green-500" : "bg-blue-500"}`}></div>
        <div className="absolute top-4 bottom-0 left-1/2 w-px bg-gray-200 -translate-x-1/2"></div>
      </div>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
        <div className="mt-1 mb-3">
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            Order detail
          </Button>
        </div>
      </div>
    </div>
  )
}

