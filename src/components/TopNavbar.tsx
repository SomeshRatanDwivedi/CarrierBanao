import { LayoutDashboard, FileText, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { startTransition } from "react"

const TopNavbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    startTransition(() => {
      navigate(path);
    });
  };
  return (
    <div className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="px-4 h-16 flex items-center justify-between w-full">
        <Link to="/">
          <img
            src={"/logo.png"}
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain w-50 h-15"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button
            onClick={() => handleNavigate('/jobinsights')}
            className="hidden md:inline-flex items-center gap-2 outline btn"
          >
            <LayoutDashboard className="h-4 w-4 text-[#8b5cf6]" />
            Industry Insights
          </Button>
          <Button
            onClick={() => handleNavigate('/resume-build')}
            className="hidden md:inline-flex items-center gap-2 outline btn"
          >
            <FileText className="h-4 w-4 text-[#8b5cf6]" />
            Build Resume
          </Button>
          <Button
            onClick={() => handleNavigate('/interview-prep')}
            className="hidden md:inline-flex items-center gap-2 outline btn"
          >
            <GraduationCap className="h-4 w-4 text-[#8b5cf6]" />
            Interview Prep
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbar