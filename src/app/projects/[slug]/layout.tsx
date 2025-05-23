import { Footer } from "@/app/components/Footer"
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      {children}
      <Footer />
    </div>
  )
}